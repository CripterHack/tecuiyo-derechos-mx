// La calculadora solo estima aguinaldo, vacaciones y prima vacacional proporcionales.
const PROPORTIONAL_ESTIMATE_CASES = new Set(["1", "3", "4", "6"]);

export function hasProportionalEstimate(id: string | number) {
  return PROPORTIONAL_ESTIMATE_CASES.has(String(id));
}
