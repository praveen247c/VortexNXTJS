#!/usr/bin/env node
/**
 * check-no-open-source.mjs - copy guard.
 *
 * Vortex IQ is NOT open source. This standalone script fails (exits non-zero)
 * if any source under app/, public/ or components/ describes OUR OWN product
 * as "open source".
 *
 * It scans for the phrase "open source" / "open-source" (case-insensitive) and
 * flags every hit EXCEPT the allowed exceptions below, which either factually
 * name another company's genuinely open-source product (e.g. Magento Open
 * Source, Airbyte, Odoo, Medusa) or explicitly DISCLAIM open source
 * ("not open source").
 *
 * Run with: npm run lint:copy
 * Deliberately NOT wired into "build" so it can never block a deploy.
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_DIRS = ["app", "public", "components"];

// The phrase we never want attached to our own product.
const PHRASE = /open[\s-]source/i;

// A hit is allowed only when the line matches one of these: a named third-party
// product that really is open source, or an explicit "not open source" disclaimer.
const ALLOWED = [
  /magento open source/i,        // third-party: Adobe/Magento Open Source edition
  /\bairbyte\b/i,                // third-party: Airbyte
  /\bodoo\b/i,                   // third-party: Odoo (open-source ERP)
  /\bmedusa\b/i,                 // third-party: Medusa (open-source commerce)
  /\b(?:not|never|no)\s+(?:&quot;|&#34;|["'“”‘’])?open[\s-]source/i, // disclaimer: "not"/"never" open source
];

// Binary / asset extensions we never want to read as text.
const SKIP_EXT = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".ico", ".pdf",
  ".woff", ".woff2", ".ttf", ".otf", ".eot", ".zip", ".mp4", ".mov", ".webm",
]);

const NUL = String.fromCharCode(0);

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(join(dir, entry.name), out);
    } else if (entry.isFile() && !SKIP_EXT.has(extname(entry.name).toLowerCase())) {
      out.push(join(dir, entry.name));
    }
  }
}

const files = [];
for (const d of SCAN_DIRS) {
  const p = join(ROOT, d);
  if (existsSync(p)) walk(p, files);
}

const allowed = [];
const violations = [];

for (const file of files) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (text.includes(NUL)) continue; // skip binary files
  text.split(/\r?\n/).forEach((line, i) => {
    if (!PHRASE.test(line)) return;
    const record = {
      loc: `${relative(ROOT, file).replace(/\\/g, "/")}:${i + 1}`,
      text: line.trim(),
    };
    (ALLOWED.some((re) => re.test(line)) ? allowed : violations).push(record);
  });
}

if (allowed.length) {
  console.log(`Allowed third-party / disclaimer mentions of "open source" (${allowed.length}):`);
  for (const a of allowed) console.log(`  ok  ${a.loc}  ${a.text}`);
  console.log("");
}

if (violations.length) {
  console.error(`Copy guard FAILED: "open source" used outside the allowed exceptions (${violations.length}):`);
  for (const v of violations) console.error(`  XX  ${v.loc}  ${v.text}`);
  console.error(
    "\nVortex IQ is not open source. Reframe our own product (for example to " +
    '"Vortex Agents" or "Vortex Mind"), or, if this is a genuine third-party ' +
    "product, add it to the allow list in scripts/check-no-open-source.mjs."
  );
  process.exit(1);
}

console.log('Copy guard passed: no disallowed "open source" claims in app/, public/ or components/.');
process.exit(0);
