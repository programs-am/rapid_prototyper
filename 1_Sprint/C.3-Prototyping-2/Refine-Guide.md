# Refine Guide — prototype round 2

You tested round 1. This guide takes you from "here is what people said" to a sharper second prototype
and a next hypothesis. It works for every product type: an app, a page, a model, a pack and samples, a
garment, a campaign or a service.

## 1. Triage the feedback

Open `prototype-v1.md` and your notes. Sort what you heard into three piles:

| Pile | Meaning | What to do |
|---|---|---|
| **Signal** | Specific, repeated, observed behavior ("4 of 5 stalled at the pricing line", "tasters said it was gritty") | Candidate for the change |
| **Opinion** | One person's taste ("I'd prefer green") | Note it, don't act yet |
| **Noise** | Polite praise, unrelated ideas | Ignore |

Vague feedback ("make it better") gives nothing to act on. Go back and ask for a specific moment: "what
did you expect to happen when you did that?"

## 2. Choose the single highest-signal change

Pick the one change that, if wrong, would most change what you build next. Write it as:

> Round 1 tested [X]. Round 2 changes [Y] because [Z] said/did [evidence].

Refine that change, not the whole product. A second prototype that changes five things teaches you nothing.

## 3. Decide: refine, rebuild, or step back

| If... | Then |
|---|---|
| The core flow/idea worked, details didn't | Refine the same prototype |
| The form was wrong (e.g. a page was the wrong way to test a physical product) | Rebuild in another lane — rerun `prototype-kit` |
| The riskiest assumption was disproved | Go back to the PRD: new hypothesis, maybe new job |
| You can't tell what happened | Fix the test first (sample, script, measure), not the prototype |

## 4. Add a lightweight feedback mechanism

Pick one that fits your product: a 3-question form (Tally), a recorded walkthrough, a wear-test log, a
reply-to-this-email prompt, a spreadsheet of runs. Decide in advance what number or observation counts as
a pass.

## 5. Write the next hypothesis

Save `prototype-v2.md` next to v1 (keep v1). Complete the sentence:

> This prototype tests [what you built]. A pass = [what you observe when a user succeeds].

If you can't, the scope isn't tight enough — tighten the PRD's Prototype section and try again.

## Lane notes

- **Physical / CPG / fashion:** change one variable per sample. Re-check the safety and labeling
  questions in your spec sheet before any new person handles or uses a unit.
- **Marketing:** change one element per variant (subject line, headline, offer).
- **Service:** change one step in the blueprint, and log the time before and after.
- **Software/website:** change one screen or one section; keep the rest of the flow stable.
