import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, it } from "vitest";
import { categoriasGuias, guiasPrincipales } from "@/data/guias";
import Guias from "./Guias";
import GuiaDetalle from "./GuiaDetalle";

afterEach(cleanup);

function renderGuides() {
  return render(
    <MemoryRouter initialEntries={["/guias"]}>
      <Routes>
        <Route path="/guias" element={<Guias />} />
        <Route path="/guias/:id" element={<GuiaDetalle />} />
      </Routes>
    </MemoryRouter>,
  );
}

it("filtra por cada categoría y restaura todas las guías", () => {
  renderGuides();
  const all = screen.getByRole("button", { name: /Todas las guías/ });
  expect(screen.getAllByRole("link", { name: "Ver guía completa" })).toHaveLength(guiasPrincipales.length);
  for (const category of categoriasGuias.filter(c => c.value !== "all")) {
    const button = screen.getByRole("button", { name: new RegExp(category.label) });
    fireEvent.click(button);
    const expected = guiasPrincipales.filter(g => g.categoria === category.value);
    expect(screen.getAllByRole("link", { name: "Ver guía completa" }).map(l => l.getAttribute("href"))).toEqual(expected.map(g => `/guias/${g.id}`));
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(all).toHaveAttribute("aria-pressed", "false");
  }
  fireEvent.click(all);
  expect(all).toHaveAttribute("aria-pressed", "true");
  expect(screen.getAllByRole("link", { name: "Ver guía completa" })).toHaveLength(guiasPrincipales.length);
});

it("muestra estadísticas reales sin simular seguimiento y permite leer la guía filtrada", () => {
  const { container } = renderGuides();
  const stats = screen.getByRole("list", { name: "Estadísticas" });
  expect(within(stats).getByText("75")).toBeInTheDocument();
  expect(within(stats).queryByText("Completadas")).not.toBeInTheDocument();
  expect(container.querySelector("a button")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Despido/ }));
  fireEvent.click(screen.getByRole("link", { name: "Ver guía completa" }));
  expect(screen.getByRole("heading", { name: guiasPrincipales.find(g => g.categoria === "Despido")!.titulo })).toBeInTheDocument();
});
