import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const loadHtml = (path: string) => {
  const document = new DOMParser().parseFromString(
    readFileSync(resolve(process.cwd(), path), "utf8"),
    "text/html",
  );
  return Array.from(document.querySelectorAll("script"));
};

const redirectFrom404 = (href: string): string => {
  let redirected = href;
  const location = Object.assign(new URL(href), {
    replace: (next: string) => { redirected = next; },
  });
  for (const script of loadHtml("public/404.html")) {
    if (!script.src) runInNewContext(script.textContent ?? "", { window: { location } });
  }
  return redirected;
};

const recoverOnHome = (href: string): string => {
  let recovered = href;
  const location = new URL(href);
  const history = {
    state: null,
    replaceState: (_state: unknown, _title: string, next: string) => {
      recovered = new URL(next, location.origin).href;
    },
  };
  for (const script of loadHtml("index.html")) {
    if (script.getAttribute("type") === "module") continue;
    const source = script.getAttribute("src");
    const code = source
      ? readFileSync(resolve(process.cwd(), "public", source.replace(/^\//, "")), "utf8")
      : script.textContent ?? "";
    runInNewContext(code, { window: { location, history }, URL, URLSearchParams });
  }
  return recovered;
};

describe("Enlaces directos de GitHub Pages", () => {
  it.each([
    "https://tecuiyo.izignamx.com/calculadora",
    "https://tecuiyo.izignamx.com/contacto?tema=Apoyo%20y%20donaciones&texto=uno%26dos#correo",
    "https://tecuiyo.izignamx.com/guias/renuncia?literal=~and~&p=propio&q=consulta#paso-2",
    "https://tecuiyo.izignamx.com/biblioteca/derechos%20laborales?valor=%2F%3F%23",
  ])("recupera ruta, consulta y fragmento de %s", (href) => {
    expect(recoverOnHome(redirectFrom404(href))).toBe(href);
  });

  it("conserva consultas nativas en la página principal", () => {
    const href = "https://tecuiyo.izignamx.com/?p=/calculadora&q=uno~and~dos#contenido";
    expect(recoverOnHome(href)).toBe(href);
  });

  // eslint-disable-next-line no-script-url -- Destinos maliciosos de prueba, nunca se ejecutan.
  it.each(["//external.example/pago", "/\\external.example/pago", "https://external.example/pago", "javascript:alert(1)"])(
    "no acepta un destino ajeno al sitio: %s", (route) => {
      const href = `https://tecuiyo.izignamx.com/?__tecuiyo_route=${encodeURIComponent(route)}`;
      expect(recoverOnHome(href)).toBe(href);
    },
  );

  it("no confunde el marcador con una consulta nativa adicional", () => {
    const href = "https://tecuiyo.izignamx.com/?__tecuiyo_route=%2Fcontacto&buscar=consulta";
    expect(recoverOnHome(href)).toBe(href);
  });
});
