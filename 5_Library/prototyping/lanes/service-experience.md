---
title: "Lane — Service & Experience"
lane: service-experience
summary: "Prototype a service, program, marketplace, workflow, event or B2B pilot by running it manually first (concierge / Wizard-of-Oz) before you build anything."
---

# Lane: Service & Experience

**Use this lane when** what you offer is something you *do* or *run*: a service business, subscription service, coaching or training program, a two-sided marketplace, an event, a B2B workflow or pilot, an onboarding experience. If the thing you eventually build is software, this lane is how you learn what to build; take the learning to `software-app` afterward.

## What you are prototyping

The service delivered by hand. You play the product: the customer experiences the outcome while you do the work behind the curtain. That shows you what customers actually need, how long it takes, what it costs you, and what to automate first.

For a marketplace, **prototype one side first** — usually whichever side is the bottleneck — and fake or hand-match the other.

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Blueprint + script | The customer journey, front-stage vs back-stage steps, intake form, call/email scripts | `claude-artifacts`, `figma`, `canva` | **Service blueprint** — walk a target customer through it on paper |
| 02 | Concierge run | Deliver the service by hand to 1–3 real customers | `tally`, a shared doc or spreadsheet, your normal email/calendar | **First delivery** — you know the real steps, time and pain points |
| 03 | Repeat pilot | Run it for 5–10 customers over several cycles; log time, cost, outcomes, repeat | `tally`, spreadsheet, `canva` | **Pilot evidence** — completion, repeat, willingness to pay, cost to serve |
| 04 | Productize | Decide what to automate first, what to keep human, the pricing and the ops playbook | `claude-code`, `lovable`, `bolt` | **Build brief** — a PRD for the automation, grounded in what you learned |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `SERVICE_BLUEPRINT.MD` | `DESIGN.MD` (how materials look and sound), `COPY.MD` (scripts, confirmation messages) | `UI.MD` (if there is a customer-facing page or form) |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| Blueprint walk-through | Talk a target customer through the steps | 5 | They confirm the steps and name the one that matters most |
| Concierge delivery | Deliver by hand, observe | 1–3 | The outcome is delivered; you can list every manual step |
| Repeat usage | Offer a second round without prompting | 5–10 | At least a set share ask for another |
| Willingness to pay | Ask what they would pay, then their reaction to your price | 10 | Your price is accepted by a share you set in advance |
| Cost to serve | Log your hours and costs per customer | every run | Your time per delivery supports the margin you need |
| Marketplace side test | Hand-match one side to a few of the other | 5–10 matches | Matches complete and both sides would repeat |

Example hypotheses:
- "This concierge run tests whether small clinics will hand us their appointment reminders if we text patients manually. A pass = 3 of 3 clinics keep sending us lists for 4 weeks."
- "This pilot tests whether freelancers pay for a weekly done-for-you invoice chase. A pass = 6 of 10 say yes to the price and 4 of 10 renew after the first month."

## What the agent can build for you directly

The blueprint, scripts and messages, an intake form design (the form itself built in `tally`), a spreadsheet structure for logging runs, a pricing and cost-to-serve model, a customer FAQ, and a pilot summary report. When a human-run step repeats often, it can sketch the first automation.

## What needs another tool or a human

You. The point of this lane is that a person does the work. Forms, scheduling, payment collection for a real service, and any licensed activity need their own tools and professional advice.

## Guardrails

- **Be honest about what is manual.** You may keep the machinery out of view, but do not claim automation, AI or credentials you do not have, and do not misrepresent who is doing the work. If it matters to the customer's decision, say it is an early, human-run service.
- **Regulated services** (health, legal, financial, tax, childcare, education with credentials, anything licensed) have rules about who may deliver them and what may be said. Do not deliver or imply such a service unless you are qualified and permitted; verify with a professional first.
- **No real payments in the *build*.** If you decide to charge for a manual pilot, that is a business decision handled through your normal business channels and professional advice — outside this prototype kit. Start with stated willingness to pay.
- **Data:** collect the minimum, keep it in a place you control, tell customers what you keep, and delete it when the pilot ends. No sensitive personal data without a proper process.
- Be clear with pilot customers that it is a trial and what happens if it does not work out.

## Starter build prompts

1. "Read PRD.MD. Draft SERVICE_BLUEPRINT.MD for [service]: every step, what the customer sees, what I do behind the scenes, time per step, and where it will break at 10x volume."
2. "Write the intake questions, the first-contact script, and the confirmation and follow-up messages for the concierge run."
3. "Design a spreadsheet to log each delivery: customer, date, time spent by step, cost, outcome, would-they-repeat, notes."
4. "From my logged pilot data below, tell me which step costs the most time and which is the best first automation. List what would have to be true for that to be right."

## Common traps

- Automating before you have delivered it by hand twice.
- Pilot customers who are friends being polite — ask for a commitment (time, a referral, a price), not praise.
- Not logging time, so you cannot say what it costs to serve.
- Prototyping both sides of a marketplace at once.
