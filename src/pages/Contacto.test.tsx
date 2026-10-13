import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Contacto from "./Contacto";

const originalClipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");

function renderContact() {
  return render(
    <MemoryRouter>
      <Contacto />
    </MemoryRouter>,
  );
}

function setClipboard(writeText?: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: writeText ? { writeText } : undefined,
  });
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  if (originalClipboard) {
    Object.defineProperty(navigator, "clipboard", originalClipboard);
  } else {
    Reflect.deleteProperty(navigator, "clipboard");
  }
});

describe("Contacto", () => {
  it("offers a real mailto link with a predefined subject and a selectable address", () => {
    renderContact();

    const emailLink = screen.getByRole("link", { name: "Abrir borrador de correo" });
    const href = emailLink.getAttribute("href") ?? "";
    expect(href).toMatch(/^mailto:dev@izignamx\.com\?/);
    expect(new URLSearchParams(href.split("?")[1]).get("subject")).toBe("Tecuiyo: error o sugerencia");
    expect(emailLink).not.toHaveAttribute("target");
    expect(screen.getByText("dev@izignamx.com")).toHaveClass("select-all");
    expect(screen.getByText(/Abrir el borrador no envía el mensaje/)).toBeInTheDocument();
  });

  it("confirms copying only after the browser finishes copying the address", async () => {
    let finishCopy: (() => void) | undefined;
    const writeText = vi.fn(() => new Promise<void>((resolve) => {
      finishCopy = resolve;
    }));
    setClipboard(writeText);
    renderContact();

    fireEvent.click(screen.getByRole("button", { name: "Copiar correo" }));
    expect(screen.getByRole("status")).toHaveTextContent("Copiando correo…");
    expect(screen.queryByText("Correo copiado.")).not.toBeInTheDocument();
    finishCopy?.();

    expect(await screen.findByText("Correo copiado.")).toBeInTheDocument();
    expect(writeText).toHaveBeenCalledWith("dev@izignamx.com");
  });

  it("shows a manual fallback instead of success when copying is rejected", async () => {
    setClipboard(vi.fn().mockRejectedValue(new Error("Permission denied")));
    renderContact();

    fireEvent.click(screen.getByRole("button", { name: "Copiar correo" }));

    expect(await screen.findByText(/No se pudo copiar/)).toHaveTextContent(
      "Selecciona el correo visible y cópialo manualmente.",
    );
    expect(screen.queryByText("Correo copiado.")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copiar correo" })).toBeEnabled();
  });

  it("keeps the address available when the browser has no clipboard API", async () => {
    setClipboard();
    renderContact();

    fireEvent.click(screen.getByRole("button", { name: "Copiar correo" }));

    expect(await screen.findByText(/No se pudo copiar/)).toBeInTheDocument();
    expect(screen.getByText("dev@izignamx.com")).toBeInTheDocument();
  });

  it("labels public GitHub reports and directs personal legal help to authorities", () => {
    renderContact();

    const issueLink = screen.getByRole("link", { name: "Reportar error en GitHub (público)" });
    expect(issueLink).toHaveAttribute("href", "https://github.com/CripterHack/tecuiyo-derechos-mx/issues/new");
    expect(issueLink).toHaveAttribute("target", "_blank");
    expect(issueLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText(/No publiques datos personales/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Directorio de autoridades" })).toHaveAttribute("href", "/directorio");
    expect(screen.getByRole("link", { name: "Apoyar Tecuiyo" })).toHaveAttribute("href", "/apoyar");
  });

  it("copies locally without a form, network request, or email delivery claim", async () => {
    const fetch = vi.fn();
    const send = vi.spyOn(XMLHttpRequest.prototype, "send");
    vi.stubGlobal("fetch", fetch);
    setClipboard(vi.fn().mockResolvedValue(undefined));
    const { container } = renderContact();

    fireEvent.click(screen.getByRole("button", { name: "Copiar correo" }));
    await screen.findByText("Correo copiado.");

    expect(container.querySelector("form")).toBeNull();
    expect(fetch).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
    expect(screen.queryByText(/mensaje enviado/i)).not.toBeInTheDocument();
  });
});
