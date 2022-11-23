import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const distDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist/assets');
(async ()=>{
    try {
        const files = await fs.promises.readdir(distDir);
        for( const file of files ) {
            if (file.endsWith('.webp')) {
                const fromPath = path.join(distDir, file);
                const toPath = path.join(distDir, file.replace('.webp', '.png'));
                sharp(fromPath).png({quality: 70, compressionLevel: 9}).toFile(toPath)
            }
        }
    } catch( error ) {
        console.error('Error: ', error );
        process.exit(1);
    }
})();
