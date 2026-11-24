# PFLO2: Experimental Editorial Portfolio, design brief

Base: tag `pflo1` (commit `7f92f50`). Branch: `pflo2`.

## 1. Content inventory (taken from PFLO1, nothing dropped)

- **Research and course projects (11):** CISG in Vietnamese courts (07), juvenile prisoners' family contact (09), personal data in electronic evidence HS61 (06), electronic data messages DS92 (05), ride-hailing drivers (04), proof in administrative cases (03), CISG screening tool (08), CISG in courts and arbitration (10, in progress), children's data in three systems (11, in progress), team projects across courses (02), The Shift (01).
- **Activities (9):** Academic project leader; LVT Education; Maple Debate; AMPLE; MNDC 2021; The Shift; debate results 2020; Le Hong Phong High School; Youth Union certificate 2024.
- **Other content:** opening statement, research themes, journey (12 dated entries), what changed in 2026, working rules, what I am still learning, eight-step method, three research notes, writing list, CV (from `content/resume.cjs`), contact.

## 2. Three concepts

### A. The Living Magazine
- **Idea:** the portfolio as one issue of an independent art and research magazine: cover, contents, features, departments, colophon.
- **Inspiration:** independent art and design magazines, Swiss editorial grids, exhibition printed matter. No single title copied.
- **Architecture:** Cover > Contents > Features (one per project) > Departments > Colophon.
- **Type:** Anton masthead, Spectral standfirsts and pull quotes, Be Vietnam Pro body; folios and captions in small sans.
- **Colour:** flat spot colours per chapter on a white stock; overprint (multiply) effects; halftone textures.
- **Interaction:** interactive contents, chapter navigation, next and previous features, reading progress.
- **Desktop:** spread-like compositions (text page facing an image plate). **Mobile:** single column, chapters stacked.
- **Accessibility:** normal HTML pages; no page-turning needed.
- **Weakness:** risks looking like a template if every page is a "spread"; weaker at showing how projects relate to each other.

### B. The Research Atlas
- **Idea:** a navigable archive: every project and activity as an entry that can be viewed by year, theme or kind, with a map of connections.
- **Inspiration:** exhibition catalogues, library card indexes, research archives.
- **Architecture:** Index (several views) > Entry pages > Themes > Chronology.
- **Type:** mostly small, dense, catalogue-like; display type only for theme headings.
- **Colour:** one hue per theme.
- **Interaction:** view switching, filters, theme map.
- **Desktop and mobile:** works well on both; tables need a mobile list form.
- **Accessibility:** good if views are real lists and tables.
- **Weakness:** dry. It explains structure but has little voice, and a first-time visitor gets no story.

### C. The Digital Monograph
- **Idea:** a book or exhibition: an opening sequence, chapters in a fixed order, each project as a plate with a caption.
- **Inspiration:** artists' monographs, museum wall texts.
- **Architecture:** Opening > Chapters 1 to n > Closing.
- **Type:** large serif, generous margins, slow pacing.
- **Colour:** near-white pages with occasional full-colour plates.
- **Interaction:** mostly linear scrolling.
- **Desktop:** beautiful. **Mobile:** long scrolls, hard to skip around.
- **Accessibility:** fine; discoverability is the problem.
- **Weakness:** strong mood, poor for a recruiter who wants one project in 20 seconds.

### Evaluation (1 = weak, 5 = strong)

| Criterion | A Magazine | B Atlas | C Monograph | D Hybrid (chosen) |
| --- | --- | --- | --- | --- |
| Originality | 4 | 3 | 4 | 5 |
| Visual sophistication | 5 | 3 | 5 | 5 |
| Personal branding | 4 | 2 | 4 | 5 |
| Research storytelling | 4 | 3 | 5 | 5 |
| Content completeness | 3 | 5 | 3 | 5 |
| Navigation and accessibility | 4 | 5 | 2 | 4 |
| Desktop and mobile | 4 | 4 | 3 | 4 |
| Technical complexity (5 = simple) | 4 | 3 | 4 | 3 |
| Maintainability | 4 | 5 | 3 | 4 |
| Long-term suitability | 4 | 4 | 3 | 5 |

### D. Chosen: "Issue 01", a magazine with an atlas at the back
The front of the publication works like A (cover, contents, an opening note, six equal features); the "Index" chapter works like B (every project, three ways to browse, a theme map); chapter openers borrow C's pacing (a colour plate, a number, a short introduction). A reader can open one feature directly, browse the whole index, or read straight through.

Why not the most experimental option: C would make the research harder to find, and a literal page-turning magazine would hide text and links. D keeps every project one click from the cover.

## 3. Editorial blueprint

| No. | Chapter (EN / VI) | Page | What it holds |
| --- | --- | --- | --- |
| Cover | Cover / Bìa | index.html | Masthead, issue line, cover lines for the six features, halftone sun |
| 00 | Contents / Mục lục | index.html#contents | Every chapter and feature, numbered, with a line each |
| 01 | Opening note / Lời mở đầu | index.html#opening | A short signed note on what the issue contains and how it was put together |
| 02 | Features / Bài nghiên cứu | index.html#features + six feature pages | Six research features, equal in the list; expressive once opened |
| 03 | The index / Thư mục dự án | projects.html | All 11 projects; views by year, by theme, by kind; theme map |
| 04 | Field notes / Hoạt động và tổ chức | activities.html | Work, organising, debate, school, recognition |
| 05 | Chronology / Hành trình | about.html | Four periods with dated entries; what changed in 2026; rules; still learning; full name once |
| 06 | Method / Phương pháp | approach.html | Eight steps, each with a real example |
| 07 | Notebook / Ghi chép nghiên cứu | notes.html | Three open questions |
| 08 | Writing / Bài viết | writing.html | Outputs by status |
| 09 | CV | cv.html | HTML CV + PDF downloads (resume content unchanged) |
| 10 | Colophon and contact / Liên hệ | contact.html | Contact, CV, how the issue was made, typefaces, image credits |

**Feature structure:** opener (number, kind and period, title, standfirst, plate) > credits strip (setting, period, role, method, result) > sections from the PFLO1 case study with drop cap, marginal notes and pull quotes > plate caption > next and previous feature > back to contents.

**Improvement over PFLO1:** PFLO1 is a well-made website organised by page type. PFLO2 is organised as a reading experience: the cover says what is inside, contents make every part one click away, features read like articles, and the index shows how the projects relate (by theme and year), which PFLO1 did not show.

## 4. Design system

- **Typefaces (kept from PFLO1):** Anton for the masthead, chapter numbers, feature numbers and year markers; Spectral for titles, standfirsts, pull quotes, the opening note and captions in italic; Be Vietnam Pro for body, navigation, credits, folios.
- **Type scale (fluid):** masthead clamp(84px, 17.5vw, 300px); chapter number clamp(120px, 20vw, 320px); feature title clamp(40px, 5.6vw, 88px); standfirst clamp(21px, 2vw, 30px); body 17 to 18px / 1.65; credits and folios 13px.
- **Colour:** white stock #FBFAF7, indigo ink #1E1B3A, cobalt #3446D4 as the house spot colour, and the PFLO1 hue family used as flat spot colours (peach #FFC7A6, lilac #C7B5FF, sky #A9D3FF, mint #A6E8CF, butter #FFE39E, rose #FFB8CF). Each chapter and feature owns one hue; cobalt overprints it (multiply). Text is always ink or cobalt on white or a pale tint.
- **Grid:** 12 columns, max 1480px; reading column 7 columns with a 3-column margin for notes; openers split 5 / 7 like a spread on wide screens.
- **Motifs:** folio line at the foot of every page (issue, chapter number, chapter name); hairline column rules; halftone dots; plate captions ("Plate 07"); dotted leaders in the contents.
- **Images:** the original PFLO1 artworks reused as plates; duotone (ink and hue) in the index, full colour when opened. No third-party images.
- **Navigation:** masthead bar (brand, current chapter, Contents, language); Contents opens as a full-screen panel and also exists as a real section on the cover page; next and previous chapter links; reading progress bar on features.
- **Interaction:** short, purposeful: contents panel, index view switching, hover duotone to colour, progress bar. All motion off with reduced motion.
- **Mobile:** masthead shrinks to brand, Contents and language; spreads become one column with the plate first; tables turn into labelled lists.
