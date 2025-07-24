export interface ArticuloLFT {
  numero: string;
  titulo: string;
  contenido: string;
  contenidoCompleto: string;
  temas: string[];
  categoria: string;
  fechaActualizacion: string;
}

export const articulosLFT: ArticuloLFT[] = [
  // Relación de trabajo
  {
    numero: "Art. 20",
    titulo: "Concepto de relación de trabajo",
    contenido: "Se entiende por relación de trabajo, cualquiera que sea el acto que le dé origen, la prestación de un trabajo personal subordinado a una persona...",
    contenidoCompleto: "Se entiende por relación de trabajo, cualquiera que sea el acto que le dé origen, la prestación de un trabajo personal subordinado a una persona, mediante el pago de un salario.\n\nContrato individual de trabajo, cualquiera que sea su forma o denominación, es aquel por virtud del cual una persona se obliga a prestar a otra un trabajo personal subordinado, mediante el pago de un salario.\n\nLa prestación de un trabajo a que se refiere el párrafo primero y el contrato celebrado producen los mismos efectos.",
    temas: ["definición", "relación laboral", "subordinación", "salario", "contrato"],
    categoria: "relacion-laboral",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 21", 
    titulo: "Presunción de relación de trabajo",
    contenido: "Se presume la existencia del contrato y de la relación de trabajo entre el que presta un trabajo personal y el que lo recibe.",
    contenidoCompleto: "Se presume la existencia del contrato y de la relación de trabajo entre el que presta un trabajo personal y el que lo recibe.",
    temas: ["presunción", "contrato", "relación laboral"],
    categoria: "relacion-laboral",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 24",
    titulo: "Condiciones de trabajo por escrito",
    contenido: "Las condiciones de trabajo deben hacerse constar por escrito cuando no existan contratos colectivos aplicables...",
    contenidoCompleto: "Las condiciones de trabajo deben hacerse constar por escrito cuando no existan contratos colectivos aplicables. Se harán dos ejemplares, por lo menos, de los cuales quedará uno en poder de cada parte.\n\nLa falta del escrito a que se refieren los párrafos anteriores no priva al trabajador de los derechos que deriven de las normas de trabajo y de los servicios prestados, pues se imputará al patrón la falta de esa formalidad.",
    temas: ["contrato", "por escrito", "condiciones", "formalidad"],
    categoria: "relacion-laboral",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 25",
    titulo: "Contenido del contrato de trabajo",
    contenido: "El escrito en que consten las condiciones de trabajo deberá contener los datos del trabajador y patrón, tipo de relación laboral, servicios a prestar, lugar de trabajo, duración de jornada, forma y monto del salario...",
    contenidoCompleto: "El escrito en que consten las condiciones de trabajo deberá contener:\n\nI. Nombre, nacionalidad, edad, sexo, estado civil, Clave Única de Registro de Población, Registro Federal de Contribuyentes y domicilio del trabajador y patrón;\n\nII. Si la relación de trabajo es para obra o tiempo determinado, por temporada, de capacitación inicial o por tiempo indeterminado y, en su caso, si está sujeta a un período de prueba;\n\nIII. El servicio o servicios que deban prestarse, los que se determinarán con la mayor precisión posible;\n\nIV. El lugar o los lugares donde deba prestarse el trabajo;\n\nV. La duración de la jornada;\n\nVI. La forma y el monto del salario;\n\nVII. El día y el lugar de pago del salario;\n\nVIII. La indicación de que el trabajador será capacitado o adiestrado en los términos de los planes y programas establecidos o que se establezcan en la empresa, conforme a lo dispuesto en esta Ley; y\n\nIX. Otras condiciones de trabajo, tales como días de descanso, vacaciones y demás que convengan el trabajador y el patrón.",
    temas: ["contrato", "contenido", "elementos", "datos personales", "jornada", "salario"],
    categoria: "relacion-laboral",
    fechaActualizacion: "2023-02-23"
  },

  // Salarios
  {
    numero: "Art. 82",
    titulo: "Concepto de salario",
    contenido: "Salario es la retribución que debe pagar el patrón al trabajador por su trabajo.",
    contenidoCompleto: "Salario es la retribución que debe pagar el patrón al trabajador por su trabajo.",
    temas: ["definición", "salario", "retribución"],
    categoria: "salarios",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 83",
    titulo: "Integración del salario",
    contenido: "El salario puede fijarse por unidad de tiempo, por unidad de obra, por comisión, a precio alzado o de cualquier otra manera...",
    contenidoCompleto: "El salario puede fijarse por unidad de tiempo, por unidad de obra, por comisión, a precio alzado o de cualquier otra manera.\n\nEl salario se integra con los pagos hechos en efectivo por cuota diaria, gratificaciones, percepciones, habitación, primas, comisiones, prestaciones en especie y cualquiera otra cantidad o prestación que se entregue al trabajador por su trabajo.",
    temas: ["integración", "salario", "prestaciones", "efectivo", "especie"],
    categoria: "salarios",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 84",
    titulo: "Salario en efectivo",
    contenido: "El salario se pagará en moneda del curso legal. No se permitirá hacerlo efectivo con mercancías, vales, fichas o cualquier otro signo representativo...",
    contenidoCompleto: "El salario se pagará en moneda del curso legal. No se permitirá hacerlo efectivo con mercancías, vales, fichas o cualquier otro signo representativo con que se pretenda substituir la moneda.\n\nPodrá estipularse que el trabajador reciba una parte del salario en prestaciones de conformidad con las disposiciones del presente Capítulo.",
    temas: ["moneda", "efectivo", "vales", "prestaciones"],
    categoria: "salarios",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 85",
    titulo: "Salario igual por trabajo igual",
    contenido: "A trabajo igual, desempeñado en puesto, jornada y condiciones de eficiencia también iguales, debe corresponder salario igual.",
    contenidoCompleto: "A trabajo igual, desempeñado en puesto, jornada y condiciones de eficiencia también iguales, debe corresponder salario igual.",
    temas: ["igualdad salarial", "no discriminación", "trabajo igual"],
    categoria: "salarios",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 90",
    titulo: "Salario mínimo",
    contenido: "Salario mínimo es la cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada de trabajo.",
    contenidoCompleto: "Salario mínimo es la cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada de trabajo.\n\nEl salario mínimo deberá ser suficiente para satisfacer las necesidades normales de un jefe de familia en el orden material, social y cultural, y para proveer a la educación obligatoria de los hijos.\n\nSe considera de utilidad social el establecimiento de instituciones y medidas que protejan la capacidad adquisitiva del salario y faciliten el acceso de los trabajadores a la obtención de satisfactores.",
    temas: ["salario mínimo", "jornada", "necesidades", "familia", "utilidad social"],
    categoria: "salarios",
    fechaActualizacion: "2023-02-23"
  },

  // Jornada de trabajo
  {
    numero: "Art. 58",
    titulo: "Jornada de trabajo",
    contenido: "Jornada de trabajo es el tiempo durante el cual el trabajador está a disposición del patrón para prestar su trabajo.",
    contenidoCompleto: "Jornada de trabajo es el tiempo durante el cual el trabajador está a disposición del patrón para prestar su trabajo.",
    temas: ["jornada", "tiempo", "disposición"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 59",
    titulo: "Lugar de trabajo",
    contenido: "El trabajador y el patrón fijarán la duración de la jornada de trabajo, sin que pueda exceder los máximos legales...",
    contenidoCompleto: "El trabajador y el patrón fijarán la duración de la jornada de trabajo, sin que pueda exceder los máximos legales.\n\nLos trabajadores y el patrón podrán repartir las horas de trabajo, a fin de permitir a los primeros el reposo del sábado en la tarde o cualquier modalidad equivalente.",
    temas: ["duración", "máximos legales", "reposo", "modalidades"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 60",
    titulo: "Jornada diurna, nocturna y mixta",
    contenido: "Jornada diurna es la comprendida entre las seis y las veinte horas. Jornada nocturna es la comprendida entre las veinte y las seis horas...",
    contenidoCompleto: "Jornada diurna es la comprendida entre las seis y las veinte horas.\n\nJornada nocturna es la comprendida entre las veinte y las seis horas.\n\nJornada mixta es la que comprende períodos de tiempo de las jornadas diurna y nocturna, siempre que el período nocturno sea menor de tres horas y media, pues si comprende tres horas y media o más, se reputará jornada nocturna.",
    temas: ["jornada diurna", "jornada nocturna", "jornada mixta", "horarios"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 61",
    titulo: "Tipos de jornada",
    contenido: "La duración máxima de la jornada será: ocho horas la diurna, siete la nocturna y siete horas y media la mixta.",
    contenidoCompleto: "La duración máxima de la jornada será: ocho horas la diurna, siete la nocturna y siete horas y media la mixta.",
    temas: ["duración máxima", "jornada diurna", "jornada nocturna", "jornada mixta"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 66",
    titulo: "Tiempo extraordinario",
    contenido: "Podrá también prolongarse la jornada de trabajo por circunstancias extraordinarias, sin exceder nunca de tres horas diarias ni de tres veces en una semana.",
    contenidoCompleto: "Podrá también prolongarse la jornada de trabajo por circunstancias extraordinarias, sin exceder nunca de tres horas diarias ni de tres veces en una semana.",
    temas: ["horas extra", "tiempo extraordinario", "límites", "circunstancias"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 67",
    titulo: "Pago de tiempo extraordinario",
    contenido: "Las horas de trabajo extraordinario se pagarán con un ciento por ciento más del salario que corresponda a las horas de la jornada...",
    contenidoCompleto: "Las horas de trabajo extraordinario se pagarán con un ciento por ciento más del salario que corresponda a las horas de la jornada.\n\nSi se excede de nueve horas a la semana, se pagará con un doscientos por ciento más del salario que corresponda a las horas de la jornada.",
    temas: ["pago", "horas extra", "100%", "200%", "exceso"],
    categoria: "jornada",
    fechaActualizacion: "2023-02-23"
  },

  // Vacaciones
  {
    numero: "Art. 76",
    titulo: "Derecho a vacaciones",
    contenido: "Los trabajadores que tengan más de un año de servicios disfrutarán de un período anual de vacaciones pagadas...",
    contenidoCompleto: "Los trabajadores que tengan más de un año de servicios disfrutarán de un período anual de vacaciones pagadas, que en ningún caso podrá ser inferior a seis días laborables, y que aumentará en dos días laborables, hasta llegar a doce, por cada año subsecuente de servicios.\n\nDespués del cuarto año, el período de vacaciones aumentará en dos días por cada cinco de servicios.",
    temas: ["vacaciones", "derecho", "período anual", "seis días", "incremento"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 77",
    titulo: "Vacaciones fraccionadas",
    contenido: "Los trabajadores que tengan más de un año de servicios podrán dividir el período de vacaciones cuando así convenga a sus intereses...",
    contenidoCompleto: "Los trabajadores que tengan más de un año de servicios podrán dividir el período de vacaciones cuando así convenga a sus intereses, siempre que disfruten en forma continua de seis días laborables en cada caso.\n\nLos menores de edad disfrutarán de un período anual de vacaciones pagadas de dieciocho días laborables, por lo menos.",
    temas: ["fraccionamiento", "seis días continuos", "menores", "dieciocho días"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 78",
    titulo: "Época de vacaciones",
    contenido: "Las vacaciones deberán concederse a los trabajadores dentro de los seis meses siguientes al cumplimiento del año de servicios...",
    contenidoCompleto: "Las vacaciones deberán concederse a los trabajadores dentro de los seis meses siguientes al cumplimiento del año de servicios. Los patrones entregarán anualmente a sus trabajadores una constancia que contenga su antigüedad y de acuerdo con ella el período de vacaciones que les corresponda y la fecha en que deberán disfrutarlo.",
    temas: ["época", "seis meses", "año de servicios", "constancia", "antigüedad"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 79",
    titulo: "Duración de vacaciones",
    contenido: "La duración de las vacaciones se aumentará en dos días laborables, hasta llegar a doce, por cada año subsecuente de servicios.",
    contenidoCompleto: "La duración de las vacaciones se aumentará en dos días laborables, hasta llegar a doce, por cada año subsecuente de servicios.\n\nDespués del cuarto año, el período de vacaciones aumentará en dos días por cada cinco de servicios.",
    temas: ["duración", "incremento", "días laborables", "cuarto año", "cinco años"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 80",
    titulo: "Prima vacacional",
    contenido: "Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el período de vacaciones.",
    contenidoCompleto: "Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el período de vacaciones.",
    temas: ["prima vacacional", "25%", "salario vacaciones"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 81",
    titulo: "Compensación por vacaciones no disfrutadas",
    contenido: "Las vacaciones no podrán compensarse con una remuneración. Si la relación de trabajo termina antes de que se cumpla el año de servicios...",
    contenidoCompleto: "Las vacaciones no podrán compensarse con una remuneración. Si la relación de trabajo termina antes de que se cumpla el año de servicios, el trabajador tendrá derecho a una remuneración proporcional al tiempo de servicios prestados.",
    temas: ["compensación", "no remuneración", "terminación", "proporcional"],
    categoria: "vacaciones",
    fechaActualizacion: "2023-02-23"
  },

  // Aguinaldo
  {
    numero: "Art. 87",
    titulo: "Derecho al aguinaldo",
    contenido: "Los trabajadores tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre, equivalente a quince días de salario...",
    contenidoCompleto: "Los trabajadores tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre, equivalente a quince días de salario, por lo menos.\n\nLos que no hayan cumplido el año de servicios, independientemente de que se encuentren laborando o no en la fecha de liquidación del aguinaldo, tendrán derecho a que se les pague la parte proporcional del mismo, conforme al tiempo que hubieren trabajado, cualquiera que fuere éste.",
    temas: ["aguinaldo", "15 días", "diciembre", "anual", "proporcional"],
    categoria: "aguinaldo",
    fechaActualizacion: "2023-02-23"
  },

  // Terminación
  {
    numero: "Art. 47",
    titulo: "Causas de rescisión sin responsabilidad para el patrón",
    contenido: "Son causas de rescisión de la relación de trabajo, sin responsabilidad para el patrón...",
    contenidoCompleto: "Son causas de rescisión de la relación de trabajo, sin responsabilidad para el patrón:\n\nI. Engañarlo el trabajador o en su caso, el sindicato que lo hubiere propuesto o recomendado con certificados falsos o referencias en los que se atribuyan al trabajador capacidad, aptitudes o facultades de que carezca. Esta causa de rescisión dejará de tener efecto después de treinta días de prestar sus servicios el trabajador;\n\nII. Incurrir el trabajador, durante sus labores, en faltas de probidad u honradez, en actos de violencia, amagos, injurias o malos tratamientos en contra del patrón, sus familiares o del personal directivo o administrativo de la empresa o establecimiento, salvo que medie provocación o que obre en defensa propia;\n\nIII. Faltar el trabajador a sus labores sin causa justificada o sin permiso del patrón;\n\nIV. Desobedecer el trabajador al patrón o a sus representantes, sin causa justificada, siempre que se trate del trabajo contratado;\n\nV. Destruir intencionalmente o por negligencia que no sea leve, edificios, obras, maquinaria, instrumentos, materias primas y demás objetos relacionados con el trabajo;\n\nVI. Comprometer el trabajador, por su imprudencia o descuido inexcusable, la seguridad del establecimiento o de las personas que se encuentren en él;\n\nVII. Faltar el trabajador a sus labores por más de tres días consecutivos sin causa justificada;\n\nVIII. Desobedecer el trabajador las medidas preventivas o los procedimientos para evitar accidentes o enfermedades;\n\nIX. Concurrir el trabajador a sus labores en estado de embriaguez o bajo la influencia de algún narcótico o droga enervante, salvo que, en este último caso, exista prescripción médica. Antes de iniciar su servicio, el trabajador deberá poner el hecho en conocimiento del patrón y presentar la prescripción suscrita por el médico;\n\nX. La sentencia ejecutoriada que imponga al trabajador una pena de prisión, que le impida el cumplimiento de la relación de trabajo;\n\nXI. Las análogas a las establecidas en las fracciones anteriores, de igual manera graves y de consecuencias semejantes en lo que al trabajo se refiere.\n\nEl patrón deberá dar al trabajador aviso escrito de la fecha y causa o causas de la rescisión.\n\nEl aviso deberá hacerse del conocimiento del trabajador, y en caso de que éste se negare a recibirlo, el patrón dentro de los cinco días siguientes a la fecha de la rescisión, deberá hacerlo del conocimiento de la Junta respectiva, proporcionando a ésta el domicilio que tenga registrado y solicitando su notificación al trabajador.\n\nLa falta del aviso al trabajador o a la Junta, por sí sola, bastará para considerar que el despido fue injustificado.",
    temas: ["rescisión", "causas justificadas", "patrón", "aviso", "despido"],
    categoria: "terminacion",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 48",
    titulo: "Derechos del trabajador despedido",
    contenido: "El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, que se le reinstale en el trabajo que desempeñaba...",
    contenidoCompleto: "El trabajador podrá solicitar ante la Junta de Conciliación y Arbitraje, a su elección, que se le reinstale en el trabajo que desempeñaba, o que se le indemnice con el importe de tres meses de salario.\n\nSi en el juicio correspondiente no comprueba el patrón la causa de la rescisión, el trabajador tendrá derecho, además, cualquiera que hubiese sido la acción intentada, a que se le paguen los salarios vencidos desde la fecha del despido hasta que se cumplimente el laudo.",
    temas: ["despido", "reinstalación", "indemnización", "elección", "salarios vencidos"],
    categoria: "terminacion",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 49",
    titulo: "Casos en que el patrón no está obligado a reinstalar",
    contenido: "El patrón quedará exento de la obligación de reinstalar al trabajador mediante el pago de las indemnizaciones que se determinan en el artículo 50...",
    contenidoCompleto: "El patrón quedará exento de la obligación de reinstalar al trabajador, mediante el pago de las indemnizaciones que se determinan en el artículo 50 en los casos siguientes:\n\nI. Cuando se trate de trabajadores que tengan una antigüedad menor de un año;\n\nII. Si comprueba ante la Junta de Conciliación y Arbitraje, que el trabajador, por razón del trabajo que desempeña o por las características de sus labores, está en contacto directo y permanente con él y la Junta estima, tomando en consideración las circunstancias del caso, que no es posible el desarrollo normal de la relación de trabajo;\n\nIII. En los casos de trabajadores de confianza;\n\nIV. En el servicio doméstico; y\n\nV. Cuando se trate de trabajadores eventuales.",
    temas: ["exención", "reinstalación", "indemnización", "antigüedad", "confianza"],
    categoria: "terminacion",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 50",
    titulo: "Indemnización por despido injustificado",
    contenido: "Las indemnizaciones a que se refiere el artículo anterior consistirán: I. Si la relación de trabajo fuere por tiempo determinado menor de un año...",
    contenidoCompleto: "Las indemnizaciones a que se refiere el artículo anterior consistirán:\n\nI. Si la relación de trabajo fuere por tiempo determinado menor de un año, en una cantidad igual al importe de los salarios de la mitad del tiempo de servicios prestados; si excediera de un año, en una cantidad igual al importe de los salarios de seis meses por el primer año y de veinte días por cada uno de los años siguientes en que hubiese prestado sus servicios;\n\nII. Si la relación de trabajo fuere por tiempo indeterminado, la indemnización consistirá en veinte días de salario por cada uno de los años de servicios prestados; y\n\nIII. Además de las indemnizaciones a que se refieren las fracciones anteriores, en el importe de tres meses de salario y en el de los salarios vencidos desde la fecha del despido hasta que se paguen las indemnizaciones.",
    temas: ["indemnización", "despido injustificado", "3 meses", "20 días", "tiempo determinado"],
    categoria: "terminacion",
    fechaActualizacion: "2023-02-23"
  },

  // Descansos
  {
    numero: "Art. 69",
    titulo: "Descanso semanal",
    contenido: "Por cada seis días de trabajo disfrutará el trabajador de un día de descanso, por lo menos, con goce de salario íntegro.",
    contenidoCompleto: "Por cada seis días de trabajo disfrutará el trabajador de un día de descanso, por lo menos, con goce de salario íntegro.",
    temas: ["descanso semanal", "seis días", "salario íntegro"],
    categoria: "descansos",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 70",
    titulo: "Días de descanso preferente",
    contenido: "En los trabajos que requieran una labor continua, los trabajadores y el patrón fijarán de común acuerdo los días en que deben disfrutar del descanso semanal...",
    contenidoCompleto: "En los trabajos que requieran una labor continua, los trabajadores y el patrón fijarán de común acuerdo los días en que deben disfrutar del descanso semanal.\n\nSe procurará que el descanso semanal sea en domingo. Los trabajadores que presten servicios en día domingo tendrán derecho a una prima adicional de un veinticinco por ciento, por lo menos, sobre el salario de los días ordinarios de trabajo.",
    temas: ["labor continua", "común acuerdo", "domingo", "prima 25%"],
    categoria: "descansos",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 74",
    titulo: "Días de descanso obligatorio",
    contenido: "Son días de descanso obligatorio: I. El 1o. de enero; II. El primer lunes de febrero en conmemoración del 5 de febrero...",
    contenidoCompleto: "Son días de descanso obligatorio:\n\nI. El 1o. de enero;\n\nII. El primer lunes de febrero en conmemoración del 5 de febrero;\n\nIII. El tercer lunes de marzo en conmemoración del 21 de marzo;\n\nIV. El 1o. de mayo;\n\nV. El 16 de septiembre;\n\nVI. El tercer lunes de noviembre en conmemoración del 20 de noviembre;\n\nVII. El 1o. de diciembre de cada seis años, cuando corresponda a la transmisión del Poder Ejecutivo Federal;\n\nVIII. El 25 de diciembre, y\n\nIX. El que determinen las leyes federales y locales electorales, en el caso de elecciones ordinarias, para efectuar la jornada electoral.",
    temas: ["descanso obligatorio", "días feriados", "fechas cívicas"],
    categoria: "descansos",
    fechaActualizacion: "2023-02-23"
  },
  {
    numero: "Art. 75",
    titulo: "Pago en días de descanso obligatorio",
    contenido: "En los días de descanso obligatorio los trabajadores no están obligados a prestar servicios...",
    contenidoCompleto: "En los días de descanso obligatorio los trabajadores no están obligados a prestar servicios. En estos días tendrán derecho a salario íntegro.\n\nLos trabajadores que presten servicios en los días de descanso obligatorio a que se refiere el artículo anterior, tendrán derecho a que se les pague, independientemente del salario que les corresponda por el descanso obligatorio, un salario doble por el servicio prestado.",
    temas: ["descanso obligatorio", "salario íntegro", "salario doble"],
    categoria: "descansos",
    fechaActualizacion: "2023-02-23"
  }
];

// Función para obtener artículos por categoría
export const obtenerArticulosPorCategoria = (categoria: string): ArticuloLFT[] => {
  return articulosLFT.filter(articulo => articulo.categoria === categoria);
};

// Función para obtener artículo por número
export const obtenerArticuloPorNumero = (numero: string): ArticuloLFT | undefined => {
  return articulosLFT.find(articulo => articulo.numero === numero);
};

// Categorías disponibles
export const categoriasDisponibles = [
  { value: "relacion-laboral", label: "Relación de Trabajo", count: 4 },
  { value: "salarios", label: "Salarios", count: 5 },
  { value: "jornada", label: "Jornada de Trabajo", count: 6 },
  { value: "vacaciones", label: "Vacaciones", count: 6 },
  { value: "aguinaldo", label: "Aguinaldo", count: 1 },
  { value: "terminacion", label: "Terminación", count: 4 },
  { value: "descansos", label: "Descansos", count: 4 }
];