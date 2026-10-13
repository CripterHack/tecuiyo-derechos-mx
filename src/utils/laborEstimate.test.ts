import { describe, expect, it } from "vitest";
import { estimateLaborBenefits, getAnnualVacationDays, type LaborEstimateInput } from "./laborEstimate";

const input: LaborEstimateInput = {
  dailySalary: "365.00",
  startDate: "2025-12-30",
  endDate: "2025-12-31",
  separation: "resignation",
};

function calculate(overrides: Partial<LaborEstimateInput> = {}) {
  const result = estimateLaborBenefits({ ...input, ...overrides });
  if (result.ok === false) throw new Error(result.message);
  return result.estimate;
}

describe("estimación acotada de prestaciones", () => {
  it("cuenta solo los dos días efectivos de ingreso en diciembre para el aguinaldo", () => {
    const result = calculate();
    expect(result.aguinaldoDays).toBe(2);
    expect(result.aguinaldoStart).toBe("2025-12-30");
    expect(result.aguinaldo).toBe(30);
  });

  it.each([[1, 12], [2, 14], [3, 16], [4, 18], [5, 20], [6, 22], [10, 22], [11, 24], [15, 24], [16, 26]])(
    "el año de servicio %i tiene %i días conforme a la tabla actual",
    (year, days) => expect(getAnnualVacationDays(year)).toBe(days),
  );

  it("usa el aniversario laboral para vacaciones y deja fuera los ciclos cumplidos", () => {
    const result = calculate({ startDate: "2023-07-01", endDate: "2025-07-01" });
    expect(result.completedYears).toBe(2);
    expect(result.vacationCycleStart).toBe("2025-07-01");
    expect(result.vacationCycleEnd).toBe("2026-07-01");
    expect(result.annualVacationDays).toBe(16);
    expect(result.vacationDaysElapsed).toBe(0);
    expect(result.vacationPay).toBe(0);
  });

  it("no usa el año calendario como ciclo vacacional", () => {
    const result = calculate({ startDate: "2024-07-01", endDate: "2025-01-01" });
    expect(result.vacationDaysElapsed).toBe(184);
    expect(result.vacationCycleDays).toBe(365);
    expect(result.vacationPay).toBe(2208);
    expect(result.aguinaldoDays).toBe(1);
  });

  it("soporta ingreso y salida el mismo día sin otorgar un ciclo de vacaciones", () => {
    const result = calculate({ startDate: "2025-12-31", endDate: "2025-12-31" });
    expect(result.aguinaldoDays).toBe(1);
    expect(result.aguinaldo).toBe(15);
    expect(result.vacationDaysElapsed).toBe(0);
    expect(result.vacationPay).toBe(0);
  });

  it("cuenta 366 días en el año bisiesto y no excluye la fecha de salida", () => {
    const result = calculate({ dailySalary: "366", startDate: "2024-01-01", endDate: "2024-12-31" });
    expect(result.calendarYearDays).toBe(366);
    expect(result.aguinaldoDays).toBe(366);
    expect(result.aguinaldo).toBe(5490);
    expect(result.vacationCycleDays).toBe(366);
    expect(result.vacationDaysElapsed).toBe(365);
  });

  it("ajusta el aniversario del 29 de febrero al 28 en años no bisiestos", () => {
    const result = calculate({ startDate: "2024-02-29", endDate: "2025-02-28" });
    expect(result.completedYears).toBe(1);
    expect(result.vacationCycleStart).toBe("2025-02-28");
    expect(result.vacationDaysElapsed).toBe(0);
  });

  it("conserva el día de fin de mes sin residuos negativos", () => {
    const result = calculate({ startDate: "2024-01-31", endDate: "2025-02-28" });
    expect(result.completedYears).toBe(1);
    expect(result.vacationCycleStart).toBe("2025-01-31");
    expect(result.vacationDaysElapsed).toBe(28);
  });

  it("determina los 15 años cumplidos por aniversario y no por una división de días", () => {
    expect(calculate({ startDate: "2009-01-01", endDate: "2024-01-01" }).resignationSeniorityThresholdMet).toBe(true);
    expect(calculate({ startDate: "2009-01-01", endDate: "2023-12-31" }).resignationSeniorityThresholdMet).toBe(false);
  });

  it("acepta coma decimal sin convertirla en un salario distinto", () => {
    expect(calculate({ dailySalary: "365,50" }).dailySalary).toBe(365.5);
  });

  it.each(["", "0", "-1", "Infinity", "1e309", "12 pesos", "1,000", "NaN"])(
    "rechaza el salario inválido %s",
    (dailySalary) => expect(estimateLaborBenefits({ ...input, dailySalary }).ok).toBe(false),
  );

  it.each([
    { startDate: "2025-02-30" },
    { endDate: "2025-02-29" },
    { startDate: "2026-01-01" },
    { endDate: "2022-12-31", startDate: "2020-01-01" },
    { separation: "" as const },
  ])("rechaza fechas imposibles, salida anterior, reglas históricas o separación vacía: %j", (overrides) => {
    expect(estimateLaborBenefits({ ...input, ...overrides }).ok).toBe(false);
  });

  it("suma los conceptos ya redondeados para coincidir con el desglose mostrado", () => {
    const result = calculate({ dailySalary: "253.13" });
    expect(result.subtotal).toBeCloseTo(result.aguinaldo + result.vacationPay + result.vacationPremium, 2);
    expect(result.aguinaldo).toBe(20.81);
    expect(result.vacationPay).toBe(8.32);
    expect(result.vacationPremium).toBe(2.08);
    expect(result.subtotal).toBe(31.21);
  });
});
