# Roadmap Assets

**Stage:** after your demo and PRD v2. Use these to turn what you have learned into a short, ranked list of what to work on next, then repeat each cycle.

A Now/Next/Later board plus a hypothesis tracker, and a guide that explains the scoring and the cycle-review routine. They work for any kind of product and for a solo founder or a team. The workbooks are the live working surface; the guide explains how to use them.

## Contents

| Path | Type | What it is |
|---|---|---|
| `Roadmapping-Guide.md` | Markdown | The method: purpose, Now/Next/Later board, scoring model, cycle-review ritual, Kill list, and how it links to PRD v2 assumptions and OKRs |
| `hypothesis_roadmap.xlsx` | Binary | Now/Next/Later board with an example row per column, a column guide, and a status legend. Example rows use a smart water bottle; replace them with your own |
| `hypothesis_tracker.xlsx` | Binary | Hypothesis tracker with a Kanban view and a high-relevancy view. Tracks validation status across cycles and links back to PRD Section 7 assumptions |

## Where it fits

| Stage | What it gives the roadmap |
|---|---|
| A.4 JTBD | The jobs each Build item should trace to |
| A.5 PRD v1 | Section 5 "Won't have" and Section 7 assumptions, the required inputs |
| C.2 Metrics / OKR | Key Results that define "done" for each Now item |
| C.3 PRD v2 | Final assumptions, OKRs, and phasing that seed the board |
| D.1 Demo | Feedback on what to promote or defer |
| After the sprint | You run scoring and cycle reviews on your own, as often as your cycle length dictates |

Typical time: 60 to 90 minutes for the first board, then 20 to 30 minutes per cycle review.

## Scoring model

Every candidate, whether a build or a test, is scored:

- **Impact (1-5):** value delivered if this works, grounded in specific customer signals
- **Confidence (1-5):** certainty it is the right thing, sourced from PRD v2 Section 7 (High = 5, Medium = 3, Low = 1)
- **Effort (1-5):** real cost given your actual team, skills, and hours, not best-case capacity
- **Score:** `(Impact x Confidence) / Effort`. Higher means higher priority.
- **Risk flag:** if Confidence = 1 and Impact is 4 or higher, the item auto-elevates to Now regardless of Score

Cap Now at 2-3 items. Set a cycle length and a review date before you leave the first session. See `Roadmapping-Guide.md` for the full rubric.

## Pipeline position

```
value-prop -> JTBD -> PRD v1 -> PRD v2 (OKRs) -> Roadmap (Now/Next/Later) -> repeat each cycle
```

The roadmap is the last link in the chain. It converts PRD outputs into a cycle you can keep running.
