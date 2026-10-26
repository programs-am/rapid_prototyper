# First build and capture

Load this in Phases 5–6 of `prototype-kit`.

## Phase 5 — what the agent can build here

Only offer what the lane guide's *What the agent can build for you directly* section supports, and say
plainly that these are rough, testable stand-ins. Put everything in `4_Prototypes/<slug>/prototype/`.

| Lane | Direct builds (examples) | Hand off for |
|---|---|---|
| software-app | single-file HTML/CSS/JS clickable flow with placeholder data | hosting, databases, auth, polish |
| website | responsive single-file landing page, headline variants, waitlist confirmation copy | publishing, forms, domain, traffic |
| physical-product | spec sheet, concept deck/one-pager, OpenSCAD script for a simple part, BOM draft, hands-on test script | photoreal renders, printing/machining, electronics assembly, safety review |
| cpg | concept card, SVG label/dieline with exact text, shelf-test sheet, claims-and-proof table, unit economics | pack photos/3D mockups, formulation, samples, label review |
| fashion | SVG technical flats, tech pack draft, wear-test form, cost sheet, drop-page copy | patterns, samples, photoreal visuals, fiber/care label review |
| marketing-comms | brief, messaging map, email sequence, posts, scripts, deck outline/HTML slides, A/B plan | visual polish, sending/tracking, ad accounts, legal review |
| service-experience | blueprint, scripts, intake questions, log spreadsheet design, pricing/cost-to-serve model | forms, scheduling, delivery itself |

How to build:

1. Re-read the spec docs in the folder; build **only** the one flow or artifact in the PRD's Prototype
   section and only what the chosen stage needs.
2. Use real text from `PACKAGING.MD` and `COPY.MD` (whichever exist); mark anything unproven `[PLACEHOLDER]`.
3. Keep it self-contained so it opens by double-click (HTML/SVG/PDF/MD). Show the founder how to open it.
4. Add a visible "Prototype — not a finished product" note on anything testers will see.
5. Do not invent data, testimonials, certifications or compliance statements.

## FIRST_BUILD.MD (hand-off route)

```markdown
# First build — <project>

**Lane / stage:** <lane> · <stage name>
**Build with:** <tool or vendor type> (see 5_Library/prototyping/tools/<file>.md)
**Attach:** every file in this folder.

## Prompt to paste
<the exact prompt, adapted from the lane's starter prompts to this PRD>

## What to bring back
<the artifact, link or photos the founder should save into prototype/ and describe in prototype-v1.md>

## If it doesn't work
<one fallback tool or approach>
```

## Phase 6 — prototype-v1.md template

```markdown
---
type: prototype
version: 1
lane: <lane>
companion_lane: <lane or none>
stage: <stage name>
companion_stage: <stage name or none>
---

# Prototype v1 — <project>

**What I built:** <one line> — lives at <path or URL>

> This prototype tests <what you built>. A pass = <what you observe when a user succeeds>.

**Riskiest assumption:** <from PRD>

## Companion artifact (if any)
<what it is, where it lives, and its own one-line hypothesis and pass>

## Test plan
| | |
|---|---|
| Who | <target people and how you'll find them> |
| How many | <number> |
| Method | <test from the lane guide> |
| Script | <link to script or the 3–5 steps> |
| What I'll record | <the one measure + notes> |
| If it fails | <the next move> |

## Results (fill in after testing)
- What happened:
- Pass or fail:
- What surprised me:
- Next change:
```

For round 2, copy the file as `prototype-v2.md`, bump `version`, and add "What v1 tested / what v2 changes
and why".
