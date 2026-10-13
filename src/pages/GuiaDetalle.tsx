import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeHtml } from "@/utils/sanitizer";
import { guiasPrincipales } from "@/data/guias";

const GuiaDetalle = () => {
  const { id } = useParams();
  const guide = guiasPrincipales.find(item => item.id === id);

  if (!guide) {
    return (
      <main className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/guias" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />Volver a Guías
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-semibold mb-2">Guía no encontrada</h1>
              <p className="text-muted-foreground">La guía solicitada no existe.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  const difficultyColors = {
    Básico: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    Intermedio: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    Avanzado: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link to="/guias" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />Volver a Guías
        </Link>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">{guide.titulo}</h1>
                    <CardDescription className="text-base">{guide.descripcion}</CardDescription>
                  </div>
                  <Badge className={difficultyColors[guide.dificultad]}>{guide.dificultad}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <SafeHtml html={guide.contenidoCompleto} className="prose prose-sm max-w-none dark:prose-invert" />
              </CardContent>
            </Card>

            <section id="steps-real" aria-labelledby="steps-title" tabIndex={-1} className="scroll-mt-8">
              <Card>
                <CardHeader>
                  <h2 id="steps-title" className="text-xl font-semibold">Pasos de la guía</h2>
                  <CardDescription>
                    Los tiempos junto a los pasos son orientativos; no son plazos legales ni compromisos de atención.
                  </CardDescription>
                  <CardDescription>
                    Los documentos son ejemplos para preparar tu consulta. Confirma con la autoridad cuáles aplican a tu situación;
                    estas listas no son requisitos obligatorios para todos los casos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {guide.pasoDetallado.map(step => (
                      <li key={step.numero}>
                        <article aria-labelledby={`step-${guide.id}-${step.numero}`} className="flex items-start gap-4 p-4 rounded-lg border">
                          <span aria-hidden="true" className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-primary/10 text-primary border-2 border-primary/20">
                            {step.numero}
                          </span>
                          <div className="flex-1 min-w-0 space-y-3">
                            <div>
                              <h3 id={`step-${guide.id}-${step.numero}`} className="font-medium">{step.titulo}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{step.descripcion}</p>
                            </div>
                            {step.tiempo && <p className="text-xs text-muted-foreground">Tiempo orientativo: {step.tiempo}</p>}
                            {step.documentos && step.documentos.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium">Documentos sugeridos para consultar o reunir</h4>
                                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-muted-foreground">
                                  {step.documentos.map(document => <li key={document}>{document}</li>)}
                                </ul>
                              </div>
                            )}
                            {step.tips && step.tips.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium">Consejos para este paso</h4>
                                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-muted-foreground">
                                  {step.tips.map(tip => <li key={tip}>{tip}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        </article>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </section>
          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Lectura de la guía</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Todos los pasos están disponibles en esta página.</p>
                <p className="text-sm text-muted-foreground">No se guarda el progreso de lectura.</p>
                <Button className="w-full" asChild>
                  <a href="#steps-real"><BookOpen className="mr-2 h-4 w-4" />Leer los pasos</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Información de la guía</CardTitle></CardHeader>
              <CardContent>
                <dl className="space-y-4 text-sm">
                  <div><dt className="font-medium">Tiempo estimado de lectura</dt><dd className="text-muted-foreground">{guide.duracion}</dd></div>
                  <div><dt className="font-medium">Tema</dt><dd className="text-muted-foreground">{guide.categoria}</dd></div>
                  <div><dt className="font-medium">Pasos disponibles</dt><dd className="text-muted-foreground">{guide.pasoDetallado.length} pasos</dd></div>
                </dl>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Artículos relacionados</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {guide.articulosLFT.map(article => <Badge key={article} variant="outline">{article}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default GuiaDetalle;
