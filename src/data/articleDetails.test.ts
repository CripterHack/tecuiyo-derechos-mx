import { describe, expect, it } from "vitest";
import { sanitizeHtml } from "@/utils/sanitizer";
import { findArticleDetail, OFFICIAL_LFT_URL, WORKING_HOURS_DECREE_URL } from "./articleDetails";

function articleDocument(id: string) {
  const article = findArticleDetail(id);
  expect(article, `Existe el resumen ${id}`).toBeDefined();
  return new DOMParser().parseFromString(sanitizeHtml(`${article!.contenido}${article!.explicacion}`), "text/html");
}

describe("Regresiones editoriales contrastadas con fuentes oficiales el 13 de octubre de 2026", () => {
  it("mantiene el artículo 85 en su tema de salario remunerador y mínimo", () => {
    const article = findArticleDetail("art85")!;
    expect(article.numero).toBe("85");
    expect(article.titulo).toMatch(/remunerador/i);
    expect(articleDocument("art85").body.textContent).toMatch(/mínimo/i);
    expect(article.titulo).not.toMatch(/trabajo igual/i);
  });

  it("incluye la designación de beneficiarios entre los requisitos resumidos del artículo 25", () => {
    expect(articleDocument("art25").body.textContent).toMatch(/beneficiarios/i);
  });

  it.each(["art24", "art25"])("%s conserva derechos sin prometer certeza automática de cualquier afirmación", id => {
    const text = articleDocument(id).body.textContent ?? "";
    expect(text).toMatch(/26/);
    expect(text).toMatch(/derechos/i);
    expect(text).not.toMatch(/se presumen ciertas las afirmaciones/i);
  });

  it("distingue la jornada mixta de la nocturna en el umbral de 3.5 horas", () => {
    const paragraphs = [...articleDocument("art61").querySelectorAll("p")].map(paragraph => paragraph.textContent ?? "");
    const classification = paragraphs.find(text => /3\.5/.test(text)) ?? "";
    expect(classification).toMatch(/mixta.*menos de 3\.5/i);
    expect(classification).toMatch(/3\.5.*o más.*nocturna/i);
    expect(classification).toMatch(/60/);
  });

  it("diferencia el pago ordinario por riesgo del artículo 67 y el doble por horas extraordinarias del 66", () => {
    const article = findArticleDetail("art67")!;
    const text = articleDocument("art67").body.textContent ?? "";
    expect(article.titulo).toMatch(/riesgo|siniestro/i);
    expect(text).toMatch(/65/);
    expect(text).toMatch(/igual|misma/i);
    expect(text).toMatch(/ordinaria|ordinario/i);
    expect(text).not.toMatch(/200%|al doble|\$200/);
  });

  it("publica los umbrales extraordinarios de la transición completa, sin anticipar doce horas en 2026", () => {
    const rows = [...articleDocument("art66").querySelectorAll("tbody tr")]
      .map(row => [...row.querySelectorAll("td")].map(cell => Number(cell.textContent?.trim())));
    expect(rows).toEqual([[2026, 9], [2027, 9], [2028, 10], [2029, 11], [2030, 12]]);
    const text = articleDocument("art66").body.textContent ?? "";
    expect(text).toMatch(/4 horas diarias/i);
    expect(text).toMatch(/4 días/i);
    expect(text).not.toMatch(/máximo diario:\s*3|máximo semanal:\s*3/i);
  });

  it("presenta los límites adicionales del 68 y remite al umbral anual, sin tratar la hora diez como fija para siempre", () => {
    const text = articleDocument("art68").body.textContent ?? "";
    expect(text).toMatch(/4 horas.*semana/i);
    expect(text).toMatch(/12 horas.*día/i);
    expect(text).toMatch(/umbral.*66/i);
    expect(text).not.toMatch(/hora 10 en adelante|horas 10\+ extra/i);
  });

  it("identifica las fuentes y la fecha de esta revisión sólo en las entradas contrastadas", () => {
    for (const id of ["art24", "art25", "art85", "art61", "art66", "art67", "art68"]) {
      const article = findArticleDetail(id)!;
      expect(article.textKind, id).toBe("educational-summary");
      expect(article.fechaRevision, id).toBe("2026-10-13");
      expect(article.sourceUrl, id).toBe(["art66", "art68"].includes(id) ? WORKING_HOURS_DECREE_URL : OFFICIAL_LFT_URL);
    }
    expect(findArticleDetail("art21")?.textKind).toBeUndefined();
    expect(findArticleDetail("art21")?.fechaRevision).toBeUndefined();
  });
});
