# A.1-Kickoff-Setup

**Purpose:** get a working Founder OS workspace and an agent that knows who you are and what you are building.

**Typical time:** 20-40 minutes, plus a few extra minutes if you need to install anything.

## Inputs

- A copy of the Founder OS repo on your machine
- An AI coding agent that reads `AGENTS.md` (Claude Code is the supported path)
- Optional: any notes, transcripts, or research you already have in `5_Library/sources/raw/`, so the setup interview is grounded in real material

## What you do by hand

- Open the repo in your agent and ask it to get you started.
- Confirm your environment responds: the agent tool, git, Node.js 18+, and the `CLAUDE.md` link to `AGENTS.md`.
- Answer a short interview about yourself and your product. Say what you are making in your own words, whether it is software, a physical product, a food or fashion brand, a service, or a campaign.

There is no template to fill in for this stage. Your answers are the input.

## What the skill writes

`founder-bootstrap` checks prerequisites, creates `CLAUDE.md` if it is missing, and builds your profile in `0_User/` and your ground-truth topic files in `0_Company/`. Every later skill reads from these, so correct anything that is wrong now rather than later.

## Done when

- The agent responds in this repo and can name your product and who it is for.
- `0_User/` and `0_Company/` are populated and you have read them.

This folder is your working space. You complete any template **by hand** and it stays here; the agent's derived markdown deliverable goes to `2_Outputs/.agents/A.1-Kickoff-Setup/`.
