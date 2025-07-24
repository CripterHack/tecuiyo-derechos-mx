import { Calculator, ArrowLeft, Info, DollarSign, Calendar, Clock, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { format, differenceInDays, differenceInMonths, differenceInYears } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

const Calculadora = () => {
  const [salarioDiario, setSalarioDiario] = useState("");
  const [tipoSeparacion, setTipoSeparacion] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  
  // Nuevo sistema de fechas o antigüedad manual
  const [usarFechas, setUsarFechas] = useState(true);
  const [fechaIngreso, setFechaIngreso] = useState<Date>();
  const [fechaSalida, setFechaSalida] = useState<Date>();
  
  // Sistema manual de antigüedad
  const [anos, setAnos] = useState("");
  const [meses, setMeses] = useState("");
  const [dias, setDias] = useState("");

  const calcularAntiguedadEnAnos = () => {
    if (usarFechas && fechaIngreso && fechaSalida) {
      const totalDias = differenceInDays(fechaSalida, fechaIngreso);
      return totalDias / 365.25; // Considera años bisiestos
    } else if (!usarFechas) {
      const totalAnos = parseFloat(anos || "0");
      const totalMeses = parseFloat(meses || "0") / 12;
      const totalDias = parseFloat(dias || "0") / 365.25;
      return totalAnos + totalMeses + totalDias;
    }
    return 0;
  };

  const calcularLiquidacion = () => {
    const antiguedadCalculada = calcularAntiguedadEnAnos();
    
    if (!salarioDiario || antiguedadCalculada <= 0 || !tipoSeparacion) return;

    const salario = parseFloat(salarioDiario);
    const antiguedadAnos = antiguedadCalculada;
    
    // Fórmulas basadas en LFT
    const indemnizacion = salario * 90; // Art. 50 LFT - 3 meses
    const primaAntiguedad = salario * 12 * antiguedadAnos; // Art. 162 LFT
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
      antiguedad: antiguedadAnos,
      tipo: tipoSeparacion,
      fechaIngreso,
      fechaSalida,
      usarFechas
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
          <div className="grid grid-cols-1 gap-8">
            {/* Formulario */}
            <Card className="legal-card">
              <CardHeader>
                <CardTitle>Datos para el cálculo</CardTitle>
                <CardDescription>
                  Ingresa la información requerida para calcular tu liquidación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="salario" className="text-sm font-medium">Salario diario (pesos mexicanos)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="salario"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="250.00"
                      value={salarioDiario}
                      onChange={(e) => setSalarioDiario(e.target.value)}
                      className="pl-10 text-lg font-semibold h-12"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ingresa tu salario diario según tu contrato o comprobantes de pago
                  </p>
                </div>

                {/* Selector de método de cálculo de antigüedad */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Método para calcular antigüedad</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant={usarFechas ? "default" : "outline"}
                      onClick={() => setUsarFechas(true)}
                      className="h-12 flex-col gap-1"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      <span className="text-xs">Fechas exactas</span>
                    </Button>
                    <Button
                      type="button"
                      variant={!usarFechas ? "default" : "outline"}
                      onClick={() => setUsarFechas(false)}
                      className="h-12 flex-col gap-1"
                    >
                      <Clock className="h-4 w-4" />
                      <span className="text-xs">Tiempo manual</span>
                    </Button>
                  </div>
                </div>

                {usarFechas ? (
                  /* Selección por fechas */
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Fecha de ingreso</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal h-auto py-3 px-4",
                                !fechaIngreso && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                              <span className="truncate">
                                {fechaIngreso ? format(fechaIngreso, "PPP", { locale: es }) : "Selecciona fecha de ingreso"}
                              </span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 z-50" align="start" side="bottom">
                            <CalendarComponent
                              mode="single"
                              selected={fechaIngreso}
                              onSelect={setFechaIngreso}
                              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label className="text-sm font-medium mb-2 block">Fecha de salida</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal h-auto py-3 px-4",
                                !fechaSalida && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                              <span className="truncate">
                                {fechaSalida ? format(fechaSalida, "PPP", { locale: es }) : "Selecciona fecha de salida"}
                              </span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 z-50" align="start" side="bottom">
                            <CalendarComponent
                              mode="single"
                              selected={fechaSalida}
                              onSelect={setFechaSalida}
                              disabled={(date) => 
                                date > new Date() || 
                                date < new Date("1900-01-01") || 
                                (fechaIngreso && date < fechaIngreso)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {fechaIngreso && fechaSalida && (
                      <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">Tiempo trabajado</p>
                        </div>
                        <p className="text-lg font-bold">
                          {differenceInYears(fechaSalida, fechaIngreso)} años, {' '}
                          {differenceInMonths(fechaSalida, fechaIngreso) % 12} meses, {' '}
                          {differenceInDays(fechaSalida, new Date(fechaIngreso.getFullYear(), fechaIngreso.getMonth() + differenceInMonths(fechaSalida, fechaIngreso), fechaIngreso.getDate()))} días
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Total: {calcularAntiguedadEnAnos().toFixed(2)} años
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Ingreso manual */
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Tiempo trabajado</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="anos" className="text-xs text-muted-foreground">Años</Label>
                          <Input
                            id="anos"
                            type="number"
                            min="0"
                            max="50"
                            placeholder="2"
                            value={anos}
                            onChange={(e) => setAnos(e.target.value)}
                            className="text-center text-lg font-semibold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="meses" className="text-xs text-muted-foreground">Meses</Label>
                          <Input
                            id="meses"
                            type="number"
                            min="0"
                            max="11"
                            placeholder="6"
                            value={meses}
                            onChange={(e) => setMeses(e.target.value)}
                            className="text-center text-lg font-semibold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dias" className="text-xs text-muted-foreground">Días</Label>
                          <Input
                            id="dias"
                            type="number"
                            min="0"
                            max="30"
                            placeholder="15"
                            value={dias}
                            onChange={(e) => setDias(e.target.value)}
                            className="text-center text-lg font-semibold"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Ingresa el tiempo trabajado en años, meses y días
                      </p>
                    </div>
                    
                    {(anos || meses || dias) && (
                      <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">Antigüedad calculada</p>
                        </div>
                        <p className="text-lg font-bold">
                          {calcularAntiguedadEnAnos().toFixed(2)} años
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  <Label htmlFor="tipo" className="text-sm font-medium">Tipo de separación laboral</Label>
                  <Select value={tipoSeparacion} onValueChange={setTipoSeparacion}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecciona el tipo de separación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="despido_injustificado" className="py-3">
                        <div>
                          <div className="font-medium">Despido injustificado</div>
                          <div className="text-xs text-muted-foreground">Me despidieron sin causa justificada</div>
                        </div>
                      </SelectItem>
                      <SelectItem value="renuncia" className="py-3">
                        <div>
                          <div className="font-medium">Renuncia voluntaria</div>
                          <div className="text-xs text-muted-foreground">Renuncié por mi propia decisión</div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calcularLiquidacion}
                  className="w-full h-14 text-lg font-semibold mt-6"
                  disabled={
                    !salarioDiario || 
                    calcularAntiguedadEnAnos() <= 0 || 
                    !tipoSeparacion
                  }
                >
                  <Calculator className="mr-3 h-5 w-5" />
                  Calcular mi liquidación
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
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-2 text-primary">Total a recibir</h3>
                        <p className="text-4xl font-bold text-primary mb-2">
                          ${resultado.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-sm text-muted-foreground">pesos mexicanos</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Desglose por conceptos:</h4>
                      {resultado.conceptos.map((item: any, index: number) => (
                        <div key={index} className="p-4 bg-card border border-border rounded-lg shadow-sm">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-semibold text-base mb-1">{item.concepto}</p>
                              <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium">
                                {item.articulo}
                              </span>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold">
                                ${item.monto.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Cálculo realizado el {new Date().toLocaleDateString('es-MX', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
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