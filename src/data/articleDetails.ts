const ARTICLE_GROUP_TITLES = {
  "relacion-laboral": "Relación de Trabajo",
  "salarios": "Salarios",
  "jornada": "Jornada de Trabajo",
  "vacaciones": "Vacaciones",
  "aguinaldo": "Aguinaldo",
  "terminacion": "Terminación de la Relación Laboral",
} as const;

export interface ArticleDetail {
  id: string;
  numero: string;
  titulo: string;
  categoria: string;
  contenido: string;
  explicacion: string;
  relacionados: string[];
  vigencia: string;
  fechaReforma?: string;
  fechaRevision?: string;
  sourceUrl?: string;
  textKind?: "educational-summary";
  listing?: ArticleListing;
}

interface ArticleListing {
  groupId: keyof typeof ARTICLE_GROUP_TITLES;
  preview: string;
  keywords: string[];
}

export const OFFICIAL_LFT_URL = "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf";
export const WORKING_HOURS_DECREE_URL = "https://dof.gob.mx/nota_detalle_popup.php?codigo=5786537";

// Sólo las entradas con fechaRevision han recibido la revisión editorial indicada.
const ARTICLE_DETAILS: ArticleDetail[] = [
  // Relación de Trabajo
  {
    id: "art20",
    numero: "20",
    titulo: "Concepto de relación de trabajo",
    categoria: "Relaciones Individuales",
    listing: { groupId: "relacion-laboral", preview: "Trabajo personal subordinado a cambio de salario, independientemente del nombre del acuerdo.", keywords: ["definición", "relación laboral", "subordinación"] },
    contenido: `
      <p>Una relación laboral se configura cuando una persona realiza trabajo personal bajo subordinación a otra a cambio de un salario. El nombre o la forma del acuerdo no determina por sí sola su naturaleza.</p>
    `,
    explicacion: `
      <p>La prestación de servicios con esas características produce los mismos efectos que celebrar un contrato individual. La falta de un escrito no elimina los derechos que correspondan (artículo 26); si existen desacuerdos sobre la naturaleza del vínculo, es necesario examinar los hechos.</p>
    `,
    relacionados: ["Art. 21", "Art. 24", "Art. 25"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art21",
    numero: "21",
    titulo: "Presunción de relación de trabajo",
    categoria: "Relaciones Individuales",
    listing: { groupId: "relacion-laboral", preview: "La prestación personal del trabajo genera una presunción legal, que admite prueba en contrario.", keywords: ["presunción", "contrato", "relación laboral"] },
    contenido: `
      <p>Cuando alguien realiza personalmente un trabajo para otra persona, la LFT establece una presunción de existencia del contrato y de la relación laboral.</p>
    `,
    explicacion: `
      <p>Esta presunción admite prueba en contrario. No garantiza por sí sola el resultado de un conflicto ni exime de aportar la información disponible: importan las circunstancias y las pruebas del caso. El artículo 20 explica los elementos de la relación laboral.</p>
    `,
    relacionados: ["Art. 20", "Art. 24"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art24",
    numero: "24",
    titulo: "Condiciones de trabajo por escrito",
    categoria: "Relaciones Individuales",
    listing: { groupId: "relacion-laboral", preview: "Las condiciones de trabajo deben hacerse constar por escrito cuando no existan contratos colectivos aplicables...", keywords: ["contrato", "por escrito", "condiciones"] },
    contenido: `
      <p>Resumen educativo: sin contrato colectivo aplicable, condiciones escritas en al menos dos ejemplares, uno por parte.</p>
    `,
    explicacion: `
      <p>Artículo 26: derechos conservados; omisión imputable al empleador.</p>
    `,
    relacionados: ["Art. 25", "Art. 26", "Art. 132"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art25",
    numero: "25",
    titulo: "Contenido del contrato de trabajo",
    categoria: "Relaciones Individuales",
    listing: { groupId: "relacion-laboral", preview: "Condiciones escritas y beneficiarios.", keywords: ["contrato", "contenido", "elementos", "datos personales"] },
    contenido: `
      <p>Resumen educativo: condiciones escritas. Fracción X: beneficiarios para montos pendientes o generados por fallecimiento o desaparición delictiva.</p>
    `,
    explicacion: `
      <p>Artículo 26: derechos conservados aunque falte el escrito. Requisitos completos en la fuente.</p>
    `,
    relacionados: ["Art. 24", "Art. 26", "Art. 47"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  // Salarios
  {
    id: "art82",
    numero: "82",
    titulo: "Concepto de salario",
    categoria: "Salarios",
    listing: { groupId: "salarios", preview: "Contraprestación por el trabajo; su integración se regula en el artículo 84.", keywords: ["definición", "salario", "retribución"] },
    contenido: `
      <p>El salario es la contraprestación que la persona empleadora debe cubrir a quien realiza el trabajo.</p>
    `,
    explicacion: `
      <p>El artículo 83 regula distintas modalidades de fijación, como tiempo, obra y comisión. El artículo 84 distingue la integración del salario, que comprende la cuota diaria y otros pagos o prestaciones entregados por el trabajo. Para una indemnización deben aplicarse las reglas específicas de su base salarial, como las del artículo 89 cuando correspondan.</p>
    `,
    relacionados: ["Art. 83", "Art. 84", "Art. 85"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art85",
    numero: "85",
    titulo: "Salario remunerador y mínimo",
    categoria: "Salarios",
    listing: { groupId: "salarios", preview: "Salario remunerador y nunca inferior al mínimo.", keywords: ["salario remunerador", "salario mínimo", "unidad de obra"] },
    contenido: `
      <p>Resumen educativo: salario remunerador, nunca inferior al mínimo, según cantidad y calidad del trabajo.</p>
    `,
    explicacion: `
      <p>Por unidad de obra, ocho horas de trabajo normal deben producir al menos el salario mínimo.</p>
    `,
    relacionados: ["Art. 82", "Art. 83", "Art. 86"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art90",
    numero: "90",
    titulo: "Salario mínimo",
    categoria: "Salarios",
    listing: { groupId: "salarios", preview: "Piso salarial en efectivo, con protección frente a la inflación y mínimos según zona y actividad.", keywords: ["salario mínimo", "jornada", "cantidad mínima"] },
    contenido: `
      <p>El salario mínimo es el piso de pago en efectivo por una jornada. La ley busca que permita cubrir las necesidades materiales, sociales, culturales y educativas de la familia.</p>
    `,
    explicacion: `
      <p>La fijación anual o revisión no puede situarse por debajo de la inflación observada en el período anterior de vigencia. Los artículos 91 a 94 distinguen mínimos generales y profesionales según zona y actividad, y la fijación por CONASAMI. Consulta la resolución aplicable al año, zona y ocupación; no todos los mínimos son iguales.</p>
    `,
    relacionados: ["Art. 91", "Art. 92", "Art. 97"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  // Jornada de Trabajo
  {
    id: "art58",
    numero: "58",
    titulo: "Jornada de trabajo",
    categoria: "Jornada de Trabajo",
    listing: { groupId: "jornada", preview: "Tiempo disponible para prestar servicios; su distribución puede acordarse y los descansos tienen reglas específicas.", keywords: ["jornada", "tiempo", "disposición"] },
    contenido: `
      <p>La jornada comprende el tiempo en que la persona trabajadora debe permanecer disponible para prestar sus servicios. Desde el 1 de mayo de 2026 se permite distribuirla de común acuerdo entre empleador y trabajador, respetando los límites legales.</p>
    `,
    explicacion: `
      <p>El artículo 63 establece un descanso mínimo de media hora en jornada continua. Según el artículo 64, si la persona no puede salir del lugar de trabajo durante el descanso o la comida, ese período cuenta como tiempo efectivo de jornada. No basta con llamar a un período descanso para excluirlo. Los límites diarios y semanales se consultan en los artículos 59 a 61 y los transitorios de la reforma de 2026.</p>
    `,
    relacionados: ["Art. 59", "Art. 61", "Art. 66"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art61",
    numero: "61",
    titulo: "Tipos de jornada",
    categoria: "Jornada de Trabajo",
    listing: { groupId: "jornada", preview: "Duración y clasificación de jornadas.", keywords: ["duración máxima", "jornada diurna", "jornada nocturna", "jornada mixta"] },
    contenido: `
      <p>Resumen educativo: 8 horas diurnas, 7 nocturnas, 7.5 mixtas por día.</p>
    `,
    explicacion: `
      <p>Artículo 60: mixta combina día y noche, con menos de 3.5 horas nocturnas; con 3.5 o más es nocturna.</p>
    `,
    relacionados: ["Art. 58", "Art. 60", "Art. 66"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art66",
    numero: "66",
    titulo: "Tiempo extraordinario",
    categoria: "Jornada de Trabajo",
    listing: { groupId: "jornada", preview: "Pago doble por circunstancias extraordinarias; consulta los límites y la transición anual de la reforma de 2026.", keywords: ["horas extra", "tiempo extraordinario", "límites"] },
    contenido: `
      <h3>Artículo 66</h3>
      <p>Resumen educativo: por circunstancias extraordinarias, el pago es doble. La distribución permite hasta 4 horas diarias en un máximo de 4 días semanales. El tope semanal aumenta gradualmente:</p>
      <table>
        <thead><tr><th>Año</th><th>Tope semanal de horas extraordinarias</th></tr></thead>
        <tbody>
          <tr><td>2026</td><td>9</td></tr>
          <tr><td>2027</td><td>9</td></tr>
          <tr><td>2028</td><td>10</td></tr>
          <tr><td>2029</td><td>11</td></tr>
          <tr><td>2030</td><td>12</td></tr>
        </tbody>
      </table>
    `,
    explicacion: `
      <h3>Transición de la reforma de 2026</h3>
      <p>El tope es 9 horas en 2026 y 2027; 12 se alcanzan en 2030. El artículo 68 regula el exceso y otros límites. Consulta el decreto del 1 de mayo de 2026 y sus transitorios.</p>
    `,
    relacionados: ["Art. 67", "Art. 68", "Art. 58"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: WORKING_HOURS_DECREE_URL,
    textKind: "educational-summary"
  },
  // Vacaciones
  {
    id: "art76",
    numero: "76",
    titulo: "Derecho a vacaciones",
    categoria: "Vacaciones",
    listing: { groupId: "vacaciones", preview: "El mínimo anual de vacaciones pagadas es de 12 días laborables al completar el primer año y aumenta con la antigüedad.", keywords: ["vacaciones", "derecho", "período anual"] },
    contenido: `
      <h3>Artículo 76</h3>
      <p>Resumen educativo: al completar el primer año de servicios corresponden al menos 12 días laborables de vacaciones pagadas. El mínimo aumenta 2 días por cada año siguiente hasta llegar a 20 en el quinto año.</p>

      <p>A partir del sexto año, el mínimo aumenta 2 días por cada cinco años de servicio.</p>
    `,
    explicacion: `
      <h3>Explicación práctica</h3>
      <p>Establece el derecho fundamental a vacaciones pagadas para todos los trabajadores.</p>

      <h3>Tabla de vacaciones</h3>
      <ul>
        <li><strong>1er año:</strong> 12 días</li>
        <li><strong>2do año:</strong> 14 días</li>
        <li><strong>3er año:</strong> 16 días</li>
        <li><strong>4to año:</strong> 18 días</li>
        <li><strong>5to año:</strong> 20 días</li>
        <li><strong>6to-10mo año:</strong> 22 días</li>
        <li><strong>11mo-15to año:</strong> 24 días</li>
      </ul>

      <h3>Requisitos</h3>
      <p>Si la relación termina antes de completar el año, el artículo 79 contempla una remuneración proporcional al tiempo de servicios.</p>
    `,
    relacionados: ["Art. 79", "Art. 80", "Art. 81"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13"
  },
  {
    id: "art79",
    numero: "79",
    titulo: "Prohibición de sustituir vacaciones por dinero",
    categoria: "Vacaciones",
    listing: { groupId: "vacaciones", preview: "Durante la relación laboral el pago no sustituye las vacaciones; al terminar antes del año de servicios corresponde la remuneración proporcional.", keywords: ["descanso", "terminación", "proporcional"] },
    contenido: `
      <h3>Artículo 79</h3>
      <p>Resumen educativo: durante la relación laboral las vacaciones no se sustituyen por una remuneración. Si la relación termina antes de completar el año de servicios, corresponde un pago proporcional al tiempo trabajado.</p>
    `,
    explicacion: `
      <h3>Explicación práctica</h3>
      <p>Protege el descanso y regula la remuneración proporcional cuando la relación termina antes del año.</p>

      <h3>Descanso y terminación</h3>
      <ul>
        <li><strong>Durante el empleo:</strong> El pago no sustituye los días de descanso</li>
        <li><strong>Terminación antes del año:</strong> Corresponde una remuneración proporcional</li>
        <li><strong>Programación y constancia:</strong> Se regulan en el artículo 81</li>
      </ul>

      <h3>Derechos del trabajador</h3>
      <p>Puede exigir el descanso y revisar las prestaciones pendientes al terminar la relación laboral.</p>
    `,
    relacionados: ["Art. 76", "Art. 80", "Art. 78"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13"
  },
  {
    id: "art80",
    numero: "80",
    titulo: "Prima vacacional",
    categoria: "Vacaciones",
    listing: { groupId: "vacaciones", preview: "Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el período de vacaciones.", keywords: ["prima vacacional", "25%", "salario vacaciones"] },
    contenido: `
      <h3>Artículo 80</h3>
      <p>Resumen educativo: además del salario correspondiente al período de vacaciones, la prima debe ser al menos el 25% de ese salario.</p>
    `,
    explicacion: `
      <h3>Explicación práctica</h3>
      <p>Establece el derecho a recibir un bono adicional al salario de vacaciones.</p>

      <h3>Cálculo de la prima vacacional</h3>
      <ul>
        <li><strong>Porcentaje mínimo:</strong> 25% del salario de vacaciones</li>
        <li><strong>Base de cálculo:</strong> Salario que se paga durante las vacaciones</li>
        <li><strong>Ejemplo:</strong> Con $500 diarios y 12 días de vacaciones, el salario del período es $6,000 y la prima mínima es $1,500</li>
      </ul>

      <h3>Pago obligatorio</h3>
      <p>Es un derecho irrenunciable que se debe pagar junto con el salario de vacaciones.</p>
    `,
    relacionados: ["Art. 76", "Art. 79", "Art. 81"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13"
  },
  // Aguinaldo
  {
    id: "art87",
    numero: "87",
    titulo: "Derecho al aguinaldo",
    categoria: "Aguinaldo",
    listing: { groupId: "aguinaldo", preview: "Mínimo anual de 15 días de salario antes del 20 de diciembre; pago proporcional cuando corresponda.", keywords: ["aguinaldo", "15 días", "diciembre", "anual"] },
    contenido: `
      <p>El aguinaldo anual bajo la LFT tiene un mínimo de 15 días de salario y debe pagarse antes del 20 de diciembre. Corresponde una parte proporcional si no se completó el año, aunque haya terminado la relación laboral antes del pago.</p>
    `,
    explicacion: `
      <p>Es un mínimo: las condiciones de trabajo pueden reconocer una prestación mayor. El importe proporcional depende del tiempo efectivamente trabajado y del salario que corresponda. Este resumen trata el régimen de la LFT, no las reglas particulares del servicio público ni un cálculo individual.</p>
    `,
    relacionados: ["Art. 84", "Art. 88", "Art. 76"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  // Terminación de la Relación Laboral
  {
    id: "art47",
    numero: "47",
    titulo: "Causas de rescisión sin responsabilidad para el patrón",
    categoria: "Rescisión",
    listing: { groupId: "terminacion", preview: "Causas y requisitos de rescisión; aviso escrito y efectos de su ausencia.", keywords: ["rescisión", "causas justificadas", "patrón"] },
    contenido: `
      <p>El artículo 47 contempla causales de rescisión sin responsabilidad para la persona empleadora, con requisitos y excepciones propios de cada supuesto. Entre ellas figuran conductas graves de violencia, daños materiales intencionales y más de tres ausencias sin permiso ni justificación en un período de treinta días. Consulta la lista completa y sus condiciones en la fuente oficial.</p>
    `,
    explicacion: `
      <p>La persona empleadora debe indicar por escrito las conductas y fechas que motivan la rescisión. La ley prevé entrega personal al momento del despido o comunicación al Tribunal competente dentro de los cinco días hábiles posteriores, para su notificación. La falta de aviso genera una presunción de despido injustificado, salvo prueba en contrario. Esto no determina por sí solo el resultado de un caso; consulta asesoría laboral sobre plazos y prestaciones pendientes.</p>
    `,
    relacionados: ["Art. 46", "Art. 48", "Art. 50"],
    vigencia: "Vigente",
    fechaRevision: "2026-11-27",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art48",
    numero: "48",
    titulo: "Derechos del trabajador despedido injustificadamente",
    categoria: "Despido",
    listing: { groupId: "terminacion", preview: "Ante un despido injustificado puede solicitarse reinstalación o indemnización, conforme a los requisitos y procedimientos aplicables.", keywords: ["despido", "reinstalación", "indemnización", "elección"] },
    contenido: `
      <h3>Artículo 48</h3>
      <p>Resumen educativo: ante un despido injustificado, la persona trabajadora puede solicitar reinstalación o una indemnización de tres meses de salario, conforme a los requisitos aplicables.</p>

      <p>Los salarios vencidos y otras cantidades se determinan según el supuesto legal, sus límites y la resolución. Consulta el artículo oficial y solicita asesoría para tu caso.</p>
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
        <li><strong>Salarios vencidos:</strong> Cuando procedan, con los límites establecidos por la ley</li>
        <li><strong>Carga de la prueba:</strong> El patrón debe demostrar la causa</li>
        <li><strong>Cálculo:</strong> Solicita orientación para identificar la base salarial y las prestaciones aplicables</li>
      </ul>

      <h3>Proceso recomendado</h3>
      <p>1. Solicitar asesoría sobre la autoridad competente y la conciliación prejudicial, cuando corresponda</p>
      <p>2. Elegir entre reinstalación o indemnización</p>
      <p>3. Solicitar salarios vencidos</p>
      <p>4. Aportar pruebas de la relación laboral</p>
    `,
    relacionados: ["Art. 47", "Art. 50", "Art. 870"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13"
  },
  {
    id: "art50",
    numero: "50",
    titulo: "Indemnizaciones en los supuestos del artículo 49",
    categoria: "Despido",
    listing: { groupId: "terminacion", preview: "Los conceptos y montos dependen del supuesto jurídico, del tipo de relación laboral y de su duración; no se suman automáticamente en todo despido.", keywords: ["indemnización", "despido injustificado", "3 meses"] },
    contenido: `
      <h3>Artículo 50</h3>
      <p>Resumen educativo: este artículo regula las indemnizaciones a las que remite el artículo 49. El cálculo depende de la duración y del tipo de relación laboral, además de los requisitos del supuesto aplicable.</p>
      <p>Los 20 días por año no se suman automáticamente en cualquier despido. Las indemnizaciones y salarios vencidos que procedan deben determinarse conforme a la ley y la resolución.</p>
    `,
    explicacion: `
      <h3>Explicación práctica</h3>
      <p>Primero se identifica el supuesto jurídico y después la fórmula que corresponda. Solicita asesoría para revisar el contrato, la forma de terminación, la antigüedad y la base salarial antes de calcular un monto.</p>
    `,
    relacionados: ["Art. 48", "Art. 47", "Art. 162"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13"
  },
  // Artículos adicionales importantes
  {
    id: "art67",
    numero: "67",
    titulo: "Retribución por siniestro o riesgo inminente",
    categoria: "Jornada de Trabajo",
    contenido: `
      <p>Resumen educativo: para las horas del artículo 65, sobre siniestro o riesgo inminente, la retribución es igual a la hora ordinaria.</p>
    `,
    explicacion: `
      <p>Supuesto distinto al tiempo extraordinario del 66.</p>
    `,
    relacionados: ["Art. 65", "Art. 66", "Art. 68"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: OFFICIAL_LFT_URL,
    textKind: "educational-summary"
  },
  {
    id: "art68",
    numero: "68",
    titulo: "Pago de tiempo extraordinario excedente",
    categoria: "Jornada de Trabajo",
    contenido: `
      <h3>Artículo 68</h3>
      <p>Resumen educativo: superar el umbral aplicable del artículo 66 implica pago triple. El exceso no puede ser mayor de 4 horas por semana; la suma ordinaria y extraordinaria no puede superar 12 horas en un día.</p>
    `,
    explicacion: `
      <h3>Explicación práctica</h3>
      <p>Las personas trabajadoras no están obligadas a trabajar más de lo permitido. El umbral cambia con la transición anual del artículo 66; el recargo no autoriza jornadas ilimitadas.</p>
    `,
    relacionados: ["Art. 66", "Art. 67", "Art. 58"],
    vigencia: "Vigente",
    fechaRevision: "2026-10-13",
    sourceUrl: WORKING_HOURS_DECREE_URL,
    textKind: "educational-summary"
  },
  {
    id: "art81",
    numero: "81",
    titulo: "Fijación de período de vacaciones",
    categoria: "Vacaciones",
    contenido: `
      <h3>Artículo 81</h3>
      <p>Resumen educativo: el empleador debe conceder las vacaciones dentro de los seis meses posteriores al aniversario laboral. La constancia anual debe indicar la antigüedad, el período correspondiente y la fecha de disfrute.</p>
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
    fechaRevision: "2026-10-13"
  }
];

export function findArticleDetail(id: string | undefined): ArticleDetail | undefined {
  return ARTICLE_DETAILS.find(article => article.id === id);
}

/** Resuelve una referencia sólo cuando hay contenido local para ese artículo. */
export function findArticleByReference(reference: string): ArticleDetail | undefined {
  return ARTICLE_DETAILS.find(article => `Art. ${article.numero}` === reference);
}

export interface ArticleCard {
  numero: string;
  titulo: string;
  contenido: string;
  temas: string[];
}

export interface ArticleCatalogGroup {
  titulo: string;
  articulos: ArticleCard[];
}

/** El catálogo usa los títulos y números de los mismos artículos que los detalles. */
export const ARTICLE_CATALOG = ARTICLE_DETAILS.reduce<Record<string, ArticleCatalogGroup>>((groups, article) => {
  const listing = article.listing;
  if (!listing) return groups;
  const group = groups[listing.groupId] ??= { titulo: ARTICLE_GROUP_TITLES[listing.groupId], articulos: [] };
  group.articulos.push({
    numero: `Art. ${article.numero}`,
    titulo: article.titulo,
    contenido: listing.preview,
    temas: listing.keywords,
  });
  return groups;
}, {});
