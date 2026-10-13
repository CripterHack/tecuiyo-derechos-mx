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

  // Resúmenes revisados de los arts. 76–81: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf
  // Vacaciones
  {
    numero: "Art. 76",
    titulo: "Derecho a vacaciones",
    contenido: "El período anual de vacaciones pagadas parte de un mínimo de 12 días laborables y aumenta con la antigüedad.",
    contenidoCompleto: "Resumen educativo: al completar el primer año corresponden al menos 12 días laborables de vacaciones pagadas. El mínimo aumenta a 14, 16, 18 y 20 días en los años segundo, tercero, cuarto y quinto.\n\nDel sexto al décimo año corresponden 22 días; del undécimo al decimoquinto, 24. Después, el mínimo aumenta dos días por cada cinco años de servicio. El contrato puede otorgar condiciones más favorables.",
    temas: ["vacaciones", "derecho", "período anual", "doce días", "incremento"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 77",
    titulo: "Vacaciones en trabajo discontinuo o de temporada",
    contenido: "En los servicios discontinuos o de temporada, las vacaciones se calculan proporcionalmente a los días trabajados en el año.",
    contenidoCompleto: "Resumen educativo: las personas que prestan servicios discontinuos o de temporada conservan el derecho a vacaciones. La duración se determina en proporción a los días de trabajo durante el año.",
    temas: ["proporcional", "temporada", "servicios discontinuos", "días trabajados"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 78",
    titulo: "Disfrute continuo y distribución de vacaciones",
    contenido: "El descanso comprende al menos 12 días continuos; la persona trabajadora puede decidir distribuir el período según sus necesidades.",
    contenidoCompleto: "Resumen educativo: del período que corresponda conforme al artículo 76, deben poder disfrutarse por lo menos 12 días continuos. La persona trabajadora puede optar por distribuir ese período en la forma y tiempo que requiera.",
    temas: ["disfrute", "doce días continuos", "distribución", "decisión del trabajador"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 79",
    titulo: "Prohibición de sustituir vacaciones por dinero",
    contenido: "Las vacaciones no se sustituyen por dinero; al terminar antes del año de servicios corresponde la remuneración proporcional.",
    contenidoCompleto: "Resumen educativo: durante la relación laboral las vacaciones no pueden sustituirse por una remuneración. Si la relación termina antes de completar el año de servicios, corresponde un pago proporcional al tiempo trabajado.",
    temas: ["compensación", "descanso", "terminación", "proporcional"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 80",
    titulo: "Prima vacacional",
    contenido: "La prima vacacional es al menos el 25% del salario correspondiente a los días de vacaciones.",
    contenidoCompleto: "Resumen educativo: además del salario del período de vacaciones, corresponde una prima de al menos el 25% de ese salario. Un contrato puede establecer un porcentaje mayor.",
    temas: ["prima vacacional", "25%", "salario vacaciones"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 81",
    titulo: "Plazo y constancia de vacaciones",
    contenido: "Las vacaciones se conceden dentro de los seis meses posteriores al aniversario laboral y se documentan en una constancia anual.",
    contenidoCompleto: "Resumen educativo: el empleador debe conceder las vacaciones dentro de los seis meses posteriores al cumplimiento del año de servicios. Cada año debe entregar una constancia que indique la antigüedad, el período correspondiente y la fecha de disfrute.",
    temas: ["seis meses", "constancia", "antigüedad", "fecha de disfrute"],
    categoria: "vacaciones",
    fechaActualizacion: "2026-10-13"
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
    contenidoCompleto: "Resumen educativo: el artículo 47 establece causas de rescisión sin responsabilidad para el empleador y regula el aviso correspondiente. La causa debe revisarse junto con sus requisitos y las pruebas. La falta de aviso requiere examinar las circunstancias del caso; no basta este resumen para concluir que un despido es justificado o injustificado.",
    temas: ["rescisión", "causas justificadas", "patrón", "aviso", "despido"],
    categoria: "terminacion",
    fechaActualizacion: "2026-10-13"
  },
  {
    numero: "Art. 48",
    titulo: "Derechos del trabajador despedido",
    contenido: "Ante un despido injustificado puede solicitarse reinstalación o indemnización, conforme a los requisitos y procedimientos aplicables.",
    contenidoCompleto: "Resumen educativo: ante un despido injustificado, la persona trabajadora puede solicitar reinstalación o una indemnización de tres meses de salario, conforme a los requisitos aplicables. Los salarios vencidos y otras cantidades dependen del supuesto legal, sus límites y la resolución. Solicita asesoría cuanto antes para revisar los plazos y la autoridad competente.",
    temas: ["despido", "reinstalación", "indemnización", "elección", "salarios vencidos"],
    categoria: "terminacion",
    fechaActualizacion: "2026-10-13"
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
    titulo: "Indemnizaciones en los supuestos del artículo 49",
    contenido: "Los conceptos y montos se determinan según el supuesto jurídico, el tipo de relación laboral y la duración del servicio.",
    contenidoCompleto: "Resumen educativo: el artículo 50 regula las indemnizaciones a las que remite el artículo 49. Los conceptos y la fórmula dependen del supuesto jurídico, del tipo de relación laboral y del tiempo de servicios. Los 20 días por año no se suman automáticamente en todo despido; consulta el texto oficial y solicita asesoría para identificar las indemnizaciones y salarios vencidos que procedan.",
    temas: ["indemnización", "despido injustificado", "3 meses", "20 días", "tiempo determinado"],
    categoria: "terminacion",
    fechaActualizacion: "2026-10-13"
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
    contenidoCompleto: "Resumen educativo: los descansos obligatorios comprenden el 1 de enero; el primer lunes de febrero; el tercer lunes de marzo; el 1 de mayo; el 16 de septiembre; el tercer lunes de noviembre; el 1 de octubre cada seis años cuando se transmite el Poder Ejecutivo Federal; el 25 de diciembre, y la jornada electoral ordinaria que determinen las leyes aplicables.",
    temas: ["descanso obligatorio", "días feriados", "fechas cívicas"],
    categoria: "descansos",
    fechaActualizacion: "2026-10-13"
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
