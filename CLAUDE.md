# Voice-To-Grade — project brief

A browser tool for grading catalytic converters by **voice**. The grader speaks a
converter's description or nickname; the tool parses it and shows exactly what to
search in the company grading site (Refined Catalyst Solutions, "RCS").

- **Live site:** GitHub Pages → `https://bugfibs.github.io/voicegrade/`
- **Repo:** `~/Coding/voicegrade` (this folder), branch `main`
- **Deploy:** edit files → `git add . && git commit -m "..." && git push` → hard-refresh the page

## Files

- **`index.html`** — the whole app: the mic/text UI, the parser, and the matching
  engine. **Rarely edited.** Loads the data file via `<script src="data.js?v=N">`.
- **`data.js`** — the DATA (`window.VG_DATA`): brand codes, grades, NO# search
  **terms**, and mishear **corrections**. **This is the file edited constantly.**

### `data.js` structure
- `brandCodes` — spoken brand → 3-letter code (e.g. "nissan 45" → NIS045).
- `grades` — exact grade names.
- `corrections` — `{ from, to }` pairs that fix recurring speech mishears BEFORE
  parsing, shipped to every device (e.g. `{from:"prix", to:"pre"}`,
  `{from:"logo", to:"lobo"}`, `{from:"double gm", to:"dgm"}`).
- `noTerms` — the big list of NO# search terms (descriptions + nicknames),
  grouped by brand with `// ===== BRAND =====` comment headers. Say one → it
  routes to the No Number search and sends the catalog's exact spelling.

## How to add NO# terms from screenshots of the RCS catalog
Each converter card shows a code (FRD001, etc.), a gray text line, cyan chips, and
gray outline chips. Rules:
- **Gray text line** under the brand = **description** → a searchable term.
  Split it on **commas** (and on clear name-slashes like "4 Dot Saturn/6 Dot Saturn").
- **Cyan chips** = **nicknames** → searchable terms.
- **EXCLUDE the attribute chips:** `DOWNPIPE`, `BODY SENSOR`, `END SENSOR`,
  `MANIFOLD`. These are physical attributes, not things you'd say to search.
- **Dedupe case-insensitively.** Don't re-add a term already present under another
  brand (the search is brand-agnostic; one entry suffices). Skip pure instruction
  notes ("only applies to an attached pair").
- If a card from another brand appears in a batch, file it under ITS brand.

## Matching engine (in `index.html`) — how a phrase is routed, in order
1. **foil** (needs foreign/domestic + a pound weight) → foil tally
2. **aftermarket** ("aftermarket", "3 aftermarkets")
3. **grade** (exact grade name)
4. **exact NO# term** — canonical-equal to a `noTerms` entry → NO# search, sends
   the catalog spelling. (Runs BEFORE brand/no-prefix so "Ford 500 Pre" and
   "No Code Ranger Pre" aren't hijacked.)
5. **"no number [term]" prefix** → free-text NO# search
6. **brand + number** ("nissan 45" → NIS045); if no number follows, falls through
7. **partial NO# term** — spoken canon is a substring of a term's canon, or contains
   one (min 4 chars, must have a letter) → NO# search of the spoken words
8. **part number** fallback → uppercased code with O/0 alias variants

Canonicalization (`canonStr`) is **punctuation/space-insensitive** and folds
homophones + number words + O/0: "iron man short" == "Iron Man (Short)",
"for dot" == "4 dot", "with o2" == "with 02". `sendableSpoken` builds the text
sent for partial matches. Quantity: trailing "quantity/qty/times/time/star N".

## Cache-busting (IMPORTANT)
`index.html` loads `data.js?v=N`. **Every time you change `data.js`, bump N**
(e.g. v=13 → v=14) and commit index.html too — otherwise browsers serve a stale
cached `data.js` and your new terms won't load. Current version: **v=13**.

## Workflow loop
1. Add/adjust terms in `data.js` (bump the `?v=` in index.html).
2. `git add . && git commit && git push`, then hard-refresh the live page.
3. Trial by voice. The Confirm button logs everything, misses included
   ("⚠ Log Miss"). Hit **Export** → downloads a timestamped `.md`.
4. Review the log: **mishears** → new `corrections`; **wrong parses** → new terms
   or rules.
5. Repeat per brand.

## Current state (update as you go)
- **NO# brands DONE:** Ford, Chrysler, Diesel, GM, Nissan.
- **NO# brands TODO:** Toyota, Mitsubishi, Honda, Mazda, Subaru, Volvo,
  Volkswagen, Mercedes. (Screenshots exist in the trials PDF.)
- **Not started:** part-number parsing (decimals like "121.5", letter codes) —
  a separate problem from NO# search.
- **Known gaps to verify:** Ford FRD056–FRD083 cards were never captured; some
  Ford trial terms (Mustang Back/Front, Aerostar, Town Car, CV, Econoline) were
  added with best-guess spelling and need catalog verification. GM GEM059 missing.

## The endgame (not built yet)
Connect confirmed output into the real RCS site (a login website, no public API):
a **browser extension** on desktop drives the No Number search box; the RCS API
seen in DevTools is `.../api/v1/catalytic-converters/no-numbers?query=&page=&manufacturerIds=`.
This is the "Path B" milestone after the NO# term lists are complete.
