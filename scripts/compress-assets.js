import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');

async function compressImages() {
  console.log('Starting image compression in:', ASSETS_DIR);
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets directory not found');
    return;
  }

  const files = fs.readdirSync(ASSETS_DIR);
  
  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) continue;
    
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    
    const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
    console.log(`Processing: ${file} (${sizeMB} MB)...`);
    
    // We only compress if size is larger than 250KB or it is one of our specific large files
    if (stat.size < 250000 && !file.includes('ficus-binnendijkii')) {
      console.log(`-> Skipped (already small: ${stat.size} bytes)`);
      continue;
    }
    
    try {
      const tempPath = filePath + '.tmp';
      
      let pipeline = sharp(filePath);
      const metadata = await pipeline.metadata();
      
      // If width is larger than 1000px, resize it to 1000px max
      if (metadata.width && metadata.width > 1000) {
        pipeline = pipeline.resize({ width: 1000, withoutEnlargement: true });
      }
      
      if (ext === '.png') {
        // Output optimized PNG
        await pipeline
          .png({ quality: 80, compressionLevel: 8 })
          .toFile(tempPath);
      } else {
        // Output optimized JPEG
        await pipeline
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(tempPath);
      }
      
      // Replace original file with compressed file
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newStat = fs.statSync(filePath);
      const newSizeKB = (newStat.size / 1024).toFixed(1);
      console.log(`-> Success: ${file} compressed to ${newSizeKB} KB`);
    } catch (err) {
      console.error(`-> Error processing ${file}:`, err);
    }
  }
  
  console.log('Compression process completed!');
}

compressImages().catch(err => {
  console.error('Fatal compression error:', err);
});
