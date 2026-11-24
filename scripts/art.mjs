// Generates the original project artwork in assets/art/*.svg (4:3, 800 x 600).
// Style "dawn": luminous gradient skies, soft glowing orbs, a little grain and a few
// sparkles, with one foreground motif taken from the project's own content
// (for example the CISG funnel uses the real counts 197, 58, 27, 2 at true scale).
// Everything is drawn here from simple shapes: no third-party imagery, no text.
// Run: node scripts/art.mjs
import { writeFileSync, mkdirSync } from "node:fs";

// palette
const P = {
  ink: "#1E1B3A", cobalt: "#3B4FE0", white: "#FFFFFF",
  lilac: "#C7B5FF", lilacD: "#7A5CF0", peach: "#FFC7A6", peachD: "#F28A5B",
  sky: "#A9D3FF", skyD: "#3D86F0", mint: "#A6E8CF", mintD: "#22A57A",
  butter: "#FFE39E", butterD: "#F0B429", rose: "#FFB8CF", roseD: "#E8578A",
};
// each project's sky: [top, bottom, orb A, orb B, accent]
const SKY = {
  cisg: [P.sky, "#EEF5FF", P.lilac, P.mint, P.butterD],
  jcj: [P.peach, "#FFF3EA", P.rose, P.butter, P.lilacD],
  hs61: [P.lilac, "#F5F0FF", P.sky, P.rose, P.peachD],
  ds92: [P.mint, "#EFFBF6", P.sky, P.butter, P.cobalt],
  drivers: [P.butter, "#FFF8E6", P.peach, P.rose, P.cobalt],
  admin: [P.rose, "#FFF1F6", P.lilac, P.peach, P.cobalt],
  tool: ["#B9C3FF", "#F1F3FF", P.sky, P.lilac, P.peachD],
  viac: [P.lilac, "#FFF2EA", P.peach, P.sky, P.cobalt],
  childdata: [P.mint, "#F4F0FF", P.lilac, P.rose, P.peachD],
  courses: [P.sky, "#FFF6EC", P.butter, P.mint, P.lilacD],
  shift: [P.peach, "#F3F0FF", P.lilac, P.butter, P.cobalt],
};

const star = (x, y, r, fill = P.white, o = 1) =>
  `<path d="M${x} ${y - r} C${x + r * .12} ${y - r * .12} ${x + r * .12} ${y - r * .12} ${x + r} ${y} C${x + r * .12} ${y + r * .12} ${x + r * .12} ${y + r * .12} ${x} ${y + r} C${x - r * .12} ${y + r * .12} ${x - r * .12} ${y + r * .12} ${x - r} ${y} C${x - r * .12} ${y - r * .12} ${x - r * .12} ${y - r * .12} ${x} ${y - r}Z" fill="${fill}" opacity="${o}"/>`;

function scene(id, body, { stars = [[640, 90, 14], [700, 150, 7], [110, 120, 9]], hills = true } = {}) {
  const [top, bot, a, b, acc] = SKY[id];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient>
<filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="46"/></filter>
<filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="${P.ink}" flood-opacity=".16"/></filter>
<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .05 0"/></filter>
<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>
<linearGradient id="hueA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
<radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="${acc}" stop-opacity=".85"/><stop offset="1" stop-color="${acc}" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="600" fill="url(#sky)"/>
<circle cx="150" cy="140" r="170" fill="${a}" opacity=".75" filter="url(#blur)"/>
<circle cx="650" cy="470" r="200" fill="${b}" opacity=".8" filter="url(#blur)"/>
<circle cx="560" cy="110" r="120" fill="#fff" opacity=".7" filter="url(#blur)"/>
${hills ? `<path d="M0 470 C 160 420, 300 470, 430 440 S 680 400, 800 430 V600 H0Z" fill="#fff" opacity=".45"/><path d="M0 520 C 200 490, 360 540, 520 510 S 720 480, 800 500 V600 H0Z" fill="#fff" opacity=".55"/>` : ""}
${body}
${stars.map(([x, y, r]) => star(x, y, r)).join("")}
<rect width="800" height="600" filter="url(#grain)"/>
</svg>
`;
}

const art = {};

// 07 CISG: the screening funnel at true scale, as glass bars; the last one glows
art.cisg = scene("cisg", [197, 58, 27, 2].map((v, i) => {
  const w = Math.max(14, (v / 197) * 560), y = 150 + i * 82;
  return `<rect x="120" y="${y}" width="${w.toFixed(1)}" height="50" rx="25" fill="${i === 3 ? "url(#glow)" : "url(#glass)"}" filter="url(#shadow)"/>` +
    (i < 3 ? `<rect x="120" y="${y}" width="${(w * 0.92).toFixed(1)}" height="50" rx="25" fill="${[P.skyD, P.cobalt, P.lilacD][i]}" opacity=".88"/>` : "");
}).join("") + `<circle cx="134" cy="421" r="34" fill="url(#glow)"/>` +
  `<path d="M90 120 V520" stroke="${P.ink}" stroke-width="3" stroke-linecap="round" opacity=".5"/>`,
  { stars: [[690, 120, 16], [730, 190, 8], [600, 70, 7]] });

// 09 JCJ: two homes of light linked by an arc; the contact allowance sits under a ceiling, with no floor
art.jcj = scene("jcj",
  `<path d="M150 300 C 260 110, 540 110, 650 300" fill="none" stroke="${P.ink}" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round" opacity=".55"/>
  <circle cx="150" cy="300" r="62" fill="url(#glow)"/><circle cx="150" cy="300" r="26" fill="#fff" filter="url(#shadow)"/>
  <circle cx="650" cy="300" r="62" fill="url(#glow)"/><circle cx="650" cy="300" r="26" fill="#fff" filter="url(#shadow)"/>
  <line x1="300" y1="300" x2="500" y2="300" stroke="${P.ink}" stroke-width="4" stroke-linecap="round"/>` +
  [0, 1, 2, 3].map((i) => `<rect x="${318 + i * 44}" y="300" width="30" height="${110 - i * 6}" rx="15" fill="${i === 3 ? P.lilacD : "url(#glass)"}" filter="url(#shadow)"/>`).join("") +
  `<line x1="300" y1="470" x2="500" y2="470" stroke="${P.ink}" stroke-width="3" stroke-dasharray="6 10" opacity=".5"/>`);

// 06 HS61: a phone of personal data; a soft veil protects part of it
{
  let dots = "";
  for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) {
    const on = (r * 5 + c) % 3 === 0;
    dots += `<rect x="${330 + c * 30}" y="${150 + r * 40}" width="18" height="18" rx="6" fill="${on ? P.lilacD : P.white}" opacity="${on ? .9 : .9}"/>`;
  }
  art.hs61 = scene("hs61",
    `<rect x="300" y="110" width="200" height="380" rx="36" fill="url(#glass)" filter="url(#shadow)"/>
    <rect x="300" y="110" width="200" height="380" rx="36" fill="none" stroke="#fff" stroke-width="3"/>${dots}
    <path d="M470 215 L548 243 V300 C548 352 512 388 470 405 C428 388 392 352 392 300 V243 Z" fill="${P.peach}" opacity=".95" filter="url(#shadow)"/>
    <path d="M445 305 l18 18 l36 -42" fill="none" stroke="${P.ink}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="470" cy="300" r="120" fill="url(#glow)" opacity=".35"/>`);
}

// 05 DS92: messages drift along curves into one glowing collector
{
  const env = (x, y, s, fill) => `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#shadow)"><rect width="110" height="74" rx="12" fill="${fill}"/><path d="M8 10 L55 44 L102 10" fill="none" stroke="${P.ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/></g>`;
  art.ds92 = scene("ds92",
    [[90, 140, 150, 190], [70, 300, 170, 310], [120, 440, 210, 380]].map(([x, y, cx, cy]) =>
      `<path d="M${x + 100} ${y + 30} Q ${cx + 200} ${cy}, 560 300" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="3 12" stroke-linecap="round"/>`).join("") +
    env(80, 110, 0.9, "#fff") + env(60, 270, 1, P.butter) + env(120, 420, 0.8, "#fff") +
    `<circle cx="600" cy="300" r="140" fill="url(#glow)"/><rect x="530" y="240" width="140" height="120" rx="28" fill="${P.cobalt}" filter="url(#shadow)"/><rect x="560" y="270" width="80" height="14" rx="7" fill="#fff" opacity=".8"/><rect x="560" y="300" width="56" height="14" rx="7" fill="#fff" opacity=".55"/>`);
}

// 04 Drivers: a road at golden hour, stops along the way, two contract lines crossing it
art.drivers = scene("drivers",
  `<circle cx="600" cy="230" r="110" fill="url(#glow)"/>
  <path d="M60 560 C 220 520, 260 400, 390 380 S 600 330, 760 300" fill="none" stroke="#fff" stroke-width="44" stroke-linecap="round" opacity=".9"/>
  <path d="M60 560 C 220 520, 260 400, 390 380 S 600 330, 760 300" fill="none" stroke="${P.cobalt}" stroke-width="4" stroke-dasharray="18 16" stroke-linecap="round"/>` +
  [[200, 500], [390, 380], [610, 330]].map(([x, y], i) => `<g filter="url(#shadow)"><path d="M${x} ${y - 70} c -26 0 -40 20 -40 40 c 0 30 40 64 40 64 s 40 -34 40 -64 c 0 -20 -14 -40 -40 -40z" fill="${i === 2 ? P.roseD : P.cobalt}"/><circle cx="${x}" cy="${y - 32}" r="13" fill="#fff"/></g>`).join("") +
  `<line x1="470" y1="60" x2="470" y2="560" stroke="${P.ink}" stroke-width="3" opacity=".45"/><line x1="496" y1="60" x2="496" y2="560" stroke="${P.ink}" stroke-width="3" opacity=".45"/>`,
  { stars: [[130, 110, 12], [720, 90, 9]] });

// 03 Admin: a balance, tilted toward the side that holds the documents
{
  const a = -9 * Math.PI / 180, cx = 400, cy = 230, L = 230;
  const pt = (d) => [cx + d * Math.cos(a), cy + d * Math.sin(a)];
  const [lx, ly] = pt(-L), [rx, ry] = pt(L);
  let b = `<circle cx="400" cy="230" r="150" fill="url(#glow)" opacity=".7"/>
  <path d="M400 230 L370 470 H430 Z" fill="${P.ink}" opacity=".85"/><rect x="320" y="465" width="160" height="16" rx="8" fill="${P.ink}" opacity=".85"/>
  <line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="${P.ink}" stroke-width="10" stroke-linecap="round"/>
  <circle cx="400" cy="230" r="14" fill="#fff" stroke="${P.ink}" stroke-width="5"/>`;
  b += `<path d="M${lx - 70} ${ly + 70} Q ${lx} ${ly + 120} ${lx + 70} ${ly + 70}" fill="url(#glass)" filter="url(#shadow)"/><line x1="${lx}" y1="${ly}" x2="${lx - 60}" y2="${ly + 70}" stroke="${P.ink}" stroke-width="2"/><line x1="${lx}" y1="${ly}" x2="${lx + 60}" y2="${ly + 70}" stroke="${P.ink}" stroke-width="2"/>`;
  b += `<path d="M${rx - 70} ${ry + 70} Q ${rx} ${ry + 120} ${rx + 70} ${ry + 70}" fill="url(#glass)" filter="url(#shadow)"/><line x1="${rx}" y1="${ry}" x2="${rx - 60}" y2="${ry + 70}" stroke="${P.ink}" stroke-width="2"/><line x1="${rx}" y1="${ry}" x2="${rx + 60}" y2="${ry + 70}" stroke="${P.ink}" stroke-width="2"/>`;
  [0, 1, 2].forEach((i) => { b += `<rect x="${lx - 40 + i * 6}" y="${ly + 22 - i * 22}" width="70" height="46" rx="6" fill="${[P.cobalt, P.lilacD, P.skyD][i]}" filter="url(#shadow)"/>`; });
  b += `<rect x="${rx - 26}" y="${ry + 28}" width="52" height="36" rx="6" fill="${P.peachD}" filter="url(#shadow)"/>`;
  art.admin = scene("admin", b);
}

// 08 Tool: a glass app window, a screening flow that stops for human review
{
  let b = `<rect x="110" y="100" width="580" height="400" rx="28" fill="url(#glass)" filter="url(#shadow)"/>
  <rect x="110" y="100" width="580" height="400" rx="28" fill="none" stroke="#fff" stroke-width="3"/>`;
  ["Screen", "Records", "Stats", "Practice"].forEach((_, i) => { b += `<rect x="${140 + i * 120}" y="125" width="104" height="34" rx="17" fill="${i === 0 ? P.cobalt : "#fff"}" opacity="${i === 0 ? 1 : .8}"/>`; });
  const xs = [190, 290, 390];
  xs.forEach((x, i) => { if (i) b += `<line x1="${xs[i - 1]}" y1="300" x2="${x}" y2="300" stroke="${P.ink}" stroke-width="4" opacity=".6"/>`; });
  xs.forEach((x) => { b += `<circle cx="${x}" cy="300" r="26" fill="${P.cobalt}" filter="url(#shadow)"/><path d="M${x - 9} 300 l7 8 l12 -15" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`; });
  b += `<line x1="416" y1="300" x2="470" y2="300" stroke="${P.ink}" stroke-width="4" opacity=".6"/><path d="M510 258 L552 300 L510 342 L468 300Z" fill="#fff" stroke="${P.ink}" stroke-width="4"/>`;
  b += `<line x1="552" y1="300" x2="610" y2="300" stroke="${P.ink}" stroke-width="4" opacity=".6"/><circle cx="630" cy="300" r="20" fill="${P.cobalt}"/>`;
  b += `<line x1="510" y1="342" x2="510" y2="390" stroke="${P.ink}" stroke-width="4" opacity=".6"/><circle cx="510" cy="425" r="60" fill="url(#glow)"/><rect x="470" y="395" width="80" height="60" rx="14" fill="${P.peachD}" filter="url(#shadow)"/><circle cx="510" cy="418" r="9" fill="#fff"/><path d="M492 446 q18 -20 36 0" fill="#fff"/>`;
  art.tool = scene("tool", b, { hills: false });
}

// 10 Courts and arbitration: two lights that overlap
art.viac = scene("viac",
  `<circle cx="330" cy="290" r="170" fill="${P.lilacD}" opacity=".55" filter="url(#soft)"/>
  <circle cx="480" cy="290" r="170" fill="${P.peachD}" opacity=".5" filter="url(#soft)"/>
  <circle cx="330" cy="290" r="170" fill="none" stroke="#fff" stroke-width="4"/><circle cx="480" cy="290" r="170" fill="none" stroke="#fff" stroke-width="4"/>
  <circle cx="405" cy="290" r="70" fill="url(#glow)"/>${star(405, 290, 26, "#fff")}`);

// 11 Children's data in three legal systems
art.childdata = scene("childdata",
  [[330, 250, P.lilacD], [470, 250, P.skyD], [400, 370, P.roseD]].map(([x, y, c]) =>
    `<circle cx="${x}" cy="${y}" r="135" fill="${c}" opacity=".3"/><circle cx="${x}" cy="${y}" r="135" fill="none" stroke="#fff" stroke-width="4"/>`).join("") +
  `<circle cx="400" cy="292" r="60" fill="url(#glow)"/><circle cx="400" cy="292" r="18" fill="#fff" filter="url(#shadow)"/>`);

// 02 Team projects: a constellation
{
  const pts = [[400, 300], [220, 180], [300, 430], [520, 160], [610, 330], [500, 470], [160, 330], [660, 180]];
  let b = `<circle cx="400" cy="300" r="140" fill="url(#glow)"/>`;
  [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 6], [3, 7], [4, 7], [2, 6]].forEach(([i, j]) => {
    b += `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" stroke="#fff" stroke-width="3" opacity=".9"/>`;
  });
  pts.forEach(([x, y], i) => { b += `<circle cx="${x}" cy="${y}" r="${i ? 18 : 36}" fill="${i ? (i % 3 ? "#fff" : P.lilacD) : P.cobalt}" filter="url(#shadow)"/>`; });
  art.courses = scene("courses", b, { stars: [[700, 90, 12], [110, 90, 9], [740, 420, 7]] });
}

// 01 The Shift: stacked glass pages shifting forward
art.shift = scene("shift",
  [0, 1, 2, 3].map((i) => `<rect x="${130 + i * 70}" y="${130 + i * 60}" width="330" height="190" rx="24" fill="${i === 3 ? P.cobalt : "url(#glass)"}" filter="url(#shadow)"/>` +
    (i === 3 ? `<rect x="${130 + i * 70 + 32}" y="${130 + i * 60 + 40}" width="180" height="16" rx="8" fill="#fff" opacity=".85"/><rect x="${130 + i * 70 + 32}" y="${130 + i * 60 + 72}" width="240" height="12" rx="6" fill="#fff" opacity=".5"/><rect x="${130 + i * 70 + 32}" y="${130 + i * 60 + 96}" width="200" height="12" rx="6" fill="#fff" opacity=".5"/>` : "")).join("") +
  `<circle cx="660" cy="140" r="70" fill="url(#glow)"/>`);

mkdirSync("assets/art", { recursive: true });
for (const [k, v] of Object.entries(art)) writeFileSync(`assets/art/${k}.svg`, v);
console.log("wrote", Object.keys(art).length, "artworks to assets/art/");
