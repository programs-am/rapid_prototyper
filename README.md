# Founder OS — Prototyper

A cloneable workspace for turning **customer research into a testable prototype of any product** —
software, a website, a physical device, a food or beauty product, clothing, a marketing campaign, or a
service you run by hand — with an AI coding agent (Claude Code, Codex, Google Antigravity or any `AGENTS.md`-aware agent) doing the
heavy lifting and you keeping every decision.

It is an **agentic operating system**: a folder of markdown files, conventions and skills. You load it
with your own discovery data, then run the pipeline against it — value proposition → persona →
jobs-to-be-done → PRD → **prototype** → metrics and OKRs — each skill reading the previous one's output.
No copy-pasting between tools, no starting cold.

> Adapted from the Founder OS workspace by WNCP AI (see [NOTICE.md](NOTICE.md)): same discovery-to-PRD
> pipeline, with the prototyping stage generalized from software to every kind of product.

Two goals, in order:

1. **Get a testable prototype in front of real people**, grounded in your own data, whatever you make.
2. **Outlast the sprint.** The system codifies your product thinking into something repeatable that
   you can extend with your own skills and hand to your team.

## Quickstart

1. **Clone this repo** and open the folder in your AI coding agent — see [Use it with your agent](#use-it-with-your-agent).
2. **Say "get me started."** The bootstrap walks you through setup, then a short interview that builds your
   profile (`0_User/`) and company context (`0_Company/`) — including **what you're making**.
3. **Drop your discovery data into `5_Library/sources/raw/`** — interviews, notes, analytics, research,
   photos of competitors' products, supplier quotes, spec sheets, field reports. Any format. Then say
   "ingest my data."
4. Work through the pipeline below, or just say what you need ("write my value prop", "set up my
   prototype").

## Use it with your agent

Bring whichever agent you like; the workspace is plain markdown plus a one-time setup (`node 0_System/bootstrap/setup.mjs`, which "get me started" runs for you).

| Agent | How it picks up the instructions | How it picks up the skills |
|---|---|---|
| **Claude Code** (CLI, desktop app, VS Code) | `CLAUDE.md` (alias of `AGENTS.md`) | `.claude/skills/` (linked by setup) |
| **Codex** (CLI, IDE extension, app) | `AGENTS.md` | `.agents/skills/` (linked by setup) |
| **Google Antigravity** | `AGENTS.md`, with `GEMINI.md` as a fallback alias | `.agents/skills/` (linked by setup) |
| **Gemini CLI** | `GEMINI.md` (alias of `AGENTS.md`) | `.agents/skills/` (linked by setup) |
| **Cursor, GitHub Copilot, Windsurf, others** | `AGENTS.md` | Say "use find-skills" — the agent reads the skills from disk |

Skills work in plain language everywhere ("write my value prop", "set up my prototype"); slash or `$`
shortcuts are optional extras your agent may add. If your agent was open before setup ran, restart the session.
No coding agent at all? The hand-fill templates in `5_Library/templates/` work in any chat assistant: paste one in with your notes.
Tool-specific details change quickly, so if something does not register, ask the agent to run
`find-skills` and it will read the skill files directly.

## One pipeline, seven kinds of prototype

Discovery, value proposition, persona, jobs-to-be-done and PRD are the same for everyone. The prototype
stage adapts to **what you make**:

| Lane | You are making... | Typical first prototype |
|---|---|---|
| `software-app` | an app, SaaS tool, dashboard, AI product | clickable flow, then a working app |
| `website` | a landing page, brochure site, fake-door test | a page with a waitlist |
| `physical-product` | a device, tool, appliance, furniture | concept pack, 3D model, works-like rig |
| `cpg` | food, beverage, beauty, personal care, household | concept board, pack mockup, hand-made samples |
| `fashion` | apparel, footwear, bags, accessories, jewelry | moodboard and flats, a fitted sample |
| `marketing-comms` | a campaign, message, deck, email/social | a message map, then a live micro-test |
| `service-experience` | a service, program, marketplace, event | a blueprint and a hand-run concierge pilot |

The `prototype-kit` skill picks the lane with you, decides **how far to take it** (the cheapest version
that can answer your hypothesis), writes the spec documents your builder needs, can build a rough first
version directly, and writes the test plan. Combine at most two lanes, e.g. CPG + website to measure
demand. Lane guides: [5_Library/prototyping/lanes/](5_Library/prototyping/lanes/).

## What's inside

```
0_System/           # Repo engine: bootstrap script, skill-manifest scanner and checker
0_User/             # Your profile — built by the bootstrap interview
0_Company/          # GROUND TRUTH — topic files: one-liner, product (incl. Product type), users, market…
1_Sprint/           # The stages — one self-contained subfolder per stage; holds the template YOU fill by hand
2_Outputs/          # Full agent work products, in a hidden .agents/<stage>/ layer
3_Projects/         # Other working projects — strategy, research, partnerships, SOPs
4_Prototypes/       # Prototype kits — specs, the prototype itself, test plans, results
5_Library/
  sources/raw/      #   Your data as it arrives — any format (gitignored, stays local)
  sources/processed/#   Standardized markdown/CSV — what the skills actually read
  prototyping/      #   Lane guides (7) and tool guides (26): what to use, where to stop, how to test
  templates/        #   No-AI fallback templates for every exercise
  discovery/ roadmap/ wiki/
.agents/skills/     # find-skills/ finder + founder-os/<n>-skill/ pipeline
```

## The pipeline

Run in order. Each skill reads your hand-completed template from `1_Sprint/<stage>/`, evidence from
`5_Library/sources/processed/` and ground truth from `0_Company/`. You fill the template by hand; the
skill's markdown output lands in `2_Outputs/.agents/<stage>/`, and its essence folds back into
`0_Company/` for the next skill.

| # | Skill | Stage | Writes (under `2_Outputs/.agents/`) |
|---|---|---|---|
| 1 | `founder-bootstrap` | A.1 | `0_User/` + `0_Company/` topic files |
| 2 | `ingest-sources` *(optional)* | A.2 | `5_Library/sources/processed/` |
| 3 | `customer-discovery-coach` | pre-A.3 | coaching (chat), with methods per product type |
| 4 | `value-proposition` | A.3 | `A.3-Value-Prop/Value-Proposition.md` |
| 5 | `user-persona` | A.3 | `A.3-User-Persona/User-Persona.md` |
| 6 | `jtbd` | A.4 | `A.4-JTBD/JTBD.md` |
| 7 | `jtbd-prioritizer` | A.4 | `A.4-JTBD/JTBD-Prioritized.md` |
| 8 | `prd` | A.5 · C.3 | `A.5-PRD-v1/PRD-v1.md` · `C.3-PRD-v2/PRD-v2.md` |
| 8.5 | `prototype-kit` | A.5 · C.3 | `A.5-Prototyping-1/Prototype-Kit.md` + your kit in `4_Prototypes/<slug>/` |
| 9 | `metrics` | C.2 | `C.2-Metrics-OKR/Metrics-OKR.md` (validation signals per product type) |

Stage IDs are stable names, not a schedule. Run the whole thing in about a week as a group sprint, or
solo at your own pace. Prefer no AI on any stage? Every exercise has a plain template in
`5_Library/templates/`.

## Your data, your machine

- `5_Library/sources/raw/` is **gitignored** — raw discovery data never leaves your machine through this
  repo. Check what's in `5_Library/sources/processed/` before pushing anywhere.
- Bring your own agent — nothing here provisions or routes a model. No key to store.
- `CLAUDE.md` and `GEMINI.md` are **symlinks to `AGENTS.md`**, created at bootstrap — never edit them directly.
- Markdown is the strategy: well-structured local files keep the agent grounded in *your* facts
  instead of hallucinating.

## Prototype guardrails (every lane)

- No permanently-stored sensitive personal data; no real payments.
- A prototype is never presented as a finished, safe, certified or compliant product. Mockups, AI
  renders and samples are labeled as such.
- Safety, regulatory, labeling, health-claim and legal questions are written as questions to verify
  with a qualified professional — the agent does not answer them for you.

## After the prototype

Roadmapping (Now/Next/Later) and the skill importer are in `5_Library/roadmap/` and
`.agents/skills/founder-os/import-skills/` — deliberately not in the first-day surface. Feel the pipeline
work first.
