import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, it } from "vitest";
import Directorio from "./Directorio";

function renderDirectory() {
  render(<MemoryRouter initialEntries={["/directorio"]}><Directorio /></MemoryRouter>);
}

afterEach(cleanup);

it("separa la conciliación local de la federal", () => {
  renderDirectory();
  const local = screen.getByRole("link", { name: "Consultar Centro de Conciliación Laboral de la Ciudad de México" });
  const federal = screen.getByRole("link", { name: "Consultar Centro Federal de Conciliación y Registro Laboral" });
  expect(local).toHaveAttribute("href", "https://www.ccl.cdmx.gob.mx/");
  expect(federal).toHaveAttribute("href", "https://conciliacion.centrolaboral.gob.mx/asesoria/inicio");
  expect(screen.queryByText(/Insurgentes Sur 1971/)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Conciliación local" }));
  expect(local).toBeInTheDocument();
  expect(federal).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Todas las autoridades" }));
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "Ciudad de México" } });
  expect(screen.getByRole("link", { name: /Consultar Centro Federal/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Consultar Procuraduría Federal/ })).toBeInTheDocument();
});

it("publica los dos teléfonos oficiales de orientación PROFEDET", () => {
  renderDirectory();
  expect(screen.getByRole("link", { name: /Consultar Procuraduría Federal/ })).toHaveAttribute(
    "href", "https://www.profedet.gob.mx/micrositio/sedes/sedes.html",
  );
  expect(screen.getByRole("link", { name: "800 717 2942" })).toHaveAttribute("href", "tel:8007172942");
  expect(screen.getByRole("link", { name: "800 911 7877" })).toHaveAttribute("href", "tel:8009117877");
  expect(screen.queryByText("55 3003 1000")).not.toBeInTheDocument();
});

it("muestra a la Junta de CDMX como seguimiento de expedientes, no como un ingreso nuevo", () => {
  renderDirectory();
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "Ciudad de México" } });
  const card = screen.getByText("Junta Local de Conciliación y Arbitraje de la CDMX").closest(".legal-card") as HTMLElement;
  const junta = within(card);
  expect(junta.getByText("Seguimiento de expedientes del sistema anterior")).toBeInTheDocument();
  expect(junta.queryByText("Demandas laborales")).not.toBeInTheDocument();
  expect(junta.queryByText("Conciliación", { exact: true })).not.toBeInTheDocument();
  expect(junta.getByRole("link", { name: "Consultar transición en el DOF" })).toHaveAttribute(
    "href", expect.stringContaining("https://dof.gob.mx/"),
  );
});
