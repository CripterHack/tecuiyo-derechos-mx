import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contacto
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas, sugerencias o necesitas ayuda? 
            Estamos aquí para ayudarte a navegar tus derechos laborales.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="legal-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Mail className="h-6 w-6" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">IzignaMx</h3>
                <p className="text-muted-foreground">
                  Para consultas, sugerencias o reporte de errores, contáctanos por correo electrónico.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-lg font-mono">dev@izignamx.com</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const newWindow = window.open('mailto:dev@izignamx.com', '_blank', 'noopener,noreferrer');
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Abrir en cliente de correo
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Importante
                </h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Tecuiyo proporciona información educativa sobre derecho laboral. 
                  Para asesoría legal personalizada, consulta nuestro <Link to="/directorio" className="underline">directorio de autoridades</Link>.
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
                  Para asesoría legal personalizada, consulta con un abogado certificado.
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
                  Sí, todas las herramientas y contenido de Tecuiyo son completamente gratuitas 
                  y siempre lo serán.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo se mantiene actualizada la información?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Revisamos y actualizamos el contenido regularmente conforme a cambios 
                  en la legislación laboral mexicana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;