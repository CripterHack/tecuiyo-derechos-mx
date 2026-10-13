import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const TerminosUso = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
            <h1 className="text-4xl font-bold">Términos de uso</h1>
          </div>
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Revisión del alcance del sitio: 13 de octubre de 2026
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <CardContent className="p-6 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Información educativa</h2>
                <p className="text-amber-700 dark:text-amber-400 text-sm">
                  Tecuiyo orienta sobre derechos laborales en México. Sus contenidos,
                  cálculos y plantillas no sustituyen la revisión de tu caso por una
                  autoridad laboral o una persona profesional del derecho.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Qué ofrece el sitio</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Puedes consultar artículos, guías y un directorio de autoridades,
                utilizar calculadoras de estimación y obtener documentos de referencia.
                El acceso a estas herramientas es gratuito.
              </p>
              <p>
                Las plantillas requieren adaptación y revisión antes de presentarse.
                Descargar o copiar un documento no inicia un trámite ni lo envía a
                una autoridad.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Cómo interpretar la información</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Las calculadoras ofrecen estimaciones según los datos que ingresas y
                los supuestos que muestra cada herramienta. Un resultado no determina
                una obligación de pago ni garantiza lo que recibirás en tu caso.
              </p>
              <p>
                Revisa los datos, las fechas y la legislación vigente en fuentes
                oficiales antes de tomar decisiones. El contenido puede contener
                errores o quedar desactualizado; puedes reportarlos desde
                {" "}<Link to="/contacto" className="text-primary hover:underline">contacto</Link>.
                Para orientación sobre una situación concreta, consulta el
                {" "}<Link to="/directorio" className="text-primary hover:underline">directorio de autoridades</Link>.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Licencia y reutilización</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                El software y la documentación asociados del repositorio se publican
                bajo la
                {" "}<a href="https://github.com/CripterHack/tecuiyo-derechos-mx/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">licencia MIT</a>.
                Esta licencia permite su uso, modificación y distribución, incluso
                comercial, con las condiciones indicadas en el archivo de licencia,
                incluida la conservación de sus avisos.
              </p>
              <p>
                Los materiales y servicios de terceros mantienen sus propias
                condiciones. La licencia del proyecto no implica que Tecuiyo o una
                autoridad respalden un producto o una asesoría que reutilice su código.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Aportaciones voluntarias</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Apoyar económicamente el mantenimiento del proyecto es opcional.
                Una aportación no compra asesoría jurídica, garantiza resultados
                laborales ni condiciona el acceso a la información.
              </p>
              <p>
                Los pagos se realizan en el proveedor externo que elijas. Antes de
                confirmar, revisa el destinatario, el importe, la moneda y si el apoyo
                es único o recurrente. Tecuiyo no verifica transacciones ni muestra una
                confirmación de pago propia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Privacidad y contacto</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Consulta el
                {" "}<Link to="/aviso-privacidad" className="text-primary hover:underline">aviso de privacidad</Link>
                {" "}para conocer el tratamiento de los datos que usas en el sitio y
                de la información que decidas enviar por correo.
              </p>
              <p>
                Para consultas sobre el proyecto, escribe a
                {" "}<a href="mailto:dev@izignamx.com" className="text-primary hover:underline">dev@izignamx.com</a>.
                Estos términos describen el alcance actual del servicio y están
                pendientes de validación jurídica.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/directorio">Ver directorio de autoridades</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminosUso;
