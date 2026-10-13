import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Calculadora from "./Calculadora";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function fillDatesAndSalary() {
  render(<MemoryRouter><Calculadora /></MemoryRouter>);
  fireEvent.change(screen.getByLabelText("Salario diario (pesos mexicanos)"), { target: { value: "365" } });
  fireEvent.change(screen.getByLabelText("Fecha de ingreso"), { target: { value: "2025-12-30" } });
  fireEvent.change(screen.getByLabelText("Fecha de salida"), { target: { value: "2025-12-31" } });
}

describe("Calculadora de prestaciones proporcionales", () => {
  it("muestra un subtotal parcial, sus bases y un enlace a apoyo voluntario", () => {
    fillDatesAndSalary();
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByRole("heading", { name: "Subtotal orientativo de tres conceptos" })).toBeInTheDocument();
    expect(screen.getByText("$45.00")).toBeInTheDocument();
    expect(screen.getByText(/Salario diario utilizado:/).closest("p")).toHaveTextContent("$365.00");
    expect(screen.getByRole("link", { name: "Apoyar Tecuiyo" })).toHaveAttribute("href", "/apoyar");
    expect(screen.queryByText("Total a recibir")).not.toBeInTheDocument();
  });

  it.each([
    ["Salario diario (pesos mexicanos)", "-1"],
    ["Fecha de ingreso", "2025-12-29"],
    ["Fecha de salida", "2025-12-30"],
  ])("retira inmediatamente el resultado cuando cambia %s", (label, value) => {
    fillDatesAndSalary();
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByRole("heading", { name: "Subtotal orientativo de tres conceptos" })).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
    expect(screen.queryByRole("heading", { name: "Subtotal orientativo de tres conceptos" })).not.toBeInTheDocument();
  });

  it("rechaza un salario negativo y explica el error sin conservar una estimación", () => {
    fillDatesAndSalary();
    fireEvent.change(screen.getByLabelText("Salario diario (pesos mexicanos)"), { target: { value: "-1" } });
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByRole("alert")).toHaveTextContent("salario diario positivo");
    expect(screen.queryByRole("heading", { name: "Subtotal orientativo de tres conceptos" })).not.toBeInTheDocument();
  });

  it("también retira el resultado al cambiar la forma de separación", () => {
    fillDatesAndSalary();
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    fireEvent.keyDown(screen.getByRole("combobox", { name: "Forma de separación laboral" }), { key: "ArrowDown" });
    fireEvent.click(screen.getByRole("option", { name: "Renuncia voluntaria" }));
    expect(screen.queryByRole("heading", { name: "Subtotal orientativo de tres conceptos" })).not.toBeInTheDocument();
  });

  it("explica el umbral de antigüedad por aniversario sin agregar un pago de prima", () => {
    fillDatesAndSalary();
    fireEvent.change(screen.getByLabelText("Fecha de ingreso"), { target: { value: "2009-01-01" } });
    fireEvent.change(screen.getByLabelText("Fecha de salida"), { target: { value: "2024-01-01" } });
    fireEvent.keyDown(screen.getByRole("combobox", { name: "Forma de separación laboral" }), { key: "ArrowDown" });
    fireEvent.click(screen.getByRole("option", { name: "Renuncia voluntaria" }));
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByText(/Con tus fechas alcanzas el umbral de 15 años/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Subtotal orientativo de tres conceptos" }).parentElement).toHaveTextContent("$14.96");
    fireEvent.change(screen.getByLabelText("Fecha de salida"), { target: { value: "2023-12-31" } });
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByText(/Con tus fechas no alcanzas el umbral de 15 años/)).toBeInTheDocument();
  });

  it("remite las separaciones históricas a orientación laboral", () => {
    fillDatesAndSalary();
    fireEvent.change(screen.getByLabelText("Fecha de ingreso"), { target: { value: "2020-01-01" } });
    fireEvent.change(screen.getByLabelText("Fecha de salida"), { target: { value: "2022-12-31" } });
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    expect(screen.getByRole("alert")).toHaveTextContent("desde 2023");
    expect(screen.getByRole("link", { name: "Consultar orientación laboral gratuita" })).toHaveAttribute("href", "/directorio");
  });

  it("abre la impresión real del navegador al solicitar una copia", () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => undefined);
    fillDatesAndSalary();
    fireEvent.click(screen.getByRole("button", { name: "Calcular estimación parcial" }));
    fireEvent.click(screen.getByRole("button", { name: "Imprimir o guardar como PDF" }));
    expect(print).toHaveBeenCalledOnce();
  });
});
