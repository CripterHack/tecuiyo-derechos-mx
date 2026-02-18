
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parser = new Parser();
const DATA_FILE = path.join(__dirname, '../src/data/news.json');
const REPORT_FILE = 'updates-report.md';

// Configuration
const RSS_FEED_URL = 'https://news.google.com/rss/search?q=Reforma+Laboral+Mexico+OR+Ley+Federal+del+Trabajo+when:7d&hl=es-419&gl=MX&ceid=MX:es-419';
const KEYWORDS = ['reforma', 'ley', 'trabajo', 'vacaciones', 'aguinaldo', 'jornada', 'senado', 'diputados', 'stps'];

async function searchUpdates() {
  try {
    console.log('🔍 Buscando actualizaciones en Google News RSS...');
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    console.log(`✅ Se encontraron ${feed.items.length} noticias.`);

    // Leer noticias existentes
    let existingNews = [];
    if (fs.existsSync(DATA_FILE)) {
      existingNews = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }

    const relevantItems = feed.items.filter(item => {
      const title = item.title?.toLowerCase() || '';
      const content = item.contentSnippet?.toLowerCase() || '';
      // Validar keywords
      const hasKeyword = KEYWORDS.some(keyword => title.includes(keyword) || content.includes(keyword));
      // Validar duplicados (por link o título similar)
      const isDuplicate = existingNews.some(news => news.link === item.link || news.title === item.title);
      
      return hasKeyword && !isDuplicate;
    });

    console.log(`🎯 ${relevantItems.length} noticias NUEVAS y relevantes encontradas.`);

    if (relevantItems.length === 0) {
      console.log('No hay actualizaciones nuevas para integrar.');
      return; 
    }

    // Agregar nuevas noticias al array
    const newEntries = relevantItems.map(item => ({
      id: Buffer.from(item.link).toString('base64').substring(0, 10), // ID simple basado en link
      title: item.title,
      date: new Date(item.pubDate).toISOString().split('T')[0],
      summary: item.contentSnippet || 'Sin descripción disponible.',
      link: item.link,
      source: item.source || 'Google News'
    }));

    const updatedNews = [...newEntries, ...existingNews]; // Nuevas primero
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedNews, null, 2));
    console.log(`💾 Base de datos actualizada: ${DATA_FILE}`);

    // Generar Reporte para el PR Body
    const date = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    let markdownContent = `# 📰 Propuesta de Actualización de Contenido - ${date}\n\n`;
    markdownContent += `El sistema automático ha detectado **${newEntries.length}** nuevas noticias relevantes. Se han agregado a \`src/data/news.json\`.\n\n`;
    markdownContent += `## 🆕 Novedades Agregadas:\n\n`;

    newEntries.forEach(item => {
      markdownContent += `### ${item.title}\n`;
      markdownContent += `- **Fecha**: ${item.date}\n`;
      markdownContent += `- **Fuente**: ${item.source}\n`;
      markdownContent += `- **Resumen**: ${item.summary}\n`;
      markdownContent += `- [Leer más](${item.link})\n\n`;
    });

    markdownContent += `\n> *Por favor, revisa que el contenido sea apropiado antes de hacer merge.*`;

    fs.writeFileSync(REPORT_FILE, markdownContent);
    console.log(`📄 Reporte para PR generado: ${REPORT_FILE}`);

  } catch (error) {
    console.error('❌ Error al buscar actualizaciones:', error);
    process.exit(1);
  }
}

searchUpdates();
