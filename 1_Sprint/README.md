# 1_Sprint — The Stage Scaffold

One self-contained subfolder per stage of the rapid-prototyping sequence, from setup through demo. This is where the work *happens* — not where agent outputs land.

You can run Founder OS three ways, and the folders work the same in all of them:

- **Solo, at your own pace.** Work one stage at a time, over an afternoon or over weeks.
- **As a group sprint.** A group or team can run the whole sequence in about a week, with the review and demo stages done live.
- **Mix and match.** Skip a stage you do not need (A.2 is optional), repeat one that taught you something, or go back after a demo.

**Stage IDs are stable names, not a schedule.** `A.3` means "the value-proposition and persona stage," whenever you get to it. The letters and numbers only give the stages a fixed order and a fixed name that every file, skill, and output folder can point to.

Each stage subfolder holds:

- `README.md` — what the stage is for, what goes in, what you do by hand, what the skill writes, and roughly how long it takes
- the working **template** for the exercise (the blank master lives in `5_Library/templates/`) — **you complete it by hand, and your completed version stays in this folder**
- any stage-specific assets

## Stages

| Folder | Stage | Exercise | Skill |
|---|---|---|---|
| `A.1-Kickoff-Setup/` | A.1 | Set up the workspace and your founder profile | `founder-bootstrap` |
| `A.2-Data-Ingestion/` | A.2 | Ingest and standardize what you already know *(optional)* | `ingest-sources` |
| `A.3-Value-Prop/` | A.3 | Value proposition | `value-proposition` |
| `A.3-User-Persona/` | A.3 | User persona | `user-persona` |
| `A.4-JTBD/` | A.4 | Jobs-to-be-done, then prioritize and kill | `jtbd`, `jtbd-prioritizer` |
| `A.5-PRD-v1/` | A.5 | Product requirements document, version 1 | `prd` |
| `A.5-Prototyping-1/` | A.5 | Spec documents and first prototype | `prototype-kit` |
| `A.6-Retro/` | A.6 | Short retro: what broke, what it taught you | none |
| `B-Advisor-Review/` | B | 1:1 working review with an advisor or domain expert | none |
| `C.1-Peer-Review/` | C.1 | Peer review of your riskiest assumption and prototype | none |
| `C.2-Metrics-OKR/` | C.2 | Metrics and OKRs | `metrics` |
| `C.3-PRD-v2/` | C.3 | Product requirements document, version 2 | `prd` |
| `C.3-Prototyping-2/` | C.3 | Second prototype round | none |
| `D.1-Demo/` | D.1 | Demo: jobs, prototype, metrics | none |

Before A.1 (or alongside A.2), run customer conversations with the kit in `5_Library/discovery/`. Aim for at least 5 before you commit to a prototype. After D.1, use `5_Library/roadmap/` to plan the next cycle.

## Rule

**Founders complete the templates by hand — the agent never fills them.** Your completed template stays here (human-owned). The agent's derived markdown deliverable lands in `2_Outputs/.agents/<stage>/` (agent-owned), and its distilled essence folds into `0_Company/`.

Each stage is self-contained: opening any one folder gives you everything you need for that exercise without context from the others.
