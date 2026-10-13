
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { NewsItemSchema } from '@/data/news-schema.js';

export { NewsItemSchema };

export type NewsItem = z.infer<typeof NewsItemSchema>;

interface UseNewsDataResult {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

export const useNewsData = (): UseNewsDataResult => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/data/news.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        
        // Validate with Zod
        const parsed = z.array(NewsItemSchema).safeParse(jsonData);
        
        if (!parsed.success) {
          console.error("News Data Validation Error:", parsed.error);
          throw new Error("Datos de noticias inválidos.");
        }

        // Sort desc by date
        const sorted = parsed.data.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setNews(sorted);
        setError(null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err instanceof Error ? err.message : "Error desconocido al cargar noticias.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};
