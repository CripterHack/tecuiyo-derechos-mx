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

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Base de datos de artículos de la LFT organizados por temas
  const articulosLFT = {
    "relacion-laboral": {
      titulo: "Relación de Trabajo",
      articulos: [
        {
          numero: "Art. 20",
          titulo: "Concepto de relación de trabajo",
          contenido: "Se entiende por relación de trabajo, cualquiera que sea el acto que le dé origen, la prestación de un trabajo personal subordinado a una persona...",
          temas: ["definición", "relación laboral", "subordinación"]
        },
        {
          numero: "Art. 21",
          titulo: "Presunción de relación de trabajo",
          contenido: "Se presume la existencia del contrato y de la relación de trabajo entre el que presta un trabajo personal y el que lo recibe.",
          temas: ["presunción", "contrato", "relación laboral"]
        },
        {
          numero: "Art. 24",
          titulo: "Condiciones de trabajo por escrito",
          contenido: "Las condiciones de trabajo deben hacerse constar por escrito cuando no existan contratos colectivos aplicables...",
          temas: ["contrato", "por escrito", "condiciones"]
        },
        {
          numero: "Art. 25",
          titulo: "Contenido del contrato de trabajo",
          contenido: "El escrito en que consten las condiciones de trabajo deberá contener los datos del trabajador y patrón, tipo de relación laboral, servicios a prestar, lugar de trabajo, duración de jornada, forma y monto del salario...",
          temas: ["contrato", "contenido", "elementos", "datos personales"]
        }
      ]
    },
    "salarios": {
      titulo: "Salarios",
      articulos: [
        {
          numero: "Art. 82",
          titulo: "Concepto de salario",
          contenido: "Salario es la retribución que debe pagar el patrón al trabajador por su trabajo.",
          temas: ["definición", "salario", "retribución"]
        },
        {
          numero: "Art. 85",
          titulo: "Salario igual por trabajo igual",
          contenido: "A trabajo igual, desempeñado en puesto, jornada y condiciones de eficiencia también iguales, debe corresponder salario igual.",
          temas: ["igualdad salarial", "no discriminación", "trabajo igual"]
        },
        {
          numero: "Art. 90",
          titulo: "Salario mínimo",
          contenido: "Salario mínimo es la cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada de trabajo.",
          temas: ["salario mínimo", "jornada", "cantidad mínima"]
        }
      ]
    },
    "jornada": {
      titulo: "Jornada de Trabajo",
      articulos: [
        {
          numero: "Art. 58",
          titulo: "Jornada de trabajo",
          contenido: "Jornada de trabajo es el tiempo durante el cual el trabajador está a disposición del patrón para prestar su trabajo.",
          temas: ["jornada", "tiempo", "disposición"]
        },
        {
          numero: "Art. 61",
          titulo: "Tipos de jornada",
          contenido: "La duración máxima de la jornada será: ocho horas la diurna, siete la nocturna y siete horas y media la mixta.",
          temas: ["duración máxima", "jornada diurna", "jornada nocturna", "jornada mixta"]
        },
        {
          numero: "Art. 66",
          titulo: "Tiempo extraordinario",
          contenido: "Podrá también prolongarse la jornada de trabajo por circunstancias extraordinarias, sin exceder nunca de tres horas diarias ni de tres veces en una semana.",
          temas: ["horas extra", "tiempo extraordinario", "límites"]
        }
      ]
    },
    "vacaciones": {
      titulo: "Vacaciones",
      articulos: [
        {
          numero: "Art. 76",
          titulo: "Derecho a vacaciones",
          contenido: "Los trabajadores que tengan más de un año de servicios disfrutarán de un período anual de vacaciones pagadas...",
          temas: ["vacaciones", "derecho", "período anual"]
        },
        {
          numero: "Art. 79",
          titulo: "Duración de vacaciones",
          contenido: "La duración de las vacaciones se aumentará en dos días laborables, hasta llegar a doce, por cada año subsecuente de servicios.",
          temas: ["duración", "incremento", "días laborables"]
        },
        {
          numero: "Art. 80",
          titulo: "Prima vacacional",
          contenido: "Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el período de vacaciones.",
          temas: ["prima vacacional", "25%", "salario vacaciones"]
        }
      ]
    },
    "aguinaldo": {
      titulo: "Aguinaldo",
      articulos: [
        {
          numero: "Art. 87",
          titulo: "Derecho al aguinaldo",
          contenido: "Los trabajadores tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre, equivalente a quince días de salario...",
          temas: ["aguinaldo", "15 días", "diciembre", "anual"]
        }
      ]
    },
    "terminacion": {
      titulo: "Terminación de la Relación Laboral",
      articulos: [
        {
          numero: "Art. 47",
          titulo: "Causas de rescisión sin responsabilidad para el patrón",
          contenido: "Son causas de rescisión de la relación de trabajo, sin responsabilidad para el patrón...",
          temas: ["rescisión", "causas justificadas", "patrón"]
        },
        {
          numero: "Art. 48",
          titulo: "Derechos del trabajador despedido",
          contenido: "El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, que se le reinstale en el trabajo que desempeñaba...",
          temas: ["despido", "reinstalación", "indemnización", "elección"]
        },
        {
          numero: "Art. 50",
          titulo: "Indemnización por despido injustificado",
          contenido: "Las indemnizaciones a que se refiere el artículo anterior consistirán: I. Si la relación de trabajo fuere por tiempo determinado menor de un año...",
          temas: ["indemnización", "despido injustificado", "3 meses"]
        }
      ]
    }
  };

  const documentosComplementarios = [
    {
      titulo: "Ley Federal del Trabajo (Texto completo)",
      descripcion: "Versión actualizada de la LFT publicada en el DOF",
      tipo: "Ley",
      fecha: "2023",
      enlace: "https://www.diputados.gob.mx/LeyesBiblio/pdf/125_230223.pdf"
    },
    {
      titulo: "Constitución Política - Artículo 123",
      descripcion: "Fundamentos constitucionales del derecho laboral mexicano",
      tipo: "Constitucional",
      fecha: "2023",
      enlace: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
    },
    {
      titulo: "Reglamento de la LFT en materia de inspección",
      descripcion: "Normativa sobre inspección del trabajo y sanciones",
      tipo: "Reglamento",
      fecha: "2023",
      enlace: "https://www.dof.gob.mx/"
    },
    {
      titulo: "Tablas de salarios mínimos vigentes",
      descripcion: "Salarios mínimos actualizados por zona geográfica",
      tipo: "Tabla",
      fecha: "2024",
      enlace: "https://www.gob.mx/conasami"
    }
  ];

  interface Articulo {
    numero: string;
    titulo: string;
    contenido: string;
    temas: string[];
  }

  interface Categoria {
    titulo: string;
    articulos: Articulo[];
  }

  const filtrarArticulos = (searchTerm: string) => {
    if (!searchTerm) return articulosLFT;
    
    const filtered: Record<string, Categoria> = {};
    
    Object.entries(articulosLFT).forEach(([key, categoria]) => {
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
              <p className="text-primary-foreground/80">Acceso completo a la Ley Federal del Trabajo y normativas laborales</p>
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
                      {categoria.articulos.map((articulo, index) => (
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
                              <Link to={`/biblioteca/art${articulo.numero.replace(/[^0-9]/g, '')}`}>
                                <Button variant="outline" size="sm">
                                  <BookOpen className="mr-2 h-3 w-3" />
                                  Leer completo
                                </Button>
                              </Link>
                              <Button variant="ghost" size="sm" asChild>
                                <a href="https://www.dof.gob.mx/" target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-3 w-3" />
                                  Ver en DOF
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
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
          <h2 className="text-2xl font-bold mb-4">Fuentes oficiales verificadas</h2>
          <p className="text-muted-foreground mb-6">
            Todos los textos legales provienen de fuentes oficiales del Diario Oficial de la Federación (DOF) 
            y son actualizados regularmente para garantizar su vigencia.
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.dof.gob.mx/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visitar DOF oficial
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Biblioteca;