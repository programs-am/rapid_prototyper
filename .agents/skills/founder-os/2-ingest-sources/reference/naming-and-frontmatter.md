# Processed file naming, frontmatter & conversion rules

Refine the converter's output (and any Tier-0/text files) into this convention — one processed
file per raw source (merge only trivial fragments).

## Naming

| Data type | Processed filename |
|---|---|
| Customer/user interview, shop-along or intercept notes | `interview-<who>-<YYYY.MM.DD>.md` |
| Call / meeting notes, retailer or buyer feedback, call recordings (transcribed) | `notes-<topic>-<YYYY.MM.DD>.md` |
| Analytics / metrics export (site, ad, email, sales, marketplace) | `analytics-<source>.md` (or `.csv`) |
| Survey results | `survey-<topic>.md` (or `.csv`) |
| Market / competitor research, photos of competitor packaging or products, price checks | `research-<topic>.md` |
| Field test / technical / regulatory, spec sheets, supplier quotes, taste or sensory notes, fit and wear-test notes | `field-<topic>.md` |

Examples: `interview-parent-lunchpacker-2025.03.12.md`, `notes-grocery-buyer-feedback-2025.04.02.md`,
`research-competitor-snack-packaging.md`, `field-supplier-quote-bottle-lids.md`,
`field-wear-test-hoodie-fit.md`, `analytics-email-campaign-march.csv`. Use `type: field` for
anything physical or hands-on, `type: research` for desk or shelf research.

## Frontmatter

Every processed markdown file starts with:

```yaml
---
type: interview | notes | analytics | survey | research | field
source: <original filename in 5_Library/sources/raw/>
date: <date of the data itself, if known>
processed: <today's date>
---
```

The converter's first pass writes a coarser `type` (the file extension) and may add an `engine:`
line recording which converter produced it — keep `engine:` as provenance and upgrade `type` to the
semantic value above as you refine.

## Conversion rules

- **Keep verbatim quotes verbatim.** Customer language is the raw material for value-prop and JTBD
  work — mark quotes clearly, attribute them (`— buyer, logistics co.`, `— shopper, snack aisle`,
  `— wear tester, size M`).
- Structure with headers, don't rewrite. Fix transcription noise, keep meaning intact.
- Tabular data stays tabular — CSV or markdown tables, not prose. Taste-test score sheets,
  supplier quotes (units, price breaks, lead time), and spec sheets belong in tables.
- Photos and images: add a short factual description of what is visible (brand, claims on pack,
  price, shelf position) plus where and when it was taken. Do not infer what is not shown.
- Redact obvious sensitive identifiers if the founder asks (or flags their data as sensitive) —
  names can become roles.
- Never invent or infer data that isn't in the source.
