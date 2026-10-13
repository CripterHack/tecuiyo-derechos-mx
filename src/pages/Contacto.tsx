import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "dev@izignamx.com";
const CONTACT_SUBJECT = "Tecuiyo: error o sugerencia";

const Contacto = () => {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

  const copyEmail = async () => {
    setCopyStatus("copying");
    if (!navigator.clipboard?.writeText) {
      setCopyStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" aria-hidden="true" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contacto
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reporta errores de la plataforma o sugiere mejoras al contenido.
            Este contacto no ofrece asesoría legal personalizada.
          </p>
          <Link to="/directorio" className="inline-block mt-4 text-primary underline underline-offset-4">
            Directorio de autoridades
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="legal-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Mail className="h-6 w-6" aria-hidden="true" />
                Errores y sugerencias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">IzignaMx</h3>
                <p className="text-muted-foreground">
                  Indica qué página consultabas y describe el error o la mejora.
                  No incluyas documentos de tu caso ni información personal o de tu empleador.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg font-mono select-all break-all">{CONTACT_EMAIL}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 h-auto whitespace-normal" asChild>
                      <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}>
                        <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                        Abrir borrador de correo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 h-auto whitespace-normal" onClick={copyEmail} disabled={copyStatus === "copying"}>
                      <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
                      Copiar correo
                    </Button>
                  </div>
                  <p role="status" className="text-sm mt-3" aria-live="polite">
                    {copyStatus === "copying" && "Copiando correo…"}
                    {copyStatus === "copied" && "Correo copiado."}
                    {copyStatus === "error" && "No se pudo copiar. Selecciona el correo visible y cópialo manualmente."}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Abrir el borrador no envía el mensaje. Revisa y envía desde tu aplicación de correo.
                    Si no se abre, copia la dirección y úsala en el correo que prefieras.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-semibold">Reportes públicos</h3>
                <p className="text-sm text-muted-foreground">
                  Los reportes en GitHub son públicos y requieren una cuenta.
                  No publiques datos personales, nombres de empleadores ni documentos de un caso laboral.
                </p>
                <Button variant="outline" className="h-auto whitespace-normal" asChild>
                  <a href="https://github.com/CripterHack/tecuiyo-derechos-mx/issues/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                    Reportar error en GitHub (público)
                  </a>
                </Button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Ayuda para tu situación laboral
                </h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Tecuiyo proporciona información educativa. Para orientación sobre un caso personal,
                  consulta las autoridades del <Link to="/directorio" className="underline">directorio</Link>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Proporcionan asesoría legal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No, Tecuiyo proporciona información educativa sobre derecho laboral. 
                  Para un caso personal, busca orientación en las autoridades laborales o con un profesional del derecho.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Los cálculos son exactos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nuestras calculadoras proporcionan estimaciones basadas en la LFT. 
                  Los montos reales pueden variar según circunstancias específicas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Es gratuito usar Tecuiyo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sí, puedes consultar las herramientas y el contenido gratuitamente.
                  Apoyar el proyecto es voluntario y no es requisito para usarlo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué hago si encuentro información desactualizada?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  El contenido puede quedar desactualizado. Confirma la información en fuentes oficiales
                  y envíanos la página y la fuente de la corrección, sin datos personales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          También puedes contribuir al mantenimiento del proyecto: {" "}
          <Link to="/apoyar" className="text-primary underline underline-offset-4">Apoyar Tecuiyo</Link>.
        </p>
      </div>
    </div>
  );
};

export default Contacto;
