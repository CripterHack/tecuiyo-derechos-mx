import { ArrowLeft, Calculator, Info, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { estimateLaborBenefits, type LaborEstimate, type LaborEstimateInput, type SeparationType } from "@/utils/laborEstimate";

const currency = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });
const calendarDate = new Intl.DateTimeFormat("es-MX", { dateStyle: "long", timeZone: "UTC" });
const formatDate = (value: string) => calendarDate.format(new Date(`${value}T00:00:00Z`));

const Calculadora = () => {
  const [input, setInput] = useState<LaborEstimateInput>({
    dailySalary: "", startDate: "", endDate: "", separation: "other",
  });
  const [result, setResult] = useState<LaborEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateInput = (changes: Partial<LaborEstimateInput>) => {
    setInput((previous) => ({ ...previous, ...changes }));
    setResult(null);
    setError(null);
  };

  const calculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const calculation = estimateLaborBenefits(input);
    if (calculation.ok === false) {
      setError(calculation.message);
      return;
    }
    setError(null);
    setResult(calculation.estimate);
  };

  const concepts = result ? [
    {
      name: "Aguinaldo proporcional", amount: result.aguinaldo, article: "Art. 87 LFT",
      explanation: `15 días de salario × ${result.aguinaldoDays} días de relación laboral en el año de salida ÷ ${result.calendarYearDays} días del año.`,
    },
    {
      name: "Vacaciones proporcionales del ciclo en curso", amount: result.vacationPay, article: "Arts. 76 y 79 LFT",
      explanation: `${result.annualVacationDays} días anuales × ${result.vacationDaysElapsed} días transcurridos del ciclo ÷ ${result.vacationCycleDays} días del ciclo, por el salario diario.`,
    },
    {
      name: "Prima vacacional mínima", amount: result.vacationPremium, article: "Art. 80 LFT",
      explanation: "25% del importe proporcional de vacaciones, calculado antes de redondear a centavos.",
    },
  ] : [];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <Calculator className="h-8 w-8" aria-hidden="true" />
            <div>
              <h1 className="text-3xl font-bold">Calculadora de prestaciones proporcionales</h1>
              <p className="text-primary-foreground/80">Estimación parcial de aguinaldo, vacaciones y prima vacacional</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto max-w-4xl px-4 flex items-start gap-2">
          <Info className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-destructive">
            <strong>Alcance:</strong> El subtotal es orientativo. No representa un finiquito o una liquidación completos,
            ni determina cuánto te deben. Revisa pagos previos y tu caso con orientación laboral.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <Card className="legal-card">
            <CardHeader>
              <CardTitle>Datos para la estimación</CardTitle>
              <CardDescription>
                Las fechas permiten distinguir el año del aguinaldo y el ciclo laboral de vacaciones.
                Tus datos se calculan en este navegador; no se guardan ni se envían.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={calculate} noValidate>
                <div className="space-y-2">
                  <Label htmlFor="daily-salary">Salario diario (pesos mexicanos)</Label>
                  <Input
                    id="daily-salary" type="text" inputMode="decimal" placeholder="250.00"
                    value={input.dailySalary} onChange={(event) => updateInput({ dailySalary: event.target.value })}
                    aria-describedby="salary-hint" className="h-12 text-lg"
                  />
                  <p id="salary-hint" className="text-xs text-muted-foreground">
                    Salario diario fijo de contrato o recibo, sin separadores de miles. Acepta punto o coma decimal.
                    Esta estimación no incorpora salario variable ni beneficios superiores al mínimo legal.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employment-start">Fecha de ingreso</Label>
                    <Input
                      id="employment-start" type="date" min="1900-01-01" value={input.startDate}
                      onChange={(event) => updateInput({ startDate: event.target.value })} className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employment-end">Fecha de salida</Label>
                    <Input
                      id="employment-end" type="date" min="1900-01-01" value={input.endDate}
                      onChange={(event) => updateInput({ endDate: event.target.value })} className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="separation">Forma de separación laboral</Label>
                  <Select value={input.separation} onValueChange={(value) => updateInput({ separation: value as SeparationType })}>
                    <SelectTrigger id="separation" className="h-12"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="other">Otra forma de separación o aún no sé</SelectItem>
                      <SelectItem value="resignation">Renuncia voluntaria</SelectItem>
                      <SelectItem value="dismissal">Despido</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Esta selección ajusta los avisos sobre conceptos adicionales; no califica jurídicamente un despido.</p>
                </div>

                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full h-12 text-lg">
                  <Calculator className="mr-2 h-5 w-5" aria-hidden="true" /> Calcular estimación parcial
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="legal-card">
            <CardHeader>
              <CardTitle>Resultado y bases del cálculo</CardTitle>
              <CardDescription>Al cambiar cualquier dato, la estimación se retira hasta volver a calcular.</CardDescription>
            </CardHeader>
            <CardContent aria-live="polite">
              {result ? (
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
                    <h3 className="font-bold text-xl mb-2 text-primary">Subtotal orientativo de tres conceptos</h3>
                    <p className="text-4xl font-bold text-primary">{currency.format(result.subtotal)}</p>
                    <p className="text-sm text-muted-foreground mt-2">Antes de impuestos y sin restar pagos o vacaciones ya otorgados.</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p><strong>Salario diario utilizado:</strong> {currency.format(result.dailySalary)}</p>
                    <p><strong>Relación laboral:</strong> {formatDate(result.startDate)} al {formatDate(result.endDate)}.</p>
                    <p><strong>Antigüedad por aniversarios:</strong> {result.completedYears} años cumplidos.</p>
                    <p><strong>Aguinaldo:</strong> del {formatDate(result.aguinaldoStart)} al {formatDate(result.endDate)}, contando ambas fechas.</p>
                    <p><strong>Ciclo vacacional en curso:</strong> {formatDate(result.vacationCycleStart)} al aniversario del {formatDate(result.vacationCycleEnd)}.</p>
                  </div>

                  <div className="space-y-4">
                    {concepts.map((concept) => (
                      <div key={concept.name} className="p-4 bg-card border border-border rounded-lg">
                        <div className="flex flex-wrap justify-between gap-2">
                          <h4 className="font-semibold">{concept.name}</h4>
                          <p className="font-bold text-primary">{currency.format(concept.amount)}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{concept.explanation}</p>
                        <p className="text-xs text-primary mt-2">{concept.article}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Vacaciones: se acumulan los días calendario transcurridos desde el último aniversario (o ingreso en el primer año).
                      En el aniversario exacto, el nuevo ciclo tiene cero días; las vacaciones del ciclo recién cumplido quedan fuera de esta suma.</p>
                    <p>La tabla corresponde al año de servicio que está en curso: 12, 14, 16, 18 y 20 días en los años 1 a 5;
                      22 en los años 6 a 10, y dos días adicionales por cada cinco años posteriores.</p>
                    <p>Convención de calendario: un ingreso el 29 de febrero tiene aniversario el 28 de febrero en años no bisiestos.
                      La proporción usa la duración real del ciclo y del año de salida (365 o 366 días).</p>
                    <p>Se supone una relación laboral continua, sin suspensiones que alteren las proporciones.
                      Los importes se redondean a centavos y el subtotal suma esos importes.</p>
                  </div>

                  <Button type="button" variant="outline" onClick={() => window.print()}>
                    <Printer className="mr-2 h-4 w-4" aria-hidden="true" /> Imprimir o guardar como PDF
                  </Button>
                  <p className="text-xs text-muted-foreground">El navegador abre el diálogo de impresión; puedes elegir guardar como PDF.</p>

                  <div className="border-t border-border pt-4 space-y-2">
                    <p className="text-sm">Si esta herramienta te fue útil, puedes ayudar a mantenerla gratuita.</p>
                    <Button asChild variant="outline"><Link to="/apoyar">Apoyar Tecuiyo</Link></Button>
                    <p className="text-xs text-muted-foreground">El apoyo es voluntario y no cambia el cálculo ni el acceso a la información.</p>
                  </div>
                </div>
              ) : <p className="text-muted-foreground">Completa los datos y calcula para ver una estimación parcial.</p>}
            </CardContent>
          </Card>

          <Card className="legal-card">
            <CardHeader>
              <CardTitle>Conceptos que debes revisar por separado</CardTitle>
              <CardDescription>Estos conceptos pueden modificar el monto de tu caso y no se suman en esta herramienta.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p><strong>Prestaciones pendientes:</strong> vacaciones de ciclos cumplidos, prima correspondiente,
                aguinaldo de años anteriores, salarios no pagados y prestaciones superiores a la ley. Revisa también los pagos ya realizados.</p>
              <p><strong>Prima de antigüedad (art. 162):</strong> prevista para trabajadores de planta;
                en renuncia voluntaria requiere al menos 15 años cumplidos. En despido, el requisito de 15 años no es el mismo.
                Su base tiene límites específicos (arts. 485 y 486), por lo que aquí no se calcula.</p>
              {result?.separation === "resignation" && (
                <p className="text-primary">
                  Con tus fechas {result.resignationSeniorityThresholdMet ? "alcanzas" : "no alcanzas"} el umbral de 15 años cumplidos para renuncia.
                  Esto no sustituye la revisión de tu condición de trabajador de planta ni de la base de salario aplicable.
                </p>
              )}
              <p><strong>Indemnización y salarios vencidos (arts. 48 a 50):</strong> requieren valorar la causa de separación,
                el tipo de relación laboral y el salario aplicable. Elegir “Despido” no agrega automáticamente tres meses u otros pagos.</p>
              <p><strong>Casos históricos:</strong> esta versión no calcula separaciones anteriores a 2023.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/directorio" className="text-primary underline underline-offset-4">Consultar orientación laboral gratuita</Link>
                <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                  Consultar la Ley Federal del Trabajo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
