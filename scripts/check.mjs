// Checks the built site: every internal link and #anchor resolves, EN/VI pages have the same sections,
// and no page contains an en dash or em dash.
// Usage: node scripts/check.mjs [dist]
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";

const OUT = process.argv[2] || "dist";
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })(OUT);

const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
let errors = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(href)) continue;
    const [path, hash] = href.split("#");
    const target = path ? resolve(dirname(f), path) : resolve(f);
    if (!existsSync(target)) { console.log(`BROKEN  ${f} -> ${href}`); errors++; continue; }
    if (hash && target.endsWith(".html") && !ids(readFileSync(target, "utf8")).has(hash)) { console.log(`ANCHOR  ${f} -> ${href}`); errors++; }
  }
  if (!/<html lang="(en|vi)"/.test(html) && !f.endsWith(`${OUT}/index.html`)) { console.log(`LANG    ${f}`); errors++; }
}
// typography rule: no en dash (U+2013) or em dash (U+2014) anywhere in page text, titles, metadata or attributes
for (const f of files) {
  const html = readFileSync(f, "utf8").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const hits = [...html.matchAll(/.{0,40}(\u2013|\u2014|&ndash;|&mdash;|&#821[12];).{0,40}/g)];
  for (const m of hits) { console.log(`DASH    ${f}: ...${m[0].trim()}...`); errors++; }
}
// parity: same section ids in both languages
for (const f of files.filter((x) => x.includes(`${OUT}/en/`))) {
  const v = f.replace("/en/", "/vi/");
  if (!existsSync(v)) { console.log(`MISSING VI ${v}`); errors++; continue; }
  const a = [...ids(readFileSync(f, "utf8"))].sort().join(","), b = [...ids(readFileSync(v, "utf8"))].sort().join(",");
  if (a !== b) { console.log(`PARITY  ${f} vs ${v}`); errors++; }
}
console.log(`${files.length} pages checked, ${errors} problem(s).`);
process.exit(errors ? 1 : 0);
