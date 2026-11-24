# PFLO1: Personal Portfolio, Design Version 1 (baseline)

| | |
| --- | --- |
| Tag | `pflo1` (annotated; never move it) |
| Commit | `7f92f5023b5794cec40e8555990b56deaddfe293` |
| Branch it lives on | `main` |
| Frozen on | 24 November 2026, 19:03 (UTC+7) |
| Source archive | `PFLO1_source.zip` (made with `git archive pflo1`) |
| Built site archive | `PFLO1_site.zip` (identical to `portfolio-website.zip` of 24 Nov 2026 13:13) |
| Preview | claude.ai artifact "Jenny Hoang \| Research portfolio" (https://claude.ai/artifact/RgXbipbaa3BHdiEBmLrtJH), version `1795500812-bd1b` |
| Live GitHub Pages site | not yet updated: https://jennyhoang-ul.github.io/hennyhoang-ul.github.io/ still serves an older build until the owner uploads `PFLO1_site.zip` |

## How the baseline was verified

1. The working folder had no Git history, so "uncommitted changes" were checked against the last delivered packages instead.
2. `diff -rq` between the working source and `duyen-portfolio-source.zip` (24 Nov 13:13): no differences.
3. `node build.mjs` output compared file by file (SHA-256) with `portfolio-website.zip`: identical.
4. That exact tree was committed and tagged `pflo1`.

## What PFLO1 is

The last completed website after the typography, colour, Harvard-resume, branding and UX/UI rounds (internally called v4 "Dawn"):

- Primary brand Jenny Hoang; J monogram favicon; full name only on About and CV.
- Anton (display), Spectral (serif), Be Vietnam Pro (text), self-hosted with Vietnamese subsets.
- Bright, luminous palette: lilac, peach, sky, mint, butter and rose surfaces on an aurora ground; indigo ink #1E1B3A; cobalt #3446D4 and violet #5B3FD9 for links.
- Home: dawn-sky hero, six equal project cards, themes, beyond research, four stages, contact.
- 11 projects in a filterable archive; detail pages for CISG, JCJ, HS61, DS92, ride-hailing drivers, administrative proof.
- Activities from high school onward; About with journey; Approach; Research notes; Writing; CV page; Contact.
- Harvard-style resumes (EN, VI) linked as PDFs without phone number.
- English and Vietnamese, same section ids; no en or em dashes (enforced by `scripts/check.mjs`).

## Earlier states (not tagged)

Designs before PFLO1 (v1 to v3) were not kept in Git. The preview artifact's own history still holds them: v3 = version `1795498126-e126`, v2 = `1795470294-6e1e`. They are references only, not versions.

## Rules

- `pflo1` always points to the commit above. Do not move or delete it.
- To change PFLO1 later: `git switch -c pflo1-fix pflo1`, make the change, commit, tag the result `pflo1.1` (then `pflo1.2`, and so on).
- PFLO2 work never happens on `main` or on top of `pflo1` directly; it lives on the `pflo2` branch.

## Restore PFLO1

```
git switch --detach pflo1        # or: git worktree add ../pflo1 pflo1
npm run build                    # node build.mjs -> dist/
```
Without Git: unzip `PFLO1_source.zip` and run `node build.mjs`, or upload the contents of `PFLO1_site.zip` to the GitHub Pages repository.
