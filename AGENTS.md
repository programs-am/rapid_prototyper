# Founder OS — Prototyper

Your product workspace for turning customer research into a testable prototype of **any product**
— software, a website, a physical device, a CPG item (food, beverage, beauty, household), clothing and
accessories, a marketing or comms campaign, or a service. This repo is an **agentic operating system**:
a folder of markdown files, conventions and skills that an AI coding agent (Claude Code, Codex,
Google Antigravity, Cursor, Gemini CLI or similar) reads and works inside. You load it with your own discovery data, then run the pipeline against it: value prop →
persona → jobs-to-be-done → PRD → prototype → metrics/OKRs. Each skill reads the previous one's output.
You own every artifact it helps you produce.

## Getting started

**New founder?** Open this repo in any AI coding agent — **Claude Code**, **Codex**, **Google
Antigravity**, Cursor, Gemini CLI, Copilot or similar — and say **"get me started"**. The
`founder-bootstrap` skill detects your OS, runs setup (which links the instruction files and skills
for your agent), then interviews you to build your profile (`0_User/`) and company context
(`0_Company/`), including **what you're making** (your Product type). Bring your own agent — no model
key needed. Skills work the same in every agent: ask in plain words ("write my value prop"); the
slash or `$` shortcut forms are optional.

Optional script form of the same setup checks:

```
node 0_System/bootstrap/setup.mjs
```

`setup.mjs` creates the `CLAUDE.md` and `GEMINI.md` aliases of `AGENTS.md`, links each skill where
your agent looks for it (`.claude/skills/` for Claude Code, `.agents/skills/` for Codex, Antigravity
and Gemini CLI), and verifies your environment (Node, git). Re-run it after adding a skill or changing
`AGENTS.md`, and restart your agent session. If you skip it, `founder-bootstrap` handles it on first
run, and skills still work by name through `find-skills` — no script required, any OS.

## Repo structure

```
0_System/           # Repo engine: bootstrap script, skill-manifest scanner and checker
0_User/             # Your profile — who you are, how you work (bootstrap builds this)
0_Company/          # GROUND TRUTH — topic files: one-liner, product (incl. Product type), users, market…
1_Sprint/           # The stages — one subfolder per stage; holds the template YOU fill by hand
2_Outputs/          # Agent work products, in a hidden .agents/<stage>/ layer (don't hand-edit)
3_Projects/         # Other working projects — strategy, research, partnerships, SOPs
4_Prototypes/       # Prototype kits — specs, the prototype, test plans (one folder per prototype)
5_Library/
  sources/raw/      #   Drop zone, any format — GITIGNORED, never leaves the machine
  sources/processed/#   Standardized markdown/CSV, browsable by source — tracked; what the pipeline reads
  prototyping/      #   lanes/ (7 prototype lanes) and tools/ (tool guides) — what to make, where to stop
  templates/        #   Master no-AI fallback templates for every pipeline stage
  discovery/ roadmap/ wiki/
.agents/skills/     # Bucketed skills — auto-discovered via find-skills/ and scan-skills.py
  find-skills/      #   THE finder: one skill that locates all the others
  founder-os/       #   Pipeline skills, numbered in deliverable order:
    1-founder-bootstrap/        #   "Get me started" onboarding
    2-ingest-sources/           #   raw → processed standardization
    3-customer-discovery-coach/ #   discovery prep, with methods per product type
    4-value-proposition/        #   ─┐
    5-user-persona/             #    │
    6-jtbd/                     #    ├─ the product-thinking pipeline
    7-jtbd-prioritizer/         #    │
    8-draft-prd/                #    │
    8.5-prototype-kit/          #    │  PRD → lane → specs → first build → test plan
    9-metrics/                  #   ─┘  (OKRs; validation signals per product type)
    import-skills/              #   pull in useful third-party skills
    ingest-init/                #   recommend the best file converter for A.2 (no install)
```

## The pipeline

**Setup → (optional) ingest → run the chain.** Skills 1–2 set you up; 3–9 are the product-thinking
chain. Each chain skill reads your **hand-completed template** in `1_Sprint/<stage>/`, evidence in
`5_Library/sources/processed/` and ground truth in `0_Company/`; it writes its full output to
`2_Outputs/.agents/<stage>/` (agent-owned, hidden) and folds the essence back into `0_Company/` for the
next skill. **You fill the template by hand — the skill never does.** A missing input is never a dead
end: skills recover with you (offer to ingest or gather it, then continue).

| # | Skill | Stage | Writes (under `2_Outputs/.agents/`) |
|---|---|---|---|
| 1 | `founder-bootstrap` | A.1 | `0_User/` + `0_Company/` topic files |
| 2 | `ingest-sources` *(optional)* | A.2 | `5_Library/sources/processed/` |
| 3 | `customer-discovery-coach` | pre-A.3 | coaching (chat) |
| 4 | `value-proposition` | A.3 | `A.3-Value-Prop/Value-Proposition.md` |
| 5 | `user-persona` | A.3 | `A.3-User-Persona/User-Persona.md` |
| 6 | `jtbd` | A.4 | `A.4-JTBD/JTBD.md` |
| 7 | `jtbd-prioritizer` | A.4 | `A.4-JTBD/JTBD-Prioritized.md` |
| 8 | `prd` | A.5 · C.3 | `A.5-PRD-v1/PRD-v1.md` · `C.3-PRD-v2/PRD-v2.md` |
| 8.5 | `prototype-kit` | A.5 · C.3 | `A.5-Prototyping-1/Prototype-Kit.md` + the kit in `4_Prototypes/<slug>/` |
| 9 | `metrics` | C.2 | `C.2-Metrics-OKR/Metrics-OKR.md` |

## Prototype lanes

The prototype stage adapts to what is being made. **Product type** (in `0_Company/02_Product`) is one of
`software-app`, `website`, `physical-product`, `cpg`, `fashion`, `marketing-comms`,
`service-experience`, with at most one companion type. Every lane guide lives at
`5_Library/prototyping/lanes/<lane>.md` and is the source of truth for that lane's fidelity ladder,
doc set, tests and guardrails. When a skill needs examples, tests or metrics, **match them to the
founder's Product type** — never default to software or AI examples for a non-software product.

## Data convention

- **`5_Library/sources/raw/`** — drop everything here: interview transcripts, notes, analytics exports,
  market research, field/technical/regulatory docs, sensory or fit-test notes, retailer feedback,
  photos, supplier quotes. Any format; organize into subfolders if you like — the layout is mirrored
  into `processed/`. Gitignored — raw dumps never leave your machine via this repo.
- **`5_Library/sources/processed/`** — cleaned, standardized markdown/CSV the skills read, browsable by
  source, mirroring the `raw/` layout. The **optional** `ingest-sources` skill runs a tiered converter
  (`0_System/scripts/parse-sources.py`) that auto-uses the best engine installed (Docling → MarkItDown →
  built-in text/CSV) and stubs what it can't convert; for PDFs/images with no engine, the skill reads
  them directly. It recommends installs but never runs them. Skip ingestion and skills run on
  `0_Company/` ground truth instead.

## Conventions

- `AGENTS.md` (this file) is the source of truth for agent instructions; `CLAUDE.md` and `GEMINI.md`
  are **symlinks to `AGENTS.md`** created at bootstrap — never hand-edit them
- **Agent-neutral wording.** Where a skill says `AskUserQuestion`, use your tool's structured
  multiple-choice question if it has one; otherwise ask in plain text with a short lettered list, one
  question per message, and wait for the answer. Where a skill says "read", "write", "search" or "run",
  use your own file and shell tools. Nothing here depends on one vendor's tools or model
- `.agents/skills/<name>` and `.claude/skills/<name>` symlinks are generated by `setup.mjs` and
  gitignored; the real skill files are in `.agents/skills/<bucket>/`. When listing skills, ignore
  symlinked duplicates
- Prototype folders in `4_Prototypes/` use a short slug (e.g. `smart-bottle-v1`); larger builds may use
  `YYYY.MM Short Name`. Spec documents are ALL CAPS with `.MD` (`PRD.MD`, `BUILD_PLAN.MD`, …)
- Skills are bucketed under `.agents/skills/`: use `find-skills` to locate the right skill across
  buckets; each `SKILL.md` frontmatter is the source of truth, and `0_System/scripts/scan-skills.py`
  records their enabled state in `skills.json`. `0_System/scripts/verify-skills.py` checks the contract.
- Skills are thought partners — they coach, draft and structure, but you make the calls and you own
  the artifacts. Read what they produce; don't let generated content you never read feed back in
- Use YAML frontmatter on processed source files (type, date, source) so the agent can index them

## Key reference files

| Question | File |
|---|---|
| Who am I working with? | `0_User/` (topic files) |
| What is this company/product? | `0_Company/` |
| What data do we have? | `5_Library/sources/processed/` |
| What are we prototyping and how far? | `5_Library/prototyping/lanes/` and `4_Prototypes/<slug>/prototype-v1.md` |
| What skills are available? | `.agents/skills/` SKILL.md files (use `find-skills`) |
| How does the engine work? | `0_System/README.md` |
| Where are the no-AI templates? | `5_Library/templates/` |

## Boundaries — do not

- Commit `.env` or any secret — never commit credentials or API keys to the repo
- Edit `CLAUDE.md` or `GEMINI.md` directly — they are symlinks to `AGENTS.md`; edit this file instead
- Push customer-identifying or sensitive discovery data to any public repo — `5_Library/sources/raw/` is
  gitignored for a reason; check before you commit anything from `5_Library/sources/processed/`
- Send sensitive data to external services without the founder's explicit say-so
- Generate large volumes of artifacts the founder hasn't asked for — one artifact per pipeline stage,
  owned and edited by the founder
- Fill in the founder's stage template for them — **they complete it by hand** in `1_Sprint/<stage>/`;
  your derived markdown goes only to `2_Outputs/.agents/<stage>/`
- Make or imply safety, regulatory, labeling, health-claim, certification or legal judgments. Phrase
  them as questions to verify with a qualified professional
- Present a mockup, AI-generated render or sample as a finished, safe, certified or compliant product,
  or invent testimonials, statistics, awards or endorsements — mark unproven items `[PLACEHOLDER]`
- Build prototypes that take real payments or permanently store sensitive personal data
