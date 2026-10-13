import { z } from "zod";

// Compartido por el navegador, la investigación RSS y la validación de CI.
export const NewsItemSchema = z.object({
  id: z.string().trim().min(1),
  title: z.string().trim().min(5),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
    const timestamp = Date.parse(`${value}T00:00:00Z`);
    return Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value;
  }, "La fecha debe ser un día real en formato YYYY-MM-DD."),
  summary: z.string().trim().min(10),
  link: z.string().url().refine((value) => {
    try {
      const url = new URL(value);
      return (url.protocol === "https:" || url.protocol === "http:") && !url.username && !url.password;
    } catch {
      return false;
    }
  }, "La noticia debe enlazar a HTTP/HTTPS sin credenciales en la URL."),
  source: z.string().trim().min(2),
});
