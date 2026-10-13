import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import ArticuloDetalle from "./ArticuloDetalle";
import Biblioteca from "./Biblioteca";

const OFFICIAL_LFT_URL = "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf";

function renderPage(path = "/biblioteca") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/biblioteca/:id" element={<ArticuloDetalle />} />
      </Routes>
    </MemoryRouter>,
  );
}

function articleLinks() {
  return screen.getAllByRole("link")
    .map(link => link.getAttribute("href") ?? "")
    .filter(href => href.startsWith("/biblioteca/art"));
}

afterEach(cleanup);

describe("Enlaces de la biblioteca legal", () => {
  it("resuelve los enlaces internos anunciados por el catálogo y sus artículos relacionados", () => {
    renderPage();
    const pendingRoutes = articleLinks();
    const visitedRoutes = new Set<string>();
    expect(pendingRoutes.length).toBeGreaterThan(0);
    const firstArticleLink = screen.getAllByRole("link")
      .find(link => link.getAttribute("href") === pendingRoutes[0])!;
    fireEvent.click(firstArticleLink);
    expect(screen.getByRole("heading", { name: /^Artículo \d+ -/ })).toBeInTheDocument();

    while (pendingRoutes.length > 0) {
      const path = pendingRoutes.shift()!;
      if (visitedRoutes.has(path)) continue;
      visitedRoutes.add(path);
      cleanup();
      renderPage(path);

      expect(screen.queryByRole("heading", { name: /Artículo no encontrado|Resumen no disponible/ }), path).not.toBeInTheDocument();
      expect(screen.getByRole("heading", { name: /^Artículo \d+ -/ }), path).toBeInTheDocument();
      pendingRoutes.push(...articleLinks());
    }
  });

  it("envía un artículo relacionado sin resumen local al texto oficial", () => {
    renderPage("/biblioteca/art79");
    const sourceLink = screen.getByRole("link", { name: "Consultar art. 78 en LFT oficial" });
    expect(sourceLink).toHaveAttribute("href", OFFICIAL_LFT_URL);
    expect(sourceLink).toHaveAttribute("target", "_blank");
    expect(sourceLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText(/No hay resumen local de algunos artículos relacionados/)).toBeInTheDocument();
    expect(articleLinks()).not.toContain("/biblioteca/art78");
  });

  it("explica el alcance y ofrece la fuente oficial para un enlace antiguo sin resumen", () => {
    renderPage("/biblioteca/art78");
    expect(screen.getByRole("heading", { name: "Resumen no disponible" })).toBeInTheDocument();
    expect(screen.getByText(/no tiene un resumen local/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Consultar LFT oficial" })).toHaveAttribute("href", OFFICIAL_LFT_URL);
    expect(screen.queryByText("El artículo solicitado no existe.")).not.toBeInTheDocument();
  });
});
