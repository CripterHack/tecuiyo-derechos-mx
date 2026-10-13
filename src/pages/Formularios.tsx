import { ArrowLeft, BookOpen, FileText, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { categoriasFormularios, EDUCATIONAL_NOTICE, formularios } from "@/data/formularios";

const Formularios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredResources = formularios.filter(resource => {
    const query = searchTerm.trim().toLocaleLowerCase("es-MX");
    const matchesSearch = `${resource.titulo} ${resource.descripcion}`.toLocaleLowerCase("es-MX").includes(query);
    return matchesSearch && (selectedCategory === "all" || resource.categoria === selectedCategory);
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Formularios y documentos educativos</h1>
              <p className="text-primary-foreground/80">Ejemplos de solicitudes y recursos para preparar tus consultas laborales</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8 space-y-8">
        <Alert>
          <AlertDescription>{EDUCATIONAL_NOTICE}</AlertDescription>
        </Alert>
        <p className="text-muted-foreground">
          Puedes leer, copiar, imprimir o descargar en texto las solicitudes de constancia de trabajo y desglose de finiquito.
          Los demás recursos están en preparación y todavía no tienen plantillas para descargar.
        </p>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1 space-y-2">
            <Label htmlFor="resource-search">Buscar recursos</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="resource-search" type="search" placeholder="Buscar por nombre o tema..." value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2 lg:w-64">
            <Label htmlFor="resource-category">Tema</Label>
            <select id="resource-category" value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
              {categoriasFormularios.map(category => <option key={category.value} value={category.value}>{category.label}</option>)}
            </select>
          </div>
        </div>

        <section aria-labelledby="resource-results">
          <h2 id="resource-results" className="text-2xl font-bold mb-6">{filteredResources.length} recursos encontrados</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredResources.map(resource => (
              <Card key={resource.id} className="legal-card">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">{resource.etiquetaCategoria}</Badge>
                    <Badge variant={resource.estado === "disponible" ? "secondary" : "outline"}>
                      {resource.estado === "disponible" ? "Plantilla educativa" : "En preparación"}
                    </Badge>
                  </div>
                  <CardTitle>{resource.titulo}</CardTitle>
                  <CardDescription>{resource.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/formularios/${resource.id}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      {resource.estado === "disponible" ? "Ver plantilla" : "Ver orientación"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No se encontraron recursos</h3>
              <p className="text-muted-foreground mb-4">Prueba con otro término o consulta todos los temas.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>Ver todos los recursos</Button>
            </div>
          )}
        </section>

        <Card className="legal-card">
          <CardHeader><CardTitle>Prepara tu consulta</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Para confirmar requisitos, plazos o documentos aplicables a tu situación, consulta a una autoridad o persona asesora antes de presentar o firmar documentos.</p>
            <Button variant="outline" asChild><Link to="/directorio">Ver directorio de autoridades</Link></Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Formularios;
