import { Calculator, ArrowLeft, Info, DollarSign, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";

const Calculadora = () => {
  const [salarioDiario, setSalarioDiario] = useState("");
  const [antiguedad, setAntiguedad] = useState("");
  const [tipoSeparacion, setTipoSeparacion] = useState("");
  const [resultado, setResultado] = useState<any>(null);

  const calcularLiquidacion = () => {
    if (!salarioDiario || !antiguedad || !tipoSeparacion) return;

    const salario = parseFloat(salarioDiario);
    const anos = parseFloat(antiguedad);
    
    // Fórmulas basadas en LFT
    const indemnizacion = salario * 90; // Art. 50 LFT - 3 meses
    const primaAntiguedad = salario * 12 * anos; // Art. 162 LFT
    const vacacionesProporcionales = (salario * 6 * (new Date().getMonth() + 1)) / 12; // Proporcional
    const primaVacacional = vacacionesProporcionales * 0.25; // 25% de vacaciones
    const aguinaldoProporcional = (salario * 15 * (new Date().getMonth() + 1)) / 12; // Proporcional

    let total = 0;
    let conceptos: any[] = [];

    if (tipoSeparacion === "despido_injustificado") {
      // Art. 48 LFT - Despido injustificado
      conceptos = [
        { concepto: "Indemnización (3 meses)", monto: indemnizacion, articulo: "Art. 50 LFT" },
        { concepto: "Prima de antigüedad", monto: primaAntiguedad, articulo: "Art. 162 LFT" },
        { concepto: "Vacaciones proporcionales", monto: vacacionesProporcionales, articulo: "Art. 76 LFT" },
        { concepto: "Prima vacacional (25%)", monto: primaVacacional, articulo: "Art. 80 LFT" },
        { concepto: "Aguinaldo proporcional", monto: aguinaldoProporcional, articulo: "Art. 87 LFT" }
      ];
    } else if (tipoSeparacion === "renuncia") {
      // Renuncia voluntaria
      conceptos = [
        { concepto: "Prima de antigüedad", monto: primaAntiguedad, articulo: "Art. 162 LFT" },
        { concepto: "Vacaciones proporcionales", monto: vacacionesProporcionales, articulo: "Art. 76 LFT" },
        { concepto: "Prima vacacional (25%)", monto: primaVacacional, articulo: "Art. 80 LFT" },
        { concepto: "Aguinaldo proporcional", monto: aguinaldoProporcional, articulo: "Art. 87 LFT" }
      ];
    }

    total = conceptos.reduce((sum, item) => sum + item.monto, 0);

    setResultado({
      conceptos,
      total,
      salarioDiario: salario,
      antiguedad: anos,
      tipo: tipoSeparacion
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <Calculator className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Calculadora de Liquidación</h1>
              <p className="text-primary-foreground/80">Calcula tu liquidación conforme a la Ley Federal del Trabajo</p>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer */}
      <section className="py-4 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-sm text-destructive">
              <strong>Aviso:</strong> Este cálculo es orientativo y no constituye asesoría legal. 
              Los montos pueden variar según circunstancias específicas. Consulte con un abogado laboral para casos particulares.
            </p>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <Card className="legal-card">
              <CardHeader>
                <CardTitle>Datos para el cálculo</CardTitle>
                <CardDescription>
                  Ingresa la información requerida para calcular tu liquidación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="salario">Salario diario (pesos mexicanos)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="salario"
                      type="number"
                      placeholder="250.00"
                      value={salarioDiario}
                      onChange={(e) => setSalarioDiario(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tu salario diario según tu contrato o comprobantes de pago
                  </p>
                </div>

                <div>
                  <Label htmlFor="antiguedad">Antigüedad (años)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="antiguedad"
                      type="number"
                      step="0.1"
                      placeholder="2.5"
                      value={antiguedad}
                      onChange={(e) => setAntiguedad(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tiempo trabajado en años (ej: 2.5 años = 2 años y 6 meses)
                  </p>
                </div>

                <div>
                  <Label htmlFor="tipo">Tipo de separación laboral</Label>
                  <Select value={tipoSeparacion} onValueChange={setTipoSeparacion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de separación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="despido_injustificado">Despido injustificado</SelectItem>
                      <SelectItem value="renuncia">Renuncia voluntaria</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    Selecciona si renunciaste o te despidieron sin causa justificada
                  </p>
                </div>

                <Button 
                  onClick={calcularLiquidacion}
                  className="w-full btn-hero"
                  disabled={!salarioDiario || !antiguedad || !tipoSeparacion}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calcular liquidación
                </Button>
              </CardContent>
            </Card>

            {/* Resultados */}
            <Card className="legal-card">
              <CardHeader>
                <CardTitle>Resultado del cálculo</CardTitle>
                <CardDescription>
                  Desglose de tu liquidación por conceptos legales
                </CardDescription>
              </CardHeader>
              <CardContent>
                {resultado ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Total a recibir</h3>
                      <p className="text-3xl font-bold text-accent">
                        ${resultado.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Desglose por conceptos:</h4>
                      {resultado.conceptos.map((item: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                          <div>
                            <p className="font-medium">{item.concepto}</p>
                            <span className="lft-badge text-xs">{item.articulo}</span>
                          </div>
                          <p className="font-semibold">
                            ${item.monto.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Cálculo realizado el {new Date().toLocaleDateString('es-MX')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Completa los datos para ver el cálculo de tu liquidación</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Información adicional */}
          <Card className="legal-card mt-8">
            <CardHeader>
              <CardTitle>Artículos de la LFT aplicables</CardTitle>
              <CardDescription>
                Fundamentos legales utilizados en el cálculo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Despido injustificado (Art. 48-50)</h4>
                  <p className="text-sm text-muted-foreground">
                    Indemnización de 3 meses de salario, prima de antigüedad, 
                    y prestaciones proporcionales pendientes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Prima de antigüedad (Art. 162)</h4>
                  <p className="text-sm text-muted-foreground">
                    12 días de salario por cada año trabajado, 
                    aplicable en todos los casos de terminación laboral.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Vacaciones (Art. 76-80)</h4>
                  <p className="text-sm text-muted-foreground">
                    Días de vacaciones no disfrutados más prima vacacional del 25%.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Aguinaldo (Art. 87)</h4>
                  <p className="text-sm text-muted-foreground">
                    Proporción del aguinaldo anual (15 días) 
                    correspondiente al tiempo trabajado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;