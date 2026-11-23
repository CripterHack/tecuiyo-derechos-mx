export interface LaborAuthority {
  id: number;
  nombre: string;
  tipo: "Conciliación local" | "Junta Local" | "Federal" | "Orientación";
  estado: string;
  direccion?: string;
  sedes?: string[];
  descripcion?: string;
  telefonos?: string[];
  horarios?: string;
  servicios: string[];
  website: string;
  websiteLabel?: string;
}

export const laborAuthorities: LaborAuthority[] = [
  {
    id: 7,
    nombre: "Centro de Conciliación Laboral de la Ciudad de México",
    tipo: "Conciliación local",
    estado: "Ciudad de México",
    direccion: "Dr. Andrade 45, Doctores, Cuauhtémoc, 06720 Ciudad de México",
    descripcion: "Conciliación prejudicial para asuntos de competencia local en la Ciudad de México, salvo las excepciones legales.",
    servicios: ["Conciliación local", "Orientación sobre competencia"],
    website: "https://www.ccl.cdmx.gob.mx/",
  },
  {
    id: 1,
    nombre: "Junta Local de Conciliación y Arbitraje de la CDMX",
    tipo: "Junta Local",
    estado: "Ciudad de México",
    descripcion: "Seguimiento de expedientes del sistema anterior",
    servicios: ["Expedientes de la Junta", "Ejecución de laudos"],
    website: "https://dof.gob.mx/abrirPDF.php?anio=2019&archivo=01052019-MAT.pdf&repo=repositorio%2F#page=92",
    websiteLabel: "Consultar transición en el DOF",
  },
  {
    id: 2,
    nombre: "Secretaría del Trabajo y Previsión Social (STPS)",
    tipo: "Federal",
    estado: "Nacional",
    direccion: "Paseo de la Reforma 51, Tabacalera, Cuauhtémoc, 06030 Ciudad de México",
    telefonos: ["55 2000 5300"],
    horarios: "Lunes a Viernes 9:00 - 18:00",
    servicios: ["Inspección laboral", "Capacitación", "Seguridad e higiene", "Mediación"],
    website: "https://www.gob.mx/stps",
  },
  {
    id: 3,
    nombre: "Centro Federal de Conciliación y Registro Laboral",
    tipo: "Federal",
    estado: "Nacional",
    sedes: ["Ciudad de México"],
    descripcion: "Para asuntos de competencia federal. El directorio oficial reúne las sedes, incluidas las de la Ciudad de México.",
    servicios: ["Conciliación federal", "Registro sindical", "Contratos colectivos"],
    website: "https://conciliacion.centrolaboral.gob.mx/asesoria/inicio",
  },
  {
    id: 4,
    nombre: "Procuraduría Federal de la Defensa del Trabajo (PROFEDET)",
    tipo: "Orientación",
    estado: "Nacional",
    sedes: ["Ciudad de México"],
    descripcion: "Si no sabes a qué institución acudir, puedes pedir orientación. Los servicios de PROFEDET son gratuitos.",
    telefonos: ["800 717 2942", "800 911 7877"],
    servicios: ["Orientación jurídica", "Asesoría gratuita", "Representación legal"],
    website: "https://www.profedet.gob.mx/micrositio/sedes/sedes.html",
  },
  {
    id: 5,
    nombre: "Junta Local de Conciliación y Arbitraje de Jalisco",
    tipo: "Junta Local",
    estado: "Jalisco",
    direccion: "Av. Alcalde 1351, Miraflores, 44270 Guadalajara, Jal.",
    telefonos: ["33 3668 1600"],
    horarios: "Lunes a Viernes 8:30 - 15:30",
    servicios: ["Conciliación", "Arbitraje", "Ejecución de laudos"],
    website: "https://jcajalisco.gob.mx/",
  },
  {
    id: 6,
    nombre: "Junta Local de Conciliación y Arbitraje de Nuevo León",
    tipo: "Junta Local",
    estado: "Nuevo León",
    direccion: "Washington 2000 Ote., Centro, 64000 Monterrey, N.L.",
    telefonos: ["81 2020 5050"],
    horarios: "Lunes a Viernes 8:00 - 15:00",
    servicios: ["Conciliación", "Demandas laborales", "Registro sindical"],
    website: "https://www.nl.gob.mx/junta-conciliacion-arbitraje",
  }
];
