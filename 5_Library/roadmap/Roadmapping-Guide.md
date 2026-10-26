---
title: "Roadmapping Guide"
summary: "Now/Next/Later board with (Impact x Confidence) / Effort scoring. Turns PRD v2 assumptions and OKRs into a repeatable build-and-test cycle you can run solo or with a team, for any kind of product."
---

# Roadmapping Guide

## Purpose

A roadmap here is not a feature list. It is a ranked list of bets: things to build and questions to test, ordered by how much they matter and how sure you are. It answers one question each cycle: what are the two or three things we work on now, and why those?

It works for any product: a software feature, a prototype run of a physical product, a new flavor or fabric, a landing page, a pilot with one retailer, a service you deliver by hand before you automate it. A "test" item is as valid as a "build" item.

## Inputs

- **PRD v2.** Section 5 "Won't have" items become the Kill list. Section 7 assumptions feed Impact and Confidence. Section 8 OKRs define "done" for each Now item. Section 9 phasing suggests Now, Next, and Later placement.
- **Feedback from your demo, advisors, and peers.** What to promote or defer.
- **Customer evidence.** Conversation notes, pre-orders, sample feedback, usage signals.

Before you start you need a finished PRD v2. A team is helpful but not required; a solo founder runs the same board with a lower Now cap.

## The Now / Next / Later board

| Column | Meaning |
|---|---|
| **Now** | Active this cycle. Cap at 2-3 items. The team works on these and nothing else. |
| **Next** | Conditional. Each Next item carries a gate: "moves to Now when [Now item] proves [X]." |
| **Later** | Parked, no dates, low commitment. Revisit at each review. |
| **Kill** | Items from PRD Section 5 "Won't have", plus anything you decide to drop. Do not re-score them. |

Every item has an ID, a type (Build or Test), an initiative name, its scores, and a link to the PRD section it serves. `hypothesis_roadmap.xlsx` is the live board and `hypothesis_tracker.xlsx` tracks the underlying hypotheses.

## Scoring model

Score every candidate on the same three dimensions. Scores are relative to your product and your capacity, not absolute. A 4 or 5 on Impact or Confidence needs a specific customer signal behind it. Gut feel is not a score.

- **Impact (1-5):** value delivered if this works. For a build item, the outcome for the customer. For a test item, the risk removed by answering the question.
  - 1: you thought of it, no customer has mentioned it. 3: customers acknowledge the problem but live with workarounds. 5: several customers named it unprompted as the thing blocking them.
  - Ask: "What did a customer actually say or do that tells me this is a 4 or 5?"
- **Confidence (1-5):** how sure you are, based on evidence. Start from PRD v2 Section 7 (High = 5, Medium = 3, Low = 1) and update it with anything you have learned since.
  - 1: pure hypothesis. 3: one or two customers confirmed it when asked. 5: customers showed it through behavior (paid, switched, changed their routine).
  - Ask: "Am I confident because of evidence, or because I want this to be true?"
- **Effort (1-5):** real cost given your actual team, skills, and hours, not best-case capacity. The same item scores differently for different founders.
  - 1: hours to days, done it before. 3: two to four weeks, at least one new part. 5: months, or needs a hire, a supplier, a regulatory step, or equipment you do not have.
  - If you have not done it before, score one level higher. First-time work usually takes about three times longer than estimated.

**Score = (Impact x Confidence) / Effort.** Higher means higher priority.

**Risk flag:** if Confidence = 1 and Impact is 4 or higher, the item auto-elevates to Now regardless of Score. A high-impact belief with no evidence is the most dangerous thing on your board, so test it before building anything else.

## Placing items

1. List every candidate: features, improvements, pivots, open questions, un-built jobs from JTBD.
2. Score each one.
3. Place them: highest Score goes to Now. Risk-flagged items go to Now. High Score with high Effort goes to Next. Low Score goes to Later. Items from "Won't have" go to Kill.
4. **Cap Now at 2-3 items.** If more qualify, rescore until only the top remain. Solo founders can cap at 1-2.
5. For each Now item, name the PRD section it serves and write the gate for the Next item that depends on it.

## Cycle review ritual

1. Pick a cycle length that fits your product and set the first review date before you move on. A software tweak may take a week or two. A physical prototype, sample run, or regulatory checkpoint may take four to twelve weeks. The rhythm matters more than the length.
2. At each review, work through these in order:
   - Close or kill finished and failed Now items. Record what shipped and what you learned.
   - Update Impact and Confidence from new evidence. Do not go back to the PRD first; update the board, then fold changes into the PRD.
   - Promote Next items whose gate has been met.
   - Generate new PRD tasks and new candidates from what you learned.
   - Rescore and re-apply the Now cap.
3. Repeat. The board is never finished.

If you are running a marketplace or any product with two sides that do not move together, keep two parallel Now tracks with one item each, so the imbalance stays visible.

## Kill list

Import PRD Section 5 "Won't have" items into the Kill column on day one. During a cycle, add anything a review decides to drop, with a one-line reason. Killed items resurface in conversation unless they are written down, so write down why. Re-open an item only if new evidence changes its Impact or Confidence, and then treat it as a new candidate.

## How it links to PRD v2 and OKRs

- **Assumptions (PRD v2 Section 7):** each assumption becomes a candidate, usually a Test item. Its High, Medium, or Low rating seeds Confidence.
- **OKRs (PRD v2 Section 8, from C.2):** the Key Results define what "done" means for a Now item. If an item does not move a Key Result, ask why it is in Now.
- **Phasing (PRD v2 Section 9):** earlier phases suggest Now, later phases suggest Next and Later.
- **Jobs (A.4):** each Build item should trace to a job. If you cannot link an item to a job, it may not belong on the board.

## Item card

Use one card per item for drill-down, kept in the board workbook or alongside it.

```markdown
## [ID] [Initiative name]
Placement: Now · Type: Test · PRD: [section] · Status: in progress

Impact      5/5 - [what customers said or did]
Confidence  1/5 - [PRD Section 7 source, updated since]   RISK FLAG
Effort      2/5 - [what it takes given your team and hours]
Score       2.5 - (5 x 1) / 2
Gate (if Next) - moves to Now when [condition]

### Sub-tasks
- [ ] [ID].1  [task]
- [ ] [ID].2  [task]

### Cycle review
- Shipped:
- Learned:
- New PRD tasks:
```

## Failure states

- Everything scores 5 and Now fills with six to eight items. If nothing gets cut, the scoring is broken. Enforce the cap.
- The Kill list is not imported from PRD Section 5, so dropped ideas keep coming back.
- The board is built once and never revisited. The value is in the review, not the first draft.
- No cycle length or review date is set, so everything runs in parallel and Now, Next, and Later dissolve.
- Confidence is inflated with no evidence. If every item is High, the scoring is broken; Confidence must reflect what is in PRD Section 7, not aspiration.
