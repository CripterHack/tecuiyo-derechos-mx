import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    categoria: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío de formulario
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo en máximo 48 horas hábiles.",
    });
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      categoria: "",
      mensaje: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contacto
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas, sugerencias o necesitas ayuda? 
            Estamos aquí para ayudarte a navegar tus derechos laborales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Email General</h4>
                  <p className="text-sm text-muted-foreground">hola@tecuiyo.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Soporte Técnico</h4>
                  <p className="text-sm text-muted-foreground">soporte@tecuiyo.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Contenido Legal</h4>
                  <p className="text-sm text-muted-foreground">legal@tecuiyo.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Privacidad</h4>
                  <p className="text-sm text-muted-foreground">privacidad@tecuiyo.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tiempo de Respuesta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Consultas generales:</span>
                  <span className="text-sm font-semibold">24-48 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Soporte técnico:</span>
                  <span className="text-sm font-semibold">12-24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Contenido legal:</span>
                  <span className="text-sm font-semibold">48-72 horas</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Importante
                </h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Tecuiyo proporciona información educativa. Para asesoría legal personalizada, 
                  consulta nuestro <Link to="/directorio" className="underline">directorio de autoridades</Link>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Enviar Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoría *</Label>
                    <Select value={formData.categoria} onValueChange={(value) => handleChange("categoria", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta-general">Consulta General</SelectItem>
                        <SelectItem value="error-tecnico">Error Técnico</SelectItem>
                        <SelectItem value="contenido-legal">Contenido Legal</SelectItem>
                        <SelectItem value="sugerencia">Sugerencia de Mejora</SelectItem>
                        <SelectItem value="calculadora">Problema con Calculadora</SelectItem>
                        <SelectItem value="formularios">Formularios y Documentos</SelectItem>
                        <SelectItem value="otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleChange("asunto", e.target.value)}
                      required
                      placeholder="Describe brevemente tu consulta"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      required
                      placeholder="Describe detalladamente tu consulta, problema o sugerencia..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-amber-700 dark:text-amber-400 text-sm">
                      <strong>Nota:</strong> No incluyas información personal sensible como números 
                      de seguridad social, CURP completo, o datos bancarios en tu mensaje.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Proporcionan asesoría legal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No, Tecuiyo proporciona información educativa sobre derecho laboral. 
                  Para asesoría legal personalizada, consulta con un abogado certificado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Los cálculos son exactos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nuestras calculadoras proporcionan estimaciones basadas en la LFT. 
                  Los montos reales pueden variar según circunstancias específicas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Es gratuito usar Tecuiyo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sí, todas las herramientas y contenido de Tecuiyo son completamente gratuitas 
                  y siempre lo serán.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo se mantiene actualizada la información?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Revisamos y actualizamos el contenido regularmente conforme a cambios 
                  en la legislación laboral mexicana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;