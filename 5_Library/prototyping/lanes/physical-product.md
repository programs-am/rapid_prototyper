---
title: "Lane — Physical Product / Hardware"
lane: physical-product
summary: "Prototype a device, tool, appliance, wearable, furniture or other manufactured goods — from concept visuals to a hands-on works-like unit."
---

# Lane: Physical Product / Hardware

**Use this lane when** you are making a manufactured object that is *not* food, beauty or apparel: consumer electronics, a smart device, a tool, an appliance, a piece of equipment, furniture, a toy, a medical-adjacent gadget, an industrial component. Food, beverage, beauty and household consumables go to `cpg`; clothing, footwear, bags and jewelry go to `fashion`. If your hardware has a screen or companion app, add `software-app` as a second lane.

## What you are prototyping

Hardware prototypes answer different questions, so name which one you are asking:

- **Looks-like** — does the form, size, finish and feel make someone want it?
- **Works-like** — does the core function actually do the job, even if it is ugly?
- **Comes-together** — can it be built at a cost that works? (this is later, usually after the first two)

Most first prototypes should test **one** of these, not all three.

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Concept | Sketches, AI concept renders, a one-page spec sheet, a short concept deck | `ai-image-generation`, `mockup-generators`, `canva`, `claude-artifacts`, `gamma` | **Concept pack** — test desire and positioning with a deck |
| 02 | Looks-like model | A 3D model you can rotate, or a physical mock (printed, carved foam, cardboard) | `tinkercad`, `openscad`, `onshape`, `fusion-360`, `text-to-3d`, `prototyping-services` | **Looks-like** — test size, form and feel in hands |
| 03 | Works-like rig | The core function working on a dev board, off-the-shelf parts or a hacked existing product; plus an interest signal (waitlist) | `wokwi-and-dev-boards`, `prototyping-services`, `tally` | **Works-like** — test whether it does the job |
| 04 | Pilot units | Engineered CAD, a draft bill of materials, supplier quotes, a list of tests/certifications to research | `onshape`, `fusion-360`, `prototyping-services` | **Ready to engineer** — hand to an engineer or contract manufacturer |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `SPEC_SHEET.MD` | `DESIGN.MD` (look, materials, finish) | `PACKAGING.MD`, `COPY.MD` (concept deck or interest page), `UI.MD` (companion app or on-device screen) |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| Concept reaction | Show the concept pack, ask what it is for and what they would pay | 10 target buyers | They state the use unprompted and a price in your range |
| Hands-on session | Hand over the model or rig, give a task, stay quiet | 5 | 4 of 5 complete the task; you can name the confusing parts |
| Teardown / comparison | Put it next to the current solution | 5 | They prefer yours on the dimension you claim |
| Price ladder | Ask what is too cheap, a bargain, getting expensive, too expensive | 10+ | Your target price sits inside the middle band |
| Channel review | Walk an installer, distributor or retailer through spec and cost | 2–3 | They can say what shelf/slot it fits and what margin they need |
| Interest signal | Waitlist or letter of intent (no money taken) | as many as you can reach | A number you committed to before asking |

Example hypotheses:
- "This model tests whether runners will clip a 40 g light to a shoe lace instead of wearing a headlamp. A pass = 4 of 5 testers run 1 km with it and choose it over the headlamp."
- "This rig tests whether a sensor in a plant pot can tell a cafe owner when to water without a phone. A pass = in a 3-day trial the owner acts on 2 of 3 alerts."

## What the agent can build for you directly

- A spec sheet and a concept deck/one-pager (HTML or Markdown to PDF).
- **OpenSCAD scripts** for simple parametric parts — exportable to STL for 3D printing or viewing — and a simple rotating HTML/three.js viewer for a looks-like block model.
- A wiring/logic plan and starter code for common dev boards.
- A test script for hands-on sessions, and a BOM draft table.

Rough shapes and simple parts only. It cannot judge strength, tolerances or safety — say so in your notes.

## What needs another tool or a human

Photorealistic renders (an image tool), real 3D printing or machining (a service bureau or makerspace), electronics assembly, and anything involving certification or safety. Bring in an engineer before stage 04.

## Guardrails

- **Safety first.** Do not prototype anything on mains voltage, with large lithium batteries, heating elements, pressure or moving blades without a qualified person. Batteries have shipping rules — check before posting units.
- **Do not claim it is safe, certified or compliant.** Electrical safety, radio emissions, product-safety and industry certifications (examples to research for your market: FCC, CE, UL, battery transport, children's product rules, medical-device rules) are things to **verify with a qualified professional** before anyone outside your test group uses a unit.
- **Prototype units are not for sale.** Tell testers it is an early model. Do not hand out units that could injure someone.
- **No real payments, no sensitive personal data.** Collect interest as a waitlist or a non-binding letter of intent.
- **IP:** do a quick prior-art search before you reveal details publicly, and use an NDA before sharing drawings with suppliers if the design is novel. Rendering a product with someone else's logo or design cues is a risk.
- AI concept renders are concept art. Label them "concept render" and never use them as if they were photos of a working unit.

## Starter build prompts

1. "Read PRD.MD and SPEC_SHEET.MD. Write an OpenSCAD script for a looks-like block model with these dimensions [..]. Parameters at the top. Add a comment on how to export STL."
2. "Draft a one-page concept sheet and a 6-slide concept deck for [product]. Mark any number I have not validated [PLACEHOLDER]."
3. "Write a 15-minute hands-on test script: the task, what to observe, five follow-up questions, and a one-page scoring sheet."
4. "From SPEC_SHEET.MD, draft a bill of materials table with columns: part, spec, quantity, source, unit cost (estimate or blank), notes."

## Common traps

- Building a works-like rig when the real risk is whether anyone wants it (test with a concept pack first).
- Beautiful 3D renders that hide an unsolved physics or cost problem.
- Testing weight or feel with a model that is the wrong weight — a looks-like model should be weight-matched (add ballast) when weight is part of the hypothesis.
- Skipping the target COGS: if it cannot be made for a price that fits your retail price, the form does not matter.
