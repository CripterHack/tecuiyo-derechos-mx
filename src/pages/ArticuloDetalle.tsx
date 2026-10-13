import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeHtml } from "@/utils/sanitizer";
import { findArticleByReference, findArticleDetail, OFFICIAL_LFT_URL } from "@/data/articleDetails";

const ArticuloDetalle = () => {
  const { id } = useParams();
  const articulo = findArticleDetail(id);

  if (!articulo) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/biblioteca" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a Biblioteca
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Resumen no disponible</h2>
              <p className="text-muted-foreground mb-4">Tecuiyo no tiene un resumen local para este enlace. Puedes consultar el texto completo en la fuente oficial.</p>
              <Button variant="outline" asChild>
                <a href={OFFICIAL_LFT_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Consultar LFT oficial
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/biblioteca" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Biblioteca
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">
                      Artículo {articulo.numero} - {articulo.titulo}
                    </CardTitle>
                    <CardDescription className="text-base">
                      Resumen educativo de una selección de la Ley Federal del Trabajo
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    {articulo.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <SafeHtml 
                  html={articulo.contenido}
                  className="prose prose-sm max-w-none dark:prose-invert"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Explicación y análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <SafeHtml 
                  html={articulo.explicacion}
                  className="prose prose-sm max-w-none dark:prose-invert"
                />
              </CardContent>
            </Card>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  <a href={OFFICIAL_LFT_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Consultar LFT oficial
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información del Artículo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Estado</p>
                    <p className="text-xs text-muted-foreground">{articulo.fechaRevision ? "Resumen revisado en la fecha indicada" : "Resumen pendiente de revisión editorial"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{articulo.fechaRevision ? "Revisión del resumen" : "Fecha de referencia"}</p>
                    <p className="text-xs text-muted-foreground">{articulo.fechaRevision ?? articulo.fechaReforma}</p>
                  </div>
                </div>
                {articulo.textKind === "educational-summary" && articulo.sourceUrl && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Tipo de texto</p>
                    <p className="text-xs text-muted-foreground">Paráfrasis educativa; no es una transcripción de la ley</p>
                    <a href={articulo.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">
                      Fuente oficial consultada para este resumen
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artículos Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {articulo.relacionados.map(artRelacionado => {
                    const relatedArticle = findArticleByReference(artRelacionado);
                    return relatedArticle ? (
                      <Link
                        key={artRelacionado}
                        to={`/biblioteca/${relatedArticle.id}`}
                        className="block p-2 rounded border hover:bg-accent transition-colors"
                      >
                        <div className="text-sm font-medium">{artRelacionado}</div>
                      </Link>
                    ) : (
                      <a
                        key={artRelacionado}
                        href={OFFICIAL_LFT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded border hover:bg-accent transition-colors"
                      >
                        <div className="text-sm font-medium">Consultar {artRelacionado.replace("Art.", "art.")} en LFT oficial</div>
                      </a>
                    );
                  })}
                </div>
                {articulo.relacionados.some(reference => !findArticleByReference(reference)) && (
                  <p className="text-xs text-muted-foreground mt-3">
                    No hay resumen local de algunos artículos relacionados. Sus enlaces oficiales abren el PDF completo de la LFT para que busques el artículo indicado.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticuloDetalle;
