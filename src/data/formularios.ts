interface FormularioBase {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  etiquetaCategoria: string;
  orientaciones: string[];
}

export type FormularioEducativo = FormularioBase & (
  | { estado: "disponible"; plantilla: { archivo: string; texto: string } }
  | { estado: "preparacion"; plantilla?: never }
);

export const EDUCATIONAL_NOTICE = "Estos recursos son educativos y orientativos. No son formatos oficiales ni sustituyen asesoría jurídica. Revisa y adapta cualquier texto antes de enviarlo o firmarlo; no firmes documentos en blanco ni textos que no comprendas.";

const TEMPLATE_NOTICE = "No es un formato oficial ni sustituye asesoría jurídica. Revisa y adapta este ejemplo antes de enviarlo o firmarlo. No garantiza un resultado.";

export const formularios: FormularioEducativo[] = [
  {
    id: "1",
    titulo: "Renuncia voluntaria",
    descripcion: "Recurso orientativo en preparación sobre decisiones y documentos al terminar una relación de trabajo.",
    categoria: "renuncia",
    etiquetaCategoria: "Renuncia",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece una carta para firmar o descargar.",
      "Busca orientación si tienes dudas sobre el contenido o las circunstancias de una renuncia.",
      "Conserva los documentos y comunicaciones que quieras revisar con una persona asesora.",
    ],
  },
  {
    id: "2",
    titulo: "Despido injustificado",
    descripcion: "Recurso orientativo en preparación sobre cómo buscar apoyo ante un despido.",
    categoria: "demanda",
    etiquetaCategoria: "Despido",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece una demanda ni un formato de presentación.",
      "Consulta cuanto antes a una autoridad o persona asesora sobre la vía y los plazos de tu caso.",
      "Organiza los documentos y comunicaciones relacionados con tu empleo y su terminación.",
    ],
  },
  {
    id: "3",
    titulo: "Solicitud de constancia de trabajo",
    descripcion: "Ejemplo de una solicitud sencilla de información sobre tu periodo de trabajo y puesto.",
    categoria: "constancia",
    etiquetaCategoria: "Constancias",
    estado: "disponible",
    orientaciones: [
      "Sustituye los campos entre corchetes por los datos que quieras incluir.",
      "Comprueba destinatario, fechas y puesto antes de enviar la solicitud.",
      "Incluye solo los datos de contacto que consideres necesarios y conserva una copia.",
    ],
    plantilla: {
      archivo: "solicitud-constancia-trabajo.txt",
      texto: `TECUIYO — PLANTILLA EDUCATIVA

Solicitud de constancia de trabajo

${TEMPLATE_NOTICE}

[Lugar y fecha]
A: [Persona o área destinataria]
Asunto: Solicitud de constancia de trabajo

Mi nombre es [Nombre completo]. Trabajé o trabajo en [Nombre de la empresa o empleador], en el puesto de [Puesto], durante el periodo [Fecha de ingreso] a [Fecha de salida o "actualmente"].

Solicito una constancia de trabajo que indique mi periodo de servicio y el puesto desempeñado. Agradezco que, antes de su entrega, se revisen los datos incluidos y se me indique cómo puedo recibirla.

[Información adicional que quieras solicitar, si corresponde]

Gracias por la atención.

[Nombre completo]
[Medio de contacto elegido]
[Firma, solo después de revisar y adaptar el texto, si decides incluirla]

Antes de enviar: sustituye los campos entre corchetes, revisa los datos y conserva una copia. Este ejemplo no establece requisitos ni plazos para tu caso.
`,
    },
  },
  {
    id: "4",
    titulo: "Quejas por incumplimientos laborales",
    descripcion: "Recurso orientativo en preparación para organizar una consulta sobre posibles incumplimientos.",
    categoria: "queja",
    etiquetaCategoria: "Quejas",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece un formato de queja.",
      "Anota los hechos que quieras consultar y organiza las comunicaciones disponibles.",
      "Confirma con la autoridad correspondiente la vía, los requisitos y los plazos aplicables.",
    ],
  },
  {
    id: "5",
    titulo: "Solicitud de desglose de finiquito",
    descripcion: "Ejemplo para pedir información sobre conceptos, montos y datos usados en un cálculo de finiquito.",
    categoria: "finiquito",
    etiquetaCategoria: "Finiquito",
    estado: "disponible",
    orientaciones: [
      "Adapta la solicitud a la información que necesitas aclarar.",
      "Este texto solicita información; no es un recibo de pago ni un convenio de terminación.",
      "Revisa por separado cualquier recibo, acuerdo o documento que te pidan firmar y busca orientación si tienes dudas.",
    ],
    plantilla: {
      archivo: "solicitud-desglose-finiquito.txt",
      texto: `TECUIYO — PLANTILLA EDUCATIVA

Solicitud de desglose de finiquito

${TEMPLATE_NOTICE}

[Lugar y fecha]
A: [Persona o área destinataria]
Asunto: Solicitud de información sobre el desglose de finiquito

Mi nombre es [Nombre completo]. Mi relación de trabajo con [Nombre de la empresa o empleador] comprende el periodo [Fecha de ingreso] a [Fecha de salida o fecha por aclarar], en el puesto de [Puesto].

Solicito un desglose por escrito de los conceptos y montos propuestos en mi finiquito, junto con las fechas, periodos, salario de referencia y demás datos utilizados para cada cálculo.

Agradezco que se identifiquen los pagos ya realizados y las cantidades pendientes que se hayan considerado, así como cualquier documento que permita revisar ese desglose.

[Conceptos o datos específicos que quieras aclarar]

Mi intención con esta solicitud es obtener información para revisarla. No estoy expresando conformidad con los montos propuestos mediante este texto.

Gracias por la atención.

[Nombre completo]
[Medio de contacto elegido]
[Firma, solo después de revisar y adaptar el texto, si decides incluirla]

Antes de enviar: sustituye los campos entre corchetes, revisa los datos y conserva una copia. Esta solicitud no es un recibo de pago ni un convenio y no sustituye la revisión de esos documentos.
`,
    },
  },
  {
    id: "6",
    titulo: "Solicitud de pago de adeudos",
    descripcion: "Recurso orientativo en preparación sobre consultas relacionadas con pagos pendientes.",
    categoria: "pago",
    etiquetaCategoria: "Pagos",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece una carta de requerimiento.",
      "Organiza los pagos y periodos que quieres aclarar, junto con los comprobantes disponibles.",
      "Busca orientación sobre la vía y los plazos de tu caso antes de presentar un requerimiento.",
    ],
  },
  {
    id: "7",
    titulo: "Accidente de trabajo",
    descripcion: "Recurso orientativo en preparación sobre dónde consultar los procedimientos relacionados con un accidente.",
    categoria: "accidente",
    etiquetaCategoria: "Accidentes",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece un aviso de accidente ni un formato médico.",
      "Si necesitas atención médica urgente, busca atención inmediata.",
      "Consulta directamente con tu institución de salud y la autoridad correspondiente los formatos, requisitos y plazos aplicables.",
    ],
  },
  {
    id: "8",
    titulo: "Registro sindical",
    descripcion: "Recurso orientativo en preparación sobre consultas para el registro de organizaciones sindicales.",
    categoria: "sindical",
    etiquetaCategoria: "Sindicatos",
    estado: "preparacion",
    orientaciones: [
      "Este recurso todavía no ofrece una solicitud de registro ni anexos.",
      "Consulta con la autoridad competente los documentos y el procedimiento aplicables a tu organización.",
      "Busca asesoría para revisar los documentos antes de presentarlos.",
    ],
  },
];

export const categoriasFormularios = [
  { value: "all", label: "Todos los recursos" },
  ...formularios.map(({ categoria, etiquetaCategoria }) => ({ value: categoria, label: etiquetaCategoria })),
];
