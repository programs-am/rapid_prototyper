# Customer Discovery Kit — Start Here

Two tools that take you from assumptions to evidence before you build the wrong thing. Use them **before you commit to a prototype**. Aim for **at least 5 customer conversations** so you are building on what real people told you, not on what you hoped they would say. This works for any kind of product: software, a physical product, a food or fashion brand, a service, or a campaign.

This kit has two files:

| File | What it is | Where it runs |
|---|---|---|
| `customer-discovery-coach.skill` | An AI coach that turns raw assumptions into a ranked hypothesis stack and a ready-to-use interview guide | The **Claude app** (claude.ai or desktop) |
| `Customer-Discovery-Tracker.xlsx` | A five-tab tracker. Enter your hypotheses once and every tab populates automatically | Excel or Google Sheets |

> **Already working inside the Founder OS repo with Claude Code?** The same coach is built in as the `customer-discovery-coach` skill, so you do not need to install anything. Just ask your agent to run it. This kit is for working outside the repo, or for sharing the tools with someone who is not.

---

## Step 1 — Install the Customer Discovery Coach

1. Open the **Claude app** (claude.ai or the desktop app).
2. Go to **Customize → Skills**, click **+**, then **Upload a skill**.
3. Select `customer-discovery-coach.skill` from this kit.
4. Toggle it **on**. It is now available in any Claude conversation.

## Step 2 — Run a coaching session

Start a Claude conversation and ask about your customer interviews. The coach will ask whether you already have hypotheses or are starting cold. Either works. By the end you will have a ranked hypothesis stack and a full interview guide. Plan on roughly 30 to 60 minutes.

## Step 3 — Set up the tracker

Open `Customer-Discovery-Tracker.xlsx`. In the **Guide** tab, enter your hypotheses. This is the *only* place you type them; every other tab pulls from here. Paste your interview questions into the **Question Log**, tagging each with the hypothesis it tests.

## Step 4 — Talk to customers, then look for patterns

Ask the same questions to everyone, whether it is a shopper, a buyer at a retailer, a plant manager, or a client. Log key quotes as you go. After each conversation, mark each hypothesis **Validated / Invalidated / Inconclusive** in the Hypothesis Matrix. Be honest: an invalidated hypothesis is worth more than a dishonest "inconclusive." Review the **Pattern Summary** tab after every 5 conversations.

---

**Where this leads:** Customer Discovery → JTBD → Prioritizer → PRD. What you capture here feeds directly into everything you build next, so every later decision is grounded in what real customers actually told you.
