import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const GuiaDetalle = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const guiasPrincipales = [
    {
      id: "1",
      titulo: "Cómo realizar un despido justificado",
      descripcion: "Guía completa para empleadores sobre el proceso legal de despido con causa justificada.",
      duracion: "45 min",
      pasos: 8,
      dificultad: "Media",
      categoria: "Empleadores",
      articulosRelacionados: ["Art. 47", "Art. 25", "Art. 134"],
      completado: 60,
      contenido: `
        <h2>Introducción</h2>
        <p>El despido justificado es una herramienta legal que permite al empleador terminar la relación laboral cuando el trabajador incurre en faltas graves. Es crucial seguir el procedimiento correcto para evitar problemas legales.</p>
        
        <h2>Paso 1: Identificar la causa justificada</h2>
        <p>Verificar que la conducta del trabajador encuadre en alguna de las causales del artículo 47 de la LFT:</p>
        <ul>
          <li>Faltas de honradez o probidad</li>
          <li>Actos de violencia o injurias</li>
          <li>Faltas injustificadas de asistencia</li>
          <li>Desobediencia al patrón</li>
          <li>Estado de embriaguez o uso de narcóticos</li>
        </ul>
        
        <h2>Paso 2: Documentar la falta</h2>
        <p>Reunir evidencias que comprueben la falta:</p>
        <ul>
          <li>Testigos presenciales</li>
          <li>Videos o fotografías</li>
          <li>Documentos escritos</li>
          <li>Reportes de incidentes</li>
        </ul>
        
        <h2>Paso 3: Notificación escrita</h2>
        <p>Elaborar un aviso de rescisión que contenga:</p>
        <ul>
          <li>Fecha y lugar</li>
          <li>Causa específica del despido</li>
          <li>Hechos que la motivan</li>
          <li>Artículo de la LFT que la contempla</li>
          <li>Fecha en que se realizó la falta</li>
        </ul>
      `,
      pasoDetallado: [
        {
          numero: 1,
          titulo: "Identificación de la causa",
          descripcion: "Verificar que la conducta encuadre en el art. 47 LFT",
          completado: true
        },
        {
          numero: 2,
          titulo: "Recopilación de evidencias",
          descripcion: "Documentar pruebas de la falta cometida",
          completado: true
        },
        {
          numero: 3,
          titulo: "Elaboración del aviso",
          descripcion: "Redactar notificación de rescisión",
          completado: true
        },
        {
          numero: 4,
          titulo: "Notificación al trabajador",
          descripcion: "Entregar aviso por escrito con acuse",
          completado: false
        },
        {
          numero: 5,
          titulo: "Cálculo de finiquito",
          descripcion: "Determinar prestaciones a liquidar",
          completado: false
        }
      ]
    },
    {
      id: "2",
      titulo: "Proceso de contratación conforme a la LFT",
      descripcion: "Pasos esenciales para contratar personal cumpliendo con la legislación laboral vigente.",
      duracion: "30 min",
      pasos: 6,
      dificultad: "Básica",
      categoria: "Empleadores",
      articulosRelacionados: ["Art. 25", "Art. 26", "Art. 35"],
      completado: 20,
      contenido: `
        <h2>Introducción</h2>
        <p>La contratación de personal debe realizarse cumpliendo con los requisitos legales establecidos en la Ley Federal del Trabajo para evitar conflictos posteriores.</p>
        
        <h2>Paso 1: Definir el puesto</h2>
        <p>Establecer claramente:</p>
        <ul>
          <li>Funciones específicas</li>
          <li>Horario de trabajo</li>
          <li>Lugar de prestación de servicios</li>
          <li>Salario ofrecido</li>
        </ul>
        
        <h2>Paso 2: Proceso de selección</h2>
        <p>Realizar entrevistas y verificar:</p>
        <ul>
          <li>Experiencia laboral</li>
          <li>Referencias personales y laborales</li>
          <li>Documentación requerida</li>
        </ul>
      `,
      pasoDetallado: [
        {
          numero: 1,
          titulo: "Definición del puesto",
          descripcion: "Establecer funciones, horario y salario",
          completado: true
        },
        {
          numero: 2,
          titulo: "Proceso de selección",
          descripcion: "Entrevistas y verificación de referencias",
          completado: false
        }
      ]
    }
  ];

  const guia = guiasPrincipales.find(g => g.id === id);

  if (!guia) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/guias" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Guía no encontrada</h2>
              <p className="text-muted-foreground">La guía solicitada no existe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Básica": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Media": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Avanzada": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleComenzarGuia = () => {
    toast({
      title: "Iniciando guía",
      description: "La guía paso a paso se ha iniciado correctamente.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/guias" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Guías
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{guia.titulo}</CardTitle>
                    <CardDescription className="text-base">
                      {guia.descripcion}
                    </CardDescription>
                  </div>
                  <Badge className={getDificultadColor(guia.dificultad)}>
                    {guia.dificultad}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progreso de la guía</span>
                    <span>{guia.completado}%</span>
                  </div>
                  <Progress value={guia.completado} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: guia.contenido }}
                />
              </CardContent>
            </Card>

            {/* Pasos de la guía */}
            <Card>
              <CardHeader>
                <CardTitle>Pasos de la guía</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guia.pasoDetallado.map((paso, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        paso.completado 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                      }`}>
                        {paso.completado ? <CheckCircle className="h-4 w-4" /> : paso.numero}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{paso.titulo}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{paso.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comenzar Guía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleComenzarGuia}
                  className="w-full" 
                  size="lg"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Comenzar Guía
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información de la Guía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duración</p>
                    <p className="text-xs text-muted-foreground">{guia.duracion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Dirigido a</p>
                    <p className="text-xs text-muted-foreground">{guia.categoria}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Pasos totales</p>
                    <p className="text-xs text-muted-foreground">{guia.pasos} pasos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artículos Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {guia.articulosRelacionados.map((articulo, index) => (
                    <Badge key={index} variant="outline">
                      {articulo}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaDetalle;