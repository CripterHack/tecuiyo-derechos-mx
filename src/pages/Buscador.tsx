import { Search, Filter, ArrowLeft, FileText, Scale, Clock, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Base de datos de situaciones laborales comunes
  const situacionesLaborales = [
    {
      id: 1,
      titulo: "Me despidieron sin justificación",
      categoria: "despido",
      descripcion: "Información sobre despido injustificado y tus derechos según el Art. 47 y 48 de la LFT",
      articulosLFT: ["Art. 47", "Art. 48", "Art. 50"],
      tags: ["despido", "indemnización", "reinstalación"],
      contenido: "Si te despidieron sin causa justificada, tienes derecho a elegir entre reinstalación o indemnización..."
    },
    {
      id: 2,
      titulo: "No me pagan horas extra",
      categoria: "salario",
      descripcion: "Derechos sobre pago de horas extra y tiempo extraordinario según Art. 66-68 LFT",
      articulosLFT: ["Art. 66", "Art. 67", "Art. 68"],
      tags: ["horas extra", "tiempo extraordinario", "salario"],
      contenido: "Las horas extra deben pagarse al doble del salario ordinario..."
    },
    {
      id: 3,
      titulo: "No me dieron aguinaldo completo",
      categoria: "prestaciones",
      descripcion: "Cálculo y pago del aguinaldo según el Art. 87 de la LFT",
      articulosLFT: ["Art. 87"],
      tags: ["aguinaldo", "prestaciones", "pago"],
      contenido: "El aguinaldo equivale a 15 días de salario y debe pagarse antes del 20 de diciembre..."
    },
    {
      id: 4,
      titulo: "Problemas con mis vacaciones",
      categoria: "prestaciones",
      descripcion: "Derechos de vacaciones y prima vacacional según Art. 76-81 LFT",
      articulosLFT: ["Art. 76", "Art. 79", "Art. 80", "Art. 81"],
      tags: ["vacaciones", "prima vacacional", "descanso"],
      contenido: "Tienes derecho a 6 días de vacaciones en el primer año, incrementándose gradualmente..."
    },
    {
      id: 5,
      titulo: "Acoso laboral o mobbing",
      categoria: "condiciones",
      descripcion: "Protección contra hostigamiento y acoso en el trabajo según reformas a la LFT",
      articulosLFT: ["Art. 2", "Art. 3bis"],
      tags: ["acoso", "hostigamiento", "ambiente laboral"],
      contenido: "El patrón debe mantener un ambiente laboral libre de acoso y hostigamiento..."
    },
    {
      id: 6,
      titulo: "No me dieron finiquito al renunciar",
      categoria: "finiquito",
      descripcion: "Qué debe incluir tu finiquito al terminar la relación laboral",
      articulosLFT: ["Art. 76", "Art. 80", "Art. 87", "Art. 162"],
      tags: ["finiquito", "renuncia", "liquidación"],
      contenido: "Al renunciar tienes derecho a recibir proporcionales de vacaciones, aguinaldo y prima de antigüedad..."
    },
    {
      id: 7,
      titulo: "Trabajo sin contrato escrito",
      categoria: "contrato",
      descripcion: "Derechos cuando trabajas sin contrato por escrito según Art. 24-25 LFT",
      articulosLFT: ["Art. 24", "Art. 25", "Art. 26"],
      tags: ["contrato", "por escrito", "derechos"],
      contenido: "La falta de contrato escrito no te priva de tus derechos laborales..."
    },
    {
      id: 8,
      titulo: "Me redujo el salario unilateralmente",
      categoria: "salario",
      descripcion: "Protección contra reducción de salario según Art. 56 y 123 Constitucional",
      articulosLFT: ["Art. 56", "Art. 51"],
      tags: ["reducción salario", "modificación", "rescisión"],
      contenido: "El patrón no puede reducir tu salario unilateralmente, esto constituye una causa de rescisión..."
    }
  ];

  const categorias = [
    { value: "all", label: "Todas las categorías" },
    { value: "despido", label: "Despido" },
    { value: "salario", label: "Salario y pagos" },
    { value: "prestaciones", label: "Prestaciones" },
    { value: "condiciones", label: "Condiciones laborales" },
    { value: "finiquito", label: "Finiquito" },
    { value: "contrato", label: "Contratos" }
  ];

  const filteredSituaciones = situacionesLaborales.filter(situacion => {
    const matchesSearch = situacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         situacion.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         situacion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || situacion.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <Search className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Buscador por Situación</h1>
              <p className="text-primary-foreground/80">Encuentra información específica para tu problema laboral</p>
            </div>
          </div>
        </div>
      </header>

      {/* Buscador */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Describe tu situación: 'me despidieron', 'no me pagan horas extra', etc."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-lg h-12"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
              >
                {categorias.map(categoria => (
                  <option key={categoria.value} value={categoria.value}>
                    {categoria.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Búsquedas populares:</span>
            {["despido", "horas extra", "aguinaldo", "vacaciones", "finiquito"].map(tag => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(tag)}
                className="h-6 text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {filteredSituaciones.length} situaciones encontradas
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              Filtrado por: {categorias.find(c => c.value === selectedCategory)?.label}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {filteredSituaciones.map(situacion => (
              <Card key={situacion.id} className="legal-card group hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {situacion.titulo}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {situacion.descripcion}
                      </CardDescription>
                    </div>
                    <Scale className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {situacion.articulosLFT.map(articulo => (
                      <Badge key={articulo} variant="secondary" className="lft-badge text-xs">
                        {articulo}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {situacion.contenido}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {situacion.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="mr-2 h-3 w-3" />
                      Leer más
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Clock className="mr-2 h-3 w-3" />
                      Casos similares
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSituaciones.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
              <p className="text-muted-foreground mb-4">
                Intenta con otros términos de búsqueda o explora todas las categorías
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Ver todas las situaciones
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Ayuda adicional */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscas?</h2>
          <p className="text-muted-foreground mb-6">
            Explora nuestras otras herramientas o consulta directamente la biblioteca legal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/calculadora">
                <Calculator className="mr-2 h-4 w-4" />
                Calculadora de liquidación
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/biblioteca">
                <FileText className="mr-2 h-4 w-4" />
                Biblioteca legal completa
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buscador;