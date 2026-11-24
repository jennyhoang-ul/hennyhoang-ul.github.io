# Changelog

## PFLO2 "Issue 01" (experimental), 24 November 2026, branch `pflo2`

Built from the exact PFLO1 commit (tag `pflo1`). Not deployed; production still serves PFLO1 or older.

- The site is now one issue of a research publication: cover, contents, and ten numbered chapters (opening note, features, the index, field notes, chronology, method, notebook, writing, CV, colophon and contact).
- Cover: JENNY HOANG masthead, tagline, a cobalt disc and halftone, cover lines for the six features, and a link into the contents.
- New opening note written only from facts already on the site.
- Six features (CISG, JCJ, HS61, DS92, ride-hailing drivers, administrative proof) share one feature template: opener with number, standfirst, plate with caption, credits strip, in-page contents, drop cap, and previous/next feature.
- The index (chapter 03) shows all eleven projects by year, by theme, by kind, or on a theme map. Each project now has a `theme`.
- Chronology groups the timeline into four dated periods; field notes alternate in two columns.
- Masthead shows the current chapter; a contents panel (dialog) is available on every page; every page ends with a folio and previous/next chapter links; features show a reading progress bar.
- Colophon added to the contact chapter (typefaces, images, design, build).
- Glass, glows and the aurora background removed; flat paper with rules and tints instead.
- New data file `content/issue.mjs`. The `index` entries in `content/en.mjs` and `content/vi.mjs` are no longer used.

## v4 "Dawn", 24 November 2026

- Visual direction moved from flat cobalt and apricot to a luminous dawn palette: lilac, peach, sky, mint, butter and rose surfaces on a soft aurora ground, with indigo ink (#1E1B3A), cobalt #3446D4 and violet #5B3FD9 for text-level colour. All text pairs still pass WCAG AA.
- Home hero is now a dawn sky: drifting light, a glowing sun, twinkling stars, a gradient HOANG, a glass introduction card and three floating project images.
- New artwork for all 11 projects: gradient skies, glow, grain and glass shapes, each motif still taken from the project (CISG funnel at true scale).
- Glass cards with a hue per project and a soft lift on hover; pill buttons, filters and navigation; glass panels for themes, phases, steps and facts; gradient project numbers.
- Gentle scroll reveals and ambient motion, all switched off under reduced motion.
- J monogram redrawn on a cobalt-to-violet gradient with a peach dot.
- Fixed a class clash (hero image stack vs. responsive tables).

## v3, 24 November 2026

### Brand
- Public name is now **Jenny Hoang**: header, browser titles, footer and home wordmark. The full name Hoàng Đào Mỹ Duyên appears once on About and on the CV (as "Hoàng Đào Mỹ Duyên (Jenny Hoang)").
- New J monogram replaces the "Đ" favicon: SVG plus 32px, 180px and 512px PNG fallbacks.

### Visual
- New palette: cobalt #2B4CD0 and apricot #F3A968 on warm off-white #F8F7F2, with pale blue and peach surfaces. Light theme only.
- New type system: Anton (display), Spectral (serif), Be Vietnam Pro (text). Newsreader and JetBrains Mono removed.
- New home: typographic hero, equal project gallery, themes band, beyond-research band, four stages, contact.
- One card component for every project; CISG and JCJ no longer get larger panels.
- Original artwork for all 11 projects (scripts/art.mjs) with an image register.

### Content
- New detail pages for the four student research projects (HS61, DS92, ride-hailing drivers, administrative proof), built on the same template as CISG and JCJ.
- Removed public evidence tags (Documented, Self-reported, In progress, Not yet confirmed) and internal notes ("to be added", placeholders for LinkedIn/GitHub, unconfirmed tool link, "planned workbook not confirmed"). Research caveats, sources and the AI-assistance note were kept.
- Added "Academic project leader" to Activities to match the resume.
- English and Vietnamese copy revised; still no en or em dashes.

### Resume
- New Harvard-style resumes in English and Vietnamese (content/resume.cjs, scripts/build-resume.cjs): single column, Times New Roman, black and white, 0.75 in margins, two pages each.
- Website copies (public/cv/Jenny_Hoang_Resume_EN.pdf, _VI.pdf) leave out the phone number.
- Old CV data (content/cv.cjs) and builder removed.

## v2, 24 November 2026

### Structure
- New **Activities** page (`activities.html`): work, leading and organising, debate, school and recognition, from 2019. Data in `content/activities.mjs`.
- **Projects** page rebuilt as a filterable archive of 11 entries (research, coursework, technology, in progress). Data in `content/projects.mjs`. Each entry shows period, kind, role, method, output and an evidence tag.
- **Home** reordered: intro, Selected work (2 large features + 3 smaller research entries), Research and interests, Experience and involvement, phases, contact. One primary button ("See all projects") plus a text link to the CV.
- **About**: short version, a dated journey from 2019 (12 entries), what changed in 2026, rules, what I am still learning.
- Navigation: Projects, Activities, About, Approach, Writing, CV, Contact. Research notes moved to the footer and to links from Home and Approach.

### Visual
- Palette moved to Direction B, Contemporary Cobalt: cool off-white #f5f6f8, graphite #1a1c23, cobalt #1f45c8. All text pairs pass WCAG AA (see DESIGN.md).
- New components: featured small entries, archive rows with filters, activity rows, phase strip, text link, "more" links.
- Tighter spacing between the hero and Selected work.

### Writing
- All English and Vietnamese text rewritten in a plainer voice. Removed stock phrasing ("not just X but Y", "at the intersection of", "bridging", "không chỉ... mà còn...", "thông qua", "từ đó", "qua đó").
- No en dash or em dash anywhere: page text, titles, meta tags, aria labels, CV page and the CV PDFs. Title separator is now " | ".
- Removed two claims that could not be supported: "part-time" for the LVT job, and a statement that a change of direction was unplanned.

### Technical
- `site.config.mjs`: `siteUrl` set to https://jennyhoang-ul.github.io/hennyhoang-ul.github.io for `hreflang` and `canonical`. All internal links remain relative, so the repository base path works.
- `scripts/check.mjs` now fails on any en dash or em dash in built pages.
- Archive filter uses buttons with `aria-pressed`; without JavaScript every entry is shown.
- Application CV (not on the site) now links to the GitHub Pages address instead of the preview link.

### Content inventory, v1 to v2

| v1 location | v2 location |
| --- | --- |
| Home: hero statement and three notes | Home: hero (rewritten, same facts) |
| Home: CISG and JCJ features | Home: Selected work 01 and 02 (same data visuals) |
| Home: "What I can do now" (4 capabilities with evidence links) | Home: "How I usually work" list, and Approach (8 steps, each with a project example) |
| Home: "Student research 2023 to 2026" | Home: Selected work 03 to 05, and Projects archive |
| Home: "Where I am heading" | Home: "Reading now" column, About "Still learning", Research notes |
| About: "How I got here" | About: short version and Journey timeline |
| About: "What 2026 changed" | About: "What changed in 2026" (kept) |
| About: "Beyond research" (AMPLE, The Shift) | Activities page, with more detail from the CV |
| Projects: case studies + 4 research projects | Projects archive: same 6, plus screening tool, 2 in-progress items, course team projects, The Shift |
| CV-only items (Maple Debate, MNDC 2021, debate results 2020, Le Hong Phong honours, Wharton 2021, Truong Teen 2020, Youth Union certificate) | Activities page (new on the site) |
| CISG, JCJ, Approach, Notes, Writing, Contact, CV pages | Same sections, rewritten without dashes |

Left out on purpose: the financial-need wording of the Opportunity Scholarship (privacy) and the phone number (PDF only). Nothing else was removed.
