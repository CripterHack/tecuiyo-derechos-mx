import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, BookOpen, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GlosarioLegal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terminos = [
    {
      termino: "Aguinaldo",
      categoria: "Prestaciones",
      definicion: "Prestación anual equivalente a 15 días de salario que debe pagarse antes del 20 de diciembre de cada año.",
      articulo: "Artículo 87 LFT",
      ejemplo: "Un trabajador con salario de $300 diarios tiene derecho a $4,500 pesos de aguinaldo."
    },
    {
      termino: "Antigüedad",
      categoria: "Relación Laboral",
      definicion: "Tiempo transcurrido desde el inicio de la relación de trabajo, base para el cálculo de diversas prestaciones.",
      articulo: "Artículo 158 LFT",
      ejemplo: "Al completar 5 años de antigüedad corresponden al menos 20 días laborables de vacaciones."
    },
    {
      termino: "Capacitación",
      categoria: "Derechos",
      definicion: "Derecho del trabajador a recibir formación para el desempeño de sus funciones y desarrollo profesional.",
      articulo: "Artículo 153-A LFT",
      ejemplo: "La empresa debe proporcionar cursos de seguridad industrial a todos los trabajadores."
    },
    {
      termino: "Contrato Colectivo",
      categoria: "Sindical",
      definicion: "Convenio celebrado entre uno o varios sindicatos de trabajadores y uno o varios patrones.",
      articulo: "Artículo 386 LFT",
      ejemplo: "El sindicato negocia mejores condiciones salariales a través del contrato colectivo."
    },
    {
      termino: "Despido",
      categoria: "Terminación",
      definicion: "Acto unilateral del patrón por el que da por terminada la relación de trabajo.",
      articulo: "Artículo 47 LFT",
      ejemplo: "El despido debe estar justificado en alguna de las causas previstas por la ley."
    },
    {
      termino: "Finiquito",
      categoria: "Terminación",
      definicion: "Documento que contiene el cálculo de las prestaciones que corresponden al trabajador al término de la relación laboral.",
      articulo: "Artículo 33 LFT",
      ejemplo: "El finiquito debe incluir salarios, vacaciones, aguinaldo proporcional y prima vacacional."
    },
    {
      termino: "Horas Extras",
      categoria: "Jornada",
      definicion: "Tiempo trabajado que excede la jornada máxima legal, pagado al doble (primeras 9 horas) o triple (siguientes).",
      articulo: "Artículo 67 LFT",
      ejemplo: "Un trabajador que labora 10 horas diarias tiene 2 horas extras pagadas al doble."
    },
    {
      termino: "Incapacidad",
      categoria: "Seguridad Social",
      definicion: "Imposibilidad temporal o permanente para trabajar debido a enfermedad o accidente.",
      articulo: "Artículo 478 LFT",
      ejemplo: "La incapacidad por riesgo de trabajo debe ser cubierta íntegramente por el patrón."
    },
    {
      termino: "Indemnización",
      categoria: "Terminación",
      definicion: "Compensación que puede corresponder al terminar la relación laboral; sus conceptos y monto dependen del supuesto legal aplicable.",
      articulo: "Artículos 48 a 50 LFT",
      ejemplo: "Los 20 días por año no se suman automáticamente en todo despido. Solicita asesoría para identificar las indemnizaciones que procedan."
    },
    {
      termino: "Jornada de Trabajo",
      categoria: "Jornada",
      definicion: "Tiempo durante el cual el trabajador está a disposición del patrón para prestar su trabajo.",
      articulo: "Artículo 58 LFT",
      ejemplo: "La jornada diurna máxima es de 8 horas, la nocturna de 7 horas y la mixta de 7.5 horas."
    },
    {
      termino: "Liquidación",
      categoria: "Terminación",
      definicion: "Pago total de prestaciones al trabajador por terminación de la relación laboral.",
      articulo: "Artículos 50 y 162 LFT",
      ejemplo: "Al terminar la relación deben revisarse las prestaciones pendientes y las indemnizaciones o prima de antigüedad que procedan según el caso."
    },
    {
      termino: "Maternidad",
      categoria: "Protección Especial",
      definicion: "Protección especial que la ley otorga a las trabajadoras durante el embarazo, parto y lactancia.",
      articulo: "Artículo 170 LFT",
      ejemplo: "La trabajadora embarazada tiene derecho a 6 semanas de descanso antes y después del parto."
    },
    {
      termino: "Participación de Utilidades",
      categoria: "Prestaciones",
      definicion: "Derecho de los trabajadores a recibir parte de las ganancias anuales de la empresa.",
      articulo: "Artículo 117 LFT",
      ejemplo: "Los trabajadores tienen derecho al 10% de la renta gravable de la empresa."
    },
    {
      termino: "Prima de Antigüedad",
      categoria: "Prestaciones",
      definicion: "Para trabajadores de planta: 12 días por año de servicio, con base salarial limitada por los artículos 485 y 486; en renuncia voluntaria exige al menos 15 años, en despido no.",
      articulo: "Artículo 162 LFT",
      ejemplo: "Un trabajador de planta despedido con 10 años de servicio puede reclamar 120 días con la base salarial aplicable; una renuncia voluntaria con esa antigüedad no cumple el requisito de 15 años."
    },
    {
      termino: "Prima Vacacional",
      categoria: "Prestaciones",
      definicion: "Prestación equivalente a por lo menos el 25% del salario correspondiente al período de vacaciones.",
      articulo: "Artículo 80 LFT",
      ejemplo: "Si las vacaciones son de $3,000 pesos, la prima vacacional será de $750 pesos."
    },
    {
      termino: "Rescisión",
      categoria: "Terminación",
      definicion: "Terminación de la relación de trabajo por causa justificada, sin responsabilidad para quien la invoca.",
      articulo: "Artículos 47 y 51 LFT",
      ejemplo: "El patrón puede rescindir el contrato por faltas injustificadas del trabajador."
    },
    {
      termino: "Riesgo de Trabajo",
      categoria: "Seguridad Social",
      definicion: "Accidentes y enfermedades a que están expuestos los trabajadores en ejercicio o con motivo del trabajo.",
      articulo: "Artículo 473 LFT",
      ejemplo: "Una lesión en el trabajo debe ser reportada inmediatamente al IMSS y al patrón."
    },
    {
      termino: "Salario",
      categoria: "Remuneración",
      definicion: "Retribución que debe pagar el patrón al trabajador por su trabajo.",
      articulo: "Artículo 82 LFT",
      ejemplo: "El salario debe pagarse en moneda de curso legal y puede ser por unidad de tiempo, obra o comisión."
    },
    {
      termino: "Sindicato",
      categoria: "Sindical",
      definicion: "Asociación de trabajadores o patrones constituida para el estudio, mejoramiento y defensa de sus respectivos intereses.",
      articulo: "Artículo 356 LFT",
      ejemplo: "Los trabajadores pueden formar un sindicato con mínimo 20 trabajadores en servicio activo."
    },
    {
      termino: "Subcontratación",
      categoria: "Relación Laboral",
      definicion: "La subcontratación de personal está prohibida. Los servicios u obras especializados tienen requisitos específicos, entre ellos el registro correspondiente.",
      articulo: "Artículos 12 a 15 LFT",
      ejemplo: "Los servicios especializados no deben formar parte del objeto social ni de la actividad económica preponderante de la beneficiaria, y el contratista debe contar con el registro previsto por la ley."
    },
    {
      termino: "Terminación",
      categoria: "Terminación",
      definicion: "Fin de la relación de trabajo por mutuo consentimiento o causas ajenas a la voluntad de las partes.",
      articulo: "Artículo 53 LFT",
      ejemplo: "La terminación por mutuo consentimiento no genera indemnización."
    },
    {
      termino: "Vacaciones",
      categoria: "Prestaciones",
      definicion: "Derecho del trabajador a un período de descanso anual con goce de sueldo.",
      articulo: "Artículo 76 LFT",
      ejemplo: "Al completar el primer año corresponden al menos 12 días laborables de vacaciones."
    }
  ];

  const filteredTerminos = terminos.filter(termino =>
    termino.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
    termino.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    termino.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorias = [...new Set(terminos.map(t => t.categoria))];

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
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Glosario Legal
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Definiciones claras y precisas de los términos más importantes 
            del derecho laboral mexicano con ejemplos prácticos.
          </p>
        </div>

        {/* Search and Stats */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar término legal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Scale className="h-4 w-4" />
              <span className="text-sm">
                {filteredTerminos.length} de {terminos.length} términos
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categorias.map((categoria) => (
              <Badge key={categoria} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {categoria}
              </Badge>
            ))}
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6">
          {filteredTerminos.map((termino, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{termino.termino}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {termino.categoria}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{termino.articulo}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Definición */}
                  <div>
                    <h4 className="font-semibold mb-2">Definición:</h4>
                    <p className="text-muted-foreground">{termino.definicion}</p>
                  </div>

                  {/* Ejemplo */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Ejemplo Práctico:
                    </h4>
                    <p className="text-blue-700 dark:text-blue-400 text-sm">{termino.ejemplo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerminos.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No se encontraron términos</h3>
            <p className="text-muted-foreground">
              Intenta con una búsqueda diferente o revisa la ortografía.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¿No Encuentras un Término?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Utiliza nuestras otras herramientas para resolver dudas específicas 
              sobre tu situación laboral o consulta nuestra biblioteca legal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/biblioteca">
                <Button size="lg">Biblioteca Legal</Button>
              </Link>
              <Link to="/buscador">
                <Button variant="outline" size="lg">Buscador de Situaciones</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GlosarioLegal;
