import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Eye, Clock, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { SafeHtml } from "@/utils/sanitizer";

const FormularioDetalle = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const formularios = [
    {
      id: "1",
      titulo: "Solicitud de Empleo",
      descripcion: "Formato estándar para solicitar empleo en empresas del sector privado y público.",
      categoria: "Contratación",
      requisitos: ["Identificación oficial", "CURP", "Comprobante de domicilio", "Fotografías"],
      tiempoLlenado: "15-20 minutos",
      formato: "PDF",
      tamaño: "2.3 MB",
      version: "2024.1",
      contenido: `
        <h3>Sección I: Datos Personales</h3>
        <p>Complete todos los campos con letra legible o máquina de escribir.</p>
        
        <h3>Sección II: Experiencia Laboral</h3>
        <p>Detalle su experiencia laboral de los últimos 5 años, comenzando por el empleo más reciente.</p>
        
        <h3>Sección III: Referencias</h3>
        <p>Proporcione al menos dos referencias laborales y una personal.</p>
        
        <h3>Sección IV: Declaración</h3>
        <p>Declaro bajo protesta de decir verdad que los datos proporcionados son correctos.</p>
      `,
      instrucciones: [
        "Imprimir el formulario en papel blanco tamaño carta",
        "Llenar con tinta azul o negra, letra legible",
        "No dejar campos en blanco, usar 'N/A' si no aplica",
        "Adjuntar documentos requeridos",
        "Firmar y fechar el documento"
      ]
    },
    {
      id: "2",
      titulo: "Aviso de Rescisión de Contrato",
      descripcion: "Documento para notificar oficialmente la terminación de la relación laboral.",
      categoria: "Terminación",
      requisitos: ["Contrato original", "Identificación", "Justificación legal"],
      tiempoLlenado: "10-15 minutos",
      formato: "PDF",
      tamaño: "1.8 MB",
      version: "2024.1",
      contenido: `
        <h3>Datos del Empleador</h3>
        <p>Razón social, RFC, domicilio fiscal</p>
        
        <h3>Datos del Trabajador</h3>
        <p>Nombre completo, puesto, fecha de ingreso</p>
        
        <h3>Causa de Rescisión</h3>
        <p>Fundamento legal según el artículo 47 de la LFT</p>
        
        <h3>Fecha de Terminación</h3>
        <p>Fecha efectiva de la terminación de la relación laboral</p>
      `,
      instrucciones: [
        "Verificar la causa legal de rescisión",
        "Notificar por escrito al trabajador",
        "Conservar copia con acuse de recibo",
        "Realizar cálculos de finiquito correspondientes",
        "Registrar en IMSS dentro de 5 días hábiles"
      ]
    }
  ];

  const formulario = formularios.find(f => f.id === id);

  if (!formulario) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/formularios" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a Formularios
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Formulario no encontrado</h2>
              <p className="text-muted-foreground">El formulario solicitado no existe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getTipoColor = (categoria: string) => {
    switch (categoria) {
      case "Contratación": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "Terminación": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      case "Modificación": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleDescargar = () => {
    toast({
      title: "Descarga iniciada",
      description: `Descargando ${formulario.titulo}...`,
    });
    // Simular descarga
    setTimeout(() => {
      toast({
        title: "Descarga completada",
        description: "El formulario se ha descargado correctamente.",
      });
    }, 2000);
  };

  const handleVistaPrevia = () => {
    toast({
      title: "Vista previa",
      description: "Abriendo vista previa del formulario...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/formularios" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Formularios
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Información Principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{formulario.titulo}</CardTitle>
                    <CardDescription className="text-base">
                      {formulario.descripcion}
                    </CardDescription>
                  </div>
                  <Badge className={getTipoColor(formulario.categoria)}>
                    {formulario.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Este formulario debe ser llenado completamente y firmado para tener validez legal.
                  </AlertDescription>
                </Alert>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contenido del Formulario</h3>
                  <SafeHtml 
                    html={formulario.contenido}
                    className="prose prose-sm max-w-none dark:prose-invert"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Instrucciones de Llenado</h3>
                  <ol className="space-y-2">
                    {formulario.instrucciones.map((instruccion, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{instruccion}</span>
                      </li>
                    ))}
                  </ol>
                </div>
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
                  onClick={handleDescargar}
                  className="w-full"
                  size="lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
                <Button 
                  onClick={handleVistaPrevia}
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Vista Previa
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información del Archivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Formato</p>
                    <p className="text-xs text-muted-foreground">{formulario.formato}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Tamaño</p>
                    <p className="text-xs text-muted-foreground">{formulario.tamaño}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Tiempo estimado</p>
                    <p className="text-xs text-muted-foreground">{formulario.tiempoLlenado}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documentos Requeridos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {formulario.requisitos.map((requisito, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {requisito}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioDetalle;