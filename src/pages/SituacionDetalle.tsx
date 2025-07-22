import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Scale, FileText, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SituacionDetalle = () => {
  const { id } = useParams();

  const situacionesLaborales = [
    {
      id: "1",
      titulo: "Despido injustificado",
      descripcion: "Terminación de la relación laboral sin causa justificada por parte del empleador.",
      contenidoCompleto: `
        <h3>¿Qué es el despido injustificado?</h3>
        <p>El despido injustificado ocurre cuando el empleador termina la relación laboral sin invocar alguna de las causas establecidas en el artículo 47 de la Ley Federal del Trabajo, o cuando las causas invocadas no están debidamente comprobadas.</p>
        
        <h3>Derechos del trabajador</h3>
        <p>El trabajador despedido injustificadamente tiene derecho a:</p>
        <ul>
          <li>Indemnización constitucional de 3 meses de salario</li>
          <li>20 días de salario por cada año trabajado</li>
          <li>Salarios vencidos desde el despido hasta el laudo</li>
          <li>Vacaciones proporcionales y prima vacacional</li>
          <li>Aguinaldo proporcional</li>
        </ul>
        
        <h3>Procedimiento recomendado</h3>
        <p>1. Conservar todos los documentos laborales</p>
        <p>2. Solicitar por escrito la causa del despido</p>
        <p>3. Presentar demanda ante la Junta de Conciliación y Arbitraje</p>
        <p>4. Acudir con abogado laboralista</p>
      `,
      articulosLFT: ["Art. 47", "Art. 48", "Art. 50"],
      tiempoResolucion: "6-12 meses",
      complejidad: "Media",
      tags: ["despido", "indemnización", "salarios", "demanda"]
    },
    {
      id: "2", 
      titulo: "Horas extras no pagadas",
      descripcion: "Tiempo de trabajo que excede la jornada ordinaria sin compensación económica.",
      contenidoCompleto: `
        <h3>¿Qué son las horas extras?</h3>
        <p>Son las horas de trabajo que exceden de la jornada ordinaria de 8 horas diarias o 48 semanales. Deben pagarse con un recargo del 100% sobre el salario normal.</p>
        
        <h3>Límites legales</h3>
        <ul>
          <li>Máximo 3 horas extras por día</li>
          <li>Máximo 3 veces por semana</li>
          <li>Total máximo: 9 horas extras semanales</li>
        </ul>
        
        <h3>Pago de horas extras</h3>
        <p>Las primeras 9 horas se pagan al doble (200%), las siguientes al triple (300%).</p>
        
        <h3>¿Cómo reclamarlas?</h3>
        <p>1. Documentar las horas trabajadas</p>
        <p>2. Solicitar por escrito el pago</p>
        <p>3. En caso de negativa, demandar ante autoridades laborales</p>
      `,
      articulosLFT: ["Art. 61", "Art. 67", "Art. 68"],
      tiempoResolucion: "3-6 meses",
      complejidad: "Baja",
      tags: ["horas extras", "jornada", "salario", "pago"]
    }
  ];

  const situacion = situacionesLaborales.find(s => s.id === id);

  if (!situacion) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/buscador" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver al Buscador
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Situación no encontrada</h2>
              <p className="text-muted-foreground">La situación laboral solicitada no existe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getComplejidadColor = (complejidad: string) => {
    switch (complejidad) {
      case "Baja": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Media": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Alta": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/buscador" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Buscador
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contenido Principal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{situacion.titulo}</CardTitle>
                    <CardDescription className="text-base">
                      {situacion.descripcion}
                    </CardDescription>
                  </div>
                  <Badge className={getComplejidadColor(situacion.complejidad)}>
                    {situacion.complejidad}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: situacion.contenidoCompleto }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información Legal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Artículos LFT</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {situacion.articulosLFT.map((articulo, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {articulo}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Tiempo de resolución</p>
                    <p className="text-xs text-muted-foreground">{situacion.tiempoResolucion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Complejidad</p>
                    <p className="text-xs text-muted-foreground">{situacion.complejidad}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Recomendadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/calculadora">
                  <Button className="w-full" size="lg">
                    <Scale className="h-4 w-4 mr-2" />
                    Calcular Liquidación
                  </Button>
                </Link>
                <Link to="/biblioteca">
                  <Button variant="outline" className="w-full" size="lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Consultar Legislación
                  </Button>
                </Link>
                <Link to="/directorio">
                  <Button variant="outline" className="w-full" size="lg">
                    <Users className="h-4 w-4 mr-2" />
                    Buscar Abogado
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Alert>
              <Scale className="h-4 w-4" />
              <AlertDescription>
                Esta información es orientativa. Para casos específicos, consulte con un abogado laboralista.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SituacionDetalle;