# Prototyping Guide

You have a PRD. This guide takes it the rest of the way: choose the right *kind* of prototype for your
product, spec it, make the first version, and test it — then stop the moment you can answer your
hypothesis. It works for any product: an app, a web page, a device, a food or beauty product, a
garment, a campaign, a service.

**A prototype is the cheapest thing that can answer one question.** Fast, structured, testable — not
finished, not production.

**Two guardrails apply to every prototype, in every lane:**

- **No permanently-stored sensitive personal data, and no real payments.** Mock the checkout. A
  consented email waitlist through a reputable form tool is the one allowed collection.
- **A prototype is never presented as a finished, safe, certified or compliant product.** Mockups,
  AI renders and samples are labeled as such. For hardware, food, beauty and supplements, safety,
  labeling and health-claim rules are things to verify with a qualified professional before anyone
  outside a small test group uses or buys anything.

State both to every builder — an AI tool, a maker, a designer, a vendor — at the start.

---

## Part 1 — Pick your lane

Run the `prototype-kit` skill ("set up my prototype") or choose here. Detail for each is in
`5_Library/prototyping/lanes/`.

| If your PRD's prototype is... | Lane |
|---|---|
| a flow of screens, a tool, a dashboard, an AI assistant | software-app |
| a page that explains or sells, a waitlist | website |
| an object with function, parts, electronics | physical-product |
| a packaged consumable — food, drink, beauty, household | cpg |
| something worn or carried | fashion |
| a message, campaign, deck, email or social content | marketing-comms |
| something you deliver or run — a service, program, marketplace, event | service-experience |

Use at most two lanes: a primary and a companion that is needed to test the hypothesis (for example a
CPG pack plus a landing page to measure interest).

## Part 2 — Spec the build

A spec document is a short, plain-language file that tells your builder exactly what to make. The rule:
**if a decision is not in your spec, the builder invents it** — and you rarely like what it invents.

Every build gets `PRD.MD` plus one "how will I make it" document; the rest depends on the lane. Filenames are
ALL CAPS including the extension. Templates are in `templates/`.

| Doc | What it is | Lanes |
|---|---|---|
| `PRD.MD` | What you are making and why; the hypothesis and test | all |
| `TECH_STACK.MD` | Which software tools and structure to use | software-app |
| `BUILD_PLAN.MD` | Tools, materials, people, budget, timeline, how it reaches testers | every lane except software-app |
| `UI.MD` | Screens or pages and how a person moves through them | software-app, website; optional for others with a screen |
| `DESIGN.MD` | Visual language — colors, type, imagery, materials and finishes, voice | all (recommended) |
| `SPEC_SHEET.MD` | Dimensions, materials, ingredients, fabric, costs, claims, what is faked | physical-product, cpg, fashion |
| `PACKAGING.MD` | Pack structure, panel hierarchy, label checklist, mockup plan | recommended for cpg; optional for physical-product and fashion |
| `COPY.MD` | Messaging hierarchy, copy deck, claims and proof | required for website; recommended for marketing-comms and service-experience; optional elsewhere |
| `CAMPAIGN.MD` | Audience, message, channels, assets, test design | marketing-comms |
| `SERVICE_BLUEPRINT.MD` | Customer journey, front-stage vs back-stage, what is manual | service-experience |
| `DATA.MD`, `API.MD` | Tables and endpoints | software-app, later stages |

**Minimum viable spec: `PRD.MD` + the how-to-make doc.** Add the others where the build gets visual,
physical or complex. `prototype-kit` generates them one at a time from your PRD.

## Part 3 — Climb the ladder only as far as you need

Every lane has a fidelity ladder. The stages differ in what you make, but the shape is the same:

| Stage | Name | The question it answers |
|---|---|---|
| 01 | Concept / look | Does anyone want this? Do they understand it? |
| 02 | Tangible version | Can they react to something real — clickable, holdable, tasteable, wearable, deliverable? |
| 03 | Proof in the wild | Does it hold up with real people, in real conditions, over repeat use? |
| 04 | Ready to make | Can someone else build or produce it from what you have? |

You do not have to walk all four. These are the common stopping points:

| Stop after | You get | Best for |
|---|---|---|
| Stage 01 | A concept pack, message map, wireframe or blueprint | Testing desire, positioning and wording cheaply |
| Stage 02 | A clickable demo, a model or sample, a mock campaign | Testing reaction, form and feel |
| Stage 03 | Test results from real people with numbers | Deciding whether to commit |
| Stage 04 | A hand-off pack for an engineer, factory, co-packer, developer or marketer | Founders who have a partner ready to build |

Going further than your hypothesis needs is not progress; it is delay. The fastest credible test wins.

## Part 4 — Make the first version

Two routes, and you can mix them:

1. **Build it here.** For many lanes the agent can build a rough, testable version directly — a
   single-file clickable HTML flow, a landing page, an SVG label, technical flats, a spec sheet, a deck,
   an email sequence, an OpenSCAD part, a service script. See each lane guide's *What the agent can
   build for you directly*.
2. **Hand it off.** Use a tool (see `5_Library/prototyping/tools/`) or a person (a maker, pattern
   maker, co-packer, designer). `prototype-kit` writes `FIRST_BUILD.MD` with the tool, the exact prompt
   to paste, and what to bring back.

The agent cannot produce photoreal product photography, physical samples, or safety, regulatory or
labeling judgments. It will say so; plan for who does those.

## Part 5 — Test it

Your PRD's Prototype section has a hypothesis, a test (who, how many, how) and a pass. Before you test:

- Decide the pass **before** you look at results.
- Test with people in the target group, not just friends who will be kind.
- Watch what people do, not only what they say.
- Change one thing at a time between rounds.

Each lane guide has a Tests table with example hypotheses.

## Capture

When a real person could react to your prototype and give you a yes or no on your hypothesis, save it:

- Put the prototype (or a file pointing to it: a link, photos, a deck) in `4_Prototypes/<slug>/prototype/`.
- Complete `4_Prototypes/<slug>/prototype-v1.md` — it holds the hypothesis, test plan and results.

> This prototype tests [what you built]. A pass = [what you observe when a user succeeds].

If you cannot complete that sentence, the scope isn't tight enough: go back to the Prototype section of
your PRD and tighten the one flow or artifact before you build.

Then take your results into peer or advisor review (stages C.1 and B) and into round 2
(`1_Sprint/C.3-Prototyping-2/Refine-Guide.md`).
