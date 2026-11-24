# Portfolio version manifest

Last updated: 24 November 2026. This file is kept identical on `pflo1-source` and `pflo2`.

## How to read version names

- **"pflo1"** means the PFLO1 baseline exactly as tagged: tag `pflo1`, commit `7f92f50`. It never includes PFLO2 experiments unless the owner explicitly asks for them.
- **"pflo2"** means the latest recorded state of the branch `pflo2` (currently tag `pflo2-alpha`, commit `b328e93`). PFLO1 changes are never merged into it silently.
- Any comparison between versions is made from the actual files and commits listed here, not from memory.
- Tags are never moved. A change to PFLO1 branches from `pflo1` and gets a new tag (`pflo1.1`, `pflo1.2`, ...). A new PFLO2 state gets a new tag (`pflo2-beta`, `pflo2.0`, ...).

## Versions

| | PFLO1 | PFLO2 |
| --- | --- | --- |
| Name | v4 "Dawn" | "Issue 01" |
| Status | Frozen baseline (immutable) | Experimental, in review. **Not deployed.** |
| Tag | `pflo1` (annotated) | `pflo2-alpha` (annotated) |
| Commit | `7f92f5023b5794cec40e8555990b56deaddfe293` | `b328e93868b7969ab3d534224ea4345c648036f0` |
| Branch | `pflo1-source` (source code; the tag sits on its first commit) | `pflo2` |
| Base | (root) | `7f92f50` (the `pflo1` commit, exactly) |
| Concept | Luminous dawn palette, glass cards, aurora ground, dawn-sky hero | One issue of a research publication: cover, contents, ten chapters, six features, index with four views |
| Preview (private until shared) | https://claude.ai/artifact/RgXbipbaa3BHdiEBmLrtJH (slug `c7e03123-b0c6-422b-9cfc-d30651b77b6e`, version `1795500812-bd1b`) | https://claude.ai/artifact/4LD5NqWAjAHsc7KAQ1C61W (slug `1af9fd47-a68d-42f4-9d94-fb1605fdb429`, version `1795522627-8380`) |
| Archives | `PFLO1_source.zip`, `PFLO1_site.zip` | `PFLO2_source.zip`, `PFLO2_site.zip` |
| Design record | `docs/PFLO1_BASELINE.md`, `DESIGN.md` (v4 notes) | `docs/PFLO2_DESIGN_BRIEF.md` |

Production (https://jennyhoang-ul.github.io/hennyhoang-ul.github.io/) has not been changed by either step. At the time of writing it still serves a build older than PFLO1. The git repository exists locally and in `portfolio.bundle`; neither tag has been pushed to GitHub.

## Major differences, PFLO2 against PFLO1

Measured from `git diff pflo1 pflo2-alpha`.

- **Structure.** PFLO1 has a home page with a hero, a project gallery and bands. PFLO2 turns the home page into a cover, contents, opening note and features, and gives every other page a numbered chapter opener. Same 15 pages per language; same URLs.
- **Navigation.** PFLO1: top navigation bar. PFLO2: masthead with the current chapter, a contents panel on every page, previous/next chapter at the foot of every page, previous/next feature on feature pages, reading progress on features.
- **Projects.** PFLO1: equal cards with filters. PFLO2: an index with four views (year, theme, kind, theme map); each project now has a `theme` in `content/projects.mjs`.
- **Feature pages.** Same text. New opener (number, standfirst, captioned plate, credits strip), in-page contents and drop cap.
- **Visual system.** Kept: Anton, Spectral, Be Vietnam Pro; the six hues; indigo ink, cobalt, violet; the J mark. Removed: aurora ground, glass surfaces, rounded cards, glows. Added: paper ground #FBFAF7, rules, folios, flat hue tints per chapter, halftone, duotone thumbnails.
- **Content.** New: opening note (built only from facts already on the site), chapter titles and descriptions, colophon. Unchanged: project and activity text, CV page, resumes and PDFs.
- **Code.** `build.mjs` and `assets/site.css` rewritten; new `content/issue.mjs`; `content/en.mjs` and `content/vi.mjs` unchanged (their `index` entries are unused in PFLO2).

## Restore instructions

From the bundle (no GitHub needed):

```
git clone portfolio.bundle site && cd site
git checkout pflo1          # PFLO1 exactly (detached)
git checkout pflo2          # PFLO2 branch (from a fresh bundle clone: git checkout -B pflo2 origin/pflo2)
node build.mjs && node scripts/check.mjs dist
```

To deploy PFLO1 to GitHub Pages (only with the owner's approval): build from `pflo1` and publish `dist/`.

To deploy PFLO2 (only after the owner approves the new direction): build from `pflo2` and publish `dist/`. Keep the `pflo1` tag so PFLO1 can be restored by rebuilding it.

## GitHub layout

On GitHub (`jennyhoang-ul/hennyhoang-ul.github.io`) the branches have different jobs:

| Branch | Holds | Served by Pages |
| --- | --- | --- |
| `main` | the built site files only (`index.html`, `assets/`, `en/`, `vi/`, `cv/`) | yes, this is production |
| `pflo1-source` | PFLO1 source code and docs; tag `pflo1` | no |
| `pflo2` | PFLO2 source code and docs; tag `pflo2-alpha` | no |

Never push a source branch onto `main` and never force-push `main`: Pages would then serve the source code instead of the site.

First upload (from a clone of `portfolio.bundle`):

```
git clone portfolio.bundle jenny-portfolio-source
cd jenny-portfolio-source
git remote rename origin bundle
git remote add origin https://github.com/jennyhoang-ul/hennyhoang-ul.github.io.git
git branch pflo1-source bundle/pflo1-source
git checkout -B pflo2 bundle/pflo2
git push origin pflo1-source pflo2
git push origin pflo1 pflo2-alpha
```

Switching production between versions: replace the contents of `main` with the contents of `PFLO2_site.zip` (to go to PFLO2, only after approval) or `PFLO1_site.zip` (to go back).

From the zips without git: unzip `PFLO1_site.zip` or `PFLO2_site.zip` and open `index.html`, or unzip the matching `_source.zip` and run `node build.mjs`.
