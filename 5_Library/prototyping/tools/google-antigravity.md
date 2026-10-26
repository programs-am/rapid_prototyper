---
title: "Google Antigravity"
category: "Build an App or Site (Code Tools)"
lanes:
  - software-app
  - website
  - service-experience
summary: "Google's agent-first coding environment — an AI agent that plans, edits files and can test in a browser. Also a way to run this workspace."
---

# Google Antigravity

Google's agent-first coding environment (desktop IDE and CLI). You describe what you want; the agent plans the work, edits files and can check the result in a browser.

- **Pricing:** Check Google's current plans before relying on any figure. Access and limits have changed often since launch.
- **Pricing note:** Prices and limits change often; check the vendor's site before relying on it.
- **Best for:** A founder who prefers Google's tools and wants an agent to build a clickable app or page, or to run this Founder OS workspace.

**5-Step Quickstart**
1. Install Antigravity from Google's site and sign in with a Google account
2. Open this repo's folder as your workspace
3. Run `node 0_System/bootstrap/setup.mjs` (or just say "get me started" and let the bootstrap do it) so the skills are linked into `.agents/skills/`
4. For a build: paste the first-build prompt from your `FIRST_BUILD.MD` and ask for a single-file clickable prototype
5. Review the result in the browser preview, then save it under `4_Prototypes/<slug>/prototype/`

**Using it for this workspace:** Antigravity looks for workspace skills in `.agents/skills/`, which is where `setup.mjs` links them. Project instructions come from `AGENTS.md` (with a `GEMINI.md` alias as a fallback). If a skill does not trigger, say "use find-skills".

**Watch out:** Treat anything the agent builds as a prototype. Do not give it real payment details or real customer data, and do not present the output as a finished or compliant product.
