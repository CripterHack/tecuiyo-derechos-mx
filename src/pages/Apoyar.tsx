import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Apoyar = () => (
  <main className="min-h-screen bg-background">
    <header className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 mb-4 hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Heart className="h-8 w-8" aria-hidden="true" /> Apoyar Tecuiyo
        </h1>
        <p className="mt-3 text-primary-foreground/80">
          Información laboral gratuita, con apoyo voluntario de su comunidad.
        </p>
      </div>
    </header>
    <div className="container mx-auto max-w-4xl px-4 py-10 space-y-8">
      <p className="text-lg text-muted-foreground">
        Si Tecuiyo te fue útil y está dentro de tus posibilidades, puedes apoyar su mantenimiento.
        Las aportaciones son opcionales: puedes consultar las herramientas y los recursos sin pagar.
      </p>
      <Card>
        <CardHeader><CardTitle>¿A quién apoyas y para qué?</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>
            Apoyas a Edgar Zorrilla (CripterHack), desarrollador y mantenedor de Tecuiyo.
            El apoyo ayuda a sostener el tiempo de mantenimiento, las correcciones y la mejora de los recursos educativos.
          </p>
          <p>
            Tecuiyo es un proyecto independiente. Una aportación no compra asesoría legal,
            prioridad en un caso ni una recomendación de autoridades o profesionales.
          </p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Aportar con PayPal</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Elige tu aportación en el perfil PayPal.Me de cripterhack.</p>
            <Button asChild className="w-full">
              <a href="https://www.paypal.com/paypalme/cripterhack" target="_blank" rel="noopener noreferrer">
                Abrir PayPal <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Apoyar en GitHub Sponsors</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Consulta las opciones de patrocinio del perfil CripterHack en GitHub.</p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://github.com/sponsors/CripterHack" target="_blank" rel="noopener noreferrer">
                Abrir GitHub Sponsors <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-muted-foreground">
        Los botones abren plataformas externas. Revisa allí el destinatario, el monto, la moneda,
        la frecuencia y las condiciones antes de confirmar. Esas plataformas procesan el pago;
        Tecuiyo no solicita datos bancarios ni confirma transacciones.
      </p>
      <Card>
        <CardHeader><CardTitle>También puedes ayudar sin aportar dinero</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Comparte un recurso que te haya servido, señala una explicación que necesite corregirse
            o contribuye al código y la documentación.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline"><Link to="/contacto">Reportar una mejora</Link></Button>
            <Button asChild variant="outline"><Link to="/codigo-abierto">Contribuir al proyecto</Link></Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>¿Tu organización quiere sostener el proyecto?</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Podemos conversar sobre apoyo al mantenimiento o colaboración educativa.
            Cualquier acuerdo se definirá por separado y conservará la independencia del contenido.
          </p>
          <Button asChild variant="outline">
            <a href="mailto:dev@izignamx.com?subject=Apoyo%20institucional%20a%20Tecuiyo">Preparar un correo</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  </main>
);

export default Apoyar;
