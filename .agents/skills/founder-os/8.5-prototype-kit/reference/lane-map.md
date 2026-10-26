# Lane map — choosing the lane and its doc set

Load this in Phase 1 of `prototype-kit`. The lane guides in `5_Library/prototyping/lanes/` hold the detail;
this file is the routing table.

## How to pick

1. Read **Product type** in company ground truth and the PRD's Prototype section. Form a recommendation.
2. Ask the broad group with **AskUserQuestion** (4 options):
   - **Digital** — a tool, app, dashboard, AI product, or a web page/site
   - **Physical goods** — a device or object, a food/beauty/household product, or clothing/accessories
   - **Communication** — a campaign, message, deck, email/social, brand material
   - **Service or experience** — something you deliver, run or host
3. Ask the specific lane inside the group (AskUserQuestion, 2–3 options):
   - Digital → `software-app` · `website`
   - Physical goods → `physical-product` · `cpg` · `fashion`
   - Communication → `marketing-comms` (confirm; also offer `website` if a landing page is the asset)
   - Service/experience → `service-experience`
4. Ask whether a **companion lane** is needed to test the hypothesis (max one). Common pairs:
   `cpg + website` (demand test), `fashion + website` (drop page), `physical-product + website`
   (interest page), `physical-product + software-app` (companion app), `service-experience + website` (booking page), `marketing-comms + website`.

Signals for the recommendation:

| If the PRD's prototype is... | Lane |
|---|---|
| a flow of screens, a tool, a dashboard, an AI assistant | `software-app` |
| a page that explains/sells, a waitlist, a redesign | `website` |
| an object with function, parts, electronics, a device | `physical-product` |
| a packaged consumable, a flavor/formula, a label | `cpg` |
| a garment, shoe, bag, jewelry, a line of them | `fashion` |
| a message, campaign, deck, email/social, brand | `marketing-comms` |
| a service, program, event, marketplace, manual workflow | `service-experience` |

If the founder is torn between two, ask which one holds the **riskiest assumption** and start there.

## Doc set per lane

R = required · Rec = recommended · O = optional · — = skip. Filenames are ALL CAPS with `.MD`.

| Doc | software-app | website | physical-product | cpg | fashion | marketing-comms | service-experience |
|---|---|---|---|---|---|---|---|
| `PRD.MD` | R | R | R | R | R | R | R |
| `TECH_STACK.MD` | R | — | — | — | — | — | — |
| `BUILD_PLAN.MD` | — | R | R | R | R | R | R |
| `UI.MD` | Rec | Rec (page map) | O (companion screen) | — | — | O (landing page) | O |
| `DESIGN.MD` | Rec | Rec | Rec | Rec | Rec | Rec | Rec |
| `DATA.MD` | O | — | — | — | — | — | — |
| `API.MD` | O | — | — | — | — | — | — |
| `SPEC_SHEET.MD` | — | — | R | R | R | — | — |
| `PACKAGING.MD` | — | — | O | Rec | O | — | — |
| `COPY.MD` | — | R | O | O | O | Rec | Rec |
| `CAMPAIGN.MD` | — | — | — | — | — | R | — |
| `SERVICE_BLUEPRINT.MD` | — | — | — | — | — | — | R |

**software-app by stage** (the existing build versions):

| Stop here | Required | Recommended | Optional |
|---|---|---|---|
| Frontend-only | `TECH_STACK` | `UI`, `DESIGN` | — |
| Full web app | `TECH_STACK` | `UI`, `DESIGN` | `DATA` |
| App + backend / Mobile (PWA) | `TECH_STACK` | `UI`, `DESIGN`, `DATA` | `API` |
| Full-stack | `TECH_STACK` | `UI`, `DESIGN`, `DATA`, `API` | — |

**Stage trims for other lanes:** at stage 01 (concept) the founder rarely needs more than `PRD`,
`BUILD_PLAN` and the lane's main doc. At stage 02 add `DESIGN` plus whichever of `PACKAGING`/`COPY`/`UI`
the artifact itself needs. At stages 03–04 add everything the lane lists as Required or Recommended.

**Fill only what the hypothesis needs.** `SPEC_SHEET.MD` is big. Complete only the blocks and rows the
hypothesis touches — e.g. a CPG pack/shelf test needs the claims, variants/sizes and unit-economics rows,
not formulation, sensory and shelf-life; a hardware looks-like model needs size, materials and target
cost, not the full BOM. Mark skipped rows "not needed at this stage".

**Stage 02 for `cpg`:** the pack mockup (label/dieline/shelf visual) and the hand-made sample are
separate steps. A pack or shelf test needs only the pack. Make a sample only when the hypothesis is about
taste, texture or use, and only where it is safe and legal (see the lane's guardrails).

## Generation order

- **software-app:** `TECH_STACK` → `UI` → `DESIGN` → `DATA` → `API`.
- **every other lane:** `BUILD_PLAN` → `DESIGN` (brand/look direction first, because `PACKAGING`, `COPY` and
  `CAMPAIGN` pull from it) → lane docs (`SPEC_SHEET`, `PACKAGING`, `COPY`, `CAMPAIGN`, `SERVICE_BLUEPRINT`,
  `UI` as applicable). `COPY` points back to `DESIGN`'s voice section, so keep that short and let `COPY`
  hold the detail.

## Companion lane

A companion lane (max one) gets its own stage and its own hypothesis in `prototype-v1.md`, but shares
the primary lane's `PRD.MD`, `BUILD_PLAN.MD` and `DESIGN.MD` (add a short "Companion" section to each
instead of duplicating the file). Create only the companion's lane-specific docs (e.g. `COPY.MD` and
`UI.MD` for a landing page). Ask for the companion's stop-here stage separately in Phase 2.
