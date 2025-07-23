import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { SafeHtml } from "@/utils/sanitizer";
import { guiasPrincipales } from "@/data/guias";

const GuiaDetalle = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const guia = guiasPrincipales.find(g => g.id === id);

  if (!guia) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/guias" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías
          </Link>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Guía no encontrada</h2>
              <p className="text-muted-foreground">La guía solicitada no existe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Básico": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Intermedio": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"; 
      case "Avanzado": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleComenzarGuia = () => {
    toast({
      title: "Iniciando guía",
      description: "La guía paso a paso se ha iniciado correctamente.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4">
        <Link 
          to="/guias" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Guías
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{guia.titulo}</CardTitle>
                    <CardDescription className="text-base">
                      {guia.descripcion}
                    </CardDescription>
                  </div>
                  <Badge className={getDificultadColor(guia.dificultad)}>
                    {guia.dificultad}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <SafeHtml 
                  html={guia.contenidoCompleto}
                  className="prose prose-sm max-w-none dark:prose-invert"
                />
              </CardContent>
            </Card>

            {/* Pasos de la guía */}
            <Card>
              <CardHeader>
                <CardTitle>Pasos de la guía</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guia.pasoDetallado.map((paso, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-primary/10 text-primary border-2 border-primary/20">
                        {paso.numero}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{paso.titulo}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{paso.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-6">

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información de la Guía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duración</p>
                    <p className="text-xs text-muted-foreground">{guia.duracion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Dirigido a</p>
                    <p className="text-xs text-muted-foreground">{guia.categoria}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Pasos totales</p>
                    <p className="text-xs text-muted-foreground">{guia.pasos} pasos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artículos Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {guia.articulosLFT.map((articulo, index) => (
                    <Badge key={index} variant="outline">
                      {articulo}
                    </Badge>
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

export default GuiaDetalle;