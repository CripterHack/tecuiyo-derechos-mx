import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("@/hooks/useNewsData", () => ({
  useNewsData: () => ({ news: [], loading: false, error: null }),
}));

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.doUnmock("./pages/CodigoAbierto");
});

describe("carga de páginas", () => {
  it("announces pending page loading while keeping the shared footer available", async () => {
    render(<App />);

    expect(screen.getByRole("status")).toHaveTextContent("Cargando página…");
    expect(screen.getByRole("main")).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(await screen.findByRole("heading", { level: 1, name: "Tecuiyo" })).toBeInTheDocument();
    expect(screen.queryByText("Cargando página…")).not.toBeInTheDocument();
  });

  it("navigates from the actual home page to contact and voluntary support", async () => {
    render(<App />);
    await screen.findByRole("heading", { level: 1, name: "Tecuiyo" });

    fireEvent.click(within(screen.getByRole("contentinfo")).getByRole("link", { name: "Contacto" }));
    expect(await screen.findByRole("heading", { level: 1, name: "Contacto" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Abrir borrador de correo" })).toHaveAttribute(
      "href", "mailto:dev@izignamx.com?subject=Tecuiyo%3A%20error%20o%20sugerencia",
    );
    expect(window.location.pathname).toBe("/contacto");

    fireEvent.click(within(screen.getByRole("contentinfo")).getByRole("link", { name: "Apoyar Tecuiyo" }));
    expect(await screen.findByRole("heading", { level: 1, name: "Apoyar Tecuiyo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Abrir PayPal" })).toHaveAttribute(
      "href", "https://www.paypal.com/paypalme/cripterhack",
    );
    expect(window.location.pathname).toBe("/apoyar");
    expect(screen.queryByRole("heading", { level: 1, name: "Contacto" })).not.toBeInTheDocument();
  });

  it("opens a nested legal article directly without losing its route parameter", async () => {
    window.history.replaceState({}, "", "/biblioteca/art76");
    render(<App />);

    expect(await screen.findByRole("heading", { name: /Artículo 76.*vacaciones/i })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/biblioteca/art76");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("keeps the not-found route available for an unknown path", async () => {
    window.history.replaceState({}, "", "/ruta-inexistente");
    render(<App />);

    expect(await screen.findByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("offers recovery and independent official links when a page chunk rejects", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const pageLoadError = new Error("Failed to fetch dynamically imported module");
    const handleExpectedError = (event: ErrorEvent) => {
      if (event.error === pageLoadError || event.error?.cause === pageLoadError) {
        event.preventDefault();
      }
    };
    window.addEventListener("error", handleExpectedError);
    vi.doMock("./pages/CodigoAbierto", () => {
      throw pageLoadError;
    });
    window.history.replaceState({}, "", "/codigo-abierto");
    try {
      render(<App />);

      expect(await screen.findByRole("heading", { level: 1, name: "No pudimos cargar esta página" })).toBeInTheDocument();
      const recovery = within(screen.getByRole("main"));
      expect(recovery.getByRole("button", { name: "Recargar página" })).toHaveAttribute("type", "button");
      expect(recovery.getByRole("link", { name: "Consultar la LFT oficial" })).toHaveAttribute(
        "href", "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
      );
      expect(recovery.getByRole("link", { name: "Orientación de PROFEDET" })).toHaveAttribute(
        "href", "https://www.gob.mx/profedet",
      );
      expect(screen.queryByText("Cargando página…")).not.toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 1, name: "Código Abierto" })).not.toBeInTheDocument();
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();

      fireEvent.click(within(screen.getByRole("contentinfo")).getByRole("link", { name: "Apoyar Tecuiyo" }));
      expect(await screen.findByRole("heading", { level: 1, name: "Apoyar Tecuiyo" })).toBeInTheDocument();
      expect(screen.queryByRole("heading", { name: "No pudimos cargar esta página" })).not.toBeInTheDocument();
    } finally {
      window.removeEventListener("error", handleExpectedError);
    }
  });
});
