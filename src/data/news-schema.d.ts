import type { z } from "zod";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  link: string;
  source: string;
}

export const NewsItemSchema: z.ZodType<NewsItem>;
