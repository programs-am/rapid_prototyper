---
title: "Lane — Fashion & Apparel"
lane: fashion
summary: "Prototype clothing, footwear, bags, accessories or jewelry — from a moodboard and flats to a fitted sample and a pre-sale interest test."
---

# Lane: Fashion & Apparel

**Use this lane when** you are making something people wear or carry: apparel, activewear, footwear, bags, accessories, jewelry, eyewear, or a capsule collection. Beauty and skin care go to `cpg`; wearable electronics go to `physical-product` (with this as a second lane for the look).

## What you are prototyping

Fashion has two separate risks. Test them in this order:

1. **Desire** — does the target customer want this design, at this price, from this brand? (images and a drop page can test this)
2. **Wearability** — does it fit, feel and hold up? (needs a physical sample and real wearers)

Do not pay for production samples before desire is tested.

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Concept | Moodboard, line plan (what pieces, what colors), flat sketches, concept renders | `ai-image-generation`, `canva`, `claude-artifacts` | **Concept pack** — preference polls and stylist/retailer reactions |
| 02 | First sample | A blank base with your decoration, a print-on-demand sample, or a pattern-maker/sample-room garment; a draft tech pack | `mockup-generators`, `prototyping-services`, `canva` | **Wearable sample** — fit and feel tests |
| 03 | Proof | Wear tests (fit, comfort, washing), photos on real people, a drop page with waitlist, price test | `tally`, `carrd`, `framer` | **Evidence pack** — fit notes, interest numbers, price signal |
| 04 | Production-ready | Tech pack with measurements and construction, size grading plan, supplier quotes with minimum order quantities | `prototyping-services` | **Ready to quote** — hand to a factory or sample room |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `SPEC_SHEET.MD` (fashion block = tech-pack-lite) | `DESIGN.MD` (moodboard, palette, CMF) | `PACKAGING.MD` (labels, hangtags, shipping), `COPY.MD` |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| Concept preference | Show 3–4 designs or colorways, ask to rank and say why | 30+ in the target group | One clear favorite, and reasons that match your positioning |
| Stylist/retailer reaction | Walk a boutique buyer or stylist through the pack | 3–5 | They can place it and name the price point |
| Fit and wear test | Wearers use the sample for a week, log fit, comfort, wash | 5–10 across your size range | Fit complaints cluster in a fixable place; most would keep wearing it |
| Drop-page waitlist | Concept images + "Join the drop list" | 100+ relevant visitors | Sign-up rate above your pre-set threshold |
| Price test | Show price tiers, ask which feels fair for the quality shown | 20+ | Target price inside the acceptable band |

Example hypotheses:
- "This moodboard and drop page test whether trail runners want a merino-blend trail short at $85. A pass = at least 7 percent of 150 relevant visitors join the drop list."
- "This sample tests whether our unisex overshirt fits 4 different body types without alteration. A pass = 8 of 10 wearers rate fit 4 or higher on a 5-point scale."

## What the agent can build for you directly

- A moodboard brief, line plan and color story; a copy-ready drop page (see `website`).
- **Technical flat sketches as SVG** — front/back outlines with callouts for seams, pockets and trims. These are communication drawings, not patterns.
- A draft tech pack: measurement table, fabric and trims list, construction notes, colorways, label and care placement, cost-per-unit sheet.
- A wear-test form and a size-and-fit feedback sheet.

## What needs another tool or a human

Pattern making and grading, sample sewing, fabric sourcing, and photoreal visuals. A pattern maker or sample room turns your tech pack into a real garment; show them your draft early.

## Guardrails

- **Originality.** Do not copy another brand's design, prints or logos; do not use their names to describe yours. If you are inspired by a reference, change it meaningfully and check trademarks for your name and logo.
- **AI-generated concept images are not your product.** Label them "concept render", never use them to take orders or imply the item exists, and never show a model wearing something you have not made as if it is a real photo.
- **Honest claims.** Fiber content, "sustainable", "recycled", "ethically made" and similar claims need proof; leave them out until you can substantiate them. Fiber-content and care labeling rules vary by market — **verify with a qualified professional** before anything is sold.
- **Sizing.** State size ranges only once measured on real bodies; keep fit-test photos and measurements anonymous and delete them after.
- **No real payments** in the prototype; a drop-list sign-up or stated interest is the test.
- Photo and model releases for anyone who appears in your images; licensed fonts and images.

## Starter build prompts

1. "Read PRD.MD and SPEC_SHEET.MD. Draw front and back technical flats as SVG for [garment], with labeled callouts for seams, closures, pockets and label placement. Use a simple, neutral line style."
2. "Create a tech pack draft in markdown: overview, measurement table for sizes [..], fabric and trim list, construction notes, colorways, care label, packaging."
3. "Write a one-page wear-test form: fit by area, comfort, fabric feel, after-wash notes, what they would change."
4. "Give me a cost-per-unit sheet for a first sample run: fabric, trims, labor, shipping, with a column for each unknown I must get quoted."

## Common traps

- Paying for samples before testing whether anyone wants the design.
- A single fit model: sizing problems hide until you test across the range.
- Using beautiful concept renders for a pre-sale — that is a misleading ad for a product that does not exist.
- Ignoring minimum order quantities until the end.
