import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, Code, Heart, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CodigoAbierto = () => {
  const tecnologias = [
    { nombre: "React", version: "18.3.1", descripcion: "Biblioteca de interfaz de usuario" },
    { nombre: "TypeScript", version: "5.0+", descripcion: "Lenguaje de programación tipado" },
    { nombre: "Tailwind CSS", version: "3.4+", descripcion: "Framework de estilos utilitarios" },
    { nombre: "Vite", version: "5.0+", descripcion: "Herramienta de construcción rápida" },
    { nombre: "React Router", version: "6.26+", descripcion: "Enrutamiento para React" },
    { nombre: "Radix UI", version: "1.0+", descripcion: "Componentes accesibles" },
    { nombre: "Lucide React", version: "0.462+", descripcion: "Iconos SVG para React" },
    { nombre: "Tanstack Query", version: "5.56+", descripcion: "Gestión de estado del servidor" }
  ];

  const caracteristicas = [
    {
      titulo: "Arquitectura Modular",
      descripcion: "Componentes reutilizables y bien estructurados siguiendo mejores prácticas de React.",
      icono: Code
    },
    {
      titulo: "Accesibilidad",
      descripcion: "Interfaz accesible con soporte completo para lectores de pantalla y navegación por teclado.",
      icono: Users
    },
    {
      titulo: "Responsive Design",
      descripcion: "Diseño completamente adaptable que funciona en desktop, tablet y móvil.",
      icono: Star
    },
    {
      titulo: "Código Limpio",
      descripcion: "Código bien documentado, tipado con TypeScript y siguiendo estándares de la industria.",
      icono: Heart
    }
  ];

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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Github className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Código Abierto
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecuiyo es un proyecto de código abierto construido con tecnologías modernas 
            y mejores prácticas de desarrollo web.
          </p>
        </div>

        {/* Licencia MIT */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-green-600" />
              <CardTitle className="text-green-800 dark:text-green-300">Licencia MIT</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-green-700 dark:text-green-400">
                Tecuiyo se distribuye bajo la Licencia MIT, una de las licencias de código abierto 
                más permisivas que permite el uso, modificación y distribución libre del código.
              </p>
              <div className="bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">¿Qué significa esto?</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Puedes usar el código para cualquier propósito, incluso comercial</li>
                  <li>Puedes modificar y distribuir el código</li>
                  <li>Solo debes incluir el aviso de copyright y la licencia</li>
                  <li>No hay garantías ni responsabilidades por parte de los autores</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stack Tecnológico */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Stack Tecnológico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tecnologias.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{tech.nombre}</h3>
                    <Badge variant="outline">{tech.version}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Características */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Características Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caracteristicas.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icono className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{feature.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Estructura del Proyecto */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Estructura del Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div>tecuiyo-derechos-mx/</div>
                <div>├── src/</div>
                <div>│   ├── components/</div>
                <div>│   │   └── ui/           # Componentes de interfaz reutilizables</div>
                <div>│   ├── pages/           # Páginas de la aplicación</div>
                <div>│   ├── hooks/           # React hooks personalizados</div>
                <div>│   ├── lib/             # Utilidades y helpers</div>
                <div>│   └── main.tsx         # Punto de entrada</div>
                <div>├── public/             # Archivos estáticos</div>
                <div>├── tailwind.config.ts  # Configuración de Tailwind</div>
                <div>├── vite.config.ts      # Configuración de Vite</div>
                <div>└── package.json        # Dependencias del proyecto</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contribuir */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Cómo Contribuir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                ¡Agradecemos las contribuciones de la comunidad! Hay varias formas de ayudar:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Para Desarrolladores:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Reportar bugs y issues</li>
                    <li>Proponer nuevas características</li>
                    <li>Enviar pull requests</li>
                    <li>Mejorar la documentación</li>
                    <li>Optimizar el rendimiento</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Para Juristas:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Revisar contenido legal</li>
                    <li>Actualizar información jurídica</li>
                    <li>Proponer nuevos casos de estudio</li>
                    <li>Mejorar explicaciones legales</li>
                    <li>Validar cálculos y fórmulas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Proceso de Contribución:
                </h4>
                <ol className="list-decimal list-inside text-sm space-y-1 text-blue-700 dark:text-blue-400">
                  <li>Fork del repositorio</li>
                  <li>Crear una rama para tu feature</li>
                  <li>Realizar cambios y commits</li>
                  <li>Crear pull request</li>
                  <li>Revisión y merge</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agradecimientos */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Agradecimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Tecuiyo ha sido posible gracias a:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Comunidad Open Source</h4>
                  <p className="text-sm text-muted-foreground">
                    Por las increíbles herramientas y librerías
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Trabajadores Mexicanos</h4>
                  <p className="text-sm text-muted-foreground">
                    Inspiración y propósito del proyecto
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold">Contribuidores</h4>
                  <p className="text-sm text-muted-foreground">
                    Futuras contribuciones de la comunidad
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¿Quieres Contribuir?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ya seas desarrollador, abogado laboralista, o simplemente alguien interesado 
              en ayudar, tu contribución es valiosa para mejorar Tecuiyo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://github.com/CripterHack/tecuiyo-derechos-mx" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Ver en GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:dev@izignamx.com">
                  Contactar Equipo
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodigoAbierto;