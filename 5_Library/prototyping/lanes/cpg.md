---
title: "Lane — CPG"
lane: cpg
summary: "Prototype a food, beverage, beauty, personal-care or household consumable — from a concept board and pack mockup to hand-made samples and a pilot run."
---

# Lane: CPG (Consumer Packaged Goods)

**Use this lane when** you sell a packaged consumable or repeat-purchase product: food, beverage, supplements, pet products, beauty, skin and hair care, cleaning and household goods. Non-consumable hardware goes to `physical-product`; clothing goes to `fashion`.

## What you are prototyping

A CPG prototype has three things that can be tested separately. Pick the one that is your riskiest assumption:

- **Concept** — name, claim, price and look. Would a shopper pick it up?
- **Pack** — does it read in 3 seconds on a shelf or a phone screen?
- **Product** — does it taste, smell, feel or work well enough to buy again?

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Concept board | Name, one-line claim, flavor/variant lineup, price and pack size, a concept image | `ai-image-generation`, `canva`, `claude-artifacts` | **Concept test** — shoppers react to a card or screen |
| 02 | Pack mockup (+ sample, only if the test needs it) | A flat label/dieline and a 3D or photo mockup for pack and shelf tests; a small bench-scale sample (or a stand-in product) only for taste/use tests, where it is safe and legal | `canva`, `mockup-generators`, `ai-image-generation`, `prototyping-services` | **Sample + pack** — taste/use tests and shelf-standout tests |
| 03 | Proof in the wild | Blind tests vs a benchmark, repeat-use trials, retailer or buyer conversations, a stated-intent waitlist | `tally`, `carrd`, `canva` | **Evidence pack** — numbers you can show a buyer or investor |
| 04 | Pilot batch ready | Formulation locked with a qualified professional, supplier/co-packer quotes, label reviewed for your market | `prototyping-services` | **Ready to pilot** — hand to a co-packer, lab or regulatory advisor |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `SPEC_SHEET.MD` (CPG block) | `PACKAGING.MD`, `DESIGN.MD` | `COPY.MD` (claims and label copy) |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| 3-second shelf test | Show your pack among 5–6 competitors for 3 seconds; ask what it is and what they remember | 15–20 shoppers | Most identify the category and one cue (flavor, benefit) |
| Concept purchase intent | Card with name, claim, price; ask how likely they are to buy, and what it would replace | 20+ | A top-box share you set before testing, and a clear "replaces X" answer |
| Blind sample test | Your sample vs the leading alternative, unlabeled | 10–20, only where it is safe and legal to sample | They prefer yours on the attribute you claim |
| Repeat-use trial | Leave a few units for a week, follow up | 5–10 | They finish it and ask for more |
| Price ladder | Four-question price sensitivity ask | 15+ | Your target price falls in the acceptable band |
| Retail buyer chat | Show the pack, price, margin structure | 2–3 buyers | They can say what it needs to earn a slot |

Example hypotheses:
- "This pack tests whether shoppers can tell in 3 seconds that a drink is low-sugar and for post-workout. A pass = 12 of 20 shoppers say 'low-sugar sports drink' or equivalent."
- "This sample tests whether our oat-based cookie beats the market leader on texture. A pass = 7 of 10 blind tasters pick ours and say why."

## What the agent can build for you directly

- Concept cards, a one-page sell sheet, a pitch/concept deck.
- A **flat label or dieline as SVG/HTML** and a simple front-of-pack layout you can print as stickers; real text placed exactly (image models garble small type).
- Naming and claim options with a claims-and-proof table.
- A shelf-test set-up: a printable sheet with your pack beside competitor placeholders.
- A unit-economics sheet (COGS, wholesale, retail, margin) with your inputs.
- Test scripts and scoring sheets.

## What needs another tool or a human

Realistic pack photos and 3D mockups (image/mockup tools), any real formulation work (a food scientist or cosmetic chemist), a licensed or inspected place to make anything others will eat or put on skin, lab/stability testing, and the label review for your market.

## Guardrails

- **Safety of samples comes first.** Anything people eat, drink, inhale or put on skin must be made and shared according to the rules where you are (home-production limits, licensing, allergen disclosure, preservation and stability for cosmetics). Check local rules before giving samples to anyone outside your household. For beauty and skin products, involve a qualified cosmetic chemist before any skin-contact test. When unsure, test the concept and pack with images first and leave product testing until stage 03–04.
- **Claims are regulated.** Do not make disease, treatment, "clinically proven" or health-benefit claims you cannot substantiate. Keep a claims-and-proof table; delete any claim without proof. Labeling requirements (name, net quantity, ingredients, allergens, origin, warnings, barcodes) differ by market and product type — **verify with a qualified professional**; the `PACKAGING.MD` checklist is a list of questions, not legal advice.
- **If the claim is the thing you are testing** (for example "low sugar"), show it as concept text marked "concept — claim not verified" and have a qualified professional check it before any real pack is printed.
- **Do not sell yet.** A prototype is for testing. No real sales, no payment capture; use a waitlist or stated intent.
- **Honest visuals.** AI-generated packs and food images are concept art. Label them as concepts and do not use them to imply a product exists.
- **Names and marks:** check that your name, logo and pack look do not conflict with existing brands.
- **No sensitive personal data.** If you take dietary or health information in a test, keep it minimal, anonymous and delete it after.

## Starter build prompts

1. "Read PRD.MD, SPEC_SHEET.MD and PACKAGING.MD. Create a front-of-pack label as SVG at [size], using exact text from PACKAGING.MD (and COPY.MD if you made one). Do not invent claims."
2. "Make a printable shelf-test sheet: our pack mockup next to 5 real competitor products or photos of them, with a 3-second test script on the back."
3. "Build a unit-economics table from these inputs: COGS $[..], wholesale $[..], retail $[..], retailer margin [..] percent. Show gross margin at each level and the break-even volume for a pilot batch of [..]."
4. "List every claim on this concept and mark each: has evidence / needs evidence / delete."

## Common traps

- Hand-making a great sample and testing nothing else; the real risk is often price or shelf standout.
- Treating friends-and-family taste feedback as proof.
- Making a health or benefit claim on the pack because a competitor does.
- Perfecting a label before the name and one-line claim have been tested.
