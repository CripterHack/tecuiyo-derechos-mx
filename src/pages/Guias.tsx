import { BookOpen, ArrowLeft, Clock, CheckCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const Guias = () => {
  const guiasPrincipales = [
    {
      id: 1,
      titulo: "Guía completa del despido injustificado",
      descripcion: "Todo lo que necesitas saber si te despidieron sin causa justificada",
      duracion: "15 min",
      pasos: 8,
      dificultad: "Básico",
      categoria: "Despido",
      articulosLFT: ["Art. 47", "Art. 48", "Art. 50"],
      completado: false,
      contenido: [
        "Identifica si tu despido fue justificado",
        "Conoce tus opciones: reinstalación vs indemnización",
        "Calcula tu indemnización",
        "Reúne la documentación necesaria",
        "Presenta tu demanda ante la autoridad",
        "Proceso de conciliación",
        "Juicio laboral si es necesario",
        "Ejecución del laudo"
      ]
    },
    {
      id: 2,
      titulo: "Cómo reclamar horas extra no pagadas",
      descripcion: "Pasos para exigir el pago correcto de tiempo extraordinario",
      duracion: "10 min",
      pasos: 6,
      dificultad: "Básico",
      categoria: "Salario",
      articulosLFT: ["Art. 66", "Art. 67", "Art. 68"],
      completado: false,
      contenido: [
        "Documenta tus horas de trabajo",
        "Calcula el pago correcto de horas extra",
        "Solicita el pago por escrito al patrón",
        "Presenta queja ante la STPS",
        "Demanda laboral si es necesario",
        "Seguimiento del proceso"
      ]
    },
    {
      id: 3,
      titulo: "Trámites para obtener tu finiquito completo",
      descripción: "Asegúrate de recibir todas las prestaciones al terminar tu trabajo",
      duracion: "12 min",
      pasos: 7,
      dificultad: "Intermedio",
      categoria: "Finiquito",
      articulosLFT: ["Art. 76", "Art. 80", "Art. 87", "Art. 162"],
      completado: false,
      contenido: [
        "Conoce qué debe incluir tu finiquito",
        "Calcula vacaciones proporcionales",
        "Calcula prima vacacional",
        "Calcula aguinaldo proporcional",
        "Verifica prima de antigüedad",
        "Revisa el cálculo total",
        "Firma tu finiquito correctamente"
      ]
    },
    {
      id: 4,
      titulo: "Cómo denunciar acoso laboral",
      descripcion: "Protege tus derechos ante hostigamiento en el trabajo",
      duracion: "20 min",
      pasos: 10,
      dificultad: "Avanzado",
      categoria: "Condiciones laborales",
      articulosLFT: ["Art. 2", "Art. 3bis", "Art. 47"],
      completado: false,
      contenido: [
        "Identifica tipos de acoso laboral",
        "Documenta todos los incidentes",
        "Busca testigos y evidencias",
        "Reporta internamente primero",
        "Presenta queja ante STPS",
        "Solicita medidas preventivas",
        "Considera demanda laboral",
        "Busca apoyo psicológico",
        "Protege tu empleo",
        "Seguimiento del caso"
      ]
    },
    {
      id: 5,
      titulo: "Trabajar sin contrato: tus derechos",
      descripcion: "Qué hacer cuando trabajas sin contrato por escrito",
      duracion: "8 min",
      pasos: 5,
      dificultad: "Básico",
      categoria: "Contratos",
      articulosLFT: ["Art. 24", "Art. 25", "Art. 26"],
      completado: false,
      contenido: [
        "Comprende que tienes derechos sin contrato",
        "Documenta tu relación laboral",
        "Exige contrato por escrito",
        "Presenta queja si es necesario",
        "Protege tus derechos laborales"
      ]
    },
    {
      id: 6,
      titulo: "Vacaciones: cálculo y derechos",
      descripcion: "Todo sobre tus vacaciones y prima vacacional",
      duracion: "10 min",
      pasos: 6,
      dificultad: "Básico",
      categoria: "Prestaciones",
      articulosLFT: ["Art. 76", "Art. 78", "Art. 79", "Art. 80"],
      completado: false,
      contenido: [
        "Calcula tus días de vacaciones",
        "Conoce el incremento por antigüedad",
        "Calcula tu prima vacacional (25%)",
        "Planifica tus vacaciones",
        "Qué hacer si no te las dan",
        "Vacaciones proporcionales al renunciar"
      ]
    }
  ];

  const categoriasGuias = [
    { value: "all", label: "Todas las guías", count: guiasPrincipales.length },
    { value: "Despido", label: "Despido", count: 1 },
    { value: "Salario", label: "Salario", count: 1 },
    { value: "Prestaciones", label: "Prestaciones", count: 2 },
    { value: "Condiciones laborales", label: "Condiciones laborales", count: 1 },
    { value: "Contratos", label: "Contratos", count: 1 }
  ];

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-yellow-100 text-yellow-800";
      case "Avanzado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Guías Paso a Paso</h1>
              <p className="text-primary-foreground/80">Aprende a resolver situaciones laborales comunes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Estadísticas */}
      <section className="py-8 px-4 bg-muted/30 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{guiasPrincipales.length}</div>
              <div className="text-sm text-muted-foreground">Guías disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">0</div>
              <div className="text-sm text-muted-foreground">Completadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">85</div>
              <div className="text-sm text-muted-foreground">Min. de contenido</div>
            </div>
            <div className="text-center">
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
          
          <div className="grid lg:grid-cols-2 gap-6">
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
                          <Badge className="bg-green-100 text-green-800">
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

                  {/* Progreso */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso</span>
                      <span>0/{guia.pasos}</span>
                    </div>
                    <Progress value={0} className="h-2" />
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
                  <div className="flex gap-2 pt-2">
                    <Link to={`/guias/${guia.id}`} className="flex-1">
                      <Button className="w-full btn-hero">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Comenzar guía
                      </Button>
                    </Link>
                    <Link to={`/guias/${guia.id}`}>
                      <Button variant="outline" size="sm">
                        Vista previa
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