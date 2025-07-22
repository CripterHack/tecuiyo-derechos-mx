import { Scale, BookOpen, Calculator, MessageCircle, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Hero */}
      <header className="relative bg-gradient-to-br from-primary via-secondary to-primary py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/25c5c5f8-9fae-4919-8d25-6483c7fd45d1.png" 
              alt="Tecuiyo - Balanza de la justicia con hojas verdes" 
              className="w-24 h-24"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Tecuiyo
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Conoce y defiende tus derechos laborales conforme a la Ley Federal del Trabajo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero text-lg px-8 py-3">
              <BookOpen className="mr-2 h-5 w-5" />
              Explorar mis derechos
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3">
              <Calculator className="mr-2 h-5 w-5" />
              Calculadora de liquidación
            </Button>
          </div>
        </div>
      </header>

      {/* Disclaimer Legal */}
      <section className="py-4 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm text-destructive text-center">
            <strong>Aviso importante:</strong> La información proporcionada en esta plataforma es de carácter educativo 
            y no constituye asesoría jurídica personalizada. Para casos específicos, consulte con un abogado laboral certificado.
          </p>
        </div>
      </section>

      {/* Funcionalidades principales */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Herramientas para empoderar a trabajadores mexicanos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Buscador por situación */}
            <Card className="legal-card group hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Buscador por situación</CardTitle>
                <CardDescription>
                  ¿Tienes un problema laboral? Encuentra la información específica para tu situación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Busca por palabras clave como "despido", "horas extra", "aguinaldo" o describe tu situación
                </p>
                <Button variant="outline" className="w-full">
                  Buscar ahora
                </Button>
              </CardContent>
            </Card>

            {/* Calculadora de liquidación */}
            <Card className="legal-card group hover:border-accent/50">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Calculator className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Calculadora de liquidación</CardTitle>
                <CardDescription>
                  Calcula tu liquidación conforme a los artículos 48, 76, 80 y 87 de la LFT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ingresa tu salario, antigüedad y motivo del despido para obtener el cálculo exacto
                </p>
                <Button variant="outline" className="w-full">
                  Calcular liquidación
                </Button>
              </CardContent>
            </Card>

            {/* Chat Nahual */}
            <Card className="legal-card group hover:border-secondary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Chat Nahual IA</CardTitle>
                <CardDescription>
                  Asistente inteligente que responde tus dudas laborales basado en la LFT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Pregunta en lenguaje natural y obtén respuestas precisas con citas de la ley
                </p>
                <Button variant="outline" className="w-full">
                  Chatear con Nahual
                </Button>
              </CardContent>
            </Card>

            {/* Directorio de autoridades */}
            <Card className="legal-card group hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Directorio de autoridades</CardTitle>
                <CardDescription>
                  Encuentra Juntas de Conciliación, STPS y autoridades laborales cercanas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ubicaciones, horarios de atención y datos de contacto actualizados
                </p>
                <Button variant="outline" className="w-full">
                  Ver directorio
                </Button>
              </CardContent>
            </Card>

            {/* Biblioteca legal */}
            <Card className="legal-card group hover:border-accent/50">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Biblioteca legal</CardTitle>
                <CardDescription>
                  Acceso completo a la LFT, reglamentos y normativas laborales vigentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Textos oficiales con enlaces al DOF y explicaciones en lenguaje accesible
                </p>
                <Button variant="outline" className="w-full">
                  Explorar biblioteca
                </Button>
              </CardContent>
            </Card>

            {/* Artículo destacado */}
            <Card className="legal-card group hover:border-secondary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Scale className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Guías por temas</CardTitle>
                <CardDescription>
                  Guías paso a paso sobre situaciones laborales comunes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Despidos, vacaciones, aguinaldo, horas extra y más temas explicados claramente
                </p>
                <Button variant="outline" className="w-full">
                  Ver guías
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artículo destacado */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Artículo destacado de la semana</h2>
          
          <Card className="legal-card">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="lft-badge">Art. 48 LFT</span>
                <span className="text-sm text-muted-foreground">Actualizado el 15 de enero de 2025</span>
              </div>
              <CardTitle>¿Te despidieron injustificadamente? Conoce tus derechos</CardTitle>
              <CardDescription>
                El artículo 48 de la Ley Federal del Trabajo establece dos opciones cuando hay despido injustificado: 
                reinstalación o indemnización.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                "El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, 
                que se le reinstale en el trabajo que desempeñaba, o que se le indemnice..."
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Leer artículo completo
                </Button>
                <Button variant="ghost" size="sm" className="link-underline">
                  Ver en DOF oficial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 px-4 text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Tecuiyo</h3>
              <p className="text-sm text-primary-foreground/80">
                Empoderando a trabajadores mexicanos con conocimiento legal accesible
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Herramientas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="link-underline hover:text-accent">Calculadora de liquidación</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Chat Nahual IA</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Buscador legal</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Directorio de autoridades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="link-underline hover:text-accent">Biblioteca LFT</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Guías por temas</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Casos de estudio</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Glosario legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="link-underline hover:text-accent">Aviso de privacidad</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Términos de uso</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Código abierto</a></li>
                <li><a href="#" className="link-underline hover:text-accent">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>
              © 2025 Tecuiyo. Licencia MIT. • 
              Información basada en la Ley Federal del Trabajo vigente • 
              <a href="#" className="link-underline hover:text-accent ml-1">
                Fuentes oficiales DOF
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
