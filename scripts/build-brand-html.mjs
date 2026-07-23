/**
 * Builds public/downloads/VortexIQ-Brand-Guidelines.html from
 * scripts/brand-guidelines.template.html, inlining the logo SVGs so the
 * downloaded file works offline and prints to PDF with the mark intact.
 *
 * Run: npm run build:brand
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const TEMPLATE = join(here, "brand-guidelines.template.html");
const OUT = join(root, "public", "downloads", "VortexIQ-Brand-Guidelines.html");

const SVGS = {
  vlogo: join(root, "public", "assets", "webflow", "vlogo.svg"),
  "vlogo-white": join(root, "public", "assets", "webflow", "vlogo-white.svg"),
};

// Strip the XML prolog and any leading comments, keep the <svg> element itself.
function loadSvg(path) {
  const raw = readFileSync(path, "utf8");
  const start = raw.indexOf("<svg");
  if (start === -1) throw new Error(`No <svg> element found in ${path}`);
  return raw.slice(start).trim();
}

let html = readFileSync(TEMPLATE, "utf8");

for (const [name, path] of Object.entries(SVGS)) {
  const svg = loadSvg(path);
  const marker = `<!--INLINE:${name}-->`;
  if (!html.includes(marker)) {
    console.warn(`warn: marker ${marker} not found in the template`);
    continue;
  }
  html = html.split(marker).join(svg);
}

const leftover = html.match(/<!--INLINE:[^>]*-->/g);
if (leftover) throw new Error(`Unresolved markers: ${leftover.join(", ")}`);

writeFileSync(OUT, html, "utf8");
console.log(`Wrote ${OUT} (${(html.length / 1024).toFixed(1)} KB)`);
