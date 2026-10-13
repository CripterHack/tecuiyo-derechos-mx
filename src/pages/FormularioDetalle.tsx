import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Copy, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { EDUCATIONAL_NOTICE, formularios } from "@/data/formularios";

const FormularioDetalle = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const resource = formularios.find(item => item.id === id);

  const handleCopy = async () => {
    if (resource?.estado !== "disponible") return;
    try {
      await navigator.clipboard.writeText(resource.plantilla.texto);
      setFeedback("Texto copiado. Revisa y adapta los campos antes de usarlo.");
    } catch {
      setFeedback("No se pudo copiar automáticamente; selecciona el texto de la plantilla y cópialo manualmente.");
    }
  };

  const handleDownload = () => {
    if (resource?.estado !== "disponible") return;
    let url: string | undefined;
    try {
      const blob = new Blob([resource.plantilla.texto], { type: "text/plain;charset=utf-8" });
      url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = resource.plantilla.archivo;
      document.body.appendChild(anchor);
      try {
        anchor.click();
      } finally {
        anchor.remove();
      }
      setFeedback("");
    } catch {
      setFeedback("No se pudo iniciar la descarga. Puedes copiar el texto que aparece en esta página.");
    } finally {
      if (url) {
        const objectUrl = url;
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      }
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <Link to="/formularios" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors print:hidden">
          <ArrowLeft className="h-4 w-4" />Volver a formularios
        </Link>
        {!resource ? (
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-semibold mb-2">Formulario no encontrado</h1>
              <p className="text-muted-foreground">El recurso solicitado no existe. Consulta el catálogo para ver los recursos disponibles.</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <header className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{resource.etiquetaCategoria}</Badge>
                <Badge variant="secondary">{resource.estado === "disponible" ? "Plantilla educativa" : "En preparación"}</Badge>
              </div>
              <h1 className="text-3xl font-bold">{resource.titulo}</h1>
              <p className="text-muted-foreground">{resource.descripcion}</p>
            </header>
            <Alert><AlertDescription>{EDUCATIONAL_NOTICE}</AlertDescription></Alert>

            {resource.estado === "disponible" ? (
              <>
                <div className="flex flex-wrap gap-3 print:hidden">
                  <Button onClick={handleDownload}><Download className="mr-2 h-4 w-4" />Descargar .txt</Button>
                  <Button variant="outline" onClick={handleCopy}><Copy className="mr-2 h-4 w-4" />Copiar texto</Button>
                  <Button variant="outline" onClick={() => window.print()}><Printer className="mr-2 h-4 w-4" />Imprimir página</Button>
                </div>
                {feedback && <p role="status" className="text-sm text-muted-foreground print:hidden">{feedback}</p>}
                <Card className="legal-card">
                  <CardHeader>
                    <CardTitle id="template-text-title">Texto de la plantilla</CardTitle>
                    <CardDescription>Lee el ejemplo completo. El archivo de texto y la copia contienen este mismo contenido.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div role="region" aria-labelledby="template-text-title">
                      <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed select-text">{resource.plantilla.texto}</pre>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="legal-card">
                <CardHeader><CardTitle>Recurso orientativo en preparación</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Todavía no hay una plantilla para copiar, imprimir o descargar. Las siguientes notas te ayudan a preparar una consulta.</p></CardContent>
              </Card>
            )}

            <Card className="legal-card print:hidden">
              <CardHeader><CardTitle>{resource.estado === "disponible" ? "Antes de usar este ejemplo" : "Para preparar tu consulta"}</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {resource.orientaciones.map(note => <li key={note}>{note}</li>)}
                </ul>
                <p className="text-sm text-muted-foreground">Confirma con la autoridad o persona asesora los requisitos y plazos aplicables a tu situación.</p>
                <Button variant="outline" asChild><Link to="/directorio">Ver directorio de autoridades</Link></Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </main>
  );
};

export default FormularioDetalle;
