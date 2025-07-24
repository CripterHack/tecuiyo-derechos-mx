import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const TerminosUso = () => {
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
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Términos de Uso
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Vigente desde: 21 de julio de 2025
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Disclaimer Importante */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                    Importante: Solo Información Educativa
                  </h3>
                  <p className="text-amber-700 dark:text-amber-400 text-sm">
                    Tecuiyo proporciona información legal de carácter educativo y orientativo. 
                    NO constituye asesoría jurídica personalizada. Para situaciones específicas, 
                    consulte siempre con un abogado laboralista certificado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aceptación */}
          <Card>
            <CardHeader>
              <CardTitle>1. Aceptación de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Al acceder y utilizar Tecuiyo, usted acepta estar sujeto a estos Términos de Uso 
                y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno 
                de estos términos, no utilice este servicio.
              </p>
            </CardContent>
          </Card>

          {/* Descripción del Servicio */}
          <Card>
            <CardHeader>
              <CardTitle>2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Tecuiyo es una plataforma digital que proporciona:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Información educativa sobre derecho laboral mexicano</li>
                  <li>Calculadoras para estimar liquidaciones y prestaciones</li>
                  <li>Biblioteca de artículos de la Ley Federal del Trabajo</li>
                  <li>Guías orientativas sobre situaciones laborales</li>
                  <li>Formularios y documentos de referencia</li>
                  <li>Directorio de autoridades laborales</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitaciones del Servicio */}
          <Card>
            <CardHeader>
              <CardTitle>3. Limitaciones y Exenciones de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">No Asesoría Legal:</h4>
                  <p className="text-sm text-muted-foreground">
                    La información proporcionada NO constituye asesoría jurídica personalizada. 
                    Cada caso laboral es único y requiere análisis profesional específico.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exactitud de la Información:</h4>
                  <p className="text-sm text-muted-foreground">
                    Aunque nos esforzamos por mantener información actualizada y precisa, 
                    no garantizamos la exactitud, completeness o actualidad de todo el contenido.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cálculos Estimativos:</h4>
                  <p className="text-sm text-muted-foreground">
                    Las calculadoras proporcionan estimaciones basadas en parámetros generales. 
                    Los montos reales pueden diferir según circunstancias específicas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso Apropiado */}
          <Card>
            <CardHeader>
              <CardTitle>4. Uso Apropiado del Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Usos Permitidos:</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Consulta de información educativa sobre derecho laboral</li>
                  <li>Uso de calculadoras para estimaciones personales</li>
                  <li>Descarga de formularios de referencia</li>
                  <li>Consulta del directorio de autoridades</li>
                </ul>
                
                <h4 className="font-semibold mt-4">Usos Prohibidos:</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Presentar la información como asesoría legal personalizada</li>
                  <li>Reproducir contenido sin autorización para fines comerciales</li>
                  <li>Interferir con el funcionamiento del servicio</li>
                  <li>Intentar acceder a sistemas o datos no autorizados</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Propiedad Intelectual */}
          <Card>
            <CardHeader>
              <CardTitle>5. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  El contenido de Tecuiyo, incluyendo textos, gráficos, logos, y software, 
                  está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Licencia de Uso:</h4>
                  <p className="text-sm text-muted-foreground">
                    Se otorga una licencia limitada, no exclusiva y revocable para usar 
                    el servicio únicamente para fines personales y educativos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacidad */}
          <Card>
            <CardHeader>
              <CardTitle>6. Privacidad y Datos Personales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  El tratamiento de sus datos personales se rige por nuestro 
                  <Link to="/aviso-privacidad" className="text-primary hover:underline mx-1">
                    Aviso de Privacidad
                  </Link>
                  el cual forma parte integral de estos términos.
                </p>
                <p className="text-sm text-muted-foreground">
                  Los datos ingresados en calculadoras son procesados localmente 
                  y no se almacenan en nuestros servidores.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Modificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>7. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación.
                </p>
                <p className="text-sm text-muted-foreground">
                  El uso continuado del servicio después de las modificaciones 
                  constituye la aceptación de los nuevos términos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legislación Aplicable */}
          <Card>
            <CardHeader>
              <CardTitle>8. Legislación Aplicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. 
                Cualquier disputa será resuelta en los tribunales competentes de México.
              </p>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card>
            <CardHeader>
              <CardTitle>9. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Para preguntas sobre estos términos, contacte: 
                <a href="mailto:dev@izignamx.com" className="text-primary hover:underline ml-1">
                  dev@izignamx.com
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">¿Consulta Legal Específica?</h3>
              <p className="text-muted-foreground mb-6">
                Para situaciones laborales específicas, recomendamos consultar 
                con un abogado laboralista certificado.
              </p>
              <Link to="/directorio">
                <Button size="lg">Ver Directorio de Autoridades</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosUso;