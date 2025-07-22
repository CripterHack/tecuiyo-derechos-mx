import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AvisoPrivacidad = () => {
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aviso de Privacidad
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Vigente desde: 1 de enero de 2025
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Introducción */}
          <Card>
            <CardHeader>
              <CardTitle>Introducción</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Tecuiyo está comprometido con la protección de su privacidad y el manejo responsable 
                de sus datos personales. Este Aviso de Privacidad describe cómo recopilamos, 
                utilizamos, compartimos y protegemos su información personal de acuerdo con la 
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </CardContent>
          </Card>

          {/* Responsable */}
          <Card>
            <CardHeader>
              <CardTitle>Responsable del Tratamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Tecuiyo</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataforma de información jurídica laboral
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>Contacto: privacidad@tecuiyo.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datos que recopilamos */}
          <Card>
            <CardHeader>
              <CardTitle>Datos Personales que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Datos de Identificación:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de teléfono (opcional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Datos de Navegación:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tiempo de navegación</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Datos Laborales (Voluntarios):</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Información para cálculos de liquidación</li>
                    <li>Tipo de situación laboral consultada</li>
                    <li>Información para búsquedas especializadas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finalidades */}
          <Card>
            <CardHeader>
              <CardTitle>Finalidades del Tratamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Finalidades Primarias:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Proporcionar los servicios de información jurídica laboral</li>
                    <li>Realizar cálculos de liquidación y prestaciones</li>
                    <li>Facilitar búsquedas de información legal personalizada</li>
                    <li>Mantener y mejorar la funcionalidad de la plataforma</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Finalidades Secundarias:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Envío de newsletters con información jurídica relevante</li>
                    <li>Análisis estadístico para mejorar nuestros servicios</li>
                    <li>Comunicación sobre actualizaciones de la plataforma</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Derechos ARCO */}
          <Card>
            <CardHeader>
              <CardTitle>Sus Derechos (ARCO)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Usted tiene derecho a ejercer los siguientes derechos respecto a sus datos personales:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Acceso</h4>
                    <p className="text-sm text-muted-foreground">
                      Conocer qué datos personales tenemos sobre usted
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rectificación</h4>
                    <p className="text-sm text-muted-foreground">
                      Solicitar la corrección de datos inexactos
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cancelación</h4>
                    <p className="text-sm text-muted-foreground">
                      Solicitar la eliminación de sus datos
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Oposición</h4>
                    <p className="text-sm text-muted-foreground">
                      Oponerse al tratamiento de sus datos
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card>
            <CardHeader>
              <CardTitle>Medidas de Seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Implementamos medidas de seguridad físicas, técnicas y administrativas para 
                  proteger sus datos personales:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Cifrado de datos en tránsito y reposo</li>
                  <li>Acceso restringido a datos personales</li>
                  <li>Monitoreo continuo de seguridad</li>
                  <li>Capacitación del personal en protección de datos</li>
                  <li>Copias de seguridad regulares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Transferencias */}
          <Card>
            <CardHeader>
              <CardTitle>Transferencia de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  No transferimos sus datos personales a terceros, excepto en los siguientes casos:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Cuando sea requerido por autoridades competentes</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Con su consentimiento expreso</li>
                  <li>A proveedores de servicios técnicos bajo estrictos acuerdos de confidencialidad</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Para ejercer sus derechos ARCO o cualquier consulta sobre este aviso de privacidad:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>Email: privacidad@tecuiyo.com</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tiempo de respuesta: 20 días hábiles máximo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Modificaciones al Aviso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nos reservamos el derecho de modificar este aviso de privacidad. 
                Las modificaciones serán comunicadas a través de nuestro sitio web 
                y, cuando sea aplicable, por correo electrónico.
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">¿Preguntas sobre Privacidad?</h3>
              <p className="text-muted-foreground mb-6">
                Estamos comprometidos con la transparencia y protección de sus datos.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:privacidad@tecuiyo.com">
                  Contactar Privacidad
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoPrivacidad;