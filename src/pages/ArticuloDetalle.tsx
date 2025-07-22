import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ArticuloDetalle = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Simulando datos de artículos (en una app real, estos vendrían de una base de datos)
  const articulos = [
    {
      id: "art25",
      numero: "25",
      titulo: "Definición de la relación de trabajo",
      categoria: "Relaciones Individuales",
      contenido: `
        <h3>Artículo 25</h3>
        <p>El escrito en que consten las condiciones de trabajo deberá contener:</p>
        <ol>
          <li>Nombre, nacionalidad, edad, sexo, estado civil, Clave Única de Registro de Población, Registro Federal de Contribuyentes y domicilio del trabajador y del patrón;</li>
          <li>Si la relación de trabajo es para obra o tiempo determinado, por temporada, de capacitación inicial o por tiempo indeterminado y, en su caso, si está sujeta a un periodo de prueba;</li>
          <li>El servicio o servicios que deban prestarse, los que se determinarán con la mayor precisión posible;</li>
          <li>El lugar o los lugares donde deba prestarse el trabajo;</li>
          <li>La duración de la jornada;</li>
          <li>La forma y el monto del salario;</li>
          <li>El día y el lugar de pago del salario;</li>
          <li>La indicación de que el trabajador será capacitado o adiestrado en los términos de los planes y programas establecidos o que se establezcan en la empresa, conforme a lo dispuesto en esta Ley; y</li>
          <li>Otras condiciones de trabajo, tales como días de descanso, vacaciones y demás que convengan el trabajador y el patrón.</li>
        </ol>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Este artículo establece los elementos mínimos que debe contener todo contrato de trabajo por escrito. Es fundamental para establecer claramente los derechos y obligaciones de ambas partes.</p>
        
        <h3>Importancia práctica</h3>
        <ul>
          <li><strong>Certeza jurídica:</strong> Define claramente las condiciones laborales</li>
          <li><strong>Prevención de conflictos:</strong> Evita malentendidos futuros</li>
          <li><strong>Referencia legal:</strong> Sirve como prueba en caso de disputas</li>
        </ul>
        
        <h3>Consecuencias de no cumplir</h3>
        <p>Si el patrón no proporciona las condiciones por escrito, se presumen ciertas las afirmaciones del trabajador sobre las condiciones de trabajo.</p>
      `,
      relacionados: ["Art. 24", "Art. 26", "Art. 47"],
      vigencia: "Vigente",
      fechaReforma: "2019-05-01"
    },
    {
      id: "art47",
      numero: "47",
      titulo: "Causas de rescisión sin responsabilidad para el patrón",
      categoria: "Rescisión",
      contenido: `
        <h3>Artículo 47</h3>
        <p>Son causas de rescisión de la relación de trabajo, sin responsabilidad para el patrón:</p>
        <ol>
          <li>Engañarlo el trabajador o en su caso, el sindicato que lo hubiese propuesto o recomendado con certificados falsos o referencias en los que se atribuyan al trabajador capacidad, aptitudes o facultades de que carezca...</li>
          <li>Incurrir el trabajador, durante sus labores, en faltas de probidad u honradez, en actos de violencia, amagos, injurias o malos tratamientos en contra del patrón, sus familiares o del personal directivo o administrativo de la empresa o establecimiento...</li>
          <li>Cometer el trabajador contra alguno de sus compañeros, cualquiera de los actos enumerados en la fracción anterior...</li>
          <li>Cometer el trabajador, fuera del servicio, contra el patrón, sus familiares o personal directivo administrativo, alguno de los actos a que se refiere la fracción II...</li>
          <li>Ocasionar el trabajador, intencionalmente, perjuicios materiales durante el desempeño de las labores o con motivo de ellas...</li>
        </ol>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Este artículo enumera las causas que justifican el despido de un trabajador sin que el patrón tenga obligación de pagar indemnización.</p>
        
        <h3>Elementos importantes</h3>
        <ul>
          <li><strong>Deben estar comprobadas:</strong> No basta la simple afirmación</li>
          <li><strong>Notificación oportuna:</strong> Se debe comunicar dentro de 30 días</li>
          <li><strong>Especificidad:</strong> Debe indicarse la causa exacta</li>
        </ul>
        
        <h3>Procedimiento requerido</h3>
        <p>El patrón debe comunicar por escrito al trabajador la causa de rescisión, especificando claramente los hechos que la motivan.</p>
      `,
      relacionados: ["Art. 46", "Art. 48", "Art. 50"],
      vigencia: "Vigente",
      fechaReforma: "2012-11-30"
    },
    {
      id: "art48",
      numero: "48",
      titulo: "Derechos del trabajador despedido injustificadamente",
      categoria: "Despido",
      contenido: `
        <h3>Artículo 48</h3>
        <p>El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, que se le reinstale en el trabajo que desempeñaba, o que se le indemnice con el importe de tres meses de salario.</p>
        
        <p>Si en el juicio correspondiente no comprueba el patrón la causa de la rescisión, el trabajador tendrá derecho, además, cualquiera que hubiese sido la acción intentada, a que se le paguen los salarios vencidos desde la fecha del despido hasta la fecha en que se cumplimente el laudo.</p>
        
        <p>Cuando el salario sea variable, se tomará como base el promedio de las percepciones obtenidas en los treinta días efectivamente trabajados antes del despido.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Este es uno de los artículos más importantes para los trabajadores despedidos injustificadamente. Establece dos opciones fundamentales: reinstalación o indemnización.</p>
        
        <h3>Opciones del trabajador</h3>
        <ul>
          <li><strong>Reinstalación:</strong> Volver al mismo puesto de trabajo</li>
          <li><strong>Indemnización:</strong> Recibir 3 meses de salario como compensación</li>
        </ul>
        
        <h3>Derechos adicionales</h3>
        <ul>
          <li><strong>Salarios vencidos:</strong> Desde el despido hasta el laudo</li>
          <li><strong>Carga de la prueba:</strong> El patrón debe demostrar la causa</li>
          <li><strong>Cálculo variable:</strong> Promedio de 30 días si el salario varía</li>
        </ul>
        
        <h3>Proceso recomendado</h3>
        <p>1. Presentar demanda ante la Junta de Conciliación y Arbitraje</p>
        <p>2. Elegir entre reinstalación o indemnización</p>
        <p>3. Solicitar salarios vencidos</p>
        <p>4. Aportar pruebas de la relación laboral</p>
      `,
      relacionados: ["Art. 47", "Art. 50", "Art. 870"],
      vigencia: "Vigente",
      fechaReforma: "2019-05-01"
    }
  ];

  const articulo = articulos.find(a => a.id === id);

  if (!articulo) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/biblioteca" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a Biblioteca
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Artículo no encontrado</h2>
              <p className="text-muted-foreground">El artículo solicitado no existe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleVerEnDOF = () => {
    toast({
      title: "Abriendo DOF",
      description: "Redirigiendo al Diario Oficial de la Federación...",
    });
    // Simular apertura del DOF
    window.open("https://www.dof.gob.mx/", "_blank");
  };

  const handleLeerCompleto = () => {
    toast({
      title: "Leyendo artículo completo",
      description: "Mostrando el texto completo del artículo...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/biblioteca" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Biblioteca
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">
                      Artículo {articulo.numero} - {articulo.titulo}
                    </CardTitle>
                    <CardDescription className="text-base">
                      Ley Federal del Trabajo
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    {articulo.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: articulo.contenido }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Explicación y análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: articulo.explicacion }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleLeerCompleto}
                  className="w-full" 
                  size="lg"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Leer Completo
                </Button>
                <Button 
                  onClick={handleVerEnDOF}
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver en DOF
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información del Artículo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Estado</p>
                    <p className="text-xs text-muted-foreground">{articulo.vigencia}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Última reforma</p>
                    <p className="text-xs text-muted-foreground">{articulo.fechaReforma}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artículos Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {articulo.relacionados.map((artRelacionado, index) => (
                    <Link
                      key={index}
                      to={`/biblioteca/art${artRelacionado.replace("Art. ", "")}`}
                      className="block p-2 rounded border hover:bg-accent transition-colors"
                    >
                      <div className="text-sm font-medium">{artRelacionado}</div>
                    </Link>
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

export default ArticuloDetalle;