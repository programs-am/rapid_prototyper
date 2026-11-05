---
title: "Founder OS: Getting Started"
audience: Founders new to the Founder OS prototyper workspace
format: Source file for a slide deck or HTML page
---

# Founder OS: Getting Started

*From customer research to a testable prototype, with an AI agent as your thought partner.*

> **How to use this file.** Each `##` section is one slide or one page section. Under each heading
> you get a headline line, a few short points, and **Speaker notes** for the presenter or for a
> "more detail" panel on an HTML page. Feed the whole file to your deck or page builder, or ask your
> agent: "Turn FOUNDER-GUIDE.md into a slide deck" or "…into a single-page HTML guide."

---

## 1. What this is

**A workspace your AI agent works inside, built to get you from an idea to a prototype real people can react to.**

- A folder of plain files, templates and skills, not an app to learn
- Works for any product: software, websites, physical products, food and consumer goods, fashion, campaigns and services
- Bring your own agent: Claude Code, Codex, Google Antigravity, Cursor, Gemini CLI or similar
- No model key or paid tools required

**Speaker notes:**
Founder OS is a set of markdown files, conventions and "skills" (packaged instructions) that an AI
coding agent reads. You open the folder in your agent and talk to it in plain words. The agent
coaches you through each exercise, one question at a time, and saves the results in predictable
places so each step can build on the last. You make the calls; the agent drafts and structures.

---

## 2. What you'll leave with

**Six connected pieces of work, each one built on the one before, all owned by you.**

- **Value proposition:** one sentence on who it's for, their problem, and why you're different
- **User persona:** one real person, one moment, one need
- **Jobs to be done:** what your customer is trying to get done, ranked, with the weak ones cut
- **PRD (requirements doc):** what the first version includes, and what it leaves out
- **Prototype kit:** specs, a first prototype and a test plan with a pass/fail line
- **Metrics:** one objective and 2–4 results that prove or disprove your riskiest bet

**Speaker notes:**
Each piece is short on purpose. The value of the chain is that every step reads the step before, so
your prototype traces straight back to a real customer problem. By the end you can explain, in about
nine minutes, which job you're solving, what your prototype showed, and how you'll know if the bet
is paying off.

---

## 3. Before you start

**Most of this workflow takes minutes. Four things take weeks, so start them first.**

- **Notes from real customer conversations:** interview notes, survey results, customer emails
- **The problem in a customer's own words,** including at least one real quote
- **A count of who told you about each pain,** and who they were
- **Access to 5–8 people you can test with:** a network, list or community that knows you

Everything else (your background, budget, folder names, pilot terms) you can decide in the session.

**Speaker notes:**
None of these four can be invented afterward, and the workflow won't invent them for you. Without
them every output gets marked as light on evidence, and quotes stay as `[PLACEHOLDER]`. The
workspace includes a customer discovery kit in `5_Library/discovery/`: a coaching skill that helps
you write hypotheses and an interview guide, plus a tracker. Aim for at least 5 conversations before
you commit to a prototype. That usually takes a few days of calendar time, because people take time
to schedule.

---

## 4. Setup in 5 minutes

**Clone it, open it in your agent, and say "get me started."**

1. Install **git** and **Node** if you don't have them
2. Clone the repo: `git clone https://github.com/programs-am/rapid_prototyper.git`
3. Open the folder in your AI agent
4. Type: **"get me started"**
5. Restart your agent session when setup tells you to

**Speaker notes:**
"Get me started" runs the setup skill. It checks your computer, links the instruction files and
skills where your agent looks for them, then interviews you to build your founder profile and
company context. If your agent won't run the setup script (some agents block scripts by default),
it can create the same links by hand, or you can run `node 0_System/bootstrap/setup.mjs` yourself.
Either way, restart the session afterward so the agent picks up the skills. Setup takes 20–40
minutes, most of it the interview.

---

## 5. How the workspace is organized

**Six folders. You write some, the agent writes others.**

| Folder | What's in it | Who writes it |
|---|---|---|
| `0_User/` | Your profile: role, background, how you like to work | Agent, from your answers |
| `0_Company/` | Ground truth: one-liner, product, users, market | Agent, from your answers and each stage |
| `1_Sprint/` | One folder per stage, with the template you fill in | **You** |
| `2_Outputs/` | The agent's finished work for each stage (hidden `.agents/` folder) | Agent |
| `4_Prototypes/` | One folder per prototype: specs, the prototype, the test plan | Agent drafts, you edit |
| `5_Library/` | Your data, templates, discovery kit, prototyping guides | You add data; guides are provided |

**Speaker notes:**
The key split is between `1_Sprint/` and `2_Outputs/`. Your filled-in templates stay in
`1_Sprint/<stage>/` and belong to you. The agent's version goes into `2_Outputs/.agents/<stage>/`,
and the short essence gets folded into `0_Company/` so the next step can use it. Don't hand-edit the
agent's outputs; change your template or tell the agent what to fix instead. Also don't edit
`CLAUDE.md` or `GEMINI.md`: they point to `AGENTS.md`, which is the real instruction file.

---

## 6. The pipeline

**Say the phrase, answer the questions, get the piece.**

| Step | Say this | You get |
|---|---|---|
| Setup | "Get me started" | Your profile and company context |
| Ingest data *(optional)* | "Ingest my data" | Clean, readable versions of your files |
| Discovery prep | "Prepare for customer interviews" | Hypotheses and an interview guide |
| Value prop | "Write my value prop" | `Value-Proposition.md` |
| Persona | "Build my user persona" | `User-Persona.md` |
| Jobs to be done | "Start the JTBD exercise" | `JTBD.md` |
| Rank jobs | "Prioritize my jobs" | `JTBD-Prioritized.md` |
| PRD | "Write my PRD" | `PRD-v1.md` |
| Prototype | "Set up my prototype" | A prototype kit in `4_Prototypes/` |
| Metrics | "Set my metrics" | `Metrics-OKR.md` |

**Speaker notes:**
The exact wording doesn't matter. Plain requests work, and the agent finds the right skill. Each
skill reads your template, your evidence and the company ground truth, then asks one question at a
time. If something it needs is missing, it won't stop; it will offer to help you gather it or carry
on and flag the gap. Later rounds use the same skills: "extend my PRD" for version 2 and "refine my
prototype" for round 2.

---

## 7. The sprint stages

**Fourteen stages in four parts. Run them solo over weeks, or as a group in about a week.**

| Part | Stages | Rough time |
|---|---|---|
| **A: Build the chain** | A.1 Setup · A.2 Data *(optional)* · A.3 Value prop + persona · A.4 Jobs · A.5 PRD + first prototype · A.6 Retro | A.1 20–40 min · A.2 30–90 min · A.3 45–60 min · A.4 45–90 min · A.5 PRD 45–90 min + prototype 2–4 hrs · A.6 10–20 min |
| **B: Advisor review** | 1:1 with someone who knows your weakest area | 30 min + 30–60 min prep |
| **C: Sharpen** | C.1 Peer review · C.2 Metrics · C.3 PRD v2 + second prototype | C.1 60–90 min (group) · C.2 45–60 min · C.3 PRD 1–2 hrs + prototype 2–3 hrs |
| **D: Demo** | D.1 Present jobs → prototype → metrics | ~9 min + 1–2 hrs prep |

**Speaker notes:**
Stage IDs are names, not a schedule. "A.3" always means the value-prop and persona stage, whenever
you get to it. You can skip A.2 if you have no data, repeat a stage that taught you something, or go
back after a demo. Stages without a skill (retro, advisor review, peer review, demo) are things you
do with people; each has a README in its `1_Sprint/` folder explaining how. After the demo, the
roadmap guide in `5_Library/roadmap/` helps you plan the next cycle.

---

## 8. Prototype types

**Your first prototype depends on what you're making. It's rarely a working product.**

| Product type | A typical first prototype | What it tests |
|---|---|---|
| Software or app | Clickable screens, no real data | Interest in a demo or landing page |
| Website | Headline, copy and a gray-box layout | Can people tell what it is in 5 seconds? |
| Physical product | Sketches, renders, a one-page spec sheet | Desire and positioning |
| Food, beauty, household (CPG) | A concept board: name, claim, lineup, price | Shopper reaction to a card or screen |
| Fashion and accessories | Moodboard, line plan, flat sketches | Preference and retailer reactions |
| Marketing or comms | A message map, then mock creative | Recall and preference with the audience |
| Service or experience | A service blueprint and scripts, then a hand-delivered run | Whether the steps hold up with real customers |

**Speaker notes:**
Your product type is set during setup and decides the "lane." Each lane has a guide in
`5_Library/prototyping/lanes/` with four levels, from a concept up to something you can hand to an
engineer, manufacturer or developer. Start at the lowest level that can test your riskiest
assumption. A concept sheet you show five people often teaches you more than a month of building.
You can name one companion type if your product mixes two, such as a service with a marketing
campaign.

---

## 9. Working well with the agent

**Treat it as a thought partner: it drafts and coaches, you decide.**

- **Ask in plain words.** No commands to memorize
- **Expect one question at a time.** Answer from what you actually know, not what sounds good
- **Fill the templates yourself.** Your thinking lives in `1_Sprint/`; the agent writes its own version
- **Read everything before you rely on it.** Don't let text you never read feed the next step
- **Tell it how you like to work.** Short and direct, or step by step; recommendations or options first

**Speaker notes:**
The agent's examples are there to help you think, not to copy. If you reuse an example word for
word, expect it to ask whether that matches a real person. Your working preferences are saved in
`0_User/` during setup, so every later session adapts to you. If an answer feels off, say so; every
skill ends by asking whether you want to change anything before it saves.

---

## 10. Your data

**Drop raw files in one place. They stay on your machine.**

- **`5_Library/sources/raw/`:** drop anything here, in any format. It is never uploaded to GitHub
- **`5_Library/sources/processed/`:** clean versions the skills read. These *are* tracked, so check before you commit
- Notes, transcripts, survey exports, competitor research, supplier quotes and photos all count
- No data yet? Skip ingestion; the skills run on what you tell them

**Speaker notes:**
"Ingest my data" converts what's in `raw/` into clean markdown or CSV in `processed/` and tells
you what your evidence covers and where it's thin. It recommends converter tools but never installs
anything without asking. Never put customer-identifying or sensitive information into a public
repository, and never paste passwords or API keys into the chat or commit them to the repo.

---

## 11. Guardrails

**The workflow keeps your materials honest, so your test results mean something.**

- **No invented quotes, numbers, awards or endorsements.** Anything unproven is marked `[PLACEHOLDER]`
- **No real payments,** and no storing sensitive personal data in prototypes
- **A prototype is never presented as finished, proven, safe or certified**
- **Legal, safety, health and regulatory questions** become questions for a qualified professional

**Speaker notes:**
These rules protect you as much as your testers. If a concept sheet claims results you don't have,
a "yes" from a tester tells you nothing. Placeholders are a to-do list: each one is something to go
find out. When a question touches contracts, labeling, health claims or certification, the agent
will flag it as something to check with a professional rather than give you an answer.

---

## 12. A worked example: Activated Planning

**A test run of the whole workflow, from idea to a concept sheet, in one session.**

- **Idea:** strategic planning for small nonprofits (5 or fewer staff), from Consilient Consulting
- **Value prop:** helps EDs where everyone wears six hats make time for planning, with clarity and accountability
- **Top job:** "When our team has agreed a plan, I want everyone to know what they own, so I can focus on fundraising and long-term strategy"
- **Prototype:** a one-page concept sheet plus a sample outline, shown to 5 founder-EDs
- **Pass line:** at least 2 of 5 hold a date for a pilot session

**Speaker notes:**
This was a test run to check the workflow end to end, so treat it as an illustration, not a case
study. Setup and the interview built the profile. The value prop went through a few rewrites before
it was locked. The persona was a founder-ED of a four-person youth mentoring nonprofit. Three jobs
were written; one was cut in ranking because it was a lower priority and a weaker fit. The PRD set
three must-haves (a one-hour ED call, a three-hour team session and a one-page outline) and pushed
a 30-day check-in to later. The product type was a service, but the founder chose a marketing-style
concept sheet as the cheapest first test. The kit came with a two-week schedule, a 13-question
conversation script and a results table. Evidence was thin throughout (founder instinct plus two or
three past workplaces), and every output said so.

---

## 13. Common sticking points

**Where the test run slowed down, and what to do instead.**

- **Setup script blocked:** let the agent create the links by hand, or run the script yourself, then restart
- **Copying the example answer:** fine if it truly matches a real person; say so when asked
- **Persona and top job don't match:** expect to realign the persona when the jobs are ranked
- **Thin evidence:** run customer conversations first, or accept that outputs will be flagged
- **No pilot terms:** decide price, timing and capacity *before* your first test conversation

**Speaker notes:**
The persona in the test run was built around one moment (deciding whether a grant was a fit), but
the job that ranked first was about keeping a plan on track. The PRD step caught it and the persona
was updated. That's normal; earlier pieces are drafts. The pilot-terms gap is the easiest to miss:
if a tester says "yes, let's do it," you need to answer "is it free?" and "when?" on the spot, or
the yes fades.

---

## 14. Quick reference

**What to say, and where to look.**

| I want to… | Say or open |
|---|---|
| Start from scratch | "Get me started" |
| Load my existing notes and files | Drop them in `5_Library/sources/raw/`, then "Ingest my data" |
| Get ready to talk to customers | "Prepare for customer interviews" |
| Run the next step | "Write my value prop" → "Build my user persona" → "Start the JTBD exercise" → "Prioritize my jobs" → "Write my PRD" → "Set up my prototype" → "Set my metrics" |
| See what my company context says | `0_Company/` |
| Fill in a stage template | `1_Sprint/<stage>/` |
| Find my prototype and test plan | `4_Prototypes/<name>/prototype-v1.md` |
| See what a prototype looks like for my product type | `5_Library/prototyping/lanes/` |
| Work without AI | Blank templates in `5_Library/templates/` |

**Speaker notes:**
If you lose your place, ask the agent "where am I in the pipeline?" It can read what exists in
`2_Outputs/` and `0_Company/` and tell you the next step. Every stage folder in `1_Sprint/` has a
README with its purpose, inputs, what you do by hand and when it's done.

---

## 15. After your first prototype

**Testing is the start of the next round, not the finish line.**

- **A.6 Retro:** write one thing that broke and one thing it taught you
- **B Advisor review:** 30 minutes with someone who knows your weakest area; leave with next actions
- **C.1 Peer review:** get one high-signal note on your riskiest assumption
- **C.2 Metrics:** set one objective and 2–4 results you could check next week
- **C.3 PRD v2 and second prototype:** change the one thing feedback pointed to, then test again
- **D.1 Demo:** present jobs → prototype → metrics to someone who can say yes, no or "next"

**Speaker notes:**
Fill in your prototype's results table before moving on; it feeds every later stage. Pick the
single highest-signal change for round 2 rather than fixing everything, so the next test still
tells you something clear. The demo is about nine minutes: the job, what the prototype showed about
your riskiest assumption, and the metrics that will tell you whether the bet is paying off. Close
with the one thing you're asking for.
