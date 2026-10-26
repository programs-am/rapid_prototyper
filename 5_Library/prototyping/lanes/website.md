---
title: "Lane — Website"
lane: website
summary: "Prototype a landing page, fake-door test, brochure site or storefront look — from wireframe and copy to a live test page."
---

# Lane: Website

**Use this lane when** the thing you are testing is a web page or site: a landing page for a product that does not exist yet, a brochure site, a campaign microsite, a portfolio, a store front, or a redesign of an existing site. If the site is the *front door* to a real tool, prototype the tool in `software-app`. If the site is mainly a vehicle for a campaign, also see `marketing-comms`.

## What you are prototyping

One page (or a short flow of pages) that answers a single question: *does the right visitor understand this and take the next step?* The next step is usually a sign-up, a reply, a click to "learn more", or a stated pre-order intent. It is never a real payment.

## Fidelity ladder — where to stop

| Stage | Name | You make | Tools (see `tools/`) | Stop here → you get |
|---|---|---|---|---|
| 01 | Words + wireframe | Headline, copy, section order, a gray-box layout | `claude-artifacts`, `figma` | **Message check** — you can run a 5-second test on a static image |
| 02 | Designed page | A real-looking page, clickable, with your brand look | `framer`, `webflow`, `carrd`, `stitch`, `v0`, `claude-artifacts` | **Clickable demo** — good for interviews and preference tests |
| 03 | Live test page | A public URL with a waitlist/contact form and basic analytics | `carrd`, `framer`, `webflow`, `tally` | **Fake-door test** — measures real interest from real visitors |
| 04 | Production site | Final design, SEO, performance, accessibility, legal pages | `webflow`, `framer`, `claude-code` | **Launch site** — hand to a developer or keep in a site builder |

## Spec docs for this lane

| Required | Recommended | Optional |
|---|---|---|
| `PRD.MD`, `BUILD_PLAN.MD`, `COPY.MD` | `UI.MD` (page map and sections), `DESIGN.MD` | — |

## Tests and example hypotheses

| Test | How | Sample | Pass looks like |
|---|---|---|---|
| 5-second test | Show the page for 5 seconds, then ask what it is, who it is for, what to do next | 10 people in the target group | 7 of 10 answer all three correctly |
| Preference test | Two headlines or two layouts, same audience | 20+ | A clear winner, not a coin flip |
| Fake-door / waitlist | Drive a small, relevant audience to the page | 100+ visitors | Conversion above the threshold you wrote down before you looked |
| Message interview | Walk someone through the page, ask what they would expect behind each button | 5 | Their expectations match what you plan to build |

Example hypotheses:
- "This page tests whether home bakers understand a subscription flour club from the headline alone. A pass = 7 of 10 testers can restate it in their own words after 5 seconds."
- "This page tests whether independent gym owners will leave an email for early access. A pass = at least 8 percent of 150 relevant visitors join the waitlist."

## What the agent can build for you directly

A complete, responsive single-file HTML/CSS page from `COPY.MD`, `UI.MD` and `DESIGN.MD`, written to `4_Prototypes/<slug>/prototype/index.html`, plus alternate headline variants for an A/B test. It can also draft the waitlist confirmation message and an analytics checklist.

## What needs another tool or a human

Publishing (a site builder or host account), a form tool for the waitlist, a domain, a way to bring visitors (outreach, community posts, a small ad spend), and any legal pages.

## Guardrails

- **No real payments.** Use "Join the waitlist" or "Notify me", never a live checkout. If you say "pre-order", make clear no money is taken and the product is not yet available.
- **Collect only what you need** — usually an email address — with a clear consent line and a privacy note, through a reputable form tool. No sensitive data.
- **Do not present a concept as a shipping product.** Say it is early access or coming soon.
- **No invented testimonials, press logos, awards, user counts or statistics.** Mark placeholders `[PLACEHOLDER]` and remove them before anyone outside sees the page.
- Check that your name and logo are not someone else's trademark, that photos and fonts are licensed, and that AI-generated images are not passed off as real photographs of your product.
- Basic accessibility: readable contrast, alt text, keyboard-reachable buttons.

## Starter build prompts

1. "Read PRD.MD, COPY.MD, UI.MD and DESIGN.MD. Build a single responsive HTML landing page. One primary call to action. Waitlist form posts nowhere (static placeholder). Mark any unproven claim [PLACEHOLDER]."
2. "Write three alternative headlines for the hero, each aimed at a different top job from the PRD, so I can A/B test them."
3. "Review this page as a skeptical first-time visitor. What is unclear in 5 seconds? What claim would you not believe?"

## Common traps

- Testing design before testing the message.
- Driving the wrong audience (friends and family) to the page and calling a high conversion proof.
- Adding a fake "Buy now" button that appears to take money.
