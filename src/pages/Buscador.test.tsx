import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, it } from "vitest";
import Buscador from "./Buscador";
import SituacionDetalle from "./SituacionDetalle";

function renderPage(path = "/buscador") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/buscador/:id" element={<SituacionDetalle />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(cleanup);

it("muestra un solo enlace por acción y la calculadora solo en las situaciones pertinentes", () => {
  const { container } = renderPage();
  const cards = Array.from(container.querySelectorAll(".legal-card"));

  expect(cards).toHaveLength(12);
  const calculatorCases = cards.flatMap(card => {
    const actions = within(card as HTMLElement);
    const detail = actions.getByRole("link", { name: "Leer más" });
    const calculator = actions.queryByRole("link", { name: "Proporcionales" });
    if (!calculator) return [];
    expect(calculator).toHaveAttribute("href", "/calculadora");
    return [detail.getAttribute("href")];
  });
  expect(calculatorCases).toEqual([1, 3, 4, 6].map(id => `/buscador/${id}`));
  expect(container.querySelector("a button")).not.toBeInTheDocument();
});

it("lleva de la búsqueda de horas extra al resumen revisado y al decreto, no a la calculadora", () => {
  const { container } = renderPage();
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "horas extra" } });
  fireEvent.click(screen.getByRole("link", { name: "Leer más" }));

  const rows = within(screen.getByRole("table")).getAllByRole("row").slice(1);
  expect(rows.map(row => within(row).getAllByRole("cell").map(cell => cell.textContent))).toEqual([
    ["2026", "9"], ["2027", "9"], ["2028", "10"], ["2029", "11"], ["2030", "12"],
  ]);
  expect(screen.queryByText(/máximo 3 horas extras por día/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Consultar decreto oficial (DOF)" })).toHaveAttribute(
    "href", "https://dof.gob.mx/nota_detalle_popup.php?codigo=5786537",
  );
  expect(screen.getByRole("link", { name: "Consultar artículo 66" })).toHaveAttribute("href", "/biblioteca/art66");
  expect(screen.getByRole("link", { name: "Buscar Abogado" })).toHaveAttribute("href", "/directorio");
  expect(screen.queryByRole("link", { name: /proporcionales/i })).not.toBeInTheDocument();
  expect(container.querySelector("a button")).not.toBeInTheDocument();
});

it("mantiene un enlace a proporcionales en el detalle de finiquito", () => {
  const { container } = renderPage("/buscador/6");
  expect(screen.getByRole("link", { name: "Estimar prestaciones proporcionales" })).toHaveAttribute("href", "/calculadora");
  expect(container.querySelector("a button")).not.toBeInTheDocument();
});
