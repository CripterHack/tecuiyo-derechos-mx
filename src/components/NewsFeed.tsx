import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, Newspaper, AlertCircle, Loader2 } from "lucide-react";
import { useNewsData, NewsItem } from "@/hooks/useNewsData";
import { useState } from "react";

const ITEMS_PER_PAGE = 5;

export const NewsFeed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { news: validNews, loading, error } = useNewsData();

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 flex justify-center items-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-muted-foreground">Cargando noticias...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center bg-destructive/10 rounded-lg border border-destructive/20">
        <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-destructive">No se pudieron cargar las noticias</h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (validNews.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center bg-muted/20 rounded-lg border border-muted">
        <Newspaper className="w-10 h-10 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold text-muted-foreground">Sin actualizaciones recientes</h3>
        <p className="text-sm text-muted-foreground/80">
          No hay noticias nuevas en este momento. Revisa más tarde.
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(validNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = validNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">


      <div className="space-y-4">
        {currentNews.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-primary/50 group">
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": item.title,
                "datePublished": item.date,
                "description": item.summary,
                "url": item.link,
                "author": {
                  "@type": "Organization",
                  "name": item.source
                }
              })}
            </script>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <Badge variant="outline" className="mb-2 bg-background/50 backdrop-blur-sm group-hover:bg-primary/5 transition-colors">
                    {item.source}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-2 underline-offset-2 transition-colors">
                      {item.title}
                    </a>
                  </CardTitle>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap font-medium px-2 py-1 bg-muted rounded-md">
                  {new Date(item.date).toLocaleDateString("es-MX", { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 md:line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-end">
              <Button variant="ghost" size="sm" asChild className="group/btn text-primary font-medium" aria-label={`Leer nota completa: ${item.title}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Leer nota completa
                  <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-24 hover:bg-primary/5 hover:text-primary transition-colors"
            aria-label="Ir a la página anterior"
          >
            <ChevronLeft className="mr-2 w-4 h-4" />
            Anterior
          </Button>
          <span className="text-sm font-medium text-muted-foreground" aria-live="polite">
            Página <span className="text-foreground">{currentPage}</span> de {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-24 hover:bg-primary/5 hover:text-primary transition-colors"
            aria-label="Ir a la página siguiente"
          >
            Siguiente
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
