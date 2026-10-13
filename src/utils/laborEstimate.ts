export type SeparationType = "resignation" | "dismissal" | "other";

export interface LaborEstimateInput {
  dailySalary: string;
  startDate: string;
  endDate: string;
  separation: SeparationType | "";
}

export interface LaborEstimate {
  dailySalary: number;
  startDate: string;
  endDate: string;
  separation: SeparationType;
  completedYears: number;
  annualVacationDays: number;
  vacationDaysElapsed: number;
  vacationCycleDays: number;
  vacationCycleStart: string;
  vacationCycleEnd: string;
  aguinaldoDays: number;
  calendarYearDays: number;
  aguinaldoStart: string;
  aguinaldo: number;
  vacationPay: number;
  vacationPremium: number;
  subtotal: number;
  resignationSeniorityThresholdMet: boolean;
}

export type LaborEstimateResult =
  | { ok: true; estimate: LaborEstimate }
  | { ok: false; message: string };

const DAY_IN_MILLISECONDS = 86_400_000;
const MINIMUM_RULES_DATE = "2023-01-01";

function parseCalendarDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (year < 1900 || year > 9998) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
    ? date
    : null;
}

function getAnniversary(start: Date, year: number): Date {
  const month = start.getUTCMonth();
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return new Date(Date.UTC(year, month, Math.min(start.getUTCDate(), lastDay)));
}

function daysBetween(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / DAY_IN_MILLISECONDS;
}

function dateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function roundToCents(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

/** Días mínimos de vacaciones para el año laboral que se está acumulando (LFT, art. 76). */
export function getAnnualVacationDays(serviceYear: number): number {
  if (!Number.isInteger(serviceYear) || serviceYear < 1) {
    throw new Error("El año de servicio debe ser un entero positivo.");
  }
  return serviceYear <= 5 ? 10 + serviceYear * 2 : 20 + Math.ceil((serviceYear - 5) / 5) * 2;
}

/**
 * Estima solo aguinaldo del año de salida y vacaciones/prima del ciclo laboral en curso.
 * Usa fechas calendario UTC: aguinaldo inclusivo y vacaciones por días transcurridos.
 * No suma ciclos vacacionales cumplidos, pagos previos, indemnización ni prima de antigüedad.
 */
export function estimateLaborBenefits(input: LaborEstimateInput): LaborEstimateResult {
  const salaryText = input.dailySalary.trim();
  const salary = Number(salaryText.replace(",", "."));
  if (!/^\d+(?:[.,]\d{1,2})?$/.test(salaryText) || !Number.isFinite(salary) || salary <= 0
    || !Number.isSafeInteger(Math.round(salary * 100))) {
    return { ok: false, message: "Ingresa un salario diario positivo, con hasta dos decimales y sin separadores de miles." };
  }

  const start = parseCalendarDate(input.startDate);
  const end = parseCalendarDate(input.endDate);
  if (!start || !end) {
    return { ok: false, message: "Ingresa fechas válidas de ingreso y salida." };
  }
  if (end < start) {
    return { ok: false, message: "La fecha de salida no puede ser anterior a la fecha de ingreso." };
  }
  if (input.endDate < MINIMUM_RULES_DATE) {
    return { ok: false, message: "Esta herramienta usa la tabla de vacaciones aplicable desde 2023. Para separaciones anteriores consulta orientación laboral." };
  }
  if (!["resignation", "dismissal", "other"].includes(input.separation)) {
    return { ok: false, message: "Selecciona una forma de separación laboral." };
  }

  let completedYears = end.getUTCFullYear() - start.getUTCFullYear();
  if (end < getAnniversary(start, end.getUTCFullYear())) completedYears -= 1;
  const cycleStart = getAnniversary(start, start.getUTCFullYear() + completedYears);
  const cycleEnd = getAnniversary(start, start.getUTCFullYear() + completedYears + 1);
  const vacationDaysElapsed = daysBetween(cycleStart, end);
  const vacationCycleDays = daysBetween(cycleStart, cycleEnd);
  const annualVacationDays = getAnnualVacationDays(completedYears + 1);

  const yearStart = new Date(Date.UTC(end.getUTCFullYear(), 0, 1));
  const yearEnd = new Date(Date.UTC(end.getUTCFullYear() + 1, 0, 1));
  const aguinaldoStart = start > yearStart ? start : yearStart;
  const aguinaldoDays = daysBetween(aguinaldoStart, end) + 1;
  const calendarYearDays = daysBetween(yearStart, yearEnd);
  const rawVacationPay = salary * annualVacationDays * vacationDaysElapsed / vacationCycleDays;
  const vacationPay = roundToCents(rawVacationPay);
  const vacationPremium = roundToCents(rawVacationPay * 0.25);
  const aguinaldo = roundToCents(salary * 15 * aguinaldoDays / calendarYearDays);
  const subtotal = roundToCents(aguinaldo + vacationPay + vacationPremium);
  if (![vacationPay, vacationPremium, aguinaldo, subtotal].every((amount) =>
    Number.isFinite(amount) && Number.isSafeInteger(Math.round(amount * 100)))) {
    return { ok: false, message: "El monto supera la precisión de esta herramienta. Revisa el salario diario." };
  }

  return { ok: true, estimate: {
    dailySalary: salary, startDate: input.startDate, endDate: input.endDate,
    separation: input.separation as SeparationType, completedYears,
    annualVacationDays, vacationDaysElapsed, vacationCycleDays,
    vacationCycleStart: dateString(cycleStart), vacationCycleEnd: dateString(cycleEnd),
    aguinaldoDays, calendarYearDays, aguinaldoStart: dateString(aguinaldoStart),
    aguinaldo, vacationPay, vacationPremium, subtotal,
    resignationSeniorityThresholdMet: completedYears >= 15,
  }};
}
