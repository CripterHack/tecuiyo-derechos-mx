
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parser = new Parser();
const DATA_FILE = path.join(__dirname, '../public/data/news.json');
const ARCHIVE_FILE = path.join(__dirname, '../public/data/news-archive.json');
const REPORT_FILE = 'updates-report.md';

// Configuration
const RSS_FEED_URL = 'https://news.google.com/rss/search?q=Reforma+Laboral+Mexico+OR+Ley+Federal+del+Trabajo+when:7d&hl=es-419&gl=MX&ceid=MX:es-419';
const KEYWORDS = ['reforma', 'ley', 'trabajo', 'vacaciones', 'aguinaldo', 'jornada', 'senado', 'diputados', 'stps'];

// Validation Schema
const NewsItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  link: z.string().url(),
  source: z.string()
});

const MAX_ACTIVE_NEWS = 50;

// Helper: Generate Deterministic ID
function generateId(text) {
  return crypto.createHash('sha256').update(text).digest('base64url').substring(0, 12);
}

async function searchUpdates() {
  try {
    console.log('🔍 Buscando actualizaciones en Google News RSS...');
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    console.log(`✅ Se encontraron ${feed.items.length} entradas en el feed.`);

    // Load existing data
    let existingNews = [];
    if (fs.existsSync(DATA_FILE)) {
      try {
        existingNews = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      } catch (e) {
        console.warn('⚠️ Error leyendo news.json, iniciando vacío.');
      }
    }

    const newEntries = [];

    for (const item of feed.items) {
      const title = item.title?.trim() || '';
      const link = item.link?.trim() || '';
      const content = item.contentSnippet?.trim() || '';
      const date = item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

      // Keyword Filter
      const hasKeyword = KEYWORDS.some(k => 
        title.toLowerCase().includes(k) || content.toLowerCase().includes(k)
      );

      if (!hasKeyword) continue;

      // Duplicate Check (Logic + ID)
      const deterministicId = generateId(link + title); // ID based on content
      const isDuplicate = existingNews.some(n => n.id === deterministicId || n.link === link);

      if (isDuplicate) continue;

      const newEntry = {
        id: deterministicId,
        title,
        date,
        summary: content || 'Sin descripción disponible.',
        link,
        source: item.source || 'Google News'
      };

      // Zod Validation
      const validation = NewsItemSchema.safeParse(newEntry);
      if (validation.success) {
        newEntries.push(validation.data);
      } else {
        console.warn(`⚠️ Noticia ignorada por fallo de validación: ${title}`, validation.error.format());
      }
    }

    console.log(`🎯 ${newEntries.length} noticias NUEVAS y válidas.`);

    if (newEntries.length === 0) {
      console.log('No hay actualizaciones nuevas para integrar.');
      return; 
    }

    // Merge and Rotate
    const allNews = [...newEntries, ...existingNews];
    
    // Split Active vs Archive
    const activeNews = allNews.slice(0, MAX_ACTIVE_NEWS);
    const archivedNews = allNews.slice(MAX_ACTIVE_NEWS);

    // Save Active
    fs.writeFileSync(DATA_FILE, JSON.stringify(activeNews, null, 2));
    console.log(`💾 Base de datos actualizada: ${DATA_FILE} (${activeNews.length} items)`);

    // Save Archive (Append if complex, here just overwrite/concept)
    // In a real scenario, we might want to append, but for simplicity we'll just log it or save simple archive.
    if (archivedNews.length > 0) {
        // Simple Archive Logic: Load existing archive, append, save.
        let currentArchive = [];
        if (fs.existsSync(ARCHIVE_FILE)) {
            try { currentArchive = JSON.parse(fs.readFileSync(ARCHIVE_FILE, 'utf8')); } catch(e) {}
        }
        // Deduplicate archive just in case
        const archiveMap = new Map();
        [...currentArchive, ...archivedNews].forEach(item => archiveMap.set(item.id, item));
        
        fs.writeFileSync(ARCHIVE_FILE, JSON.stringify(Array.from(archiveMap.values()), null, 2));
        console.log(`📦 Archivo histórico actualizado: ${ARCHIVE_FILE} (${archivedNews.length} items movidos)`);
    }

    // Generate Report
    generateReport(newEntries);

  } catch (error) {
    console.error('❌ Error al buscar actualizaciones:', error);
    process.exit(1);
  }
}

function generateReport(entries) {
  const date = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  let content = `# 📰 Propuesta de Actualización - ${date}\n\n`;
  content += `Se han agregado **${entries.length}** nuevas noticias.\n\n`;
  
  entries.forEach(item => {
    content += `### ${item.title}\n`;
    content += `- **Fecha**: ${item.date}\n`;
    content += `- **Resumen**: ${item.summary}\n`;
    content += `- [Leer original](${item.link})\n\n`;
  });

  fs.writeFileSync(REPORT_FILE, content);
  console.log(`📄 Reporte generado: ${REPORT_FILE}`);
}

searchUpdates();
