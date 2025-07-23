import { FileText, Download, ArrowLeft, Search, Filter, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Formularios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const formularios = [
    {
      id: 1,
      titulo: "Carta de renuncia voluntaria",
      descripcion: "Formato oficial para presentar tu renuncia de manera adecuada",
      categoria: "renuncia",
      tipo: "Carta",
      requisitos: ["Identificación", "Últimos recibos de nómina"],
      articulosLFT: ["Art. 53"],
      formato: "DOCX/PDF",
      descargas: 1250,
      instrucciones: "Llena tus datos personales, fecha de último día laboral y motivo de renuncia. Entrégala por duplicado y conserva copia sellada."
    },
    {
      id: 2,
      titulo: "Demanda laboral por despido injustificado",
      descripcion: "Formato para iniciar proceso legal ante Junta de Conciliación",
      categoria: "demanda",
      tipo: "Demanda",
      requisitos: ["Contrato de trabajo", "Recibos de nómina", "Carta de despido", "Identificación"],
      articulosLFT: ["Art. 48", "Art. 50", "Art. 870"],
      formato: "PDF",
      descargas: 890,
      instrucciones: "Completa todos los datos solicitados, adjunta documentos de respaldo y presenta ante la Junta correspondiente."
    },
    {
      id: 3,
      titulo: "Solicitud de constancia de trabajo",
      descripcion: "Formato para solicitar constancia laboral a tu empleador",
      categoria: "constancia",
      tipo: "Solicitud",
      requisitos: ["Identificación", "Comprobante de relación laboral"],
      articulosLFT: ["Art. 132"],
      formato: "DOCX",
      descargas: 2100,
      instrucciones: "Presenta la solicitud a Recursos Humanos con 3 días de anticipación. El patrón tiene 3 días para entregarla."
    },
    {
      id: 4,
      titulo: "Queja ante STPS por violaciones laborales",
      descripcion: "Formato para denunciar violaciones a la Ley Federal del Trabajo",
      categoria: "queja",
      tipo: "Queja",
      requisitos: ["Identificación", "Documentos que prueben la violación", "Datos del patrón"],
      articulosLFT: ["Art. 1004"],
      formato: "PDF",
      descargas: 654,
      instrucciones: "Describe detalladamente la violación, adjunta evidencias y presenta en oficinas de STPS."
    },
    {
      id: 5,
      titulo: "Solicitud de cálculo de finiquito",
      descripcion: "Formato para solicitar el cálculo correcto de tu finiquito",
      categoria: "finiquito",
      tipo: "Solicitud",
      requisitos: ["Último recibo de nómina", "Fecha de ingreso", "Motivo de terminación"],
      articulosLFT: ["Art. 76", "Art. 80", "Art. 87", "Art. 162"],
      formato: "DOCX/PDF",
      descargas: 1456,
      instrucciones: "Proporciona toda la información solicitada para obtener un cálculo preciso de tus prestaciones."
    },
    {
      id: 6,
      titulo: "Carta de requerimiento de pago",
      descripcion: "Formato para exigir el pago de salarios y prestaciones adeudadas",
      categoria: "pago",
      tipo: "Carta",
      requisitos: ["Comprobantes de trabajo", "Detalle de adeudos"],
      articulosLFT: ["Art. 58", "Art. 82"],
      formato: "DOCX",
      descargas: 923,
      instrucciones: "Detalla los conceptos adeudados con fechas y montos. Entrega con acuse de recibo."
    },
    {
      id: 7,
      titulo: "Aviso de accidente de trabajo",
      descripcion: "Formato para reportar accidentes laborales ante el IMSS",
      categoria: "accidente",
      tipo: "Aviso",
      requisitos: ["Datos del accidente", "Testigos", "Parte médico"],
      articulosLFT: ["Art. 487"],
      formato: "PDF",
      descargas: 432,
      instrucciones: "Llena inmediatamente después del accidente. Presenta ante IMSS dentro de 72 horas."
    },
    {
      id: 8,
      titulo: "Solicitud de registro sindical",
      descripcion: "Formato para registrar un sindicato ante autoridades laborales",
      categoria: "sindical",
      tipo: "Registro",
      requisitos: ["Acta constitutiva", "Estatutos", "Lista de directiva", "Padrón de agremiados"],
      articulosLFT: ["Art. 365"],
      formato: "PDF",
      descargas: 156,
      instrucciones: "Completa todos los anexos requeridos y presenta ante el Centro Federal de Conciliación."
    }
  ];

  const categorias = [
    { value: "all", label: "Todos los formularios" },
    { value: "renuncia", label: "Renuncia" },
    { value: "demanda", label: "Demandas" },
    { value: "constancia", label: "Constancias" },
    { value: "queja", label: "Quejas" },
    { value: "finiquito", label: "Finiquito" },
    { value: "pago", label: "Pagos" },
    { value: "accidente", label: "Accidentes" },
    { value: "sindical", label: "Sindicatos" }
  ];

  const filteredFormularios = formularios.filter(formulario => {
    const matchesSearch = formulario.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formulario.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || formulario.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "Carta": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "Demanda": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      case "Solicitud": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Queja": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Aviso": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      case "Registro": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Formularios y Documentos</h1>
              <p className="text-primary-foreground/80">Plantillas legales para resolver tus trámites laborales</p>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer de construcción */}
      <section className="py-4 bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm text-amber-700 dark:text-amber-300 text-center">
            <strong>🚧 En construcción:</strong> Esta sección está siendo desarrollada. La funcionalidad de descarga y vista previa de documentos estará disponible próximamente.
          </p>
        </div>
      </section>

      {/* Disclaimer legal */}
      <section className="py-4 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm text-destructive text-center">
            <strong>Importante:</strong> Los formularios son plantillas orientativas. 
            Para casos complejos, consulta con un abogado laboral o las autoridades competentes.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 px-4 border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar formularios por nombre o tipo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
              >
                {categorias.map(categoria => (
                  <option key={categoria.value} value={categoria.value}>
                    {categoria.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{formularios.length}</div>
              <div className="text-sm text-muted-foreground">Formularios disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">
                {formularios.reduce((sum, f) => sum + f.descargas, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Descargas totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Gratis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Legal</div>
              <div className="text-sm text-muted-foreground">Validado jurídicamente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de formularios */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {filteredFormularios.length} formularios encontrados
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              Filtrado por: {categorias.find(c => c.value === selectedCategory)?.label}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {filteredFormularios.map(formulario => (
              <Card key={formulario.id} className="legal-card group hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTipoColor(formulario.tipo)}>
                          {formulario.tipo}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {formulario.formato}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {formulario.descargas} descargas
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {formulario.titulo}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {formulario.descripcion}
                      </CardDescription>
                    </div>
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Artículos LFT relacionados */}
                  <div className="flex flex-wrap gap-1">
                    {formulario.articulosLFT.map(articulo => (
                      <Badge key={articulo} className="lft-badge text-xs">
                        {articulo}
                      </Badge>
                    ))}
                  </div>

                  {/* Requisitos */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Documentos necesarios:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {formulario.requisitos.map((requisito, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                          {requisito}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instrucciones */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Instrucciones de uso:</h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {formulario.instrucciones}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-2 pt-2">
                    <Link to={`/formularios/${formulario.id}`} className="flex-1">
                      <Button className="w-full btn-hero">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                    </Link>
                    <Link to={`/formularios/${formulario.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-3 w-3" />
                        Vista previa
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFormularios.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron formularios</h3>
              <p className="text-muted-foreground mb-4">
                Intenta con otros términos de búsqueda o explora todas las categorías
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Ver todos los formularios
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Ayuda adicional */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="instrucciones" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="instrucciones">Cómo usar los formularios</TabsTrigger>
              <TabsTrigger value="tips">Tips importantes</TabsTrigger>
            </TabsList>

            <TabsContent value="instrucciones" className="mt-6">
              <Card className="legal-card">
                <CardHeader>
                  <CardTitle>Instrucciones generales</CardTitle>
                  <CardDescription>
                    Pasos básicos para utilizar cualquier formulario legal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">1</span>
                      <div>
                        <strong>Descarga el formulario</strong> en el formato que prefieras (DOCX para editar, PDF para imprimir)
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">2</span>
                      <div>
                        <strong>Reúne los documentos</strong> listados en la sección "Documentos necesarios"
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">3</span>
                      <div>
                        <strong>Llena todos los campos</strong> con información veraz y completa
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">4</span>
                      <div>
                        <strong>Revisa la información</strong> antes de presentar o enviar el documento
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">5</span>
                      <div>
                        <strong>Conserva copias</strong> selladas o con acuse de recibo para tu archivo
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tips" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="legal-card">
                  <CardHeader>
                    <CardTitle className="text-lg">✅ Haz esto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Lee completo el formulario antes de llenarlo</li>
                      <li>• Usa tinta azul o negra para documentos físicos</li>
                      <li>• Adjunta copias, conserva originales</li>
                      <li>• Presenta dentro de los plazos legales</li>
                      <li>• Solicita acuse de recibo siempre</li>
                      <li>• Consulta con expertos para casos complejos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="legal-card">
                  <CardHeader>
                    <CardTitle className="text-lg">❌ Evita esto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• No dejes campos en blanco sin justificación</li>
                      <li>• No uses corrector líquido en documentos oficiales</li>
                      <li>• No proporciones información falsa</li>
                      <li>• No presentes documentos incompletos</li>
                      <li>• No firmes en blanco</li>
                      <li>• No olvides revisar fechas y datos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Formularios;