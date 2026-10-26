# Customer Discovery Assets

**Stage:** before you commit to a prototype. Aim for at least 5 customer conversations first.

These assets help you move from assumptions to evidence before you build. They work for any kind of product: software, a physical product, a food or fashion brand, a service, or a campaign. The coaching skill and the tracker are the two tools you actually use; the deck and one-pager explain the sequence.

## Contents

| Path | Type | What it is |
|---|---|---|
| `Customer-Discovery-Deck.pptx` | Binary | Slide deck version of the one-pager, for presenting the method to a group |
| `Customer-Discovery-One-Pager.md` | Markdown | Founder-facing overview of the two-tool kit and the 6-step sequence |
| `Customer-Discovery-Tracker.xlsx` | Binary | Five-tab Excel tracker. Hypotheses are entered once in the Guide tab and every other tab populates automatically |
| `founder-kit/Customer-Discovery-Kit.zip` | Binary | Standalone bundle for use outside this repo: `START-HERE.md`, the tracker, and `customer-discovery-coach.skill` |
| `founder-kit/Customer-Discovery-Tracker.xlsx` | Binary | Same tracker, unpacked for convenience |
| `founder-kit/START-HERE.md` | Markdown | Plain instructions: install the skill, run a coaching session, use the tracker |

> **Where the skill lives:** inside this repo the coach runs as the `customer-discovery-coach` skill under `.agents/skills/founder-os/`, so there is nothing to install. The `.skill` file inside `Customer-Discovery-Kit.zip` is a copy of the same coach for the Claude app, for use outside the repo or for sharing with someone who is not working in it.

## Where it fits

| Stage | Activity |
|---|---|
| Before A.1 (or alongside A.2) | Run the coach, enter hypotheses in the tracker, and hold at least 5 customer conversations. Typically a few days of calendar time, since people take time to schedule |
| A.2 Data Ingestion | Drop your notes, transcripts, and tracker export into `5_Library/sources/raw/` so the chain can read them |
| A.4 JTBD | Patterns from your conversations feed job-statement writing |
| A.5 onwards | JTBD, PRD, prototype, and roadmap all trace back to this evidence |

## Founder flow

1. Run the `customer-discovery-coach` skill (or, outside this repo, install the `.skill` from the kit in the Claude app, under Customize, then Skills). About 30 to 60 minutes.
2. You get ranked hypotheses and an interview guide.
3. Paste the hypotheses into the Guide tab of `Customer-Discovery-Tracker.xlsx`.
4. Hold your conversations and log responses in the Question Log.
5. Review the Pattern Summary tab after every 5 conversations.
6. Take the findings into the sprint. They feed directly into JTBD (A.4).
