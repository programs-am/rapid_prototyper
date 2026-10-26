---
title: "Lane — Marketing & Comms"
lane: marketing-comms
summary: "Prototype a campaign, brand message, pitch deck, email sequence, social content or sales collateral and test it on a small, real audience."
---

# Lane: Marketing & Comms

**Use this lane when** what you are testing is *how you communicate*: a brand message, a launch campaign, an outbound email sequence, a pitch or sales deck, social content, a press or investor update, an ad concept, a video script, a one-pager. The product may already exist, or you may be pre-product and testing positioning. For a site or landing page as the main asset, also use `website`.

## What you are prototyping

One message to one audience on one channel, and the response you expect. A campaign prototype is small on purpose: you want a clean read on whether the message lands, not reach.

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Brief + message | Audience, one-line message, offer, 3 proof points, objections, tone | `claude-artifacts` | **Message map** — read it aloud to 5 people from the audience |
| 02 | Creative assets | Draft emails, post designs, ad mockups, a short deck or one-pager, a video script/storyboard | `canva`, `gamma`, `ai-image-generation`, `claude-artifacts`, `figma` | **Mock campaign** — show it, run a recall or preference test |
| 03 | Live micro-test | Send/post/advertise to a small real audience with two variants and one measure | `tally`, `carrd`, `framer`, your email/social accounts | **Evidence** — replies, clicks, sign-ups per variant |
| 04 | Scale plan | Calendar, channel plan, budget, templates, measurement dashboard | `claude-artifacts`, `gamma` | **Playbook** — hand to a marketer or run it yourself |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `CAMPAIGN.MD` | `COPY.MD`, `DESIGN.MD` | `UI.MD` (landing page layout) |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| Message recall | Show the message for 5–10 seconds, then ask them to restate it | 10 | 7 of 10 restate the core promise |
| A/B messaging | Two subject lines or two headlines to similar audiences | 50+ per variant for outreach; more for ads | A difference larger than noise, with a pre-set threshold |
| Outbound reply test | A short sequence to a hand-picked list | 30–50 | Reply rate you set in advance and at least a few positive replies |
| Deck walk-through | Present to a person who could say yes | 3–5 | They can repeat the ask and the proof; they raise your known objection |
| Landing + small spend | A page plus a small, capped ad test | 100+ clicks | Sign-up rate above threshold at a cost per sign-up you could live with |

Example hypotheses:
- "This email sequence tests whether HR managers at 50–200 person firms respond to a pain-led subject line over a benefit-led one. A pass = pain-led gets at least 2x the reply rate across 40 sends each."
- "This one-page pitch tests whether a university tech-transfer officer can explain our value in one sentence after reading for 30 seconds. A pass = 4 of 5 can."

## What the agent can build for you directly

Almost this whole lane is words and layouts, so Claude Code can draft: the campaign brief, messaging hierarchy, email sequences, social posts, a script and storyboard, ad variants, a one-pager and a deck outline (or HTML slides), an A/B test plan with a results sheet, and a simple HTML landing page. It also writes the measurement plan.

## What needs another tool or a human

Visual polish (a design tool), sending and tracking (an email or social tool, with consent and unsubscribe handled), ad accounts, paid media buying, a final legal/brand review, and a person to hit send.

## Guardrails

- **Truthful claims only.** Every statistic, comparison and benefit needs proof or comes out. Mark unproven items `[PLACEHOLDER]`. No fabricated testimonials, logos, reviews, awards or user counts.
- **Endorsements and sponsored content** must be disclosed under the rules where you advertise — verify the specifics.
- **Email and messaging consent and opt-out rules** (for example anti-spam and privacy laws) vary by country; verify before you send to anyone you do not already have permission to contact. Use a reputable tool that handles unsubscribe.
- **Ad-platform policies** restrict claims in health, finance, employment and other categories — read them before you spend.
- **Copyright and trademark:** only licensed images, fonts, music; no use of other brands' marks or likenesses.
- **AI-generated content:** review everything before it goes out; disclose where required or where people would reasonably expect it.
- No real payments and no sensitive personal data in the prototype; keep contact lists minimal and deletable.

## Starter build prompts

1. "Read PRD.MD and CAMPAIGN.MD. Write a messaging hierarchy: one-liner, headline, 3 proof points (each with its evidence or marked [PLACEHOLDER]), top 3 objections with answers."
2. "Write a 4-email outbound sequence for [audience]. Variant A leads with the pain, variant B with the outcome. 90 words max each. No invented facts."
3. "Draft a 10-slide pitch deck outline: for each slide, the one sentence a listener should remember and the evidence on it."
4. "Create an A/B test plan: what varies, the audience, sample size, the single success metric, and the rule I will use to call a winner before I look at results."

## Common traps

- Changing five things at once so you cannot tell what worked.
- Testing on people who already like you.
- Measuring vanity numbers (impressions, likes) instead of the action you need.
- Declaring a winner after a handful of sends.
