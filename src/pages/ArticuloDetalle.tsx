import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { SafeHtml } from "@/utils/sanitizer";

const ArticuloDetalle = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Base de datos completa de artículos de la LFT
  const articulos = [
    // Relación de Trabajo
    {
      id: "art20",
      numero: "20",
      titulo: "Concepto de relación de trabajo",
      categoria: "Relaciones Individuales",
      contenido: `
        <h3>Artículo 20</h3>
        <p>Se entiende por relación de trabajo, cualquiera que sea el acto que le dé origen, la prestación de un trabajo personal subordinado a una persona, mediante el pago de un salario.</p>
        
        <p>Contrato individual de trabajo, cualquiera que sea su forma o denominación, es aquel por virtud del cual una persona se obliga a prestar a otra un trabajo personal subordinado, mediante el pago de un salario.</p>
        
        <p>La prestación de un trabajo a que se refiere el párrafo primero y el contrato celebrado producen los mismos efectos.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Este artículo es fundamental porque define qué constituye una relación de trabajo. Establece tres elementos esenciales:</p>
        
        <h3>Elementos de la relación laboral</h3>
        <ul>
          <li><strong>Prestación personal:</strong> El trabajo debe ser realizado directamente por el trabajador</li>
          <li><strong>Subordinación:</strong> El trabajador debe seguir las instrucciones del patrón</li>
          <li><strong>Salario:</strong> Debe existir una retribución económica</li>
        </ul>
        
        <h3>Implicaciones importantes</h3>
        <p>Sin importar si existe un contrato escrito, si se dan estos tres elementos, existe una relación laboral con todos los derechos que esto implica.</p>
      `,
      relacionados: ["Art. 21", "Art. 24", "Art. 25"],
      vigencia: "Vigente",
      fechaReforma: "2012-11-30"
    },
    {
      id: "art21",
      numero: "21",
      titulo: "Presunción de relación de trabajo",
      categoria: "Relaciones Individuales",
      contenido: `
        <h3>Artículo 21</h3>
        <p>Se presume la existencia del contrato y de la relación de trabajo entre el que presta un trabajo personal y el que lo recibe.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Este artículo establece una presunción legal muy importante: si alguien está prestando un trabajo personal para otra persona, se presume que existe una relación laboral.</p>
        
        <h3>Beneficio para el trabajador</h3>
        <ul>
          <li><strong>Protección automática:</strong> No necesitas demostrar que eres empleado</li>
          <li><strong>Carga de la prueba:</strong> El patrón debe demostrar que NO hay relación laboral</li>
          <li><strong>Derechos garantizados:</strong> Aplican todos los derechos laborales desde el inicio</li>
        </ul>
        
        <h3>Casos comunes</h3>
        <p>Aplica especialmente en trabajadores domésticos, vendedores, repartidores y otros que prestan servicios sin contrato escrito.</p>
      `,
      relacionados: ["Art. 20", "Art. 24"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art24",
      numero: "24",
      titulo: "Condiciones de trabajo por escrito",
      categoria: "Relaciones Individuales",
      contenido: `
        <h3>Artículo 24</h3>
        <p>Las condiciones de trabajo deben hacerse constar por escrito cuando no existan contratos colectivos aplicables. Se harán dos ejemplares, por lo menos, de los cuales quedará uno en poder de cada parte.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece la obligación de documentar por escrito las condiciones de trabajo cuando no hay contrato colectivo.</p>
        
        <h3>Requisitos importantes</h3>
        <ul>
          <li><strong>Por duplicado:</strong> Una copia para cada parte</li>
          <li><strong>Obligatorio:</strong> Es responsabilidad del patrón proporcionarlo</li>
          <li><strong>Protección:</strong> Evita conflictos sobre las condiciones pactadas</li>
        </ul>
        
        <h3>¿Qué pasa si no hay contrato escrito?</h3>
        <p>Según el artículo 26, se presumen ciertas las afirmaciones del trabajador sobre las condiciones de trabajo.</p>
      `,
      relacionados: ["Art. 25", "Art. 26", "Art. 132"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art25",
      numero: "25",
      titulo: "Contenido del contrato de trabajo",
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
    // Salarios
    {
      id: "art82",
      numero: "82",
      titulo: "Concepto de salario",
      categoria: "Salarios",
      contenido: `
        <h3>Artículo 82</h3>
        <p>Salario es la retribución que debe pagar el patrón al trabajador por su trabajo.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Define de manera simple pero fundamental qué es el salario: toda retribución que el patrón debe pagar por el trabajo realizado.</p>
        
        <h3>Elementos importantes</h3>
        <ul>
          <li><strong>Obligación patronal:</strong> Es un deber del patrón, no una concesión</li>
          <li><strong>Contraprestación:</strong> Se paga a cambio del trabajo realizado</li>
          <li><strong>Base de otros derechos:</strong> Muchas prestaciones se calculan sobre el salario</li>
        </ul>
        
        <h3>Incluye</h3>
        <p>Sueldo base, comisiones, bonos, prestaciones en especie y cualquier otra retribución por el trabajo.</p>
      `,
      relacionados: ["Art. 83", "Art. 84", "Art. 85"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art85",
      numero: "85",
      titulo: "Salario igual por trabajo igual",
      categoria: "Salarios",
      contenido: `
        <h3>Artículo 85</h3>
        <p>A trabajo igual, desempeñado en puesto, jornada y condiciones de eficiencia también iguales, debe corresponder salario igual.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece el principio fundamental de no discriminación salarial: misma paga para mismo trabajo.</p>
        
        <h3>Elementos que deben ser iguales</h3>
        <ul>
          <li><strong>Trabajo:</strong> Mismas funciones y responsabilidades</li>
          <li><strong>Puesto:</strong> Mismo nivel jerárquico</li>
          <li><strong>Jornada:</strong> Misma duración y horario</li>
          <li><strong>Eficiencia:</strong> Mismo rendimiento y calidad</li>
        </ul>
        
        <h3>Protección contra discriminación</h3>
        <p>Impide diferencias salariales por género, edad, origen, religión u otras características personales.</p>
      `,
      relacionados: ["Art. 82", "Art. 86", "Art. 123"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art90",
      numero: "90",
      titulo: "Salario mínimo",
      categoria: "Salarios",
      contenido: `
        <h3>Artículo 90</h3>
        <p>Salario mínimo es la cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada de trabajo.</p>
        
        <p>El salario mínimo deberá ser suficiente para satisfacer las necesidades normales de un jefe de familia, en el orden material, social y cultural, y para proveer a la educación obligatoria de los hijos.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Define el salario mínimo como el piso salarial que debe garantizar una vida digna.</p>
        
        <h3>Características del salario mínimo</h3>
        <ul>
          <li><strong>Piso salarial:</strong> Nadie puede ganar menos</li>
          <li><strong>En efectivo:</strong> Debe pagarse en dinero</li>
          <li><strong>Por jornada:</strong> Corresponde a una jornada de trabajo</li>
          <li><strong>Vida digna:</strong> Debe cubrir necesidades básicas</li>
        </ul>
        
        <h3>Actualización</h3>
        <p>Se revisa anualmente por la Comisión Nacional de Salarios Mínimos (CONASAMI).</p>
      `,
      relacionados: ["Art. 91", "Art. 92", "Art. 97"],
      vigencia: "Vigente",
      fechaReforma: "2019-01-01"
    },
    // Jornada de Trabajo
    {
      id: "art58",
      numero: "58",
      titulo: "Jornada de trabajo",
      categoria: "Jornada de Trabajo",
      contenido: `
        <h3>Artículo 58</h3>
        <p>Jornada de trabajo es el tiempo durante el cual el trabajador está a disposición del patrón para prestar su trabajo.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Define la jornada como todo el tiempo que el trabajador debe estar disponible para el patrón.</p>
        
        <h3>Concepto clave: "A disposición"</h3>
        <ul>
          <li><strong>Tiempo efectivo:</strong> Cuando realmente trabajas</li>
          <li><strong>Tiempo de espera:</strong> Cuando esperas órdenes o clientes</li>
          <li><strong>Tiempo de desplazamiento:</strong> Si es parte de las funciones</li>
        </ul>
        
        <h3>No incluye</h3>
        <p>Tiempo de traslado de casa al trabajo, comidas (salvo que sea parte del trabajo) y descansos personales autorizados.</p>
      `,
      relacionados: ["Art. 59", "Art. 61", "Art. 66"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art61",
      numero: "61",
      titulo: "Tipos de jornada",
      categoria: "Jornada de Trabajo",
      contenido: `
        <h3>Artículo 61</h3>
        <p>La duración máxima de la jornada será: ocho horas la diurna, siete la nocturna y siete horas y media la mixta.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece los límites máximos de duración para cada tipo de jornada laboral.</p>
        
        <h3>Tipos de jornada</h3>
        <ul>
          <li><strong>Diurna:</strong> Entre 6:00 y 20:00 hrs - Máximo 8 horas</li>
          <li><strong>Nocturna:</strong> Entre 20:00 y 6:00 hrs - Máximo 7 horas</li>
          <li><strong>Mixta:</strong> Períodos diurnos y nocturnos - Máximo 7.5 horas</li>
        </ul>
        
        <h3>Jornada mixta</h3>
        <p>Se considera mixta cuando incluye más de 3.5 horas del período nocturno.</p>
        
        <h3>Protección del trabajador</h3>
        <p>La jornada nocturna es más corta debido al mayor desgaste físico y mental.</p>
      `,
      relacionados: ["Art. 58", "Art. 60", "Art. 66"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art66",
      numero: "66",
      titulo: "Tiempo extraordinario",
      categoria: "Jornada de Trabajo",
      contenido: `
        <h3>Artículo 66</h3>
        <p>Podrá también prolongarse la jornada de trabajo por circunstancias extraordinarias, sin exceder nunca de tres horas diarias ni de tres veces en una semana.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Regula las horas extraordinarias estableciendo límites estrictos para proteger al trabajador.</p>
        
        <h3>Límites de horas extra</h3>
        <ul>
          <li><strong>Máximo diario:</strong> 3 horas extras por día</li>
          <li><strong>Máximo semanal:</strong> 3 días con horas extra</li>
          <li><strong>Total semanal:</strong> Máximo 9 horas extras</li>
        </ul>
        
        <h3>Circunstancias extraordinarias</h3>
        <p>Deben ser situaciones excepcionales, no la regla general de trabajo.</p>
        
        <h3>Pago de horas extra</h3>
        <p>Las primeras 9 horas se pagan al 200%, las siguientes al 300% (Art. 67).</p>
      `,
      relacionados: ["Art. 67", "Art. 68", "Art. 58"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    // Vacaciones
    {
      id: "art76",
      numero: "76",
      titulo: "Derecho a vacaciones",
      categoria: "Vacaciones",
      contenido: `
        <h3>Artículo 76</h3>
        <p>Los trabajadores que tengan más de un año de servicios disfrutarán de un período anual de vacaciones pagadas, que en ningún caso podrá ser inferior a seis días laborables, y que aumentará en dos días laborables, hasta llegar a doce, por cada año subsecuente de servicios.</p>
        
        <p>Después del cuarto año, el período de vacaciones aumentará en dos días por cada cinco de servicios.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece el derecho fundamental a vacaciones pagadas para todos los trabajadores.</p>
        
        <h3>Tabla de vacaciones</h3>
        <ul>
          <li><strong>1er año:</strong> 6 días</li>
          <li><strong>2do año:</strong> 8 días</li>
          <li><strong>3er año:</strong> 10 días</li>
          <li><strong>4to año:</strong> 12 días</li>
          <li><strong>5to-9no año:</strong> 14 días</li>
          <li><strong>10mo-14to año:</strong> 16 días</li>
        </ul>
        
        <h3>Requisitos</h3>
        <p>Debe tener más de un año trabajando. Si no cumple el año, tiene derecho a vacaciones proporcionales.</p>
      `,
      relacionados: ["Art. 79", "Art. 80", "Art. 81"],
      vigencia: "Vigente",
      fechaReforma: "2012-11-30"
    },
    {
      id: "art79",
      numero: "79",
      titulo: "Disfrute de vacaciones",
      categoria: "Vacaciones",
      contenido: `
        <h3>Artículo 79</h3>
        <p>Las vacaciones deberán concederse a los trabajadores dentro de los seis meses siguientes al cumplimiento del año de servicios. Los patrones entregarán anualmente a sus trabajadores una constancia que contenga su antigüedad y de acuerdo con ella el período de vacaciones que les corresponda y la fecha en que deberán disfrutarlo.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Regula cuándo y cómo deben otorgarse las vacaciones.</p>
        
        <h3>Plazo para otorgar vacaciones</h3>
        <ul>
          <li><strong>Límite:</strong> Dentro de 6 meses después del aniversario</li>
          <li><strong>Constancia anual:</strong> El patrón debe entregarla</li>
          <li><strong>Información requerida:</strong> Antigüedad, días que corresponden y fechas</li>
        </ul>
        
        <h3>Derechos del trabajador</h3>
        <p>Puede exigir que se respeten los plazos y recibir su constancia anual de vacaciones.</p>
      `,
      relacionados: ["Art. 76", "Art. 80", "Art. 78"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art80",
      numero: "80",
      titulo: "Prima vacacional",
      categoria: "Vacaciones",
      contenido: `
        <h3>Artículo 80</h3>
        <p>Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el período de vacaciones.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece el derecho a recibir un bono adicional al salario de vacaciones.</p>
        
        <h3>Cálculo de la prima vacacional</h3>
        <ul>
          <li><strong>Porcentaje mínimo:</strong> 25% del salario de vacaciones</li>
          <li><strong>Base de cálculo:</strong> Salario que se paga durante las vacaciones</li>
          <li><strong>Ejemplo:</strong> Si ganas $500/día y tienes 6 días de vacaciones: ($500 × 6) + (25% de $3,000) = $3,750</li>
        </ul>
        
        <h3>Pago obligatorio</h3>
        <p>Es un derecho irrenunciable que se debe pagar junto con el salario de vacaciones.</p>
      `,
      relacionados: ["Art. 76", "Art. 79", "Art. 81"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    // Aguinaldo
    {
      id: "art87",
      numero: "87",
      titulo: "Derecho al aguinaldo",
      categoria: "Aguinaldo",
      contenido: `
        <h3>Artículo 87</h3>
        <p>Los trabajadores tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre, equivalente a quince días de salario, por lo menos.</p>
        
        <p>Los que no hayan cumplido el año de servicios, independientemente de que se encuentren laborando o no en la fecha de liquidación del aguinaldo, tendrán derecho a que se les pague la parte proporcional del mismo, conforme al tiempo que hubieren trabajado, cualquiera que fuere éste.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece el derecho al aguinaldo, una prestación fundamental para todos los trabajadores.</p>
        
        <h3>Características del aguinaldo</h3>
        <ul>
          <li><strong>Mínimo legal:</strong> 15 días de salario</li>
          <li><strong>Fecha límite:</strong> 20 de diciembre</li>
          <li><strong>Base de cálculo:</strong> Salario ordinario del trabajador</li>
          <li><strong>Proporcional:</strong> Si no cumples el año, recibes proporcionalmente</li>
        </ul>
        
        <h3>Ejemplos</h3>
        <ul>
          <li><strong>Año completo:</strong> 15 días de salario</li>
          <li><strong>6 meses trabajados:</strong> 7.5 días de salario</li>
          <li><strong>3 meses trabajados:</strong> 3.75 días de salario</li>
        </ul>
      `,
      relacionados: ["Art. 84", "Art. 88", "Art. 76"],
      vigencia: "Vigente",
      fechaReforma: "2012-11-30"
    },
    // Terminación de la Relación Laboral
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
    },
    {
      id: "art50",
      numero: "50",
      titulo: "Indemnización por despido injustificado",
      categoria: "Despido",
      contenido: `
        <h3>Artículo 50</h3>
        <p>Las indemnizaciones a que se refiere el artículo anterior consistirán:</p>
        <ol>
          <li>Si la relación de trabajo fuere por tiempo determinado menor de un año, en una cantidad igual al importe de los salarios de la mitad del tiempo de servicios prestados;</li>
          <li>Si la relación de trabajo fuere por tiempo determinado mayor de un año, en una cantidad igual al importe de los salarios de seis meses por el primer año y de veinte días por cada uno de los años siguientes en que hubiese prestado sus servicios;</li>
          <li>Si la relación de trabajo fuere por tiempo indeterminado, la indemnización consistirá en veinte días de salario por cada uno de los años de servicios prestados;</li>
          <li>Además de las indemnizaciones a que se refieren las fracciones anteriores, en el importe de tres meses de salario y en el de los salarios vencidos desde la fecha del despido hasta que se paguen las indemnizaciones.</li>
        </ol>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Detalla cómo calcular la indemnización cuando el trabajador elige no reinstalarse tras un despido injustificado.</p>
        
        <h3>Tipos de indemnización</h3>
        <ul>
          <li><strong>Tiempo indeterminado:</strong> 20 días por año trabajado</li>
          <li><strong>Tiempo determinado <1 año:</strong> Mitad del tiempo trabajado</li>
          <li><strong>Tiempo determinado >1 año:</strong> 6 meses + 20 días por año adicional</li>
        </ul>
        
        <h3>Adicionales obligatorios</h3>
        <ul>
          <li><strong>3 meses de salario:</strong> Indemnización constitucional</li>
          <li><strong>Salarios vencidos:</strong> Desde el despido hasta el pago</li>
        </ul>
        
        <h3>Ejemplo práctico</h3>
        <p>Trabajador con 3 años, salario $500/día: (20 días × 3 años × $500) + (3 meses × $500 × 30) + salarios vencidos</p>
      `,
      relacionados: ["Art. 48", "Art. 47", "Art. 162"],
      vigencia: "Vigente",
      fechaReforma: "2012-11-30"
    },
    // Artículos adicionales importantes
    {
      id: "art67",
      numero: "67",
      titulo: "Pago de tiempo extraordinario",
      categoria: "Jornada de Trabajo",
      contenido: `
        <h3>Artículo 67</h3>
        <p>Las horas de trabajo a que se refiere el artículo 66, se pagarán con un ciento por ciento más del salario que corresponda a las horas de la jornada.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Establece cómo se debe pagar el tiempo extraordinario: al doble del salario normal.</p>
        
        <h3>Cálculo del pago</h3>
        <ul>
          <li><strong>Primeras 9 horas extras semanales:</strong> Se pagan al 200% (doble)</li>
          <li><strong>Ejemplo:</strong> Si ganas $100/hora normal, las horas extra se pagan a $200/hora</li>
          <li><strong>Base legal:</strong> "Ciento por ciento más" significa el doble</li>
        </ul>
        
        <h3>Límites importantes</h3>
        <p>Solo aplica a las primeras 9 horas extra semanales. Las excedentes se pagan al triple según el artículo 68.</p>
      `,
      relacionados: ["Art. 66", "Art. 68", "Art. 58"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art68",
      numero: "68",
      titulo: "Pago de tiempo extraordinario excedente",
      categoria: "Jornada de Trabajo",
      contenido: `
        <h3>Artículo 68</h3>
        <p>El trabajo que exceda de nueve horas a la semana, obligará al patrón a pagar al trabajador el tiempo excedente con un doscientos por ciento más del salario que corresponda a las horas de la jornada.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Regula el pago cuando se exceden las 9 horas extras semanales permitidas.</p>
        
        <h3>Pago extraordinario</h3>
        <ul>
          <li><strong>Horas 1-9 extra:</strong> Al 200% (doble)</li>
          <li><strong>Horas 10+ extra:</strong> Al 300% (triple)</li>
          <li><strong>Ejemplo:</strong> Si ganas $100/hora, de la hora 10 en adelante ganas $300/hora</li>
        </ul>
        
        <h3>Protección al trabajador</h3>
        <p>El alto costo busca desincentivar el abuso de horas extras y proteger la salud del trabajador.</p>
      `,
      relacionados: ["Art. 66", "Art. 67", "Art. 58"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
    },
    {
      id: "art81",
      numero: "81",
      titulo: "Fijación de período de vacaciones",
      categoria: "Vacaciones",
      contenido: `
        <h3>Artículo 81</h3>
        <p>Las vacaciones deberán concederse a los trabajadores dentro de los seis meses siguientes al cumplimiento del año de servicios. Los patrones entregarán anualmente a sus trabajadores una constancia que contenga su antigüedad y de acuerdo con ella el período de vacaciones que les corresponda y la fecha en que deberán disfrutarlo.</p>
      `,
      explicacion: `
        <h3>Explicación práctica</h3>
        <p>Complementa el artículo 79 estableciendo la obligación patronal de programar las vacaciones.</p>
        
        <h3>Obligaciones del patrón</h3>
        <ul>
          <li><strong>Constancia anual:</strong> Documento con antigüedad y días de vacaciones</li>
          <li><strong>Fechas definidas:</strong> Debe indicar cuándo se tomarán</li>
          <li><strong>Plazo máximo:</strong> 6 meses después del aniversario laboral</li>
        </ul>
        
        <h3>Derechos del trabajador</h3>
        <p>Puede exigir la constancia y el respeto a las fechas programadas para sus vacaciones.</p>
      `,
      relacionados: ["Art. 76", "Art. 79", "Art. 80"],
      vigencia: "Vigente",
      fechaReforma: "1970-05-01"
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
    const url = "https://www.dof.gob.mx/";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
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
                <SafeHtml 
                  html={articulo.contenido}
                  className="prose prose-sm max-w-none dark:prose-invert"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Explicación y análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <SafeHtml 
                  html={articulo.explicacion}
                  className="prose prose-sm max-w-none dark:prose-invert"
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