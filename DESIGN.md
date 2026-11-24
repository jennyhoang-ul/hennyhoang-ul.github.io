# Design system, Jenny Hoang research portfolio

> **PFLO2 "Issue 01" (this branch).** An editorial redesign: the portfolio is set as one issue of a research publication, with a cover, contents, ten numbered chapters, six features and an index at the back. The full concept, the three concepts considered, the evaluation, the editorial blueprint and the design system are in `docs/PFLO2_DESIGN_BRIEF.md`. Kept from PFLO1: Anton, Spectral and Be Vietnam Pro; the bright hues (now used flat, as paper tints, not as glows); the J mark; the brand rules below. Changed: paper ground #FBFAF7 instead of the aurora; no glass or rounded cards; rules, folios, plates with captions, credits strips, halftone and duotone images; one loud moment per page (the cover masthead, then the chapter number). The v4 and v3 notes below describe PFLO1.

> **v4 "Dawn" (current).** The v3 notes below still describe layout, type and brand rules. What changed in v4: a multi-hue palette (lilac #C7B5FF, peach #FFC7A6, sky #A9D3FF, mint #A6E8CF, butter #FFE39E, rose #FFB8CF, used only for surfaces, glows and artwork), indigo ink #1E1B3A (15.7:1 on paper), cobalt #3446D4 (6.7:1) and violet #5B3FD9 (6.3:1) for links and accents, a fixed aurora background, glass surfaces (white 62%, blur, white hairline), rounded corners (18 to 30px), a dawn-sky hero with ambient motion, gradient text for the second wordmark line and numbers, and new luminous artwork. Each project has a hue (see HUE in build.mjs). Ambient motion and scroll reveals are disabled under prefers-reduced-motion.

## v3 notes

## Concept

Art-directed typographic brutalism, kept light. The one loud moment is the home wordmark: JENNY HOANG in Anton, beside a cobalt slab and an apricot disc. Everything after it is quiet and orderly: a 12-column grid, hard 1.5px frames, rules instead of shadows, equal project cards.

Brand rules:
- Public name: Jenny Hoang. The full name Hoàng Đào Mỹ Duyên appears once on the About page and on the CV, nowhere else.
- Mark: a cobalt square with a paper-coloured J and an apricot block (assets/brand/favicon.svg). It reads at 16px. The same drawing is used in the header and footer.
- Cobalt carries structure (links, numbers, slabs). Apricot is the single focal point in a view and never carries text.

## Colour directions considered

| | A. Cobalt and apricot (chosen) | B. Ultramarine and burnt orange | C. Botanical green and coral |
| --- | --- | --- | --- |
| Relationship | complementary, with a pale blue (analogous) and a peach tint (analogous to apricot) | complementary, higher saturation | near-complementary green and red-orange |
| Ground | #F8F7F2 | #FAF8F1 | #F9F8F3 |
| Ink | #171717 (16.7:1) | #202020 (15.3:1) | #1D2421 (14.9:1) |
| Main accent | cobalt #2B4CD0 (6.5:1 as text; white on it 6.9:1) | ultramarine #2546B8 (7.5:1) | deep green #176454 (6.6:1) |
| Second accent | apricot #F3A968 (ink on it 9.1:1) | burnt orange #E77A3D (ink on it 5.6:1) | coral #F48B73 (ink on it 6.6:1) |
| Feel | bright, intelligent, light | louder, more poster-like | fresh, human, softer |
| Why not | | the orange competes with the blue at equal size and tires quickly on long pages | green reads as "sustainability" or health; less link-like |

Why A: it is the brightest of the three while keeping strong contrast. Cobalt is a natural link and data colour for a research site, and apricot, used sparingly, warms it without turning it into a poster. All three directions pass AA for text; A gives the best balance between brightness and readability.

## Tokens (assets/site.css `:root`)

| Token | Value | Use | Contrast |
| --- | --- | --- | --- |
| `--paper` | #F8F7F2 | ground, about 70% of each screen | |
| `--ink` | #171717 | text, rules, frames | 16.7:1 on paper |
| `--ink-2` | #4D4F57 | secondary text | 7.6:1 on paper, 6.9:1 on blue |
| `--cobalt` | #2B4CD0 | links, numbers, slab, buttons on hover | 6.5:1 on paper; white on cobalt 6.9:1 |
| `--apricot` | #F3A968 | disc, callout, small marks | ink on apricot 9.1:1 |
| `--blue` | #E8ECFF | cool surface (themes band, art grounds) | |
| `--peach` | #FCE7D3 | warm surface (contact band, quotes) | |
| `--hair` | #D8D6CE | light dividers | |

Balance: paper dominates; blue and peach surfaces take one band each on the home page; cobalt and apricot appear in the hero, the numbers and the artwork.

## Typography

| Role | Family | Use |
| --- | --- | --- |
| Display | Anton 400 (SIL OFL) | home wordmark 92 to 300px, page titles (h1) 56 to 136px, home section titles 40 to 76px, project numbers, phase years, funnel counts. Uppercase. Never for body or long titles. |
| Editorial serif | Spectral 300 to 500 (SIL OFL) | lead paragraphs, project titles on detail pages (38 to 78px), section headings in reading pages, quotes, CV roles |
| Text and interface | Be Vietnam Pro 400 to 700 (SIL OFL) | body 16.5 to 18px / 1.62, navigation, buttons, card titles (20 to 23px, all cards the same), metadata 13.5px |

All three are self-hosted with latin, latin-ext and Vietnamese subsets; Vietnamese headings in Anton get line-height 1.06 so stacked diacritics are not clipped. Reading measure is capped at 68ch. No uppercase labels, no monospace.

## Layout

- Container 1440px, side padding clamp(20px, 4vw, 64px), 12 columns.
- Home: hero, then full-width bands with a large heading on the left and one sentence on the right.
- Project cards: one component everywhere (home gallery and archive). 4:3 framed artwork, number, kind and period, title, one paragraph, output line. 3, 2 or 1 columns.
- Project detail: back link, large number, serif title, lede, artwork, five facts, then sections with a sticky contents rail (hidden under 1100px).
- Breakpoints: 1100 (rail), 1060 (menu), 1000 and 620 (cards), 900 (hero, splits), 560 (mobile hero).

## Imagery

Original geometric artwork for every project, generated by `scripts/art.mjs` from the project's own content (the CISG image uses the real counts 197, 58, 27 and 2 at true scale). No stock photos and no third-party images. The register is in `assets/art/README.md`.

## Motion

One entrance on the home page: the wordmark rises and the apricot disc grows. Cards zoom their artwork slightly on hover. Everything is off under `prefers-reduced-motion`.

## Validation done (24 November 2026)

- `node scripts/check.mjs dist`: 31 pages, 0 problems (links, anchors, `lang`, EN/VI parity, no en or em dashes). Same for the preview build.
- Chrome (Playwright) at 1440x900, 1280x800, 820x1180 and 390x844, EN and VI, all 15 page types: no horizontal scrolling and no failed images in any of the 120 combinations. Anton, Spectral and Be Vietnam Pro loaded from the site's own files.
- Tablet hero adjusted after review (disc kept inside the slab, text kept clear of it). Mobile e-mail size reduced so the address does not break.
- Not done: screen-reader testing, real devices, Lighthouse.
