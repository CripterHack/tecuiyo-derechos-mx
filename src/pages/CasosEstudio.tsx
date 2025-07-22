import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Scale, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CasosEstudio = () => {
  const casos = [
    {
      id: 1,
      titulo: "Despido Injustificado: Caso María González vs. Empresa Textil ABC",
      categoria: "Despido",
      duracion: "15 min lectura",
      nivel: "Intermedio",
      resumen: "Trabajadora despedida sin causa justificada después de 5 años de servicio. Análisis del proceso legal y resolución favorable.",
      puntosClave: [
        "Falta de procedimiento disciplinario",
        "Cálculo de indemnización constitucional",
        "Salarios vencidos y prestaciones",
        "Proceso ante la Junta de Conciliación"
      ],
      resultado: "Indemnización de $180,000 pesos más salarios vencidos",
      leccion: "La importancia de documentar adecuadamente las causas de despido"
    },
    {
      id: 2,
      titulo: "Accidente Laboral: Construcción y Responsabilidad Patronal",
      categoria: "Riesgos de Trabajo",
      duracion: "12 min lectura",
      nivel: "Avanzado",
      resumen: "Trabajador de construcción sufre lesiones graves por falta de medidas de seguridad. Caso exitoso de responsabilidad patronal.",
      puntosClave: [
        "Incumplimiento de medidas de seguridad",
        "Responsabilidad objetiva del patrón",
        "Dictamen médico de incapacidad",
        "Indemnización por riesgo de trabajo"
      ],
      resultado: "Incapacidad permanente parcial del 45% e indemnización completa",
      leccion: "Las medidas de seguridad son obligatorias y su omisión genera responsabilidad"
    },
    {
      id: 3,
      titulo: "Discriminación por Embarazo: Protección de Derechos Reproductivos",
      categoria: "Discriminación",
      duracion: "10 min lectura",
      nivel: "Básico",
      resumen: "Empleada despedida tras comunicar su embarazo. Caso de discriminación por género y estado reproductivo.",
      puntosClave: [
        "Estabilidad en el empleo durante embarazo",
        "Presunción de despido discriminatorio",
        "Derechos de maternidad",
        "Indemnización agravada"
      ],
      resultado: "Reinstalación en el empleo y pago de salarios caídos",
      leccion: "El embarazo está protegido constitucionalmente contra discriminación laboral"
    },
    {
      id: 4,
      titulo: "Horas Extras No Pagadas: Industria Manufacturera",
      categoria: "Jornada Laboral",
      duracion: "8 min lectura",
      nivel: "Básico",
      resumen: "Trabajadores de maquiladora reclaman pago de horas extras sistemáticamente no compensadas durante 2 años.",
      puntosClave: [
        "Registro de asistencia como prueba",
        "Cálculo de horas extras dobles y triples",
        "Prescripción de la acción laboral",
        "Demanda colectiva de trabajadores"
      ],
      resultado: "Pago de $85,000 pesos por trabajador en horas extras",
      leccion: "La jornada extraordinaria debe ser pagada conforme a la ley"
    },
    {
      id: 5,
      titulo: "Acoso Laboral y Hostigamiento: Ambiente de Trabajo Tóxico",
      categoria: "Acoso Laboral",
      duracion: "14 min lectura",
      nivel: "Intermedio",
      resumen: "Empleada de oficina documenta sistemático acoso por parte de su supervisor y logra resolución favorable.",
      puntosClave: [
        "Documentación del acoso laboral",
        "Testigos y evidencias",
        "Rescisión de contrato por causa imputable al patrón",
        "Daño moral y psicológico"
      ],
      resultado: "Indemnización por despido indirecto y daño moral",
      leccion: "El acoso laboral es causa justificada para dar por terminada la relación de trabajo"
    },
    {
      id: 6,
      titulo: "Subcontratación Ilegal: Tercerización de Actividades Especializadas",
      categoria: "Subcontratación",
      duracion: "16 min lectura",
      nivel: "Avanzado",
      resumen: "Empresa utilizaba subcontratación para actividades especializadas de su objeto social principal.",
      puntosClave: [
        "Reforma en materia de subcontratación 2021",
        "Actividades especializadas vs. objeto principal",
        "Responsabilidad solidaria",
        "Regularización de relaciones laborales"
      ],
      resultado: "Reconocimiento de relación laboral directa y pago de diferencias",
      leccion: "La subcontratación solo es válida para servicios especializados no relacionados con el objeto principal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Casos de Estudio
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Análisis detallados de casos reales del derecho laboral mexicano. 
            Aprende de situaciones prácticas y sus resoluciones jurídicas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{casos.length}</div>
              <div className="text-sm text-muted-foreground">Casos Analizados</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Scale className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Casos Exitosos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <User className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Trabajadores Beneficiados</div>
            </CardContent>
          </Card>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-8">
          {casos.map((caso) => (
            <Card key={caso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{caso.titulo}</CardTitle>
                    <CardDescription className="text-base">{caso.resumen}</CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline">{caso.categoria}</Badge>
                    <Badge variant="secondary">{caso.nivel}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {caso.duracion}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Puntos Clave */}
                  <div>
                    <h4 className="font-semibold mb-3">Puntos Clave del Caso:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {caso.puntosClave.map((punto, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {punto}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resultado */}
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      Resultado Obtenido:
                    </h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">{caso.resultado}</p>
                  </div>

                  {/* Lección */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Lección Aprendida:
                    </h4>
                    <p className="text-blue-700 dark:text-blue-400 text-sm">{caso.leccion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¿Tienes un Caso Similar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si tu situación laboral se parece a alguno de estos casos, 
              utiliza nuestras herramientas para conocer tus derechos y opciones legales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/buscador">
                <Button size="lg">Buscar mi Situación</Button>
              </Link>
              <Link to="/calculadora">
                <Button variant="outline" size="lg">Calcular Liquidación</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CasosEstudio;