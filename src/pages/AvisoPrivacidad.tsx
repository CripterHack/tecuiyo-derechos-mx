import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AvisoPrivacidad = () => {
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
            <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
            <h1 className="text-4xl font-bold">Aviso de privacidad</h1>
          </div>
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Revisión del funcionamiento del sitio: 13 de octubre de 2026
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Datos que usas en Tecuiyo</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Tecuiyo ofrece información laboral sin crear una cuenta. Los datos que
                ingresas en la calculadora se procesan en tu navegador: la aplicación
                no los envía a un servidor ni los guarda para consultas posteriores.
              </p>
              <p>
                La preferencia de tema claro u oscuro se guarda en el almacenamiento
                local de tu navegador. Puedes borrarla eliminando los datos de este
                sitio desde la configuración del navegador.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Contacto por correo</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                La página de contacto permite abrir un borrador o copiar la dirección. El
                sitio no envía mensajes automáticamente: tú decides si los envías
                desde tu aplicación de correo a dev@izignamx.com.
              </p>
              <p>
                Si envías un correo, el destinatario recibe tu dirección y el contenido
                que incluyas; también interviene tu proveedor de correo. Comparte solo
                lo necesario y evita enviar identificaciones, expedientes o datos
                personales de otras personas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Reportes públicos y aportaciones</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Los reportes de errores en el repositorio de GitHub son públicos. No
                publiques ahí datos personales ni detalles que permitan identificar
                a las personas involucradas en un asunto laboral.
              </p>
              <p>
                Las aportaciones se realizan en GitHub Sponsors o PayPal, fuera de
                Tecuiyo. Esos proveedores gestionan los datos de pago conforme a sus
                propias políticas. Esta aplicación no recibe datos de tarjeta ni
                verifica el monto o el resultado de una transacción.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Alojamiento y servicios externos</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                El sitio se aloja en GitHub Pages y utiliza Cloudflare para su
                publicación y protección. Estos servicios pueden registrar datos
                técnicos, como la dirección IP, y aplicar sus propias políticas de
                privacidad y tecnologías de navegación.
              </p>
              <p>
                Las tipografías se cargan desde Google Fonts. Al abrir el sitio,
                tu navegador solicita esos archivos a Google y transmite datos
                técnicos de la conexión. Puedes consultar su
                {" "}<a className="text-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.
              </p>
              <p>
                Al abrir un enlace externo, revisa la política del sitio de destino.
                Las prácticas de esos servicios no se controlan desde Tecuiyo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Consultas sobre privacidad</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Para consultar qué información se recibió por correo o solicitar su
                acceso, rectificación, cancelación u oposición, escribe a
                {" "}<a className="text-primary hover:underline" href="mailto:dev@izignamx.com?subject=Consulta%20de%20privacidad%20-%20Tecuiyo">dev@izignamx.com</a>.
                Describe tu solicitud sin adjuntar documentación sensible de entrada.
              </p>
              <p>
                Este aviso describe el funcionamiento actual y está pendiente de
                validación jurídica. Falta precisar la identidad y el domicilio del
                responsable, así como el procedimiento y los plazos aplicables a las
                solicitudes de privacidad.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="gap-2" asChild>
              <a href="mailto:dev@izignamx.com?subject=Consulta%20de%20privacidad%20-%20Tecuiyo">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Preparar consulta de privacidad
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AvisoPrivacidad;
