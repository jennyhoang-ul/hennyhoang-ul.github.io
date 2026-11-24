// Zero-dependency static site generator for the bilingual portfolio (Jenny Hoang).
// Usage: node build.mjs            -> dist/ (full site, PDF resumes included)
//        node build.mjs --artifact -> dist-artifact/ (claude.ai preview: no PDF downloads)
// Content: content/en.mjs, content/vi.mjs (pages), content/projects.mjs, content/activities.mjs,
//          content/resume.cjs (CV page and the Word/PDF resumes).
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import config from "./site.config.mjs";
import en from "./content/en.mjs";
import vi from "./content/vi.mjs";
import projects from "./content/projects.mjs";
import activities from "./content/activities.mjs";
const resume = createRequire(import.meta.url)("./content/resume.cjs");

const ARTIFACT = process.argv.includes("--artifact");
const OUT = ARTIFACT ? "dist-artifact" : "dist";
const LANGS = { en, vi };
const CASES = projects.filter((p) => p.page).map((p) => p.page);
const PAGES = ["index", "projects", ...CASES, "activities", "about", "approach", "notes", "writing", "cv", "contact"];
const NAV = ["projects", "activities", "about", "writing", "cv", "contact"];
const NAV_PARENT = { ...Object.fromEntries(CASES.map((c) => [c, "projects"])), approach: "about", notes: "writing" };
const SEP = " | "; // title separator; never an en dash or em dash
const BRAND = "Jenny Hoang";
const FORMAL = "Hoàng Đào Mỹ Duyên";
const EMAIL = resume.EMAIL;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const file = (slug) => `${slug}.html`;
const pdf = (w) => `../cv/${resume[w].file}.pdf`;
const pad = (n) => String(n).padStart(2, "0");
const period = (p, lang) => (lang === "vi" ? p.replace(/ to now$/, " đến nay").replace(/ to /g, " đến ") : p);
// The J mark: cobalt square, paper-coloured J, apricot block. Same drawing as assets/brand/favicon.svg.
const MARK = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><defs><linearGradient id="jm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3446D4"/><stop offset="1" stop-color="#8A5CF0"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#jm)"/><path d="M15 6h6v13.2c0 4.6-2.8 7.3-7 7.3-3 0-5.3-1.4-6.4-4.1l4.6-2.2c.4 1 1 1.6 1.9 1.6 1.1 0 1.6-.8 1.6-2.5V12H15z" fill="#FFFFFF"/><circle cx="11.2" cy="8.6" r="2.9" fill="#FFB68A"/></svg>`;
// one hue family per project (surfaces and glows only)
const HUE = { cisg: "sky", jcj: "peach", hs61: "lilac", ds92: "mint", drivers: "butter", admin: "rose", tool: "lilac", viac: "peach", childdata: "mint", courses: "sky", shift: "peach" };

function helpers(lang, L) {
  const ui = L.ui;
  const card = (p) => {
    const href = p.page ? file(p.page) : p.link;
    const title = href ? `<a href="${href}">${p.title[lang]}</a>` : p.title[lang];
    return `<li class="card hue-${HUE[p.id] || "lilac"}" id="${p.id}" data-type="${p.type}">
  <figure><img src="../assets/art/${p.id}.svg" alt="${esc(p.alt[lang])}" width="800" height="600" loading="lazy" decoding="async"></figure>
  <div class="card-top"><span class="card-no" aria-hidden="true">${pad(p.no)}</span><p class="meta">${p.kind[lang]}${SEP}${period(p.period, lang)}</p></div>
  <h3>${title}</h3><p>${p.desc[lang]}</p><p class="out">${p.output[lang]}</p></li>`;
  };
  const h = {
    ARTIFACT, lang,
    tag: () => "",
    note: (_k, html) => `<p class="note">${html}</p>`,
    row: (main) => `<header class="phead">${main}</header>`,
    sec: (id, title, main, margin = "") => `<section class="sec" id="${id}"><div class="g"><header class="sec-h"><h2>${title}</h2></header><div class="sec-main">${main}</div>${margin ? `<aside class="sec-margin">${margin}</aside>` : ""}</div></section>`,
    wsec: (id, title, main, margin = "") => h.sec(id, title, main, margin).replace('class="sec"', 'class="sec wide"'),
    // full-width home band: big display heading, a sentence beside it, then content
    block: (id, title, intro, body, tint = "") => `<section class="block${tint ? " tint-" + tint : ""}" id="${id}"><div class="wrap"><header class="bhead"><h2>${title}</h2>${intro ? `<p>${intro}</p>` : ""}</header>${body}</div></section>`,
    // home hero background: drifting light, a low sun, a few stars (decorative)
    sky: () => `<div class="sky" aria-hidden="true"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span><span class="orb o4"></span></div><div class="sun" aria-hidden="true"></div>${[[8, 14, 18, 0], [22, 70, 10, 1.2], [46, 10, 12, 2.1], [62, 52, 9, .6], [74, 8, 16, 1.6], [88, 64, 11, 2.8], [94, 30, 8, .3], [36, 86, 10, 3.2]].map(([x, y, sz, dl]) => `<span class="twinkle" aria-hidden="true" style="left:${x}%;top:${y}%;--s:${sz}px;--dl:${dl}s;--d:${3 + (sz % 4)}s"></span>`).join("")}`,
    // three project images floating in the hero (decorative; the gallery below carries the links)
    stack: () => `<div class="hero-stack" aria-hidden="true">${["hs61", "jcj", "cisg"].map((id, i) => `<img class="st st${i + 1}" src="../assets/art/${id}.svg" alt="" width="800" height="600">`).join("")}</div>`,
    link: (slug, text) => `<a href="${file(slug)}">${text}</a>`,
    go: (href, text) => `<a class="go" href="${href}">${text}</a>`,
    btn: (href, text, second) => `<a class="btn${second ? " btn-2" : ""}" href="${href}">${text}</a>`,
    cv: (which, text) => (ARTIFACT ? `<span>${text}</span>` : `<a href="${pdf(which)}">${text}</a>`),
    glance: (pairs) => `<dl class="glance">${pairs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`,
    table: (head, rows, cls = "stack") => `<div class="scroll"><table class="${cls}"><thead><tr>${head.map((x) => `<th scope="col">${x}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td data-l="${esc(String(head[i]).replace(/<[^>]+>/g, ""))}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
    quote: (html, cite = "") => `<figure class="quote"><p>${html}</p>${cite ? `<cite>${cite}</cite>` : ""}</figure>`,
    timeline: (items) => `<ol class="tl">${items.map(([y, t, p]) => `<li><span class="y">${y}</span><div><h3>${t}</h3><p>${p}</p></div></li>`).join("")}</ol>`,
    // project detail opening: number, title, lede, artwork, facts
    caseHero: ({ id, kicker, title, lede, meta }) => {
      const p = projects.find((x) => x.id === id);
      return `<header class="chero hue-${HUE[p.id] || "lilac"}"><div class="wrap">
  <a class="back" href="projects.html">${ui.back}</a>
  <div class="chero-g"><div class="chero-t"><p class="chero-no" aria-hidden="true">${pad(p.no)}</p><p class="meta">${kicker}</p><h1>${title}</h1><p class="lead">${lede}</p></div>
  <figure><img src="../assets/art/${p.id}.svg" alt="${esc(p.alt[lang])}" width="800" height="600"></figure>
  ${h.glance(meta)}</div></div></header>`;
    },
    caseBody: (toc, sections) => `<div class="wrap case"><nav class="ctoc" aria-label="${esc(ui.onThisPage)}"><p class="meta">${ui.onThisPage}</p><ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join("")}</ol></nav><div>${sections}<div class="case-next">${h.go("projects.html", ui.allProjects)}</div></div></div>`,
    gallery: () => `<ul class="cards">${projects.filter((p) => p.home).sort((a, b) => b.sort - a.sort).map(card).join("")}</ul>`,
    archive: () => {
      const a = ui.arch, list = [...projects].sort((x, y) => y.sort - x.sort);
      const types = ["research", "coursework", "technology", "ongoing"].filter((t) => list.some((p) => p.type === t));
      const btn = (f, label, n, on) => `<button type="button" data-f="${f}" aria-pressed="${on}">${label} <span>${n}</span></button>`;
      return `<div class="filters" role="group" aria-label="${esc(a.filterLabel)}">${btn("all", a.all, list.length, true)}${types.map((t) => btn(t, a[t], list.filter((p) => p.type === t).length, false)).join("")}</div>
<ul class="cards archive" aria-live="polite">${list.map(card).join("")}</ul>`;
    },
    actPreview: (ids) => `<ul class="acts acts-sm">${ids.map((id) => activities.find((x) => x.id === id)).filter(Boolean).map((x) => `<li><p class="when">${x.period[lang]}</p><div><h3><a href="activities.html#${x.id}">${x.org[lang]}</a></h3><p class="meta">${x.role[lang]}</p></div></li>`).join("")}</ul>`,
    actList: (group) => `<ul class="acts">${activities.filter((x) => x.group === group).sort((x, y) => y.sort - x.sort).map((x) => `<li id="${x.id}"><p class="when">${x.period[lang]}</p><div><h3>${x.org[lang]}</h3><p class="meta">${x.role[lang]}</p><p>${x.body[lang]}</p></div></li>`).join("")}</ul>`,
    phases: (items) => `<ol class="phases">${items.map(([y, t, p]) => `<li><p class="when">${y}</p><h3>${t}</h3><p>${p}</p></li>`).join("")}</ol>`,
  };
  return h;
}

// HTML CV from the same data as the Harvard-style Word/PDF resumes. No phone number on the web.
function cvPage(lang, L, h) {
  const c = resume[lang], ui = L.ui;
  const entry = (it) => `<div class="cv-e"><div class="cv-row"><b>${it.org}</b>${it.loc ? `<span class="r">${it.loc}</span>` : ""}</div>
  <div class="cv-row"><span class="cv-role">${it.role}</span><span class="r">${it.date}</span></div>
  <ul>${it.bullets.map((b) => `<li>${b}</li>`).join("")}</ul></div>`;
  const sec = (s, i) => h.sec(`cv-${i}`, s.h,
    (s.lead ? `<p class="meta">${s.lead}</p>` : "") +
    (s.items ? s.items.map(entry).join("") : "") +
    (s.kv ? `<dl class="cv-kv">${s.kv.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>` : ""));
  const dl = ARTIFACT ? `<p class="small">${ui.cvPdfNote}</p>`
    : `<div class="btns">${h.btn(pdf(lang), ui.cvPdf)}${h.btn(pdf(lang === "en" ? "vi" : "en"), ui.cvPdfOther, true)}</div>`;
  return {
    title: ui.nav.cv,
    desc: ui.cvDesc,
    body: `<div class="wrap">${h.row(`<h1>${ui.nav.cv}</h1><p class="lead">${c.name}</p><p class="meta">${c.contact.filter((x) => x !== resume.PHONE && x !== resume.WEB).join(SEP)}</p>${dl}`)}${c.sections.map(sec).join("")}</div>`,
  };
}

function layout(lang, L, slug, page) {
  const other = lang === "en" ? "vi" : "en";
  const ui = L.ui;
  const navCur = NAV_PARENT[slug] || slug;
  const base = config.siteUrl ? config.siteUrl.replace(/\/$/, "") : "";
  const abs = (lg) => (base ? `${base}/${lg}/${file(slug)}` : `../${lg}/${file(slug)}`);
  const links = NAV.map((k) => `<a href="${file(k)}"${k === navCur ? ' aria-current="page"' : ""}>${ui.nav[k]}</a>`).join("");
  const langSw = lang === "en"
    ? `<span aria-current="true">EN</span><a href="../vi/${file(slug)}" hreflang="vi" lang="vi" data-lang="vi" aria-label="Tiếng Việt">VI</a>`
    : `<a href="../en/${file(slug)}" hreflang="en" lang="en" data-lang="en" aria-label="English">EN</a><span aria-current="true">VI</span>`;
  const title = slug === "index" ? `${BRAND}${SEP}${page.title}` : `${page.title}${SEP}${BRAND}`;
  const footLinks = [["projects"], ["activities"], ["approach"], ["notes"], ["writing"], ["cv"]].map(([k]) => `<li><a href="${file(k)}">${ui.nav[k]}</a></li>`).join("");
  return `<!DOCTYPE html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.desc)}">
<meta name="author" content="${BRAND} (${FORMAL})">
<meta name="theme-color" content="#FBF9F6">
<link rel="alternate" hreflang="${lang}" href="${abs(lang)}">
<link rel="alternate" hreflang="${other}" href="${abs(other)}">
<link rel="alternate" hreflang="x-default" href="${abs("en")}">
${base ? `<link rel="canonical" href="${abs(lang)}">` : ""}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.desc)}">
<meta property="og:locale" content="${L.ogLocale}">
${base ? `<meta property="og:image" content="${base}/assets/brand/icon-512.png">` : ""}
<link rel="icon" href="../assets/brand/favicon.svg" type="image/svg+xml">
<link rel="icon" href="../assets/brand/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="../assets/brand/apple-touch-icon.png">
<link rel="preload" href="../assets/fonts/anton-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<script>document.documentElement.classList.add("js")</script>
<link rel="stylesheet" href="../assets/site.css">
</head>
<body>
<a class="skip" href="#content">${ui.skip}</a>
<header class="top"><div class="wrap top-in">
<a class="brand" href="${file("index")}" aria-label="${BRAND}, ${esc(ui.homeLabel)}">${MARK}<span>${BRAND}</span></a>
<nav class="nav" aria-label="${esc(ui.navLabel)}">${links}</nav>
<details class="menu"><summary>${ui.menu}</summary><nav aria-label="${esc(ui.navLabel)}"><a href="${file("index")}"${slug === "index" ? ' aria-current="page"' : ""}>${ui.home}</a>${links}</nav></details>
<div class="lang" role="group" aria-label="${esc(ui.langLabel)}">${langSw}</div>
</div></header>
<main id="content">${page.body}</main>
<footer class="foot"><div class="wrap foot-g">
<p class="foot-wm">${MARK.replace(/jm/g, "jm2")}<span>${BRAND}</span></p>
<ul class="foot-links">${footLinks}</ul>
<p class="foot-base meta"><a href="mailto:${EMAIL}">${EMAIL}</a><span>${ui.foot}</span></p>
</div></footer>
<script>{
try{localStorage.setItem("lang","${lang}")}catch(e){}
document.querySelectorAll("[data-lang]").forEach(a=>a.addEventListener("click",()=>{try{localStorage.setItem("lang",a.dataset.lang)}catch(e){}}));
const fb=[...document.querySelectorAll(".filters button")];
fb.forEach(b=>b.addEventListener("click",()=>{const f=b.dataset.f;fb.forEach(x=>x.setAttribute("aria-pressed",x===b));document.querySelectorAll(".archive .card").forEach(li=>{li.hidden=f!=="all"&&li.dataset.type!==f})}));
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const els=[...document.querySelectorAll(".bhead,.card,.themes>div,.phases li,.callout,.steps li,.chero figure,.glance div")];const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px"});els.forEach(el=>{const sib=el.parentElement?[...el.parentElement.children].indexOf(el):0;el.style.setProperty("--dl",(sib%3)*0.08+"s");el.classList.add("rv");ro.observe(el)})}
const toc=[...document.querySelectorAll(".ctoc a")];
if(toc.length&&"IntersectionObserver" in window){const map=new Map(toc.map(a=>[a.getAttribute("href").slice(1),a]));const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){toc.forEach(a=>a.classList.remove("on"));map.get(e.target.id)?.classList.add("on")}})},{rootMargin:"-30% 0px -60% 0px"});map.forEach((a,id)=>{const s=document.getElementById(id);s&&io.observe(s)})}
}</script>
</body>
</html>`;
}

// root: remembered language, else browser language, else English
const rootIndex = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${BRAND}${SEP}Research portfolio</title>
<link rel="icon" href="assets/brand/favicon.svg" type="image/svg+xml">
<noscript><meta http-equiv="refresh" content="0; url=en/index.html"></noscript>
<link rel="alternate" hreflang="en" href="en/index.html"><link rel="alternate" hreflang="vi" href="vi/index.html">
</head><body style="font-family:system-ui,sans-serif;padding:24px;background:#FBF9F6">
<p><a href="en/index.html">English</a> / <a href="vi/index.html" lang="vi">Tiếng Việt</a></p>
<script>{let l="en";try{l=localStorage.getItem("lang")||((navigator.language||"").toLowerCase().startsWith("vi")?"vi":"en")}catch(e){}location.replace(l+"/index.html")}</script>
</body></html>`;

// ---- build
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(join(OUT, "assets"), { recursive: true });
cpSync("assets", join(OUT, "assets"), { recursive: true });
if (!ARTIFACT) cpSync("public", OUT, { recursive: true });
writeFileSync(join(OUT, "index.html"), rootIndex);
writeFileSync(join(OUT, ".nojekyll"), "");

const missing = [];
for (const [lang, L] of Object.entries(LANGS)) {
  mkdirSync(join(OUT, lang), { recursive: true });
  const hh = helpers(lang, L);
  const pages = { ...L.pages(hh), cv: cvPage(lang, L, hh) };
  for (const slug of PAGES) {
    const page = pages[slug];
    if (!page) { missing.push(`${lang}/${slug}`); continue; }
    writeFileSync(join(OUT, lang, file(slug)), layout(lang, L, slug, page));
  }
}
if (missing.length) { console.error("Missing pages:", missing.join(", ")); process.exit(1); }
console.log(`Built ${PAGES.length * 2} pages into ${OUT}/`);
