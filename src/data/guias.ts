export interface PasoDetallado {
  numero: number;
  titulo: string;
  descripcion: string;
  completado?: boolean;
  tiempo?: string;
  documentos?: string[];
  tips?: string[];
}

export interface Guia {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  pasos: number;
  dificultad: "Básico" | "Intermedio" | "Avanzado";
  categoria: string;
  articulosLFT: string[];
  completado: boolean;
  contenido: string[];
  contenidoCompleto: string;
  pasoDetallado: PasoDetallado[];
  progreso?: number;
}

export const guiasPrincipales: Guia[] = [
  {
    id: "1",
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
    ],
    contenidoCompleto: `
      <h2>Introducción</h2>
      <p>El despido injustificado es la terminación de la relación laboral sin causa justificada o sin seguir el procedimiento legal correspondiente. Cuando esto sucede, tienes derechos específicos que la ley te protege.</p>
      
      <h2>¿Qué constituye un despido injustificado?</h2>
      <p>Un despido es injustificado cuando:</p>
      <ul>
        <li>No se invoca ninguna causa del artículo 47 de la LFT</li>
        <li>Las causas invocadas no están comprobadas</li>
        <li>No se siguió el procedimiento legal correcto</li>
        <li>Se realizó por motivos discriminatorios</li>
      </ul>
      
      <h2>Tus derechos en caso de despido injustificado</h2>
      <p>La ley te otorga dos opciones principales:</p>
      <ol>
        <li><strong>Reinstalación:</strong> Regresar a tu trabajo con el pago de salarios caídos</li>
        <li><strong>Indemnización:</strong> Recibir una compensación económica</li>
      </ol>
      
      <h2>Cálculo de la indemnización</h2>
      <p>Si optas por la indemnización, tienes derecho a:</p>
      <ul>
        <li>3 meses de salario (indemnización constitucional)</li>
        <li>20 días de salario por cada año trabajado</li>
        <li>Salarios vencidos desde el despido hasta que se dicte laudo</li>
        <li>Prima de antigüedad (si tienes más de 15 años)</li>
        <li>Prestaciones pendientes (vacaciones, aguinaldo, etc.)</li>
      </ul>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Identifica si tu despido fue justificado",
        descripcion: "Verifica si el motivo del despido está contemplado en el artículo 47 de la LFT",
        tiempo: "5 min",
        documentos: ["Carta de despido", "Reglamento interno"],
        tips: ["Si no te dieron carta de despido, el despido es injustificado", "Revisa si siguieron el procedimiento correcto"]
      },
      {
        numero: 2,
        titulo: "Decide entre reinstalación e indemnización",
        descripcion: "Evalúa cuál opción te conviene más según tu situación personal",
        tiempo: "10 min",
        tips: ["La reinstalación incluye salarios caídos", "La indemnización te permite buscar nuevo empleo"]
      },
      {
        numero: 3,
        titulo: "Calcula tu indemnización",
        descripcion: "Determina el monto exacto que te corresponde según la ley",
        tiempo: "15 min",
        documentos: ["Recibos de nómina", "Contrato de trabajo"],
        tips: ["Usa nuestra calculadora laboral", "Incluye todas las prestaciones pendientes"]
      },
      {
        numero: 4,
        titulo: "Reúne la documentación necesaria",
        descripcion: "Compila todos los documentos que comprueben tu relación laboral",
        tiempo: "30 min",
        documentos: ["Contrato", "Recibos de nómina", "Comprobantes de prestaciones", "Carta de despido"],
        tips: ["Haz copias de todo", "Organiza cronológicamente"]
      },
      {
        numero: 5,
        titulo: "Presenta tu demanda ante la autoridad",
        descripcion: "Acude al Centro de Conciliación Laboral o Junta de Conciliación",
        tiempo: "1-2 horas",
        documentos: ["Demanda laboral", "Documentos de soporte", "Identificación"],
        tips: ["Tienes 1 año para demandar", "Busca asesoría gratuita"]
      },
      {
        numero: 6,
        titulo: "Participa en el proceso de conciliación",
        descripcion: "Asiste a la audiencia de conciliación para intentar llegar a un acuerdo",
        tiempo: "2-3 horas",
        tips: ["Lleva un representante si es necesario", "Considera ofertas razonables"]
      },
      {
        numero: 7,
        titulo: "Sigue el juicio laboral si es necesario",
        descripcion: "Si no hay acuerdo en conciliación, continúa con el proceso judicial",
        tiempo: "Varios meses",
        tips: ["Mantén comunicación con tu abogado", "Asiste a todas las audiencias"]
      },
      {
        numero: 8,
        titulo: "Ejecuta el laudo o acuerdo",
        descripcion: "Una vez que tengas resolución favorable, procede a cobrar",
        tiempo: "Variable",
        tips: ["Revisa que el cálculo sea correcto", "Exige el cumplimiento en tiempo"]
      }
    ]
  },
  {
    id: "2",
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
    ],
    contenidoCompleto: `
      <h2>Introducción</h2>
      <p>Las horas extraordinarias son aquellas que exceden la jornada legal de trabajo (8 horas diarias o 48 semanales). La ley establece reglas específicas para su pago y límites.</p>
      
      <h2>¿Qué son las horas extraordinarias?</h2>
      <p>Se consideran horas extraordinarias:</p>
      <ul>
        <li>Las que exceden de 8 horas en jornada diurna</li>
        <li>Las que exceden de 7 horas en jornada nocturna</li>
        <li>Las que exceden de 7.5 horas en jornada mixta</li>
      </ul>
      
      <h2>Pago de horas extraordinarias</h2>
      <p>Las primeras 9 horas extra por semana se pagan al 100% adicional del salario ordinario. Las siguientes se pagan al 200% adicional.</p>
      
      <h2>Límites legales</h2>
      <p>No puedes trabajar más de 3 horas extra por día ni más de 3 veces por semana.</p>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Documenta tus horas de trabajo",
        descripcion: "Lleva un registro detallado de todas las horas trabajadas",
        tiempo: "Diario",
        documentos: ["Bitácora personal", "Correos electrónicos", "Registros de entrada/salida"],
        tips: ["Anota fecha, hora de entrada y salida", "Guarda evidencias como correos"]
      },
      {
        numero: 2,
        titulo: "Calcula el pago correcto",
        descripcion: "Determina cuánto te deben por las horas extra trabajadas",
        tiempo: "30 min",
        tips: ["Primeras 9 horas semanales: 100% extra", "Siguientes horas: 200% extra"]
      },
      {
        numero: 3,
        titulo: "Solicita el pago por escrito",
        descripcion: "Presenta solicitud formal a tu empleador",
        tiempo: "15 min",
        documentos: ["Carta solicitud", "Cálculo detallado", "Evidencias de horas extra"],
        tips: ["Entrega con acuse de recibo", "Da 10 días para respuesta"]
      },
      {
        numero: 4,
        titulo: "Presenta queja ante STPS",
        descripcion: "Si no hay respuesta, acude a la Secretaría del Trabajo",
        tiempo: "1 hora",
        documentos: ["Queja por escrito", "Evidencias", "Identificación"],
        tips: ["Es gratuito", "Puede resolver sin llegar a juicio"]
      },
      {
        numero: 5,
        titulo: "Considera demanda laboral",
        descripcion: "Si STPS no resuelve, presenta demanda formal",
        tiempo: "2-3 horas",
        tips: ["Busca asesoría legal", "Incluye todas las horas extra adeudadas"]
      },
      {
        numero: 6,
        titulo: "Da seguimiento al proceso",
        descripcion: "Mantente al tanto del avance de tu caso",
        tiempo: "Variable",
        tips: ["Asiste a todas las citas", "Presenta evidencias adicionales si se requieren"]
      }
    ]
  },
  {
    id: "3",
    titulo: "Trámites para obtener tu finiquito completo",
    descripcion: "Asegúrate de recibir todas las prestaciones al terminar tu trabajo",
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
    ],
    contenidoCompleto: `
      <h2>¿Qué es el finiquito?</h2>
      <p>El finiquito es el documento que contiene el cálculo de las prestaciones que te corresponden al terminar la relación laboral, ya sea por renuncia, despido o vencimiento de contrato.</p>
      
      <h2>Conceptos que debe incluir</h2>
      <p>Tu finiquito debe incluir:</p>
      <ul>
        <li>Salarios pendientes de pago</li>
        <li>Vacaciones proporcionales</li>
        <li>Prima vacacional proporcional</li>
        <li>Aguinaldo proporcional</li>
        <li>Prima de antigüedad (si aplica)</li>
        <li>Otras prestaciones contractuales</li>
      </ul>
      
      <h2>Importancia de revisar antes de firmar</h2>
      <p>Una vez firmado el finiquito, será muy difícil reclamar conceptos omitidos. Revisa cuidadosamente cada cálculo.</p>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Conoce qué debe incluir tu finiquito",
        descripcion: "Identifica todos los conceptos que por ley te corresponden",
        tiempo: "10 min",
        tips: ["No solo salarios pendientes", "Incluye todas las prestaciones proporcionales"]
      },
      {
        numero: 2,
        titulo: "Calcula vacaciones proporcionales",
        descripcion: "Determina los días de vacaciones ganados pero no disfrutados",
        tiempo: "15 min",
        documentos: ["Registro de vacaciones", "Contrato de trabajo"],
        tips: ["6 días mínimo el primer año", "Aumenta con la antigüedad"]
      },
      {
        numero: 3,
        titulo: "Calcula prima vacacional",
        descripcion: "25% del salario correspondiente a los días de vacaciones",
        tiempo: "10 min",
        tips: ["Se calcula sobre las vacaciones proporcionales", "Mínimo 25% del salario"]
      },
      {
        numero: 4,
        titulo: "Calcula aguinaldo proporcional",
        descripcion: "Parte proporcional de los 15 días de aguinaldo anual",
        tiempo: "15 min",
        documentos: ["Fechas de ingreso y baja"],
        tips: ["Se calcula por días trabajados en el año", "Incluye el último día trabajado"]
      },
      {
        numero: 5,
        titulo: "Verifica prima de antigüedad",
        descripcion: "12 días de salario por cada año trabajado (si tienes más de 15 años)",
        tiempo: "10 min",
        tips: ["Solo si tienes 15 años o más", "Se calcula sobre salario mínimo o el tuyo si es menor"]
      },
      {
        numero: 6,
        titulo: "Revisa el cálculo total",
        descripcion: "Suma todos los conceptos y verifica que coincida con el finiquito",
        tiempo: "20 min",
        documentos: ["Calculadora", "Recibos de nómina"],
        tips: ["Usa nuestra calculadora", "Compara concepto por concepto"]
      },
      {
        numero: 7,
        titulo: "Firma correctamente",
        descripcion: "Asegúrate de que todo esté correcto antes de firmar",
        tiempo: "10 min",
        tips: ["Lee todo antes de firmar", "Si hay dudas, no firmes", "Pide copia sellada"]
      }
    ]
  },
  {
    id: "4",
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
    ],
    contenidoCompleto: `
      <h2>¿Qué es el acoso laboral?</h2>
      <p>El acoso laboral es una conducta abusiva que atenta contra la dignidad o integridad física o psíquica de una persona, poniendo en peligro su empleo o degradando el ambiente de trabajo.</p>
      
      <h2>Tipos de acoso laboral</h2>
      <ul>
        <li><strong>Mobbing:</strong> Acoso grupal sistemático</li>
        <li><strong>Bossing:</strong> Acoso por parte de superiores</li>
        <li><strong>Acoso sexual:</strong> Conductas de naturaleza sexual no deseadas</li>
        <li><strong>Discriminación:</strong> Por género, edad, religión, etc.</li>
      </ul>
      
      <h2>Manifestaciones comunes</h2>
      <ul>
        <li>Insultos, humillaciones públicas</li>
        <li>Exclusión de reuniones o actividades</li>
        <li>Sobrecarga de trabajo</li>
        <li>Asignación de tareas degradantes</li>
        <li>Amenazas de despido constantes</li>
      </ul>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Identifica tipos de acoso laboral",
        descripcion: "Reconoce las diferentes formas de acoso que pueden presentarse",
        tiempo: "15 min",
        tips: ["No solo es acoso físico", "Incluye intimidación psicológica"]
      },
      {
        numero: 2,
        titulo: "Documenta todos los incidentes",
        descripcion: "Lleva registro detallado de fechas, horas, personas involucradas",
        tiempo: "Continuo",
        documentos: ["Bitácora de incidentes", "Capturas de pantalla", "Correos"],
        tips: ["Fecha y hora exacta", "Describe objetivamente los hechos"]
      },
      {
        numero: 3,
        titulo: "Busca testigos y evidencias",
        descripcion: "Identifica compañeros que hayan presenciado los actos de acoso",
        tiempo: "Variable",
        tips: ["Habla con compañeros de confianza", "Solicita testimonios por escrito"]
      },
      {
        numero: 4,
        titulo: "Reporta internamente primero",
        descripcion: "Presenta queja formal ante recursos humanos o tu supervisor",
        tiempo: "1 hora",
        documentos: ["Queja por escrito", "Evidencias recopiladas"],
        tips: ["Entrega con acuse de recibo", "Solicita investigación formal"]
      },
      {
        numero: 5,
        titulo: "Presenta queja ante STPS",
        descripcion: "Si no hay respuesta interna, acude a la autoridad laboral",
        tiempo: "2-3 horas",
        documentos: ["Queja formal", "Evidencias", "Identificación"],
        tips: ["Es gratuito", "Pueden ordenar inspección"]
      },
      {
        numero: 6,
        titulo: "Solicita medidas preventivas",
        descripcion: "Pide a la autoridad que ordene cesar el acoso inmediatamente",
        tiempo: "30 min",
        tips: ["Solicita cambio de área", "Pide medidas de protección"]
      },
      {
        numero: 7,
        titulo: "Considera demanda laboral",
        descripcion: "Si el acoso continúa, presenta demanda por daño moral",
        tiempo: "Variable",
        tips: ["Busca asesoría legal especializada", "Incluye daño psicológico"]
      },
      {
        numero: 8,
        titulo: "Busca apoyo psicológico",
        descripcion: "El acoso puede afectar tu salud mental, busca ayuda profesional",
        tiempo: "Continuo",
        tips: ["Documenta el impacto en tu salud", "Considera terapia especializada"]
      },
      {
        numero: 9,
        titulo: "Protege tu empleo",
        descripcion: "Evita que el acoso derive en despido injustificado",
        tiempo: "Continuo",
        tips: ["Cumple con tus obligaciones", "Documenta tu buen desempeño"]
      },
      {
        numero: 10,
        titulo: "Da seguimiento al caso",
        descripcion: "Mantente al tanto del proceso y exige resultados",
        tiempo: "Variable",
        tips: ["Asiste a todas las citas", "Presenta evidencias adicionales"]
      }
    ]
  },
  {
    id: "5",
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
    ],
    contenidoCompleto: `
      <h2>Trabajar sin contrato escrito</h2>
      <p>Muchos trabajadores creen que sin contrato escrito no tienen derechos, pero esto es falso. La ley protege a todos los trabajadores, tengan o no contrato por escrito.</p>
      
      <h2>Tus derechos sin contrato</h2>
      <p>Aunque no tengas contrato escrito, tienes derecho a:</p>
      <ul>
        <li>Salario mínimo o el acordado verbalmente</li>
        <li>Jornada de trabajo de máximo 8 horas</li>
        <li>Vacaciones y prima vacacional</li>
        <li>Aguinaldo</li>
        <li>Seguridad social</li>
        <li>Protección contra despido injustificado</li>
      </ul>
      
      <h2>Obligación del patrón</h2>
      <p>La ley obliga al patrón a tener contrato escrito. Si no lo hay, se presumen ciertas condiciones favorables al trabajador.</p>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Comprende que tienes derechos sin contrato",
        descripcion: "La falta de contrato escrito no elimina tus derechos laborales",
        tiempo: "5 min",
        tips: ["La relación laboral existe sin contrato", "Tienes las mismas prestaciones"]
      },
      {
        numero: 2,
        titulo: "Documenta tu relación laboral",
        descripcion: "Recopila evidencias que comprueben que trabajas ahí",
        tiempo: "15 min",
        documentos: ["Recibos de pago", "Horarios", "Correos", "Fotografías"],
        tips: ["Guarda todo lo que demuestre tu trabajo", "Testigos de compañeros"]
      },
      {
        numero: 3,
        titulo: "Exige contrato por escrito",
        descripcion: "Solicita formalmente a tu empleador que elabore tu contrato",
        tiempo: "10 min",
        documentos: ["Solicitud por escrito"],
        tips: ["Es su obligación legal", "Entrega con acuse de recibo"]
      },
      {
        numero: 4,
        titulo: "Presenta queja si es necesario",
        descripcion: "Si se niega a darte contrato, acude a la autoridad laboral",
        tiempo: "1 hora",
        documentos: ["Queja ante STPS", "Evidencias de relación laboral"],
        tips: ["Es una violación a la ley", "Pueden multarlo"]
      },
      {
        numero: 5,
        titulo: "Protege tus derechos laborales",
        descripcion: "Mantente informado y exige el cumplimiento de tus derechos",
        tiempo: "Continuo",
        tips: ["Conoce tus prestaciones", "No aceptes condiciones por debajo de la ley"]
      }
    ]
  },
  {
    id: "6",
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
    ],
    contenidoCompleto: `
      <h2>Derecho a vacaciones</h2>
      <p>Las vacaciones son un derecho irrenunciable que tienes después de cumplir un año de servicio. No pueden ser compensadas económicamente excepto al terminar la relación laboral.</p>
      
      <h2>Duración de las vacaciones</h2>
      <p>La duración mínima es:</p>
      <ul>
        <li>Primer año: 6 días laborables</li>
        <li>Segundo año: 8 días laborables</li>
        <li>Tercer año: 10 días laborables</li>
        <li>Cuarto año: 12 días laborables</li>
        <li>Del quinto en adelante: Se incrementan 2 días cada 5 años</li>
      </ul>
      
      <h2>Prima vacacional</h2>
      <p>Además de los días de descanso, tienes derecho a una prima vacacional equivalente a por lo menos el 25% del salario correspondiente a los días de vacaciones.</p>
    `,
    pasoDetallado: [
      {
        numero: 1,
        titulo: "Calcula tus días de vacaciones",
        descripcion: "Determina cuántos días te corresponden según tu antigüedad",
        tiempo: "5 min",
        documentos: ["Contrato de trabajo", "Comprobante de antigüedad"],
        tips: ["Mínimo 6 días el primer año", "Aumenta con la antigüedad"]
      },
      {
        numero: 2,
        titulo: "Conoce el incremento por antigüedad",
        descripcion: "Entiende cómo aumentan tus vacaciones con los años trabajados",
        tiempo: "10 min",
        tips: ["Cada 5 años se incrementan 2 días", "El contrato puede otorgar más días"]
      },
      {
        numero: 3,
        titulo: "Calcula tu prima vacacional",
        descripcion: "Determina el 25% adicional que te corresponde durante vacaciones",
        tiempo: "10 min",
        tips: ["Mínimo 25% del salario", "Se paga junto con las vacaciones"]
      },
      {
        numero: 4,
        titulo: "Planifica tus vacaciones",
        descripcion: "Coordina con tu empleador las fechas más convenientes",
        tiempo: "15 min",
        tips: ["Avisa con anticipación", "Considera la operación de la empresa"]
      },
      {
        numero: 5,
        titulo: "Qué hacer si no te las dan",
        descripcion: "Acciones a tomar si tu empleador no respeta tu derecho",
        tiempo: "Variable",
        documentos: ["Solicitud por escrito", "Queja ante STPS"],
        tips: ["Primero solicita por escrito", "Luego presenta queja oficial"]
      },
      {
        numero: 6,
        titulo: "Vacaciones proporcionales al renunciar",
        descripcion: "Cálculo de vacaciones no disfrutadas al terminar el trabajo",
        tiempo: "15 min",
        tips: ["Se pagan proporcionalmente", "Incluye prima vacacional proporcional"]
      }
    ]
  }
];

export const categoriasGuias = [
  { value: "all", label: "Todas las guías", count: guiasPrincipales.length },
  { value: "Despido", label: "Despido", count: guiasPrincipales.filter(g => g.categoria === "Despido").length },
  { value: "Salario", label: "Salario", count: guiasPrincipales.filter(g => g.categoria === "Salario").length },
  { value: "Prestaciones", label: "Prestaciones", count: guiasPrincipales.filter(g => g.categoria === "Prestaciones").length },
  { value: "Condiciones laborales", label: "Condiciones laborales", count: guiasPrincipales.filter(g => g.categoria === "Condiciones laborales").length },
  { value: "Contratos", label: "Contratos", count: guiasPrincipales.filter(g => g.categoria === "Contratos").length },
  { value: "Finiquito", label: "Finiquito", count: guiasPrincipales.filter(g => g.categoria === "Finiquito").length }
];