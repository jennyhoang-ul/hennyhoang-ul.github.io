// Builds the Harvard-style resumes (Word) from content/resume.cjs.
//   node scripts/build-resume.cjs <outdir>         application copies (with phone number)
//   node scripts/build-resume.cjs <outdir> --web   website copies (no phone number)
// Then convert to PDF with Word (Save as PDF) or LibreOffice (soffice --headless --convert-to pdf).
// Style: single column, black and white, Times New Roman, 11 pt body, 0.75 in margins,
// bold organisations, italic roles, dates aligned right, standard bullets.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, BorderStyle, TabStopType,
} = require("docx");
const data = require("../content/resume.cjs");

const OUT = process.argv[2] || "public/cv";
const WEB = process.argv.includes("--web");
const FONT = "Times New Roman";
const BODY = 21; // half-points: 10.5 pt

function build(lang) {
  const c = data[lang];
  // A4 for both; 0.75 in margins
  const PAGE_W = 11906, PAGE_H = 16838, M = 1080;
  const RIGHT = PAGE_W - 2 * M;
  const r = (text, o = {}) => new TextRun({ text, font: FONT, size: BODY, ...o });
  const tabbed = (left, right, o = {}, ro = {}) => new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }], keepNext: true, keepLines: true,
    spacing: { after: 0, ...(o.spacing || {}) },
    children: [r(left, o.run || {}), ...(right ? [r("\t" + right, ro)] : [])],
  });
  const kids = [];
  kids.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [r(c.name, { bold: true, size: 32 })] }));
  const contact = c.contact.filter((x) => !(WEB && x === data.PHONE));
  // contact details on one line, the website address on its own line so it never breaks
  const web = contact[contact.length - 1];
  kids.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 },
    children: [r(contact.slice(0, -1).join("  \u2022  "), { size: 19 })] }));
  kids.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
    children: [r(web, { size: 19 })] }));

  for (const s of c.sections) {
    kids.push(new Paragraph({
      keepNext: true, spacing: { before: 160, after: 60 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
      children: [r(s.h.toUpperCase(), { bold: true, size: 22, characterSpacing: 10 })],
    }));
    if (s.lead) kids.push(tabbed(s.lead, "", { run: { bold: true } }));
    for (const it of s.items || []) {
      const first = { before: 70 };
      if (it.loc) {
        kids.push(tabbed(it.org, it.loc, { run: { bold: true }, spacing: first }));
      } else {
        kids.push(new Paragraph({ keepNext: true, keepLines: true, spacing: { before: first.before, after: 0 },
          children: [r(it.org, { bold: true })] }));
      }
      kids.push(tabbed(it.role, it.date, { run: { italics: true }, spacing: { after: 10 } }));
      it.bullets.forEach((b, i) => kids.push(new Paragraph({
        numbering: { reference: "b", level: 0 }, keepLines: true,
        keepNext: i < it.bullets.length - 1,
        spacing: { after: 0, line: 240 }, children: [r(b)],
      })));
    }
    for (const [k, v] of s.kv || []) kids.push(new Paragraph({ spacing: { after: 20, line: 240 },
      children: [r(k + ": ", { bold: true }), r(v)] }));
  }

  return new Document({
    creator: "Hoang Dao My Duyen",
    title: `${c.name} | ${lang === "vi" ? "CV" : "Resume"}`,
    styles: { default: { document: { run: { font: FONT, size: BODY } } } },
    numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•",
      alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 220 } } } }] }] },
    sections: [{ properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: M, bottom: M, left: M, right: M } } },
      children: kids }],
  });
}

fs.mkdirSync(OUT, { recursive: true });
(async () => {
  for (const lang of ["en", "vi"]) {
    const f = path.join(OUT, data[lang].file + ".docx");
    fs.writeFileSync(f, await Packer.toBuffer(build(lang)));
    console.log("wrote", f, WEB ? "(web, no phone)" : "(application copy)");
  }
})();
