// PFLO2 "Issue 01": the portfolio as an editorial publication.
// Zero-dependency static site generator, bilingual (EN/VI).
// Usage: node build.mjs            -> dist/ (full site, PDF resumes included)
//        node build.mjs --artifact -> dist-artifact/ (claude.ai preview: no PDF downloads)
// Content: content/en.mjs, content/vi.mjs (chapter pages and features), content/issue.mjs (cover,
// contents, opening note, chapter names, index views, colophon), content/projects.mjs,
// content/activities.mjs, content/resume.cjs (CV page and the Word/PDF resumes).
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import config from "./site.config.mjs";
import en from "./content/en.mjs";
import vi from "./content/vi.mjs";
import issue from "./content/issue.mjs";
import projects from "./content/projects.mjs";
import activities from "./content/activities.mjs";
const resume = createRequire(import.meta.url)("./content/resume.cjs");

const ARTIFACT = process.argv.includes("--artifact");
const OUT = ARTIFACT ? "dist-artifact" : "dist";
const LANGS = { en, vi };
const FEATURES = projects.filter((p) => p.page).sort((a, b) => b.sort - a.sort);
const PAGES = ["index", ...FEATURES.map((p) => p.page), "projects", "activities", "about", "approach", "notes", "writing", "cv", "contact"];
// the publication's chapters, in reading order
const CHAPTERS = ["opening", "features", "projects", "activities", "about", "approach", "notes", "writing", "cv", "contact"];
const CH_HREF = (k) => (k === "opening" ? "index.html#opening" : k === "features" ? "index.html#features" : `${k}.html`);
const CH_NO = (k) => String(CHAPTERS.indexOf(k) + 1).padStart(2, "0");
const CH_HUE = { opening: "peach", features: "lilac", projects: "sky", activities: "butter", about: "lilac", approach: "mint", notes: "rose", writing: "sky", cv: "peach", contact: "peach" };
const HUE = { cisg: "sky", jcj: "peach", hs61: "lilac", ds92: "mint", drivers: "butter", admin: "rose", tool: "lilac", viac: "peach", childdata: "mint", courses: "sky", shift: "peach" };
const SEP = " | "; // title separator; never an en dash or em dash
const BRAND = "Jenny Hoang";
const FORMAL = "Hoàng Đào Mỹ Duyên";
const EMAIL = resume.EMAIL;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const file = (slug) => `${slug}.html`;
const pdf = (w) => `../cv/${resume[w].file}.pdf`;
const pad = (n) => String(n).padStart(2, "0");
const period = (p, lang) => (lang === "vi" ? p.replace(/ to now$/, " đến nay").replace(/ to /g, " đến ") : p);
const startYear = (p) => Number((String(p).match(/\d{4}/) || ["2026"])[0]);
const chapterOf = (slug) => (slug === "index" ? "cover" : FEATURES.some((p) => p.page === slug) ? "features" : slug);
const MARK = (id = "jm") => `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3446D4"/><stop offset="1" stop-color="#8A5CF0"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#${id})"/><path d="M15 6h6v13.2c0 4.6-2.8 7.3-7 7.3-3 0-5.3-1.4-6.4-4.1l4.6-2.2c.4 1 1 1.6 1.9 1.6 1.1 0 1.6-.8 1.6-2.5V12H15z" fill="#FFFFFF"/><circle cx="11.2" cy="8.6" r="2.9" fill="#FFB68A"/></svg>`;

// ---------------------------------------------------------------- shared pieces
function tocList(lang, I, cls = "toc") {
  const feats = `<ol class="toc-sub">${FEATURES.map((p) => `<li><a href="${file(p.page)}"><span class="toc-fno">${pad(p.no)}</span><span>${p.title[lang]}</span></a></li>`).join("")}</ol>`;
  return `<ol class="${cls}">${CHAPTERS.map((k) => `<li class="hue-${CH_HUE[k]}"><a href="${CH_HREF(k)}"><span class="toc-no">${CH_NO(k)}</span><span class="toc-t">${I.chap[k][0]}</span><span class="toc-d">${I.chap[k][1]}</span></a>${k === "features" ? feats : ""}</li>`).join("")}</ol>`;
}
const plateImg = (p, lang, lazy = true) => `<img src="../assets/art/${p.id}.svg" alt="${esc(p.alt[lang])}" width="800" height="600"${lazy ? ' loading="lazy" decoding="async"' : ""}>`;

function helpers(lang, L) {
  const ui = L.ui, I = issue[lang];
  let cur = null; // the feature currently being rendered (set by caseHero, read by caseBody)
  const h = {
    ARTIFACT, lang,
    tag: () => "",
    sky: () => "", stack: () => "", gallery: () => "", actPreview: () => "", phases: () => "",
    note: (_k, html) => `<p class="note">${html}</p>`,
    row: (main) => `<header class="phead">${main}</header>`,
    sec: (id, title, main, margin = "") => `<section class="sec" id="${id}"><div class="g"><header class="sec-h"><h2>${title}</h2></header><div class="sec-main">${main}</div>${margin ? `<aside class="sec-margin">${margin}</aside>` : ""}</div></section>`,
    wsec: (id, title, main, margin = "") => h.sec(id, title, main, margin).replace('class="sec"', 'class="sec wide"'),
    block: () => "",
    link: (slug, text) => `<a href="${file(slug)}">${text}</a>`,
    go: (href, text) => `<a class="go" href="${href}">${text}</a>`,
    btn: (href, text, second) => `<a class="btn${second ? " btn-2" : ""}" href="${href}">${text}</a>`,
    cv: (which, text) => (ARTIFACT ? `<span>${text}</span>` : `<a href="${pdf(which)}">${text}</a>`),
    glance: (pairs) => `<dl class="credits">${pairs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`,
    table: (head, rows, cls = "stack") => `<div class="scroll"><table class="${cls}"><thead><tr>${head.map((x) => `<th scope="col">${x}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td data-l="${esc(String(head[i]).replace(/<[^>]+>/g, ""))}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
    quote: (html, cite = "") => `<figure class="quote"><p>${html}</p>${cite ? `<cite>${cite}</cite>` : ""}</figure>`,
    // chronology: dated entries grouped into four periods
    timeline: (items) => {
      const grp = [[], [], [], []];
      items.forEach((it) => { const y = /\d{4}/.test(it[0]) ? startYear(it[0]) : 2027; grp[y < 2022 ? 0 : y < 2024 ? 1 : y < 2026 ? 2 : 3].push(it); });
      const hues = ["peach", "sky", "mint", "lilac"];
      return `<div class="periods">${grp.map((g, i) => `<section class="period hue-${hues[i]}"><header class="pd-h"><p class="pd-y" aria-hidden="true">${I.periods[i][0].match(/\d{4}/)[0]}</p><p class="pd-r">${I.periods[i][0]}</p><h3>${I.periods[i][1]}</h3></header><ol class="tl">${g.map(([y, t, p]) => `<li><span class="y">${y}</span><div><h4>${t}</h4><p>${p}</p></div></li>`).join("")}</ol></section>`).join("")}</div>`;
    },
    // feature opener: a spread with the text page on the left and the plate on the right
    caseHero: ({ id, kicker, title, lede, meta }) => {
      const p = projects.find((x) => x.id === id); cur = p;
      return `<header class="fo hue-${HUE[p.id]}"><div class="wrap">
  <nav class="crumbs" aria-label="${esc(I.feature)}"><a href="index.html#contents">${I.contents}</a><span aria-hidden="true">/</span><a href="index.html#features">${I.chap.features[0]}</a><span aria-hidden="true">/</span><span>${I.feature} ${pad(p.no)}</span></nav>
  <div class="fo-g"><div class="fo-text"><p class="fo-no" aria-hidden="true">${pad(p.no)}</p><p class="fo-kick">${kicker}</p><h1>${title}</h1><p class="fo-stand">${lede}</p></div>
  <figure class="plate"><div class="plate-in">${plateImg(p, lang, false)}</div><figcaption><b>${I.plate} ${pad(p.no)}.</b> ${p.alt[lang]}.</figcaption></figure></div>
  ${h.glance(meta)}</div></header>`;
    },
    caseBody: (toc, sections) => {
      const i = FEATURES.indexOf(cur), prev = FEATURES[(i - 1 + FEATURES.length) % FEATURES.length], next = FEATURES[(i + 1) % FEATURES.length];
      const pn = (p, label, cls) => `<a class="fp ${cls} hue-${HUE[p.id]}" href="${file(p.page)}"><span class="fp-l">${label}</span><span class="fp-no">${pad(p.no)}</span><span class="fp-t">${p.title[lang]}</span></a>`;
      return `<div class="wrap fb"><nav class="ctoc" aria-label="${esc(ui.onThisPage)}"><p class="meta">${ui.onThisPage}</p><ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join("")}</ol></nav><div class="fb-main">${sections}</div></div>
<nav class="fpager wrap" aria-label="${esc(I.chap.features[0])}">${pn(prev, I.previous, "prev")}<a class="fp-toc" href="index.html#contents">${I.backToContents}</a>${pn(next, I.next, "next")}</nav>`;
    },
    // the index: four ways to browse the same eleven projects
    archive: () => {
      const V = I.views, list = [...projects].sort((a, b) => b.sort - a.sort);
      const row = (p) => {
        const href = p.page ? file(p.page) : p.link;
        const inner = `<span class="ix-no">${pad(p.no)}</span><span class="ix-t">${p.title[lang]}</span><span class="ix-k">${p.kind[lang]}</span><span class="ix-y">${period(p.period, lang)}</span>`;
        return `<li class="ix hue-${HUE[p.id]}"><span class="ix-thumb" aria-hidden="true"><img src="../assets/art/${p.id}.svg" alt="" width="800" height="600" loading="lazy"></span><div class="ix-b">${href ? `<a class="ix-a" href="${href}">${inner}</a>` : `<span class="ix-a">${inner}</span>`}<p class="ix-d">${p.desc[lang]}</p></div></li>`;
      };
      const group = (title, items) => `<section class="ixg"><h3 class="ixg-h">${title}<span>${items.length}</span></h3><ol class="ixl">${items.map(row).join("")}</ol></section>`;
      const years = [...new Set(list.map((p) => startYear(p.period)))].sort((a, b) => b - a);
      const byYear = years.map((y) => group(String(y), list.filter((p) => startYear(p.period) === y))).join("");
      const byTheme = Object.keys(I.themes).map((t) => group(I.themes[t], list.filter((p) => p.theme === t))).join("");
      const byKind = Object.keys(I.kinds).filter((k) => list.some((p) => p.type === k)).map((k) => group(I.kinds[k], list.filter((p) => p.type === k))).join("");
      const ys = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
      const map = `<div class="scroll"><table class="tmap"><caption>${I.mapCaption}</caption><thead><tr><th scope="col"><span class="sr">${V.theme}</span></th>${ys.map((y) => `<th scope="col">${y}</th>`).join("")}</tr></thead><tbody>${Object.keys(I.themes).map((t) => `<tr><th scope="row">${I.themes[t]}</th>${ys.map((y) => { const inCell = list.filter((p) => p.theme === t && startYear(p.period) === y); return `<td data-y="${y}"${inCell.length ? "" : ' class="e"'}>${inCell.map((p) => { const href = p.page ? file(p.page) : p.link; const dot = `<span class="dot-no">${pad(p.no)}</span>`; return href ? `<a class="dot hue-${HUE[p.id]}" href="${href}" title="${esc(p.title[lang])}" aria-label="${esc(pad(p.no) + " " + p.title[lang])}">${dot}</a>` : `<span class="dot hue-${HUE[p.id]}" title="${esc(p.title[lang])}" aria-label="${esc(pad(p.no) + " " + p.title[lang])}">${dot}</span>`; }).join("")}</td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;
      const tabs = [["year", V.year, byYear], ["theme", V.theme, byTheme], ["kind", V.kind, byKind], ["map", V.map, map]];
      return `<div class="views" role="tablist" aria-label="${esc(V.label)}">${tabs.map(([k, t], i) => `<button type="button" role="tab" id="t-${k}" aria-controls="v-${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div>
${tabs.map(([k, t, body], i) => `<div class="vpanel" id="v-${k}" role="tabpanel" aria-labelledby="t-${k}" tabindex="0">${body}</div>`).join("")}`;
    },
    actList: (group) => `<ul class="acts">${activities.filter((x) => x.group === group).sort((x, y) => y.sort - x.sort).map((x) => `<li id="${x.id}"><p class="when">${x.period[lang]}</p><div><h3>${x.org[lang]}</h3><p class="meta">${x.role[lang]}</p><p>${x.body[lang]}</p></div></li>`).join("")}</ul>`,
  };
  return h;
}

// ---------------------------------------------------------------- the cover page: cover, contents, opening note, features
function issuePage(lang, L, h) {
  const I = issue[lang];
  const cover = `<section class="cover" aria-labelledby="mast"><div class="cover-art" aria-hidden="true"><span class="ht"></span><span class="disc"></span></div><div class="wrap cover-in">
  <div class="cover-top"><p>${I.coverKicker}</p><p>${I.issueLong}</p></div>
  <h1 class="mast" id="mast"><span>Jenny</span> <span>Hoang</span></h1>
  <p class="cover-tag"><span>${I.tagline}</span></p>
  <div class="cover-foot"><p class="cl-h">${I.inThisIssue}</p><ol class="coverlines">${FEATURES.map((p) => `<li><a href="${file(p.page)}"><span class="cl-no">${pad(p.no)}</span><span class="cl-t">${p.title[lang]}</span><span class="cl-k">${p.kind[lang]}</span></a></li>`).join("")}</ol>
  <a class="cover-open" href="#contents">${I.contents}</a></div>
</div></section>`;
  const contents = `<section class="contents" id="contents" aria-labelledby="contents-h"><div class="wrap ct-g">
  <header class="ct-h"><p class="ct-no" aria-hidden="true">00</p><h2 id="contents-h">${I.contents}</h2><p class="meta">${BRAND}${SEP}${I.issueLong}</p></header>
  ${tocList(lang, I)}</div></section>`;
  const opening = `<section class="chapter hue-peach" id="opening" aria-labelledby="opening-h"><div class="wrap">
  <header class="ch-open"><p class="ch-no" aria-hidden="true">${CH_NO("opening")}</p><p class="ch-k">${I.chapter} ${CH_NO("opening")}</p><h2 id="opening-h">${I.opening.title}</h2></header>
  <div class="letter">${I.opening.body.map((p, i) => `<p${i === 0 ? ' class="dropcap"' : ""}>${p}</p>`).join("")}<p class="sign"><span>${I.opening.sign}</span>${I.opening.place}</p></div></div></section>`;
  const features = `<section class="chapter hue-lilac" id="features" aria-labelledby="features-h"><div class="wrap">
  <header class="ch-open"><p class="ch-no" aria-hidden="true">${CH_NO("features")}</p><p class="ch-k">${I.chapter} ${CH_NO("features")}</p><h2 id="features-h">${I.chap.features[0]}</h2><p class="ch-d">${I.chap.features[1]}</p></header>
  <ol class="plates">${FEATURES.map((p) => `<li class="pl hue-${HUE[p.id]}"><a href="${file(p.page)}"><span class="pl-img">${plateImg(p, lang)}</span><span class="pl-meta"><span class="pl-no">${pad(p.no)}</span><span>${p.kind[lang]}${SEP}${period(p.period, lang)}</span></span><span class="pl-t">${p.title[lang]}</span><span class="pl-d">${p.desc[lang]}</span><span class="pl-go">${I.readFeature}</span></a></li>`).join("")}</ol>
  <p class="ch-more">${h.go("projects.html", I.openIndex)}</p></div></section>`;
  return { title: L.pages(h).index.title, desc: L.pages(h).index.desc, body: cover + contents + opening + features };
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
    title: ui.nav.cv, desc: ui.cvDesc,
    body: `<div class="wrap">${h.row(`<h1>${ui.nav.cv}</h1><p class="lead">${c.name}</p><p class="meta">${c.contact.filter((x) => x !== resume.PHONE && x !== resume.WEB).join(SEP)}</p>${dl}`)}${c.sections.map(sec).join("")}</div>`,
  };
}

// chapter opener for inner pages: number, label and the chapter's own title
function chapterize(body, key, I) {
  return body.replace(/<header class="phead"><h1>[^<]*<\/h1>/, `<header class="phead op hue-${CH_HUE[key]}"><p class="op-no" aria-hidden="true">${CH_NO(key)}</p><p class="ch-k">${I.chapter} ${CH_NO(key)}</p><h1>${I.chap[key][0]}</h1>`);
}

function layout(lang, L, slug, page) {
  const other = lang === "en" ? "vi" : "en";
  const ui = L.ui, I = issue[lang];
  const key = chapterOf(slug);
  const base = config.siteUrl ? config.siteUrl.replace(/\/$/, "") : "";
  const abs = (lg) => (base ? `${base}/${lg}/${file(slug)}` : `../${lg}/${file(slug)}`);
  const langSw = lang === "en"
    ? `<span aria-current="true">EN</span><a href="../vi/${file(slug)}" hreflang="vi" lang="vi" data-lang="vi" aria-label="Tiếng Việt">VI</a>`
    : `<a href="../en/${file(slug)}" hreflang="en" lang="en" data-lang="en" aria-label="English">EN</a><span aria-current="true">VI</span>`;
  const title = slug === "index" ? `${BRAND}${SEP}${page.title}` : `${page.title}${SEP}${BRAND}`;
  const where = key === "cover" ? `<span>${I.issue}</span>` : `<span>${CH_NO(key)}</span>${I.chap[key][0]}`;
  const ci = CHAPTERS.indexOf(key);
  const prevK = ci > 0 ? CHAPTERS[ci - 1] : null, nextK = ci >= 0 && ci < CHAPTERS.length - 1 ? CHAPTERS[ci + 1] : key === "cover" ? "projects" : null;
  const chLink = (k, label, cls) => (k ? `<a class="cp ${cls}" href="${CH_HREF(k)}"><span class="cp-l">${label}</span><span class="cp-no">${CH_NO(k)}</span><span class="cp-t">${I.chap[k][0]}</span></a>` : `<span class="cp ${cls}"></span>`);
  const isFeature = key === "features" && slug !== "index";
  return `<!DOCTYPE html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.desc)}">
<meta name="author" content="${BRAND} (${FORMAL})">
<meta name="theme-color" content="#FBFAF7">
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
<body class="ch-${key}">
<a class="skip" href="#content">${ui.skip}</a>
<header class="mh"><div class="mh-in">
<a class="brand" href="${file("index")}" aria-label="${BRAND}, ${esc(ui.homeLabel)}">${MARK()}<span>${BRAND}</span></a>
<span class="mh-issue">${I.issue}</span>
<p class="mh-where">${where}</p>
<a class="mh-toc" href="index.html#contents" data-toc aria-haspopup="dialog"><span class="bars" aria-hidden="true"></span>${I.contents}</a>
<div class="lang" role="group" aria-label="${esc(ui.langLabel)}">${langSw}</div>
</div>${isFeature ? `<div class="progress" role="progressbar" aria-label="${esc(I.progress)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>` : ""}</header>
<dialog class="tocd" id="tocd" aria-labelledby="tocd-h"><div class="tocd-in">
<div class="tocd-top"><h2 id="tocd-h">${I.contents}</h2><p class="meta">${BRAND}${SEP}${I.issueLong}</p><button type="button" class="tocd-x" data-close>${I.close}</button></div>
${tocList(lang, I, "toc toc-d")}
</div></dialog>
<main id="content">${page.body}</main>
<footer class="folio"><div class="wrap">
<nav class="cpager" aria-label="${esc(I.chapter)}">${chLink(prevK, I.previous, "prev")}${chLink(nextK, I.next, "next")}</nav>
<div class="folio-line"><a class="folio-brand" href="${file("index")}">${MARK("jm2")}<span>${BRAND}</span></a><span>${I.issueLong}</span><span>${key === "cover" ? I.contents : `${I.chapter} ${CH_NO(key)}, ${I.chap[key][0]}`}</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>
</div></footer>
<script>{
try{localStorage.setItem("lang","${lang}")}catch(e){}
document.querySelectorAll("[data-lang]").forEach(a=>a.addEventListener("click",()=>{try{localStorage.setItem("lang",a.dataset.lang)}catch(e){}}));
const d=document.getElementById("tocd");
if(d&&d.showModal){document.querySelectorAll("[data-toc]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();d.showModal()}));d.querySelector("[data-close]").addEventListener("click",()=>d.close());d.addEventListener("click",e=>{if(e.target===d)d.close();if(e.target.closest("a"))d.close()})}
const tabs=[...document.querySelectorAll('.views [role=tab]')];
const show=t=>{tabs.forEach(x=>{const on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).hidden=!on})};
if(tabs.length){show(tabs[0]);tabs.forEach((t,i)=>{t.addEventListener("click",()=>show(t));t.addEventListener("keydown",e=>{const k=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(k){const n=tabs[(i+k+tabs.length)%tabs.length];n.focus();show(n)}})})}
const bar=document.querySelector(".progress");
if(bar){const s=bar.querySelector("span");const f=()=>{const h=document.documentElement;const p=Math.max(0,Math.min(1,h.scrollTop/(h.scrollHeight-h.clientHeight||1)));s.style.transform="scaleX("+p+")";bar.setAttribute("aria-valuenow",Math.round(p*100))};addEventListener("scroll",f,{passive:true});f()}
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
</head><body style="font-family:system-ui,sans-serif;padding:24px;background:#FBFAF7">
<p><a href="en/index.html">English</a> / <a href="vi/index.html" lang="vi">Tiếng Việt</a></p>
<script>{let l="en";try{l=localStorage.getItem("lang")||((navigator.language||"").toLowerCase().startsWith("vi")?"vi":"en")}catch(e){}location.replace(l+"/index.html")}</script>
</body></html>`;

// ---------------------------------------------------------------- build
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(join(OUT, "assets"), { recursive: true });
cpSync("assets", join(OUT, "assets"), { recursive: true });
if (!ARTIFACT) cpSync("public", OUT, { recursive: true });
writeFileSync(join(OUT, "index.html"), rootIndex);
writeFileSync(join(OUT, ".nojekyll"), "");

const missing = [];
for (const [lang, L] of Object.entries(LANGS)) {
  mkdirSync(join(OUT, lang), { recursive: true });
  const hh = helpers(lang, L), I = issue[lang];
  const pages = { ...L.pages(hh), cv: cvPage(lang, L, hh) };
  pages.index = issuePage(lang, L, hh);
  // colophon closes the publication on the contact page
  pages.contact.body = pages.contact.body.replace(/<\/div>\s*$/, hh.sec("colophon", I.colophon.title, `<dl class="cv-kv">${I.colophon.items.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`) + "</div>");
  for (const slug of PAGES) {
    const page = pages[slug];
    if (!page) { missing.push(`${lang}/${slug}`); continue; }
    const key = chapterOf(slug);
    if (CHAPTERS.includes(key) && key !== "features") { page.title = I.chap[key][0]; page.body = chapterize(page.body, key, I); }
    writeFileSync(join(OUT, lang, file(slug)), layout(lang, L, slug, page));
  }
}
if (missing.length) { console.error("Missing pages:", missing.join(", ")); process.exit(1); }
console.log(`Built ${PAGES.length * 2} pages into ${OUT}/`);
