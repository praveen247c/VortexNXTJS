// Generates the static social-share assets from the brand wordmark:
//   public/og/default.png  (1200x630 social card)
//   public/logo.png        (600x600 square logo for Organization JSON-LD)
// Run: node scripts/make-og.mjs
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const logoSvg = readFileSync(resolve(root, "public/assets/footer/vlogo-white.svg"));

const gradient = (w, h) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a0f3d"/>
      <stop offset="0.55" stop-color="#0c061f"/>
      <stop offset="1" stop-color="#2a17a8"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.18" r="0.7">
      <stop offset="0" stop-color="#5529d6" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#5529d6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
</svg>`;

mkdirSync(resolve(root, "public/og"), { recursive: true });

// 1200x630 OG card: gradient bg + centered white wordmark
const ogBg = await sharp(Buffer.from(gradient(1200, 630))).png().toBuffer();
const ogLogo = await sharp(logoSvg).resize({ width: 660 }).png().toBuffer();
await sharp(ogBg)
  .composite([{ input: ogLogo, gravity: "center" }])
  .png()
  .toFile(resolve(root, "public/og/default.png"));

// 600x600 square logo for schema.org Organization.logo
const sqBg = await sharp(Buffer.from(gradient(600, 600))).png().toBuffer();
const sqLogo = await sharp(logoSvg).resize({ width: 420 }).png().toBuffer();
await sharp(sqBg)
  .composite([{ input: sqLogo, gravity: "center" }])
  .png()
  .toFile(resolve(root, "public/logo.png"));

console.log("Generated public/og/default.png and public/logo.png");
