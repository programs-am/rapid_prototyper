# Output Format — JTBD-Prioritized.md

Load this at the Closing step for the exact file format to write silently.

## The derived deliverable file (written quietly)

Write this to `2_Outputs/.agents/A.4-JTBD/JTBD-Prioritized.md` for the chain's reference —
silently; don't announce the path to the founder.

```markdown
---
type: jtbd-prioritized
session: A.4-JTBD
---

# JTBD — Prioritized

## #1 — Top Job
**Statement:** [job statement]
**Primary layer:** [tag]
**AI role:** [tag] — [rationale from JTBD.md]
**Why #1:** [2–3 sentence rationale from the conversation]
**Watch out for:** [honest risk or assumption]
**Decision:** KEEP — top job

## #2
**Statement:** [job statement]
**Primary layer:** [tag]
**AI role:** [tag] — [rationale from JTBD.md]
**Why #2:** [rationale]
**Watch out for:** [risk or assumption]
**Decision:** [KEEP — reason / KILL — stated reason]

[repeat for all jobs]

## Next step
[Concrete validation action for the top job — specific to the job and its watch-out-for]
```

Always write the `**AI role:**` line for every job so `8-draft-prd` and `8.5-prototype-kit` can
read it. It is only set by the founder when AI is part of the product ("AI role (only if AI is
part of the product)"); otherwise carry through `Irrelevant — No AI component in this product`.

This file is the chain's reference. The `8-draft-prd` skill reads it as `A.4-JTBD-Prioritized`
input automatically. The founder records their decisions in their own
`1_Sprint/A.4-JTBD/` template by hand.

## No essence fold

This skill has no essence target (`—`). Do NOT call `util_get_company_info` `set()` after
writing the output file. The JTBD essence fold is handled by skill 6 (`jtbd`).
