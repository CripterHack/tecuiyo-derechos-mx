import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { guiasPrincipales } from "@/data/guias";
import GuiaDetalle from "./GuiaDetalle";

function renderGuide(id = "1") {
  return render(
    <MemoryRouter initialEntries={[`/guias/${id}`]}>
      <Routes>
        <Route path="/guias/:id" element={<GuiaDetalle />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Lectura completa de las guías", () => {
  it("hace visible la advertencia urgente sobre el plazo y la conciliación", () => {
    renderGuide();
    expect(screen.getByText("La acción por separación prescribe en 2 meses desde el día siguiente al despido")).toBeInTheDocument();
    expect(screen.getByText("La solicitud de conciliación suspende el plazo; su reanudación se rige por el artículo 521. Busca asesoría gratuita cuanto antes")).toBeInTheDocument();
  });

  it.each(guiasPrincipales)("muestra consejos, documentos y tiempo de todos los pasos de $titulo", guide => {
    renderGuide(guide.id);
    for (const step of guide.pasoDetallado) {
      const article = screen.getByRole("article", { name: step.titulo });
      expect(within(article).getByText(step.descripcion)).toBeInTheDocument();
      if (step.tiempo) expect(within(article).getByText(`Tiempo orientativo: ${step.tiempo}`)).toBeInTheDocument();
      for (const document of step.documentos ?? []) expect(within(article).getByText(document)).toBeInTheDocument();
      for (const tip of step.tips ?? []) expect(within(article).getByText(tip)).toBeInTheDocument();
    }
  });

  it("distingue los tiempos orientativos de los plazos y los documentos sugeridos de los requisitos", () => {
    renderGuide();
    expect(screen.getByText(/Los tiempos junto a los pasos son orientativos; no son plazos legales/)).toBeInTheDocument();
    expect(screen.getByText(/Los documentos son ejemplos para preparar tu consulta/)).toBeInTheDocument();
    expect(screen.getByText(/Confirma con la autoridad cuáles aplican a tu situación/)).toBeInTheDocument();
    expect(screen.getByText("Tiempo estimado de lectura")).toBeInTheDocument();
  });

  it("permite ir a los pasos visibles sin simular un inicio ni guardar progreso", () => {
    const save = vi.spyOn(Storage.prototype, "setItem");
    renderGuide();
    const link = screen.getByRole("link", { name: "Leer los pasos" });
    const steps = screen.getByRole("region", { name: "Pasos de la guía" });
    expect(link).toHaveAttribute("href", "#steps-real");
    expect(steps).toHaveAttribute("id", "steps-real");
    fireEvent.click(link);
    expect(within(steps).getByText("La acción por separación prescribe en 2 meses desde el día siguiente al despido")).toBeInTheDocument();
    expect(screen.getByText("No se guarda el progreso de lectura.")).toBeInTheDocument();
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    expect(screen.queryByText(/se ha iniciado correctamente|Iniciando guía|Progreso guardado/)).not.toBeInTheDocument();
    expect(save).not.toHaveBeenCalled();
  });

  it("ofrece volver a las guías cuando el enlace no existe", () => {
    renderGuide("no-existe");
    expect(screen.getByRole("heading", { name: "Guía no encontrada" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Volver a Guías" })).toHaveAttribute("href", "/guias");
    expect(screen.queryByRole("link", { name: "Leer los pasos" })).not.toBeInTheDocument();
  });
});
