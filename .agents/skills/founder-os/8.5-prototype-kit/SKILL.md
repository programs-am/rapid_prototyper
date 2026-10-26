---
name: prototype-kit
description: >
  Guided exercise that turns a finished PRD into a prototype kit for ANY kind of product — software,
  website, physical/hardware product, CPG (food, beverage, beauty, household), fashion, marketing or
  comms material, or a service. Picks the right prototype lane, decides how far to take it, generates
  the spec documents a builder (AI tool, maker, designer or vendor) needs, writes the first-build
  prompts and the test plan, and can build the first version directly. Use when: "set up my
  prototype", "what should I prototype", "prototype my product", "make a mockup", "spec out my
  prototype", "set up my spec docs", "tech stack doc", "generate my spec files", "what files does my
  builder need", "build my first version", "prototype round 2", "refine my prototype". Use this skill
  whenever the founder is moving from their PRD to making something testable — even if they don't say
  prototype-kit and even if the product is not software.
---

# Prototype Kit

A guided exercise. The founder already has a PRD. You help them decide **what form their prototype
should take**, **how far to take it**, and then produce the small set of documents a builder needs so
the first version is right the first time — one document at a time, grounded in their PRD. Then you
help them test it.

The PRD is the only required input. Every build also gets one "how will I make it" document
(`TECH_STACK.MD` for software, `BUILD_PLAN.MD` for everything else). The rest depend on the lane.

Seven lanes: `software-app`, `website`, `physical-product`, `cpg`, `fashion`, `marketing-comms`,
`service-experience`. Each has a lane guide in `5_Library/prototyping/lanes/<lane>.md` — that file is
the source of truth for the lane's fidelity ladder, doc set, tests and guardrails. Read it; don't
work from memory.

## Phase 0 — Resolve and load inputs

Call **`util_get_inputs`** (`get("prototype-kit")`) for the input map, then pull each source via the
access method it returns. For this task:

- **PRD** *(primary)* — `2_Outputs/.agents/A.5-PRD-v1/PRD-v1.md` (or `2_Outputs/.agents/C.3-PRD-v2/PRD-v2.md`
  if it exists; prefer the latest).
- **Company ground truth** *(primary)* — via `util_get_company_info`. Note the **Product type** field in
  `02_Product`; it usually answers the lane question.
- **Lane guides** *(primary)* — `5_Library/prototyping/lanes/`. Read the chosen lane's file in full.
- **Spec-doc templates** *(primary)* — `1_Sprint/A.5-Prototyping-1/templates/`. Each carries its own
  fill-in structure, an `## Ask the LLM` question set and a `## Done when` checklist.

Never read `0_Company/` directly; go through the utility.

**If the PRD is missing,** don't stop — recover with the founder (see `util_get_inputs` → *When a
primary input is missing*): say you don't have it, ask whether they have a PRD or equivalent product
spec to paste, or want to run the `prd` exercise first. You need a problem, a user, and at least one
scoped feature or element to build from.

When inputs are loaded say one sentence: "I've got your PRD — I'll use it to set up the kit your
builder needs, so you're not writing specs from scratch."

## Phase 1 — Pick the lane

Load **`reference/lane-map.md`** and follow it. In short: recommend a lane from the Product type and the
PRD, then confirm with **AskUserQuestion** — ask the broad group first (Digital · Physical goods ·
Communication · Service/experience), then the specific lane inside it. The founder still chooses.

Allow **at most two lanes** (a primary and one companion, e.g. `cpg` + `website` to test demand, or
`physical-product` + `software-app` for a companion app). Do the primary lane's docs first; do the
companion's docs only if the primary prototype can't answer the hypothesis without it.

## Phase 2 — Decide how far to go

Open the lane guide's **Fidelity ladder**. Using the PRD's hypothesis and riskiest assumption, recommend
the **earliest stage that can answer the hypothesis** and say why in one line. Ask with
**AskUserQuestion** which stage they want to stop at (the stages' "Stop here → you get" names). If
there is a companion lane, ask its stage separately. For
`software-app` this also fixes the build version (Frontend-only · Full web app · App + backend/Mobile ·
Full-stack).

Rule of thumb to say out loud: going further than the hypothesis needs is delay, not progress.

## Phase 3 — Set up the prototype folder

1. Ask for a short project name; slugify it (lowercase, hyphens).
2. Create `4_Prototypes/<slug>/` if it doesn't exist (the repo convention is `YYYY.MM Short Name` for
   larger projects; for a prototype folder `<slug>` is fine).
3. Copy the PRD in as `4_Prototypes/<slug>/PRD.MD`, shaped to the `PRD.MD` template. Spec-document
   filenames are ALL CAPS including the extension — always (capture files such as `prototype-v1.md` are
   lowercase).
4. Create `4_Prototypes/<slug>/prototype/` and, if missing, `2_Outputs/.agents/A.5-Prototyping-1/`.

**Field mapping from the PRD output to `PRD.MD`:** Company/value proposition → §1; Target User
(Who/Situation/High-value need/Current behavior/Key quote) → §2 ("the pain" = current behavior + quote); top
Job → §3 (trigger = Situation; workaround = Current behavior); Features → §4; Prototype → §5. The PRD's
**Hypothesis** *is* the riskiest assumption — write it as one sentence in the "riskiest assumption" field.
If the PRD lacks "the change it creates" or a test (who/how many/pass), ask for them one at a time. Use
one canonical sentence everywhere: "This prototype tests [what you built]. A pass = [what you observe when
a user succeeds]." (The "whether [user] can…" form in `PRD.MD` is just an instance of it.)

## Phase 4 — Generate each spec doc, one at a time

Use the lane's doc set from `reference/lane-map.md`. Order, per `reference/lane-map.md`: software-app is `TECH_STACK` → `UI` → `DESIGN` → `DATA` → `API`; every
other lane is `BUILD_PLAN` → `DESIGN` → lane-specific docs (so `PACKAGING`, `COPY` and `CAMPAIGN` can pull
from `DESIGN`). For each doc:

1. **Open the matching template** in `1_Sprint/A.5-Prototyping-1/templates/<DOC>.MD`. Read its structure,
   its `## Ask the LLM` prompts and its `## Done when`.
2. **Walk the founder through it**, pulling every answer you can straight from the PRD and earlier docs;
   ask only what they don't settle, using the template's questions — one question per message.
3. **Write the completed document** to `4_Prototypes/<slug>/<DOC>.MD` with the founder's real answers.
4. **Check it against `## Done when`**, then move to the next doc.

**DESIGN.MD** for a digital build is normally generated by a design tool (see the template's *How to
generate this*); for non-digital lanes, guide a moodboard/brand brief and image tool instead. Hand-fill
only if they have no tool.

**Only build what the lane needs.** If the lane's table lists a doc as Optional and the founder's
stage doesn't need it, say so plainly and skip it rather than walking through an empty doc.

## Phase 5 — First build

Load **`reference/build-and-capture.md`**. Offer the founder two routes:

- **Build it here** — if the lane guide's *What the agent can build for you directly* covers their stage,
  build that artifact into `4_Prototypes/<slug>/prototype/` (single-file HTML, SVG label, spec sheet,
  deck, OpenSCAD script, email sequence, scripts, etc.), then show them how to open or print it.
- **Hand it to a tool or a person** — write `4_Prototypes/<slug>/FIRST_BUILD.MD`: which tool or
  vendor type to use (see `5_Library/prototyping/tools/`), the exact prompt(s) to paste with the spec
  folder attached, and what to bring back.

Be honest about what you cannot do (photoreal renders, physical samples, safety or compliance
judgments) and say who can.

## Phase 6 — Test plan and capture

From the PRD's hypothesis and the lane guide's **Tests** table, write `4_Prototypes/<slug>/prototype-v1.md`
using the template in `reference/build-and-capture.md`: lane, form, stage, where the artifact lives, the
one-sentence hypothesis with its **pass**, who you'll test with, how many, the script, and what you'll
do if it fails. If the founder can't complete "This prototype tests [X]. A pass = [Y]." the scope isn't
tight enough — go back to the PRD's Prototype section.

## Round 2 — refine

If `prototype-v1.md` exists and the founder brings feedback (peer review, advisor review, test results)
or says "refine / round 2": read the v1 file, the feedback and the PRD (v2 if present); help them pick the
**single highest-signal change**, update the affected spec docs, rebuild or refine, and write
`prototype-v2.md` stating what v1 tested, what v2 changes and why. Keep v1 — never overwrite it.

## Closing

1. Show a short list of the files now in `4_Prototypes/<slug>/` and anything the founder still needs to
   generate elsewhere.
2. Say: "Your kit is ready. Point your builder (a tool, a maker, a designer, or me) at
   `4_Prototypes/<slug>/` and start with the one flow or the one artifact in your PRD's Prototype
   section. The Prototyping Guide walks the rest."
3. Point to `1_Sprint/A.5-Prototyping-1/Prototyping-Guide.md`.

#### Quietly record the deliverable

Write a short index **silently** to `2_Outputs/.agents/A.5-Prototyping-1/Prototype-Kit.md` — the lane(s),
the stage (and the companion lane's stage), the slug, and the list of files created (with paths). Frontmatter `type: prototype-kit`,
`stage: A.5-Prototyping-1`. Don't announce the path.

## Guardrails

- One document at a time; one question per message. Never show two docs or bundle questions.
- Pull from the PRD first — never ask something the PRD already answers.
- Only generate the docs the chosen lane and stage need.
- Spec filenames are ALL CAPS including the extension, always.
- **Prototype guardrails, every lane:** no permanently-stored sensitive personal data; no real payments
  (a consented email waitlist through a reputable form tool is the one allowed collection). Say so when
  data, checkout, "pre-order" or sign-up comes up.
- **Honesty guardrails:** mockups, renders, samples and rigs are never presented to testers as finished,
  safe, certified or compliant products; AI-generated images are labeled concept renders; no invented
  testimonials, statistics or endorsements.
- **Never make safety, regulatory, labeling, health-claim or legal judgments.** Phrase them as questions
  to verify with a qualified professional. For hardware, food, beauty and supplements, flag when a
  sample could hurt someone and defer to a qualified person.
- Don't re-run the PRD exercise — read the PRD, confirm, and build from it.
- The files in `4_Prototypes/<slug>/` are the founder's to edit; they are the real deliverable.
- Resolve inputs through `util_get_inputs`; read `0_Company/` only through its utility.

## Quick reference

| Item | Location |
|---|---|
| Lane guides | `5_Library/prototyping/lanes/<lane>.md` |
| Lane → docs map | `reference/lane-map.md` |
| Tool guides | `5_Library/prototyping/tools/` |
| Templates | `1_Sprint/A.5-Prototyping-1/templates/<DOC>.MD` |
| PRD input | `2_Outputs/.agents/A.5-PRD-v1/PRD-v1.md` (or `C.3-PRD-v2/PRD-v2.md`) |
| Founder's kit | `4_Prototypes/<slug>/` |
| Capture file | `4_Prototypes/<slug>/prototype-v1.md` (`-v2` after refine) |
| Deliverable index | `2_Outputs/.agents/A.5-Prototyping-1/Prototype-Kit.md` |
