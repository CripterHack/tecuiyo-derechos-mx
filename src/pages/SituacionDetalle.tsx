import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Scale, FileText, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SafeHtml } from "@/utils/sanitizer";

const SituacionDetalle = () => {
  const { id } = useParams();

  const situacionesLaborales = [
    {
      id: "1",
      titulo: "Me despidieron sin justificación",
      descripcion: "Terminación de la relación laboral sin causa justificada por parte del empleador.",
      contenidoCompleto: `
        <h3>¿Qué es el despido injustificado?</h3>
        <p>El despido injustificado ocurre cuando el empleador termina la relación laboral sin invocar alguna de las causas establecidas en el artículo 47 de la Ley Federal del Trabajo, o cuando las causas invocadas no están debidamente comprobadas.</p>
        
        <h3>Derechos del trabajador según Art. 48 LFT</h3>
        <p>El trabajador despedido injustificadamente tiene derecho a elegir entre:</p>
        <ul>
          <li><strong>Reinstalación:</strong> Volver a su puesto con pago de salarios vencidos</li>
          <li><strong>Indemnización:</strong> 3 meses de salario + 20 días por año trabajado + salarios vencidos</li>
        </ul>
        
        <h3>Prestaciones adicionales</h3>
        <ul>
          <li>Vacaciones proporcionales y prima vacacional (25%)</li>
          <li>Aguinaldo proporcional</li>
          <li>Prima de antigüedad (12 días por año trabajado)</li>
        </ul>
        
        <h3>Procedimiento recomendado</h3>
        <ol>
          <li>Conservar todos los documentos laborales (contrato, recibos de pago, credencial)</li>
          <li>Solicitar por escrito la causa del despido</li>
          <li>Presentar demanda ante el Centro de Conciliación Laboral</li>
          <li>Acudir con abogado laboralista especializado</li>
        </ol>
      `,
      articulosLFT: ["Art. 47", "Art. 48", "Art. 50"],
      tiempoResolucion: "6-12 meses",
      complejidad: "Media",
      tags: ["despido", "indemnización", "salarios", "demanda"]
    },
    {
      id: "2", 
      titulo: "No me pagan horas extra",
      descripcion: "Tiempo de trabajo que excede la jornada ordinaria sin compensación económica.",
      contenidoCompleto: `
        <h3>¿Qué son las horas extras según la LFT?</h3>
        <p>Según el artículo 66, las horas extras son el tiempo que excede la jornada ordinaria de 8 horas diarias o 48 semanales. Su pago es obligatorio y no puede renunciarse.</p>
        
        <h3>Límites legales (Art. 66)</h3>
        <ul>
          <li>Máximo 3 horas extras por día</li>
          <li>Máximo 3 veces por semana</li>
          <li>Total máximo: 9 horas extras semanales</li>
          <li>Exceder estos límites constituye trabajo forzoso</li>
        </ul>
        
        <h3>Pago de horas extras (Art. 67-68)</h3>
        <ul>
          <li><strong>Primeras 9 horas semanales:</strong> 200% del salario ordinario</li>
          <li><strong>Excedentes de 9 horas:</strong> 300% del salario ordinario</li>
          <li><strong>Días de descanso:</strong> 200% adicional sobre el salario</li>
        </ul>
        
        <h3>¿Cómo reclamarlas?</h3>
        <ol>
          <li>Documentar las horas trabajadas (bitácora, correos, testigos)</li>
          <li>Solicitar por escrito el pago pendiente</li>
          <li>Conservar evidencia del requerimiento</li>
          <li>Demandar ante autoridades laborales si hay negativa</li>
        </ol>
        
        <h3>Prescripción</h3>
        <p>El derecho a reclamar horas extras prescribe en un año contado desde que debieron pagarse.</p>
      `,
      articulosLFT: ["Art. 61", "Art. 66", "Art. 67", "Art. 68"],
      tiempoResolucion: "3-6 meses",
      complejidad: "Baja",
      tags: ["horas extras", "jornada", "salario", "pago"]
    },
    {
      id: "3",
      titulo: "No me dieron aguinaldo completo",
      descripcion: "Falta de pago o pago incompleto del aguinaldo anual obligatorio.",
      contenidoCompleto: `
        <h3>¿Qué es el aguinaldo? (Art. 87 LFT)</h3>
        <p>El aguinaldo es una prestación obligatoria equivalente a 15 días de salario que debe pagarse antes del 20 de diciembre de cada año.</p>
        
        <h3>¿Quién tiene derecho?</h3>
        <ul>
          <li>Todos los trabajadores que hayan laborado por lo menos un día en el año</li>
          <li>Trabajadores de confianza y de base</li>
          <li>Trabajadores eventuales y temporales</li>
          <li>Trabajadores que renunciaron o fueron despedidos</li>
        </ul>
        
        <h3>Cálculo del aguinaldo</h3>
        <ul>
          <li><strong>Año completo:</strong> 15 días de salario</li>
          <li><strong>Tiempo parcial:</strong> Proporcional a los días trabajados</li>
          <li><strong>Fórmula:</strong> (Días trabajados × 15) ÷ 365 × salario diario</li>
        </ul>
        
        <h3>Salario base para cálculo</h3>
        <p>Se considera el salario ordinario más:</p>
        <ul>
          <li>Comisiones regulares</li>
          <li>Prestaciones en dinero</li>
          <li>Habitación y alimentación (si aplica)</li>
        </ul>
        
        <h3>¿Qué hacer si no lo pagan?</h3>
        <ol>
          <li>Solicitar por escrito el pago pendiente</li>
          <li>Calcular el monto exacto adeudado</li>
          <li>Presentar reclamación ante autoridades laborales</li>
          <li>El patrón debe pagar multa adicional del 50% al 100%</li>
        </ol>
      `,
      articulosLFT: ["Art. 87"],
      tiempoResolucion: "2-4 meses",
      complejidad: "Baja",
      tags: ["aguinaldo", "prestaciones", "pago", "diciembre"]
    },
    {
      id: "4",
      titulo: "Problemas con mis vacaciones",
      descripcion: "Negativa o incorrecta aplicación de los derechos vacacionales y prima vacacional.",
      contenidoCompleto: `
        <h3>Derecho a vacaciones (Art. 76 LFT)</h3>
        <p>Todo trabajador tiene derecho a vacaciones pagadas después de cumplir un año de servicio.</p>
        
        <h3>Tabla de vacaciones (Art. 76)</h3>
        <ul>
          <li><strong>1er año:</strong> 6 días hábiles</li>
          <li><strong>2do año:</strong> 8 días hábiles</li>
          <li><strong>3er año:</strong> 10 días hábiles</li>
          <li><strong>4to año:</strong> 12 días hábiles</li>
          <li><strong>5to año en adelante:</strong> 2 días adicionales por cada 5 años</li>
        </ul>
        
        <h3>Prima vacacional (Art. 80)</h3>
        <ul>
          <li>25% adicional sobre el salario de los días de vacaciones</li>
          <li>Se paga junto con las vacaciones</li>
          <li>No puede ser menor al 25% constitucional</li>
        </ul>
        
        <h3>Características importantes</h3>
        <ul>
          <li>Las vacaciones son <strong>irrenunciables</strong></li>
          <li>No pueden compensarse con dinero (excepto al terminar la relación)</li>
          <li>Deben disfrutarse en días continuos</li>
          <li>El trabajador puede elegir la época (si no hay convenio)</li>
        </ul>
        
        <h3>Vacaciones proporcionales</h3>
        <p>Al terminar la relación laboral:</p>
        <ul>
          <li>Se pagan días proporcionales al tiempo trabajado</li>
          <li>Prima vacacional proporcional del 25%</li>
          <li>Fórmula: (Días trabajados × días de vacaciones correspondientes) ÷ 365</li>
        </ul>
        
        <h3>¿Cómo reclamar?</h3>
        <ol>
          <li>Solicitar por escrito las vacaciones pendientes</li>
          <li>Documentar los años de servicio</li>
          <li>Calcular días y prima adeudados</li>
          <li>Demandar si hay negativa del patrón</li>
        </ol>
      `,
      articulosLFT: ["Art. 76", "Art. 78", "Art. 79", "Art. 80", "Art. 81"],
      tiempoResolucion: "3-5 meses",
      complejidad: "Baja",
      tags: ["vacaciones", "prima vacacional", "descanso", "proporcional"]
    },
    {
      id: "5",
      titulo: "Acoso laboral o mobbing",
      descripcion: "Hostigamiento, acoso sexual o violencia laboral en el centro de trabajo.",
      contenidoCompleto: `
        <h3>¿Qué es el acoso laboral?</h3>
        <p>Es una conducta abusiva, de naturaleza psicológica, que atenta contra la dignidad e integridad psíquica o física de una persona, que puede generar un ambiente de trabajo hostil.</p>
        
        <h3>Tipos de acoso laboral</h3>
        <ul>
          <li><strong>Acoso psicológico (mobbing):</strong> Humillaciones, aislamiento, sobrecarga de trabajo</li>
          <li><strong>Acoso sexual:</strong> Conductas de naturaleza sexual no deseadas</li>
          <li><strong>Violencia laboral:</strong> Agresiones físicas o amenazas</li>
          <li><strong>Discriminación:</strong> Trato diferenciado por género, edad, religión, etc.</li>
        </ul>
        
        <h3>Obligaciones del patrón (Art. 132)</h3>
        <ul>
          <li>Mantener un ambiente libre de violencia laboral</li>
          <li>Implementar protocolos de prevención</li>
          <li>Investigar denuncias de acoso</li>
          <li>Aplicar medidas disciplinarias a responsables</li>
          <li>Capacitar al personal sobre prevención</li>
        </ul>
        
        <h3>Derechos del trabajador</h3>
        <ul>
          <li>Ambiente laboral libre de violencia</li>
          <li>Denunciar sin represalias</li>
          <li>Recibir atención médica y psicológica</li>
          <li>Rescindir relación laboral con responsabilidad patronal</li>
        </ul>
        
        <h3>¿Cómo actuar ante acoso?</h3>
        <ol>
          <li>Documentar todos los incidentes (fechas, testigos, evidencias)</li>
          <li>Reportar formalmente ante recursos humanos</li>
          <li>Presentar denuncia ante autoridades laborales</li>
          <li>Buscar atención médica/psicológica</li>
          <li>Considerar denuncia penal si aplica</li>
        </ol>
        
        <h3>Instancias de denuncia</h3>
        <ul>
          <li>Procuraduría Federal de la Defensa del Trabajo (PROFEDET)</li>
          <li>Consejo Nacional para Prevenir la Discriminación (CONAPRED)</li>
          <li>Comisión Nacional de Derechos Humanos (CNDH)</li>
          <li>Centro de Conciliación Laboral</li>
        </ul>
      `,
      articulosLFT: ["Art. 2", "Art. 3bis", "Art. 51", "Art. 132"],
      tiempoResolucion: "4-8 meses",
      complejidad: "Alta",
      tags: ["acoso", "hostigamiento", "ambiente laboral", "discriminación"]
    },
    {
      id: "6",
      titulo: "No me dieron finiquito al renunciar",
      descripcion: "Falta de pago de prestaciones al terminar voluntariamente la relación laboral.",
      contenidoCompleto: `
        <h3>¿Qué es el finiquito?</h3>
        <p>Es el pago de todas las prestaciones pendientes cuando termina la relación laboral, ya sea por renuncia, despido o mutuo consentimiento.</p>
        
        <h3>¿Qué debe incluir el finiquito?</h3>
        <ul>
          <li><strong>Salarios devengados:</strong> Días trabajados no pagados</li>
          <li><strong>Vacaciones proporcionales:</strong> Días de vacaciones no disfrutados</li>
          <li><strong>Prima vacacional:</strong> 25% sobre vacaciones proporcionales</li>
          <li><strong>Aguinaldo proporcional:</strong> Parte proporcional del año</li>
          <li><strong>Prima de antigüedad:</strong> 12 días por año trabajado (si aplica)</li>
        </ul>
        
        <h3>Prima de antigüedad (Art. 162)</h3>
        <p>Tienen derecho trabajadores que:</p>
        <ul>
          <li>Cumplieron 15 años de servicio</li>
          <li>Fueron despedidos injustificadamente</li>
          <li>Se retiran por incapacidad</li>
          <li>Trabajadoras que se retiran por matrimonio o embarazo</li>
        </ul>
        
        <h3>Cálculo de prestaciones proporcionales</h3>
        <ul>
          <li><strong>Vacaciones:</strong> (Días trabajados en el año × días que corresponden) ÷ 365</li>
          <li><strong>Aguinaldo:</strong> (Días trabajados en el año × 15) ÷ 365</li>
          <li><strong>Prima vacacional:</strong> Vacaciones proporcionales × 0.25</li>
        </ul>
        
        <h3>¿Renuncia o despido encubierto?</h3>
        <p>Cuidado con:</p>
        <ul>
          <li>Presión para firmar renuncia</li>
          <li>Amenazas de despido "con causa"</li>
          <li>Cambios unilaterales de condiciones</li>
          <li>Reducción de salario o responsabilidades</li>
        </ul>
        
        <h3>¿Qué hacer si no pagan finiquito?</h3>
        <ol>
          <li>Solicitar por escrito las prestaciones pendientes</li>
          <li>Calcular montos exactos adeudados</li>
          <li>Conservar copia de la renuncia y documentos</li>
          <li>Demandar ante autoridades laborales</li>
        </ol>
      `,
      articulosLFT: ["Art. 76", "Art. 80", "Art. 87", "Art. 162"],
      tiempoResolucion: "2-5 meses",
      complejidad: "Media",
      tags: ["finiquito", "renuncia", "liquidación", "prestaciones"]
    },
    {
      id: "7",
      titulo: "Trabajo sin contrato escrito",
      descripcion: "Prestación de servicios sin formalización por escrito de la relación laboral.",
      contenidoCompleto: `
        <h3>¿Es válido trabajar sin contrato escrito?</h3>
        <p>Sí. Según el artículo 21 de la LFT, la relación laboral puede ser verbal o escrita. La falta de contrato escrito no invalida la relación de trabajo.</p>
        
        <h3>Presunción de condiciones (Art. 28)</h3>
        <p>Si no hay contrato escrito, se presume:</p>
        <ul>
          <li>Relación por tiempo indeterminado</li>
          <li>Prestación de servicios en el lugar donde se ejecute el trabajo</li>
          <li>Jornada de 8 horas diarias</li>
          <li>Salario el que se demuestre o el del puesto similar</li>
        </ul>
        
        <h3>Responsabilidad del patrón (Art. 25)</h3>
        <ul>
          <li><strong>Obligación:</strong> Entregar contrato escrito dentro de los primeros 30 días</li>
          <li><strong>Contenido mínimo:</strong> Nombre, nacionalidad, edad, sexo, estado civil y domicilio</li>
          <li><strong>Condiciones:</strong> Salario, jornada, lugar de trabajo, duración</li>
          <li><strong>Sanción:</strong> Multa de 250 a 5000 veces la UMA</li>
        </ul>
        
        <h3>¿Cómo probar la relación laboral?</h3>
        <ul>
          <li><strong>Testigos:</strong> Compañeros de trabajo</li>
          <li><strong>Documentos:</strong> Nóminas, recibos, credenciales</li>
          <li><strong>Comunicaciones:</strong> Correos, mensajes, órdenes de trabajo</li>
          <li><strong>Uniformes:</strong> Ropa de trabajo con logo de empresa</li>
          <li><strong>Horarios:</strong> Registros de entrada y salida</li>
        </ul>
        
        <h3>Ventajas del trabajador</h3>
        <ul>
          <li>Se presumen las condiciones más favorables</li>
          <li>Carga de prueba al patrón para demostrar lo contrario</li>
          <li>Derecho a todas las prestaciones de ley</li>
          <li>Protección contra despido injustificado</li>
        </ul>
        
        <h3>¿Qué hacer?</h3>
        <ol>
          <li>Exigir por escrito la entrega del contrato</li>
          <li>Documentar todas las condiciones de trabajo</li>
          <li>Conservar evidencias de la relación laboral</li>
          <li>Conocer sus derechos y prestaciones</li>
        </ol>
      `,
      articulosLFT: ["Art. 21", "Art. 24", "Art. 25", "Art. 26", "Art. 28"],
      tiempoResolucion: "1-3 meses",
      complejidad: "Baja",
      tags: ["contrato", "verbal", "escrito", "derechos"]
    },
    {
      id: "8",
      titulo: "Me redujo el salario unilateralmente",
      descripcion: "Disminución del salario sin consentimiento del trabajador.",
      contenidoCompleto: `
        <h3>Prohibición de reducir salario (Art. 56)</h3>
        <p>El salario no puede ser disminuido unilateralmente por el patrón. Cualquier reducción requiere consentimiento expreso del trabajador.</p>
        
        <h3>¿Cuándo es causa de rescisión? (Art. 51)</h3>
        <p>El trabajador puede rescindir la relación laboral con responsabilidad patronal cuando:</p>
        <ul>
          <li>Se reduzca el salario</li>
          <li>Se modifiquen las condiciones de trabajo en perjuicio del trabajador</li>
          <li>No se cumplan las obligaciones del contrato</li>
        </ul>
        
        <h3>Formas encubiertas de reducción</h3>
        <ul>
          <li><strong>Eliminación de comisiones:</strong> Sin justificación</li>
          <li><strong>Reducción de horas:</strong> Cambio de tiempo completo a parcial</li>
          <li><strong>Suspensión de bonos:</strong> Que formaban parte del salario</li>
          <li><strong>Cambio de puesto:</strong> A uno con menor salario</li>
        </ul>
        
        <h3>Salario integrado (Art. 84)</h3>
        <p>Incluye:</p>
        <ul>
          <li>Cuota fija</li>
          <li>Comisiones regulares</li>
          <li>Prestaciones en dinero</li>
          <li>Cualquier cantidad que se entregue regularmente</li>
        </ul>
        
        <h3>Derechos del trabajador</h3>
        <ul>
          <li><strong>Rescisión con responsabilidad patronal:</strong> Indemnización completa</li>
          <li><strong>Reinstalación:</strong> Con salario original</li>
          <li><strong>Salarios vencidos:</strong> Desde la reducción hasta la resolución</li>
        </ul>
        
        <h3>¿Qué hacer inmediatamente?</h3>
        <ol>
          <li>Documentar la reducción salarial (recibos anteriores vs actuales)</li>
          <li>Manifestar por escrito la inconformidad</li>
          <li>Solicitar la restitución del salario original</li>
          <li>Conservar evidencias de comunicaciones</li>
          <li>Evaluar si continuar laborando o rescindir</li>
        </ol>
        
        <h3>Estrategias legales</h3>
        <ul>
          <li>Demandar reinstalación de salario</li>
          <li>Rescisión laboral con responsabilidad patronal</li>
          <li>Pago de diferencias salariales</li>
          <li>Daño moral si aplica</li>
        </ul>
      `,
      articulosLFT: ["Art. 51", "Art. 56", "Art. 84"],
      tiempoResolucion: "4-8 meses",
      complejidad: "Media",
      tags: ["reducción", "salario", "rescisión", "modificación"]
    },
    {
      id: "9",
      titulo: "No me dan prima dominical",
      descripcion: "Falta de pago del 25% adicional por trabajar en domingo.",
      contenidoCompleto: `
        <h3>Prima dominical obligatoria (Art. 71)</h3>
        <p>Los trabajadores que presten servicios en domingo tienen derecho a una prima adicional del 25% sobre el salario de los días ordinarios de trabajo.</p>
        
        <h3>¿Cuándo aplica?</h3>
        <ul>
          <li>Trabajo en día domingo</li>
          <li>Sin importar si es día de descanso semanal o no</li>
          <li>Aplica para jornadas completas o parciales</li>
          <li>Es adicional al día de descanso semanal</li>
        </ul>
        
        <h3>Cálculo de la prima</h3>
        <ul>
          <li><strong>Salario domingo:</strong> Salario ordinario + 25%</li>
          <li><strong>Ejemplo:</strong> Salario diario $300 = $300 + $75 (25%) = $375</li>
          <li><strong>Base de cálculo:</strong> Salario diario integrado</li>
        </ul>
        
        <h3>Descanso semanal (Art. 69)</h3>
        <p>Todo trabajador tiene derecho a:</p>
        <ul>
          <li>Un día de descanso con goce de salario por cada 6 días de trabajo</li>
          <li>Preferentemente en domingo</li>
          <li>Si trabaja su día de descanso: pago al doble</li>
        </ul>
        
        <h3>Diferencia entre prima dominical y día de descanso</h3>
        <ul>
          <li><strong>Prima dominical:</strong> 25% adicional por trabajar domingo</li>
          <li><strong>Día de descanso:</strong> 200% si el domingo es su día de descanso</li>
          <li><strong>Pueden coincidir:</strong> Si domingo es día de descanso = 200% + 25%</li>
        </ul>
        
        <h3>Trabajadores con derecho</h3>
        <ul>
          <li>Todos los trabajadores que laboren domingos</li>
          <li>Trabajadores de comercio, servicios, industria</li>
          <li>Personal de seguridad, salud, turismo</li>
          <li>No importa el tipo de contrato</li>
        </ul>
        
        <h3>¿Cómo reclamar?</h3>
        <ol>
          <li>Identificar todos los domingos trabajados</li>
          <li>Calcular prima adeudada (25% por cada domingo)</li>
          <li>Solicitar pago por escrito</li>
          <li>Documentar horarios y días laborados</li>
          <li>Demandar si hay negativa patronal</li>
        </ol>
      `,
      articulosLFT: ["Art. 69", "Art. 71", "Art. 73"],
      tiempoResolucion: "2-4 meses",
      complejidad: "Baja",
      tags: ["prima dominical", "domingo", "descanso", "25%"]
    },
    {
      id: "10",
      titulo: "Despido por embarazo",
      descripcion: "Terminación de la relación laboral por motivo de embarazo o maternidad.",
      contenidoCompleto: `
        <h3>Protección constitucional y legal</h3>
        <p>El despido por embarazo está prohibido por la Constitución (Art. 123), la LFT y tratados internacionales. Es una forma de discriminación grave.</p>
        
        <h3>Derechos de la trabajadora embarazada (Art. 170)</h3>
        <ul>
          <li>No ser despedida por razón de embarazo</li>
          <li>Descanso pre y post natal (6 semanas antes y 6 después)</li>
          <li>Lactancia: 2 reposos de 30 minutos por 6 meses</li>
          <li>Regreso al mismo puesto</li>
          <li>Atención médica durante embarazo y parto</li>
        </ul>
        
        <h3>Presunción de despido discriminatorio</h3>
        <p>Se presume discriminatorio el despido cuando:</p>
        <ul>
          <li>Ocurre durante el embarazo</li>
          <li>En el período de incapacidad pre/post natal</li>
          <li>En período de lactancia</li>
          <li>Por solicitar permisos médicos</li>
        </ul>
        
        <h3>Consecuencias para el patrón</h3>
        <ul>
          <li><strong>Indemnización agravada:</strong> 6 meses de salario</li>
          <li><strong>Salarios vencidos:</strong> Desde el despido hasta el laudo</li>
          <li><strong>Prestaciones:</strong> Vacaciones, aguinaldo, prima de antigüedad</li>
          <li><strong>Reinstalación:</strong> Si se solicita</li>
          <li><strong>Daño moral:</strong> Hasta 5 años de salario</li>
        </ul>
        
        <h3>Prueba del embarazo</h3>
        <ul>
          <li>Certificado médico oficial</li>
          <li>Análisis clínicos</li>
          <li>Expediente del IMSS/ISSSTE</li>
          <li>Constancia de gravidez</li>
        </ul>
        
        <h3>¿Estoy obligada a informar el embarazo?</h3>
        <p>No hay obligación legal de informar, pero es recomendable para:</p>
        <ul>
          <li>Gozar de protecciones especiales</li>
          <li>Evitar trabajos peligrosos</li>
          <li>Solicitar permisos médicos</li>
          <li>Planear incapacidades</li>
        </ul>
        
        <h3>Acciones inmediatas</h3>
        <ol>
          <li>Documentar el embarazo médicamente</li>
          <li>Notificar formalmente al patrón</li>
          <li>Conservar evidencias del despido</li>
          <li>Demandar de inmediato</li>
          <li>Buscar asesoría legal especializada</li>
        </ol>
      `,
      articulosLFT: ["Art. 51", "Art. 170", "Art. 171", "Art. 172"],
      tiempoResolucion: "6-12 meses",
      complejidad: "Alta",
      tags: ["embarazo", "discriminación", "maternidad", "despido"]
    },
    {
      id: "11",
      titulo: "No me dieron incapacidad por enfermedad",
      descripcion: "Negativa del patrón a otorgar o reconocer incapacidad por enfermedad laboral.",
      contenidoCompleto: `
        <h3>Derecho a incapacidades (Art. 478-480)</h3>
        <p>Todo trabajador tiene derecho a incapacidades médicas por enfermedades o accidentes, ya sean de trabajo o generales.</p>
        
        <h3>Tipos de incapacidades</h3>
        <ul>
          <li><strong>Enfermedad general:</strong> No relacionada con el trabajo</li>
          <li><strong>Accidente de trabajo:</strong> Durante o por causa del trabajo</li>
          <li><strong>Enfermedad profesional:</strong> Causada por la actividad laboral</li>
          <li><strong>Maternidad:</strong> Pre y post natal</li>
        </ul>
        
        <h3>Obligaciones del patrón (Art. 132)</h3>
        <ul>
          <li>Proporcionar medicamentos y atención médica</li>
          <li>Pagar salario durante la incapacidad</li>
          <li>Conservar el puesto hasta por un año</li>
          <li>No despedir por causa de enfermedad</li>
          <li>Readaptar al trabajador si es necesario</li>
        </ul>
        
        <h3>Duración de incapacidades</h3>
        <ul>
          <li><strong>Enfermedades generales:</strong> Hasta 52 semanas (IMSS)</li>
          <li><strong>Accidentes de trabajo:</strong> Tiempo necesario para curación</li>
          <li><strong>Enfermedades profesionales:</strong> Tiempo que requiera tratamiento</li>
          <li><strong>Conservación del empleo:</strong> Hasta un año</li>
        </ul>
        
        <h3>Pago durante incapacidad</h3>
        <ul>
          <li><strong>Primeros 3 días:</strong> Patrón paga 100% (enfermedad general)</li>
          <li><strong>Del 4to día en adelante:</strong> IMSS paga 60%</li>
          <li><strong>Accidente de trabajo:</strong> 100% desde el primer día</li>
          <li><strong>Convenios adicionales:</strong> Puede mejorarse la prestación</li>
        </ul>
        
        <h3>¿Qué hacer si niegan incapacidad?</h3>
        <ol>
          <li>Acudir al médico del IMSS o institución correspondiente</li>
          <li>Solicitar certificado médico detallado</li>
          <li>Entregar formalmente al patrón</li>
          <li>Documentar la negativa por escrito</li>
          <li>Presentar queja ante la Procuraduría del Trabajo</li>
        </ol>
        
        <h3>Protección contra despido</h3>
        <ul>
          <li>Prohibido despedir por enfermedad</li>
          <li>Si ocurre: despido nulo</li>
          <li>Derecho a reinstalación</li>
          <li>Pago de salarios vencidos</li>
        </ul>
      `,
      articulosLFT: ["Art. 132", "Art. 478", "Art. 479", "Art. 480"],
      tiempoResolucion: "3-6 meses",
      complejidad: "Media",
      tags: ["incapacidad", "enfermedad", "IMSS", "médico"]
    },
    {
      id: "12",
      titulo: "Trabajador subcontratado (outsourcing)",
      descripcion: "Problemas relacionados con la subcontratación laboral y derechos del trabajador.",
      contenidoCompleto: `
        <h3>Nueva regulación del outsourcing (2021)</h3>
        <p>La reforma de 2021 prohíbe la subcontratación de personal y establece nuevas reglas para la subcontratación de servicios especializados.</p>
        
        <h3>¿Qué está prohibido?</h3>
        <ul>
          <li>Subcontratación del objeto principal del negocio</li>
          <li>Triangulación laboral para evadir responsabilidades</li>
          <li>Intermediación laboral</li>
          <li>Evasión de prestaciones y derechos</li>
        </ul>
        
        <h3>¿Qué sí está permitido? (Art. 15-A a 15-D)</h3>
        <ul>
          <li><strong>Servicios especializados:</strong> No parte del objeto principal</li>
          <li><strong>Requisitos:</strong> Registro ante STPS, no constituir objeto principal</li>
          <li><strong>Ejemplos válidos:</strong> Limpieza, vigilancia, sistemas, contabilidad</li>
        </ul>
        
        <h3>Derechos del trabajador subcontratado</h3>
        <ul>
          <li>Mismos derechos que trabajadores directos</li>
          <li>Igual salario por trabajo igual</li>
          <li>Prestaciones equivalentes</li>
          <li>Estabilidad en el empleo</li>
        </ul>
        
        <h3>Responsabilidad solidaria</h3>
        <ul>
          <li><strong>Empresa beneficiaria:</strong> Responsable solidaria de obligaciones</li>
          <li><strong>Contratista:</strong> Responsable principal</li>
          <li><strong>Trabajador puede demandar:</strong> A cualquiera de las dos o ambas</li>
        </ul>
        
        <h3>¿Cómo identificar outsourcing ilegal?</h3>
        <ul>
          <li>Trabajas para empresa A pero te paga empresa B</li>
          <li>La contratista no tiene registro STPS</li>
          <li>Realizas actividades principales del negocio</li>
          <li>Menores prestaciones que trabajadores directos</li>
        </ul>
        
        <h3>¿Qué hacer?</h3>
        <ol>
          <li>Verificar registro de la contratista ante STPS</li>
          <li>Documentar actividades realizadas</li>
          <li>Comparar prestaciones con trabajadores directos</li>
          <li>Demandar a empresa beneficiaria si hay violaciones</li>
          <li>Solicitar conversión a empleado directo</li>
        </ol>
        
        <h3>Consecuencias del outsourcing ilegal</h3>
        <ul>
          <li>Multas a las empresas (hasta 5,000 UMA)</li>
          <li>Responsabilidad solidaria</li>
          <li>Conversión automática a relación directa</li>
          <li>Pago de diferencias en prestaciones</li>
        </ul>
      `,
      articulosLFT: ["Art. 13", "Art. 15-A", "Art. 15-B", "Art. 15-C", "Art. 15-D"],
      tiempoResolucion: "4-8 meses",
      complejidad: "Alta",
      tags: ["outsourcing", "subcontratación", "solidaria", "registro"]
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
                <SafeHtml 
                  html={situacion.contenidoCompleto}
                  className="prose prose-sm max-w-none dark:prose-invert"
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