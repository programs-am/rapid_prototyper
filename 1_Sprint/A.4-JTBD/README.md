# A.4-JTBD

**Purpose:** write three to five solution-agnostic job statements (what the customer is trying to get done), then rank them and make an explicit keep-or-kill call on each. The top-ranked job anchors PRD section 1 and the scope of your prototype.

**Typical time:** 45-90 minutes for both parts. Read the guide first if the framework is new to you (about 15 minutes).

## Inputs

- Your completed value proposition and persona (A.3)
- Processed evidence in `5_Library/sources/processed/`, if you have it

## What you do by hand

- Open `A.4-JTBD-Template.md` (or the `.docx` version) and write 3-5 jobs in the form **When [situation], I want to [goal], so I can [outcome]**. No product, feature, or interface in the statement.
- Tag each job's primary layer (functional, emotional, or social) and add a one-line rationale.
- Fill the **AI role** column only if AI is part of your product: feature, product core, not yet, or irrelevant. If there is no AI component, write `irrelevant`.
- Rank the jobs, write why each ranks where it does, and mark every job below the top one KEEP or KILL.
- Optional: use `A.4-JTBD-Prioritizer.csv` for a fast numeric first cut before the conversation.

`A.4-JTBD-Guide.md` explains the framework with examples from snacks, hardware, fashion, services, and industrial parts.

## What the skills write

- `jtbd` guides you through the statements one at a time and writes `2_Outputs/.agents/A.4-JTBD/JTBD.md`.
- `jtbd-prioritizer` ranks the jobs across five dimensions and writes `2_Outputs/.agents/A.4-JTBD/JTBD-Prioritized.md`.

Neither skill fills in your template.

## Done when

- Each job passes the test: if your solution did not exist, the statement would still be true.
- One job is ranked first, every other job has a keep-or-kill decision, and you have one validation action for the top job's biggest risk.

Your completed template stays in this folder. The blank masters are mirrored in `5_Library/templates/`.
