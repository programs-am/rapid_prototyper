---
title: "Lane — Software / App"
lane: software-app
summary: "Prototype a web app, mobile app (PWA-first), SaaS tool, dashboard or AI product — from a clickable front end up to a production-grade codebase."
---

# Lane: Software / App

**Use this lane when** the thing your customer uses is a screen: a web app, a mobile app, a SaaS tool, an internal tool, a dashboard, a data product, or an AI assistant. If your product is a *marketing site* rather than a tool, use [website.md](website.md). If it is hardware that has a companion app, pick `physical-product` first and add this lane as the second one.

## What you are prototyping

The smallest version of the product that lets a real person try the **one flow** in your PRD's Prototype section and tell you yes or no on your hypothesis. Not a product. Not a platform.

## Fidelity ladder — where to stop

Walk only as far as your hypothesis needs. Going further than that is delay, not progress.

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Front end | Good-looking, clickable screens. No real data. | `stitch`, `figma`, `v0`, `claude-artifacts` | **Frontend-only** — a clickable demo or landing page to test interest |
| 02 | Full web app | Forms submit, buttons act, logic runs. Nothing saved. | `google-ai-studio`, `lovable`, `bolt`, `replit`, `claude-code` | **Full web app** — a working app a real person can use, no accounts |
| 03 | Backend | Accounts and data that persist | Supabase or Firebase (via your builder) | **App + backend** — real accounts, saved data |
| 04 | Production-grade | A repo you or a developer can keep building on | `claude-code`, `cursor`, `openai-codex` | **Full-stack** — a codebase you own |

Going mobile: build the web app first; any web app installs to a phone as a PWA ("Add to Home Screen"). A native preview via Expo Go (`bolt`) is the other realistic option. App Store submission is out of scope for a prototype.

## Spec docs for this lane

| Build version | Required | Recommended | Optional |
|---|---|---|---|
| Frontend-only | `PRD.MD`, `TECH_STACK.MD` | `UI.MD`, `DESIGN.MD` | — |
| Full web app | `PRD.MD`, `TECH_STACK.MD` | `UI.MD`, `DESIGN.MD` | `DATA.MD` |
| App + backend / Mobile | `PRD.MD`, `TECH_STACK.MD` | `UI.MD`, `DESIGN.MD`, `DATA.MD` | `API.MD` |
| Full-stack | all of the above | | |

Templates live in `1_Sprint/A.5-Prototyping-1/templates/`. The rule: **if a decision is not in your spec, the AI invents it.**

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| Task-completion session | Watch someone do the one flow, say nothing | 5 target users | 4 of 5 finish unaided |
| Click-through demo | Send the clickable link, ask them to narrate | 5–10 | They name the value in their own words |
| Fake-door / waitlist | Landing page + sign-up button for the feature | 50–200 visitors | Sign-up rate you set in advance |
| Wizard-of-Oz output | The "AI" or "automation" is you behind the scenes | 3–5 | They would use the output again unprompted |

Example hypotheses:
- "This prototype tests whether a freelance designer can produce a client-ready invoice in under two minutes. A pass = 4 of 5 testers finish without help."
- "This prototype tests whether a facilities manager trusts an AI-generated maintenance schedule. A pass = they accept at least 3 of the 5 suggested tasks without editing."

## What the agent can build for you directly

From your spec docs, Claude Code can write a single-file HTML/CSS/JS clickable prototype (hardcoded placeholder data, no backend) into `4_Prototypes/<slug>/prototype/` and open it locally. For stages 02–04 it can scaffold the app in the repo, but you will usually hand the spec folder to a builder tool.

## What needs another tool or a human

Hosting/deploy accounts, a database project, anything with real authentication, and design polish beyond what the tool generates.

## Guardrails

- **No permanently-stored sensitive personal data.** A prototype tests an idea; it does not hold real people's data.
- **No real payments.** Mock the checkout; never wire a live card.
- State both to your builder at the start of every session.
- If AI is part of the product, say which parts are real model calls and which are scripted, to testers and in your notes.

## Starter build prompts

1. "Read PRD.MD, TECH_STACK.MD, UI.MD and DESIGN.MD in this folder. Build a single-file HTML prototype of the one flow in PRD section 5. Hardcoded placeholder data only. No auth, no backend, no real payments."
2. "Add the empty, loading and error states from UI.MD to every screen."
3. "Turn this prototype into a React app following TECH_STACK.MD. Keep the same screens and flow."

## Common traps

- Building stage 03 before stage 01 has been tested.
- Letting the builder add accounts, settings and admin pages "just in case" — list them under *Not in scope*.
- Polishing visuals before you know the flow works.
