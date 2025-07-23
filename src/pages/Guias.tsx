import { BookOpen, ArrowLeft, Clock, CheckCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guiasPrincipales, categoriasGuias } from "@/data/guias";

const Guias = () => {

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Básico": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Intermedio": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Avanzado": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <Breadcrumbs 
            items={[
              { label: "Guías", current: true }
            ]}
          />
        </div>
      </div>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4" role="banner">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <BookOpen className="h-8 w-8" aria-hidden="true" />
            <div>
              <h1 className="text-3xl font-bold">Guías Paso a Paso</h1>
              <p className="text-primary-foreground/80">Aprende a resolver situaciones laborales comunes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Estadísticas */}
      <section className="py-8 px-4 bg-muted/30 border-b" aria-labelledby="estadisticas-title">
        <div className="container mx-auto max-w-6xl">
          <h2 id="estadisticas-title" className="sr-only">Estadísticas de guías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Estadísticas">
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-primary">{guiasPrincipales.length}</div>
              <div className="text-sm text-muted-foreground">Guías disponibles</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-accent">0</div>
              <div className="text-sm text-muted-foreground">Completadas</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-secondary">85</div>
              <div className="text-sm text-muted-foreground">Min. de contenido</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros por categoría */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categoriasGuias.map(categoria => (
              <Button
                key={categoria.value}
                variant="outline"
                size="sm"
                className="h-auto py-2"
              >
                {categoria.label}
                <Badge variant="secondary" className="ml-2 h-4 px-1.5 text-xs">
                  {categoria.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Guías principales */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Guías destacadas</h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {guiasPrincipales.map(guia => (
              <Card key={guia.id} className="legal-card group hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{guia.categoria}</Badge>
                        <Badge className={getDificultadColor(guia.dificultad)}>
                          {guia.dificultad}
                        </Badge>
                        {guia.completado && (
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Completada
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {guia.titulo}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {guia.descripcion}
                      </CardDescription>
                    </div>
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Información de la guía */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {guia.duracion}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {guia.pasos} pasos
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Para todos
                    </div>
                  </div>

                  {/* Artículos LFT relacionados */}
                  <div className="flex flex-wrap gap-1">
                    {guia.articulosLFT.map(articulo => (
                      <Badge key={articulo} className="lft-badge text-xs">
                        {articulo}
                      </Badge>
                    ))}
                  </div>


                  {/* Vista previa del contenido */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Lo que aprenderás:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {guia.contenido.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {guia.contenido.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{guia.contenido.length - 3} pasos más...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Acciones */}
                  <div className="pt-2">
                    <Link to={`/guias/${guia.id}`} className="w-full">
                      <Button className="w-full btn-hero">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Ver guía completa
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">¿Cómo funcionan las guías?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="legal-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Paso a paso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cada guía está dividida en pasos claros y fáciles de seguir, 
                  con ejemplos prácticos y plantillas descargables.
                </p>
              </CardContent>
            </Card>

            <Card className="legal-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Documentos incluidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cada guía incluye plantillas de cartas, formatos oficiales 
                  y listas de verificación para facilitar tus trámites.
                </p>
              </CardContent>
            </Card>

            <Card className="legal-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Progreso guardado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tu progreso se guarda automáticamente. Puedes pausar 
                  y continuar las guías cuando tengas tiempo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              ¿Necesitas ayuda personalizada para tu caso específico?
            </p>
            <Button variant="outline" asChild>
              <Link to="/directorio">
                <Users className="mr-2 h-4 w-4" />
                Contactar autoridades laborales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guias;