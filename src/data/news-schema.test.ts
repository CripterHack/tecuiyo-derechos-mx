import { describe, expect, it } from "vitest";
import { NewsItemSchema } from "@/hooks/useNewsData";

const newsItem = {
  id: "nota-1",
  title: "Una actualización laboral",
  date: "2026-10-13",
  summary: "Resumen informativo de la actualización.",
  link: "https://news.google.com/rss/articles/nota-1",
  source: "Google News",
};

describe("Validación de noticias externas", () => {
  it.each(["https://example.com/nota", "http://example.com/nota"])(
    "admite enlaces web: %s", (link) => {
      expect(NewsItemSchema.safeParse({ ...newsItem, link }).success).toBe(true);
    },
  );

  it.each([
    // eslint-disable-next-line no-script-url -- Carga maliciosa que el validador debe rechazar.
    "javascript:alert(1)",
    "data:text/html,<h1>Nota</h1>",
    "file:///tmp/nota",
    "mailto:alguien@example.com",
    "https://usuario:clave@example.com/nota",
    "https://usuario@example.com/nota",
  ])("rechaza destinos que no son noticias web seguras: %s", (link) => {
    expect(NewsItemSchema.safeParse({ ...newsItem, link }).success).toBe(false);
  });

  it.each(["not-date", "2026-02-31", "2025-02-29", "2026-99-99", "2026-2-01", "2026-10-13T00:00:00Z"])(
    "rechaza fechas inválidas o fuera de formato: %s", (date) => {
      expect(NewsItemSchema.safeParse({ ...newsItem, date }).success).toBe(false);
    },
  );

  it("admite el día extra de un año bisiesto", () => {
    expect(NewsItemSchema.safeParse({ ...newsItem, date: "2024-02-29" }).success).toBe(true);
  });

  it.each(["id", "title", "summary", "source"])("rechaza %s vacío", (field) => {
    expect(NewsItemSchema.safeParse({ ...newsItem, [field]: " " }).success).toBe(false);
  });
});
