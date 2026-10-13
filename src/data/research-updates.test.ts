import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { NewsItem } from "@/data/news-schema.js";

const mocks = vi.hoisted(() => ({
  parseURL: vi.fn<() => Promise<{ items: { title: string; link: string; contentSnippet: string; pubDate?: string }[] }>>(),
  writeFileSync: vi.fn<(path: string, contents: string) => void>(),
}));

vi.mock("rss-parser", () => ({
  default: class {
    parseURL = mocks.parseURL;
  },
}));

vi.mock("fs", () => ({
  default: {
    existsSync: () => false,
    writeFileSync: mocks.writeFileSync,
  },
}));

describe("Investigación RSS", () => {
  beforeEach(() => {
    vi.resetModules();
    mocks.parseURL.mockReset();
    mocks.writeFileSync.mockReset();
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });

  afterEach(() => vi.restoreAllMocks());

  it("ignora fechas inválidas, ausentes y vacías sin inventar la fecha de publicación", async () => {
    const exit = vi.spyOn(process, "exit").mockImplementation(
      (() => undefined) as unknown as typeof process.exit,
    );
    mocks.parseURL.mockResolvedValue({
      items: [
        { title: "Noticias del trabajo válidas", link: "https://example.com/antes", contentSnippet: "Una noticia laboral válida antes del dato incorrecto.", pubDate: "Mon, 12 Oct 2026 12:00:00 GMT" },
        { title: "Trabajo con fecha inválida", link: "https://example.com/invalida", contentSnippet: "Esta noticia contiene una fecha no interpretable.", pubDate: "fecha incorrecta" },
        { title: "Trabajo sin fecha de publicación", link: "https://example.com/sin-fecha", contentSnippet: "Esta noticia no proporciona su fecha de publicación." },
        { title: "Trabajo con fecha de publicación vacía", link: "https://example.com/fecha-vacia", contentSnippet: "Esta noticia proporciona una fecha de publicación vacía.", pubDate: "" },
        { title: "Más noticias del trabajo", link: "https://example.com/despues", contentSnippet: "Una noticia laboral válida después del dato incorrecto.", pubDate: "Tue, 13 Oct 2026 12:00:00 GMT" },
      ],
    });

    await import("../../scripts/research-updates.js");

    const dataWrite = mocks.writeFileSync.mock.calls.find(([path]) => path.endsWith("/public/data/news.json"));
    expect(dataWrite).toBeDefined();
    const news = JSON.parse(dataWrite![1]) as NewsItem[];
    expect(news.map(({ link }) => link)).toEqual(["https://example.com/antes", "https://example.com/despues"]);
    expect(news.map(({ date }) => date)).toEqual(["2026-10-12", "2026-10-13"]);
    expect(exit).not.toHaveBeenCalled();
  });
});
