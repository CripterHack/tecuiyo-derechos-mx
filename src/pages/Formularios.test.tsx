import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Formularios from "./Formularios";
import FormularioDetalle from "./FormularioDetalle";

const entries = [
  ["1", "Renuncia voluntaria"],
  ["2", "Despido injustificado"],
  ["3", "Solicitud de constancia de trabajo"],
  ["4", "Quejas por incumplimientos laborales"],
  ["5", "Solicitud de desglose de finiquito"],
  ["6", "Solicitud de pago de adeudos"],
  ["7", "Accidente de trabajo"],
  ["8", "Registro sindical"],
] as const;

const originalCreateUrl = Object.getOwnPropertyDescriptor(URL, "createObjectURL");
const originalRevokeUrl = Object.getOwnPropertyDescriptor(URL, "revokeObjectURL");
const originalClipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");

function restoreProperty(target: object, property: string, descriptor?: PropertyDescriptor) {
  if (descriptor) Object.defineProperty(target, property, descriptor);
  else Reflect.deleteProperty(target, property);
}

function renderPage(path = "/formularios") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/formularios/:id" element={<FormularioDetalle />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  restoreProperty(URL, "createObjectURL", originalCreateUrl);
  restoreProperty(URL, "revokeObjectURL", originalRevokeUrl);
  restoreProperty(navigator, "clipboard", originalClipboard);
});

describe("Catálogo de formularios educativos", () => {
  it.each(entries)("mantiene el mismo título para el recurso %s en catálogo y detalle", (id, title) => {
    renderPage();
    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    const link = screen.getAllByRole("link").find(item => item.getAttribute("href") === `/formularios/${id}`);
    expect(link).toBeDefined();
    fireEvent.click(link!);
    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    expect(screen.queryByText("Formulario no encontrado")).not.toBeInTheDocument();
  });

  it("ofrece exactamente dos plantillas reales sin métricas ni certificaciones", () => {
    renderPage();
    expect(screen.getAllByRole("link", { name: /Ver plantilla/ })).toHaveLength(2);
    expect(screen.getAllByText("En preparación")).toHaveLength(6);
    expect(screen.queryByText(/Validado jurídicamente|Descargas totales/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Formato oficial/)).not.toBeInTheDocument();
  });

  it.each(["1", "2", "4", "6", "7", "8"])("no permite descargar ni firmar el recurso pendiente %s", id => {
    renderPage(`/formularios/${id}`);
    expect(screen.getByText("En preparación")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Descargar|Copiar|Imprimir/ })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver directorio de autoridades/ })).toHaveAttribute("href", "/directorio");
  });

  it("permite volver al catálogo cuando el recurso no existe", () => {
    renderPage("/formularios/no-existe");
    expect(screen.getByRole("heading", { name: "Formulario no encontrado" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Volver a formularios" })).toHaveAttribute("href", "/formularios");
    expect(screen.queryByRole("button", { name: /Descargar/ })).not.toBeInTheDocument();
  });
});

describe("Texto real de las plantillas", () => {
  it.each([
    ["3", "Solicito una constancia de trabajo"],
    ["5", "Solicito un desglose por escrito"],
  ])("muestra contenido educativo utilizable en la plantilla %s", (id, request) => {
    renderPage(`/formularios/${id}`);
    const preview = screen.getByRole("region", { name: "Texto de la plantilla" });
    expect(preview).toHaveTextContent(request);
    expect(preview).toHaveTextContent("[Nombre completo]");
    expect(preview).toHaveTextContent("No es un formato oficial");
    expect(screen.queryByText(/2\.3 MB|1\.8 MB|Validez legal/)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver directorio de autoridades/ })).toBeInTheDocument();
  });

  it.each([
    ["3", "solicitud-constancia-trabajo.txt"],
    ["5", "solicitud-desglose-finiquito.txt"],
  ])("descarga el texto que se muestra en la plantilla %s", async (id, filename) => {
    const createUrl = vi.fn<(blob: Blob) => string>().mockReturnValue("blob:plantilla-local");
    Object.defineProperty(URL, "createObjectURL", { configurable: true, value: createUrl });
    Object.defineProperty(URL, "revokeObjectURL", { configurable: true, value: vi.fn() });
    let downloadedAnchor: { filename: string; href: string | null } | undefined;
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
      downloadedAnchor = { filename: this.download, href: this.getAttribute("href") };
    });
    renderPage(`/formularios/${id}`);
    const text = within(screen.getByRole("region", { name: "Texto de la plantilla" })).getByText(/TECUIYO — PLANTILLA EDUCATIVA/).textContent;
    fireEvent.click(screen.getByRole("button", { name: "Descargar .txt" }));
    expect(createUrl).toHaveBeenCalledOnce();
    const blob = createUrl.mock.calls[0][0] as Blob;
    expect(blob.type).toBe("text/plain;charset=utf-8");
    const downloadedText = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsText(blob);
    });
    expect(downloadedText).toBe(text);
    expect(downloadedAnchor?.filename).toBe(filename);
    expect(downloadedAnchor?.href).toBe("blob:plantilla-local");
    expect(screen.queryByText(/Descarga completada/)).not.toBeInTheDocument();
  });

  it("copia exactamente el contenido de la vista previa", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    renderPage("/formularios/3");
    const text = within(screen.getByRole("region", { name: "Texto de la plantilla" })).getByText(/TECUIYO — PLANTILLA EDUCATIVA/).textContent;
    fireEvent.click(screen.getByRole("button", { name: "Copiar texto" }));
    expect(await screen.findByRole("status")).toHaveTextContent("Texto copiado");
    expect(writeText).toHaveBeenCalledWith(text);
  });

  it("conserva el texto y avisa si no puede iniciar una descarga", () => {
    Object.defineProperty(URL, "createObjectURL", { configurable: true, value: vi.fn(() => { throw new Error("No disponible"); }) });
    renderPage("/formularios/3");
    fireEvent.click(screen.getByRole("button", { name: "Descargar .txt" }));
    expect(screen.getByRole("status")).toHaveTextContent("No se pudo iniciar la descarga");
    expect(screen.getByRole("region", { name: "Texto de la plantilla" })).toHaveTextContent("Solicito una constancia de trabajo");
    expect(screen.queryByText(/Descarga completada/)).not.toBeInTheDocument();
  });

  it("indica cómo copiar manualmente si el navegador rechaza el portapapeles", async () => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error("Bloqueado")) } });
    renderPage("/formularios/5");
    fireEvent.click(screen.getByRole("button", { name: "Copiar texto" }));
    expect(await screen.findByRole("status")).toHaveTextContent(/selecciona el texto.*cópialo manualmente/i);
    expect(screen.getByRole("region", { name: "Texto de la plantilla" })).toHaveTextContent("Solicito un desglose por escrito");
  });

  it("abre la impresión de la página con el texto visible", () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => undefined);
    renderPage("/formularios/3");
    fireEvent.click(screen.getByRole("button", { name: "Imprimir página" }));
    expect(print).toHaveBeenCalledOnce();
  });
});
