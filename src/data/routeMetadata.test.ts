import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { collectRouteMetadata, generateStaticPages, renderRouteHtml } from "../../scripts/generate-route-pages.js";
import { ROUTE_METADATA } from "./generatedRouteMetadata.js";

const projectRoot = path.resolve(import.meta.dirname, "../..");
const template = `<!DOCTYPE html><html lang="es-MX"><head>
<title>Título global anterior</title><meta name="description" content="Descripción anterior">
<meta name="robots" content="index, follow"><link rel="canonical" href="https://incorrecto.example/">
<meta property="og:title" content="Título anterior"><meta property="og:image:width" content="1200">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self';">
<script src="/spa-route-recovery.js"></script><script type="module" crossorigin src="/assets/index-current.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-current.css">
</head><body><div id="root"></div></body></html>`;

describe("páginas y metadatos estáticos", () => {
  it("keeps the client manifest aligned with every real article, guide, resource and situation", async () => {
    const collected = await collectRouteMetadata(projectRoot);
    expect(ROUTE_METADATA).toEqual(collected);
    expect(collected.filter(route => route.path.startsWith("/biblioteca/"))).toHaveLength(20);
    expect(collected.filter(route => route.path.startsWith("/guias/"))).toHaveLength(6);
    expect(collected.filter(route => route.path.startsWith("/formularios/"))).toHaveLength(8);
    expect(collected.filter(route => route.path.startsWith("/buscador/"))).toHaveLength(12);
    expect(collected.map(route => route.path)).not.toContain("/biblioteca/art999");
    expect(collected.find(route => route.path === "/formularios/1").description).toContain("en preparación");
    expect(collected.map(route => route.path)).toEqual([...new Set(collected.map(route => route.path))]);
  });

  it("escapes metadata while retaining the current CSP and absolute Vite assets without inline scripts", () => {
    const html = renderRouteHtml(template, {
      path: "/ejemplo",
      title: 'Información <clara> & "útil"',
      description: 'Consulta "dudas" & recursos <educativos>.',
    });
    const document = new JSDOM(html).window.document;
    expect(document.title).toBe('Información <clara> & "útil"');
    expect(document.querySelector('meta[name="description"]').content).toBe('Consulta "dudas" & recursos <educativos>.');
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelector('meta[http-equiv="Content-Security-Policy"]').content).toBe("default-src 'self'; script-src 'self';");
    expect([...document.querySelectorAll("script")].map(script => script.getAttribute("src"))).toEqual(["/spa-route-recovery.js", "/assets/index-current.js"]);
    expect(document.querySelector('link[rel="stylesheet"]').getAttribute("href")).toBe("/assets/index-current.css");
    expect(document.querySelector('meta[property="og:image:width"]').content).toBe("512");
    expect(document.querySelector('meta[property="og:image:height"]').content).toBe("512");
    expect(document.querySelector('meta[property="og:image"]').content).toBe("https://tecuiyo.izignamx.com/logo@512.png");
  });

  it("preserves literal replacement tokens in titles and descriptions", () => {
    const title = "Título $& / $` / $' <educativo>";
    const description = "Consulta $& / $` / $' & recursos educativos.";
    const html = renderRouteHtml(template, { path: "/ejemplo", title, description });
    const document = new JSDOM(html).window.document;

    expect(document.title).toBe(title);
    expect(document.querySelector('meta[name="description"]').content).toBe(description);
    expect(document.querySelector('meta[property="og:title"]').content).toBe(title);
    expect(document.querySelector('meta[property="og:description"]').content).toBe(description);
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  });

  it("writes distinct route HTML and a sitemap containing only generated canonical URLs", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "tecuiyo-routes-"));
    try {
      await writeFile(path.join(directory, "index.html"), template);
      await writeFile(path.join(directory, "404.html"), template);
      const routes = await collectRouteMetadata(projectRoot);
      await generateStaticPages(directory, routes);

      const contact = new JSDOM(await readFile(path.join(directory, "contacto/index.html"), "utf8")).window.document;
      const article = new JSDOM(await readFile(path.join(directory, "biblioteca/art76/index.html"), "utf8")).window.document;
      expect(contact.title).toBe("Contacto | Tecuiyo");
      expect(article.title).toBe("Artículo 76: Derecho a vacaciones | Tecuiyo");
      expect(article.querySelector('link[rel="canonical"]').getAttribute("href")).toBe("https://tecuiyo.izignamx.com/biblioteca/art76/");
      expect(article.querySelector('meta[property="og:description"]').content).not.toBe(contact.querySelector('meta[property="og:description"]').content);

      const sitemap = new JSDOM(await readFile(path.join(directory, "sitemap.xml"), "utf8"), { contentType: "application/xml" }).window.document;
      const urls = [...sitemap.querySelectorAll("loc")].map(node => node.textContent);
      expect(urls).toHaveLength(routes.length);
      for (const route of routes) {
        const relative = route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`;
        expect(await readFile(path.join(directory, relative), "utf8")).toContain('<div id="root"></div>');
        expect(urls).toContain(`https://tecuiyo.izignamx.com${route.path === "/" ? "/" : `${route.path}/`}`);
      }
      expect(urls.some(url => url.includes("art999") || url.includes("404"))).toBe(false);
      expect(sitemap.querySelector("lastmod")).toBeNull();
      expect(await readFile(path.join(directory, "robots.txt"), "utf8")).toContain("Sitemap: https://tecuiyo.izignamx.com/sitemap.xml");
      const notFound = new JSDOM(await readFile(path.join(directory, "404.html"), "utf8")).window.document;
      expect(notFound.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
      expect(notFound.querySelector('link[rel="canonical"]')).toBeNull();
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
