
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import { NewsItemSchema } from '../src/data/news-schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../public/data/news.json');

const NewsArraySchema = z.array(NewsItemSchema);

function validate() {
  console.log(`🔍 Validating data file: ${DATA_FILE}`);

  if (!fs.existsSync(DATA_FILE)) {
    console.error(`❌ Error: File not found at ${DATA_FILE}`);
    process.exit(1);
  }

  try {
    const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
    const json = JSON.parse(rawData);
    
    const result = NewsArraySchema.safeParse(json);

    if (!result.success) {
      console.error('❌ Validation Failed:');
      result.error.issues.forEach((issue) => {
        console.error(`  - Path: ${issue.path.join('.')} | Error: ${issue.message}`);
      });
      process.exit(1);
    }

    console.log(`✅ Validation Successful! Found ${json.length} valid news items.`);
    process.exit(0);

  } catch (err) {
    if (err instanceof SyntaxError) {
      console.error('❌ Error: Invalid JSON syntax.');
    } else {
      console.error('❌ Unexpected error:', err.message);
    }
    process.exit(1);
  }
}

validate();
