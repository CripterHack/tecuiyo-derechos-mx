
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();
const OUTPUT_FILE = 'updates-report.md';

// Configuration
const RSS_FEED_URL = 'https://news.google.com/rss/search?q=Reforma+Laboral+Mexico+OR+Ley+Federal+del+Trabajo+when:7d&hl=es-419&gl=MX&ceid=MX:es-419';
const KEYWORDS = ['reforma', 'ley', 'trabajo', 'vacaciones', 'aguinaldo', 'jornada', 'senado', 'diputados', 'stps'];

async function searchUpdates() {
  try {
    console.log('🔍 Buscando actualizaciones en Google News RSS...');
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    console.log(`✅ Se encontraron ${feed.items.length} noticias.`);

    const relevantItems = feed.items.filter(item => {
      const title = item.title?.toLowerCase() || '';
      const content = item.contentSnippet?.toLowerCase() || '';
      // Validar si contiene alguna palabra clave
      return KEYWORDS.some(keyword => title.includes(keyword) || content.includes(keyword));
    });

    console.log(`🎯 ${relevantItems.length} noticias relevantes filtradas.`);

    if (relevantItems.length === 0) {
      console.log('No se encontraron actualizaciones relevantes esta semana.');
      return; // No generar reporte si no hay nada
    }

    // Generar Markdown
    const date = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    let markdownContent = `# 📰 Reporte Semanal de Actualizaciones Laborales - ${date}\n\n`;
    markdownContent += `Se han detectado las siguientes noticias relevantes que podrían impactar el contenido de Tecuiyo:\n\n`;

    relevantItems.forEach(item => {
      markdownContent += `### [${item.title}](${item.link})\n`;
      markdownContent += `*Fecha: ${item.pubDate}*\n\n`;
      markdownContent += `${item.contentSnippet || 'Sin descripción disponible.'}\n\n`;
      markdownContent += `---\n`;
    });

    markdownContent += `\n> *Este reporte fue generado automáticamente por el workflow de investigación de Tecuiyo.*`;

    // Escribir archivo
    fs.writeFileSync(OUTPUT_FILE, markdownContent);
    console.log(`📄 Reporte generado exitosamente: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error al buscar actualizaciones:', error);
    process.exit(1);
  }
}

searchUpdates();
