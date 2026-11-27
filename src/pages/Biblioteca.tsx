import { BookOpen, Search, Filter, ArrowLeft, ExternalLink, Download, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ARTICLE_CATALOG, type ArticleCatalogGroup, findArticleByReference, OFFICIAL_LFT_URL } from "@/data/articleDetails";

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documentosComplementarios = [
    {
      titulo: "Ley Federal del Trabajo (Texto completo)",
      descripcion: "Texto oficial publicado por la Cámara de Diputados; consulta allí las reformas y la versión disponible",
      tipo: "Ley",
      fecha: "Fuente oficial",
      enlace: OFFICIAL_LFT_URL
    },
    {
      titulo: "Constitución Política - Artículo 123",
      descripcion: "Fundamentos constitucionales del derecho laboral mexicano",
      tipo: "Constitucional",
      fecha: "2023",
      enlace: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
    },
    {
      titulo: "Diario Oficial de la Federación",
      descripcion: "Portal para consultar publicaciones y reformas; este enlace abre el portal, no un reglamento específico",
      tipo: "Portal",
      fecha: "Fuente oficial",
      enlace: "https://www.dof.gob.mx/"
    },
    {
      titulo: "Comisión Nacional de los Salarios Mínimos",
      descripcion: "Consulta las resoluciones y salarios mínimos aplicables en el portal de CONASAMI",
      tipo: "Tabla",
      fecha: "Fuente oficial",
      enlace: "https://www.gob.mx/conasami"
    }
  ];

  const filtrarArticulos = (searchTerm: string) => {
    if (!searchTerm) return ARTICLE_CATALOG;
    
    const filtered: Record<string, ArticleCatalogGroup> = {};
    
    Object.entries(ARTICLE_CATALOG).forEach(([key, categoria]) => {
      const articulosFiltrados = categoria.articulos.filter(articulo =>
        articulo.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
        articulo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        articulo.contenido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        articulo.temas.some(tema => tema.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      if (articulosFiltrados.length > 0) {
        filtered[key] = {
          titulo: categoria.titulo,
          articulos: articulosFiltrados
        };
      }
    });
    
    return filtered;
  };

  const articulosFiltrados = filtrarArticulos(searchTerm);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <Breadcrumbs 
            items={[
              { label: "Biblioteca Legal", current: true }
            ]}
          />
        </div>
      </div>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Biblioteca Legal</h1>
              <p className="text-primary-foreground/80">Selección educativa de temas laborales y enlaces a fuentes oficiales</p>
            </div>
          </div>
        </div>
      </header>

      {/* Buscador */}
      <section className="py-6 px-4 border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar artículos, temas o palabras clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg h-12"
            />
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground">Búsquedas populares:</span>
            {["salario", "vacaciones", "despido", "aguinaldo", "jornada"].map(term => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(term)}
                className="h-6 text-xs"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="lft" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lft">Ley Federal del Trabajo</TabsTrigger>
              <TabsTrigger value="complementarios">Documentos Complementarios</TabsTrigger>
            </TabsList>

            <TabsContent value="lft" className="mt-8">
              <div className="space-y-8">
                {Object.entries(articulosFiltrados).map(([key, categoria]) => (
                  <div key={key}>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Scale className="h-6 w-6 text-primary" />
                      {categoria.titulo}
                    </h2>
                    
                    <div className="grid gap-6">
                      {categoria.articulos.map((articulo, index) => {
                        const articleDetail = findArticleByReference(articulo.numero);
                        return (
                          <Card key={index} className="legal-card">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className="lft-badge">{articulo.numero}</Badge>
                                    <Badge variant="outline" className="text-xs">LFT</Badge>
                                  </div>
                                  <CardTitle className="text-lg">{articulo.titulo}</CardTitle>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {articulo.contenido}
                              </p>

                              <div className="flex flex-wrap gap-1 mb-4">
                                {articulo.temas.map(tema => (
                                  <Badge key={tema} variant="outline" className="text-xs">
                                    {tema}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex gap-2">
                                {articleDetail ? (
                                  <Button variant="outline" size="sm" asChild>
                                    <Link to={`/biblioteca/${articleDetail.id}`}>
                                      <BookOpen className="mr-2 h-3 w-3" />
                                      Leer resumen
                                    </Link>
                                  </Button>
                                ) : (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={OFFICIAL_LFT_URL} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="mr-2 h-3 w-3" />
                                      Consultar {articulo.numero.replace("Art.", "art.")} en LFT oficial
                                    </a>
                                  </Button>
                                )}
                                {articleDetail && (
                                  <Button variant="ghost" size="sm" asChild>
                                    <a href={OFFICIAL_LFT_URL} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="mr-2 h-3 w-3" />
                                      Consultar LFT oficial
                                    </a>
                                  </Button>
                                )}
                              </div>
                              {!articleDetail && (
                                <p className="text-xs text-muted-foreground mt-3">
                                  Sin resumen local. El enlace abre el PDF completo de la LFT para que busques el artículo indicado.
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}
                
                {Object.keys(articulosFiltrados).length === 0 && (
                  <div className="text-center py-12">
                    <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No se encontraron artículos</h3>
                    <p className="text-muted-foreground mb-4">
                      Intenta con otros términos de búsqueda
                    </p>
                    <Button onClick={() => setSearchTerm("")}>
                      Ver todos los artículos
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="complementarios" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {documentosComplementarios.map((doc, index) => (
                  <Card key={index} className="legal-card group hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {doc.tipo}
                          </Badge>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {doc.titulo}
                          </CardTitle>
                          <CardDescription>
                            {doc.descripcion}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Actualizado: {doc.fecha}
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a href={doc.enlace} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Ver online
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Información legal */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Consulta el texto oficial</h2>
          <p className="text-muted-foreground mb-6">
            La biblioteca reúne resúmenes educativos de una selección de artículos. No reproduce toda la ley.
            Antes de tomar decisiones sobre tu caso, consulta el texto oficial y busca orientación especializada.
          </p>
          <Button variant="outline" asChild>
            <a href={OFFICIAL_LFT_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Consultar LFT oficial
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Biblioteca;
