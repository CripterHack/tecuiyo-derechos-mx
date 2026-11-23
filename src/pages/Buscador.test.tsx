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

it("aclara el mínimo del aguinaldo y conserva las fuentes y la orientación", () => {
  renderPage();
  const card = screen.getByText("No me dieron aguinaldo completo").closest(".legal-card") as HTMLElement;
  expect(within(card).getByText(/al menos 15 días/i)).toBeInTheDocument();
  fireEvent.click(within(card).getByRole("link", { name: "Leer más" }));
  expect(screen.getByText(/al menos 15 días.*antes del 20 de diciembre/i)).toBeInTheDocument();
  expect(screen.getByText(/aunque ya no sigas trabajando/i)).toBeInTheDocument();
  expect(screen.getByText(/salario es fijo.*cuota diaria ordinaria.*sin sumar otros ingresos.*variable/i)).toBeInTheDocument();
  expect(screen.queryByText(/multa adicional|2-4 meses/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Ley Federal del Trabajo/i })).toHaveAttribute("href", "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf");
  expect(screen.getByRole("link", { name: /Preguntas frecuentes sobre aguinaldo 2026/i })).toHaveAttribute("href", "https://www.gob.mx/profedet/documentos/preguntas-frecuentes-aguinaldo-2026");
  expect(screen.getByRole("link", { name: /Base de cálculo/i })).toHaveAttribute("href", "https://profedet.gob.mx/profedet/archivos/Preguntas_frecuentes_AGUINALDO_2020.pdf");
  expect(screen.getByRole("link", { name: "Estimar prestaciones proporcionales" })).toHaveAttribute("href", "/calculadora");
  expect(screen.getByRole("link", { name: "Buscar Abogado" })).toHaveAttribute("href", "/directorio");
});

it("separa el certificado y el subsidio de enfermedad general sin prometer salario o reinstalación", () => {
  renderPage();
  const card = screen.getByText("No me dieron incapacidad por enfermedad").closest(".legal-card") as HTMLElement;
  expect(within(card).getByText(/subsidio.*IMSS/i)).toBeInTheDocument();
  fireEvent.click(within(card).getByRole("link", { name: "Leer más" }));
  expect(screen.getByText(/60%.*último salario diario de cotización.*cuarto día/i)).toBeInTheDocument();
  expect(screen.getByText(/certificado no garantiza el pago/i)).toBeInTheDocument();
  expect(screen.getByText(/riesgo de trabajo.*100%.*primer día/i)).toBeInTheDocument();
  expect(screen.getByText(/4 semanas.*6 semanas/i)).toBeInTheDocument();
  expect(screen.getByText("Art. 42")).toBeInTheDocument();
  expect(screen.queryByText(/patrón paga 100%|despido nulo|Art\. 478|3-6 meses/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Ley del Seguro Social/i })).toHaveAttribute("href", "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf");
  expect(screen.getByRole("link", { name: /Pago de incapacidades/i })).toHaveAttribute("href", "https://www.imss.gob.mx/derechoH/pago-incapacidades");
  expect(screen.getByRole("link", { name: "Buscar Abogado" })).toHaveAttribute("href", "/directorio");
});
