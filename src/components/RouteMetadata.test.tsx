import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Link, MemoryRouter, Route, Routes } from "react-router-dom";
import RouteMetadata from "./RouteMetadata";

afterEach(() => {
  cleanup();
  document.head.querySelectorAll('[data-tecuiyo-metadata]').forEach(node => node.remove());
});

describe("metadatos durante la navegación", () => {
  it("updates title, description and canonical when navigating to a nested article", () => {
    render(
      <MemoryRouter initialEntries={["/contacto?tema=error"]}>
        <RouteMetadata />
        <Link to="/biblioteca/art76/">Consultar vacaciones</Link>
        <Routes><Route path="*" element={<p>Contenido</p>} /></Routes>
      </MemoryRouter>,
    );

    expect(document.title).toBe("Contacto | Tecuiyo");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://tecuiyo.izignamx.com/contacto/");

    fireEvent.click(screen.getByRole("link", { name: "Consultar vacaciones" }));

    expect(document.title).toBe("Artículo 76: Derecho a vacaciones | Tecuiyo");
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute("content", expect.stringContaining("Resumen educativo"));
    expect(document.head.querySelector('meta[property="og:url"]')).toHaveAttribute("content", "https://tecuiyo.izignamx.com/biblioteca/art76/");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://tecuiyo.izignamx.com/biblioteca/art76/");
  });

  it("marks unknown paths and unavailable article ids noindex and removes inherited canonicals", () => {
    render(
      <MemoryRouter initialEntries={["/apoyar"]}>
        <RouteMetadata />
        <Link to="/biblioteca/art999">Referencia ausente</Link>
      </MemoryRouter>,
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://tecuiyo.izignamx.com/apoyar/");

    fireEvent.click(screen.getByRole("link", { name: "Referencia ausente" }));

    expect(document.title).toBe("Página no encontrada | Tecuiyo");
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.head.querySelector('meta[property="og:url"]')).toBeNull();
  });
});
