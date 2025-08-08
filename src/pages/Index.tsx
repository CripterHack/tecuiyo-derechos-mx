import { Scale, BookOpen, Calculator, Search, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" role="main" id="main-content">
      <Navigation />
      {/* Header Hero */}
      <header className="relative animated-gradient py-20 px-4 overflow-hidden" role="banner">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: "2s"}}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/25c5c5f8-9fae-4919-8d25-6483c7fd45d1.png" 
                alt="Tecuiyo - Balanza de la justicia con hojas verdes" 
                className="w-28 h-28 animate-pulse-soft drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Tecuiyo
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}}>
            Conoce y defiende tus derechos laborales conforme a la Ley Federal del Trabajo
          </p>
          <nav className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" role="navigation" aria-label="Acciones principales" style={{animationDelay: "0.4s"}}>
            <Button size="lg" className="btn-hero text-lg px-10 py-4 relative overflow-hidden group" asChild>
              <Link to="/biblioteca" aria-describedby="explorar-desc">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <BookOpen className="mr-2 h-5 w-5 icon-rotate" aria-hidden="true" />
                Explorar mis derechos
              </Link>
            </Button>
            <span id="explorar-desc" className="sr-only">
              Accede a la biblioteca completa de la Ley Federal del Trabajo
            </span>
            <Button size="lg" variant="contrast" className="text-lg px-10 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group" asChild>
              <Link to="/calculadora" aria-describedby="calc-desc">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />
                Calculadora de liquidación
              </Link>
            </Button>
            <span id="calc-desc" className="sr-only">
              Calcula tu liquidación conforme a la Ley Federal del Trabajo
            </span>
          </nav>
        </div>
      </header>

      {/* Disclaimer Legal */}
      <section className="py-6 glass-effect border-b border-destructive/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5"></div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="bg-destructive/15 border border-destructive/40 text-foreground p-4 rounded-xl relative overflow-hidden backdrop-blur-sm before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-destructive shadow-sm text-center max-w-3xl mx-auto">
            <p className="text-sm leading-relaxed text-foreground">
              <strong className="text-destructive font-bold">⚖️ Aviso importante:</strong> La información proporcionada en esta plataforma es de carácter educativo 
              y no constituye asesoría jurídica personalizada. Para casos específicos, consulte con un abogado laboral certificado.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades principales */}
      <section className="py-20 px-4 relative" aria-labelledby="herramientas-title">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 id="herramientas-title" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Herramientas para empoderar a trabajadores mexicanos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accede a recursos especializados diseñados para proteger y hacer valer tus derechos laborales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {/* Buscador por situación */}
            <Card className="legal-card group" role="listitem">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm" aria-hidden="true">
                  <Search className="h-7 w-7 text-primary icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Buscador por situación</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  ¿Tienes un problema laboral? Encuentra la información específica para tu situación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Busca por palabras clave como "despido", "horas extra", "aguinaldo" o describe tu situación
                </p>
                <Button variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/buscador" aria-describedby="buscador-desc">
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Buscar ahora</span>
                  </Link>
                </Button>
                <span id="buscador-desc" className="sr-only">
                  Busca información específica sobre problemas laborales
                </span>
              </CardContent>
            </Card>

            {/* Calculadora de liquidación */}
            <Card className="legal-card group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 shadow-sm">
                  <Calculator className="h-7 w-7 text-accent-foreground icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent-foreground transition-colors duration-300">Calculadora de liquidación</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Calcula tu liquidación conforme a los artículos 48, 76, 80 y 87 de la LFT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Ingresa tu salario, antigüedad y motivo del despido para obtener el cálculo exacto
                </p>
                <Button variant="outline" className="w-full group-hover:border-accent/50 group-hover:text-accent-foreground transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/calculadora">
                    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Calcular liquidación</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Formularios y documentos */}
            <Card className="legal-card group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 shadow-sm">
                  <FileText className="h-7 w-7 text-secondary icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-secondary transition-colors duration-300">Formularios y documentos</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Plantillas de cartas laborales y formatos para trámites ante autoridades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Descarga formatos de renuncia, demanda laboral, solicitudes y más documentos
                </p>
                <Button variant="outline" className="w-full group-hover:border-secondary/50 group-hover:text-secondary transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/formularios">
                    <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Ver formularios</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Directorio de autoridades */}
            <Card className="legal-card group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                  <Users className="h-7 w-7 text-primary icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Directorio de autoridades</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Encuentra Juntas de Conciliación, STPS y autoridades laborales cercanas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Ubicaciones, horarios de atención y datos de contacto actualizados
                </p>
                <Button variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/directorio">
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Ver directorio</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Biblioteca legal */}
            <Card className="legal-card group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 shadow-sm">
                  <BookOpen className="h-7 w-7 text-accent-foreground icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent-foreground transition-colors duration-300">Biblioteca legal</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Acceso completo a la LFT, reglamentos y normativas laborales vigentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Textos oficiales con enlaces al DOF y explicaciones en lenguaje accesible
                </p>
                <Button variant="outline" className="w-full group-hover:border-accent/50 group-hover:text-accent-foreground transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/biblioteca">
                    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Explorar biblioteca</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Guías por temas */}
            <Card className="legal-card group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 shadow-sm">
                  <Scale className="h-7 w-7 text-secondary icon-rotate" />
                </div>
                <CardTitle className="text-xl group-hover:text-secondary transition-colors duration-300">Guías por temas</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Guías paso a paso sobre situaciones laborales comunes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Despidos, vacaciones, aguinaldo, horas extra y más temas explicados claramente
                </p>
                <Button variant="outline" className="w-full group-hover:border-secondary/50 group-hover:text-secondary transition-all duration-300 relative overflow-hidden" asChild>
                  <Link to="/guias">
                    <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">Ver guías</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artículo destacado */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Fondo con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Artículo destacado de la semana
            </h2>
            <p className="text-muted-foreground">Mantente informado sobre tus derechos laborales más importantes</p>
          </div>
          
          <Card className="legal-card group max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <span className="lft-badge">Art. 48 LFT</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Actualizado el 15 de enero de 2025
                </span>
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                ¿Te despidieron injustificadamente? Conoce tus derechos
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                El artículo 48 de la Ley Federal del Trabajo establece dos opciones cuando hay despido injustificado: 
                reinstalación o indemnización.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-primary/30 pl-4 py-2 mb-6 italic text-muted-foreground bg-primary/5 rounded-r-lg">
                "El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, 
                que se le reinstale en el trabajo que desempeñaba, o que se le indemnice..."
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <Link to="/biblioteca/art48">
                  <Button variant="outline" size="sm" className="float-effect hover:border-primary/50">
                    📖 Leer artículo completo
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" asChild className="float-effect">
                  <a href="https://www.dof.gob.mx/" target="_blank" rel="noopener noreferrer" className="link-underline">
                    🏛️ Ver en DOF oficial
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Index;
