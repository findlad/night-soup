import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const logo = await readFile(path.join(root, 'public', 'Night_Soup.svg'));
const resizedLogo = await sharp(logo)
  .resize(510, 510, { fit: 'contain' })
  .png()
  .toBuffer();

const backdrop = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#3e7c70" stop-opacity="0.42" />
        <stop offset="100%" stop-color="#070908" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#070908" />
    <circle cx="600" cy="315" r="430" fill="url(#glow)" />
    <circle cx="95" cy="80" r="150" fill="#ee571d" opacity="0.12" />
    <circle cx="1110" cy="560" r="190" fill="#489484" opacity="0.13" />
    <rect y="616" width="1200" height="14" fill="#ee571d" />
  </svg>
`);

await sharp(backdrop)
  .composite([{ input: resizedLogo, left: 345, top: 60 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'og-image.png'));

console.log('Created public/og-image.png (1200x630).');
