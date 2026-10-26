# COPY.MD — Words, Messaging & Claims

Defines what your prototype says and how it says it: the one-liner, headline, proof points, objections, voice, and every piece of text that appears on a page, pack, ad, email or script. Good copy is the cheapest part of a prototype to test: a strong message with no product behind it still tells you whether anyone cares.

**Status:** Required for the website lane. Recommended for marketing-comms and service-experience. Optional for physical-product, cpg and fashion (for those, front-of-pack or label text can live in PACKAGING.MD and claims in SPEC_SHEET.MD). Skip it for lanes where words are a minor part of the prototype.

**Use it when:** You are building a page, pack, deck, ad, email, script or any artifact that has words a stranger must understand in seconds. Fill it in after PRD.MD, and keep it consistent with DESIGN.MD (voice) and PACKAGING.MD or CAMPAIGN.MD if you have them.

<!-- guidance: Write copy that you can back up. Every claim in this doc needs evidence or must be deleted. Never invent testimonials, statistics, awards, certifications, press mentions or endorsements. If you want to see what a testimonial or number slot looks like on the page, use a visible placeholder such as [PLACEHOLDER: customer quote] so no one mistakes it for real. -->

**Prototype guardrails:** A prototype stores no permanently-stored sensitive personal data and takes no real payments. (A consented email waitlist through a reputable form tool is the one allowed exception.) Copy must never present a mockup or sample as a finished, safety-tested or compliant product, and no placeholder may be shown to testers as a real quote, number, award or endorsement.

---

## Messaging hierarchy

<!-- guidance: Work top to bottom. Each level should be a stronger compression of the one below it. If you cannot write the one-liner, the product is not clear yet; go back to PRD.MD. Write for your target user's words, not yours. -->

| Level | Your copy | Notes |
|---|---|---|
| One-liner (what it is and for whom, in under 15 words) | _____ | <!-- e.g. "[Product] helps [user] [do the thing] without [pain]." --> |
| Headline (the main promise your audience sees first) | _____ | |
| Subhead (how it delivers, one sentence) | _____ | |
| Proof point 1 | _____ | Evidence: _____ |
| Proof point 2 | _____ | Evidence: _____ |
| Proof point 3 | _____ | Evidence: _____ |
| Call to action / next step (one verb-led action) | _____ | <!-- guidance: e.g. "Join the waitlist", "See how it works", "Book a call". One primary action only. --> |

---

## Objections & answers

<!-- guidance: Ask what would make your target user say no, hesitate or not believe you. Answer each in one or two honest sentences. If the honest answer is "we do not know yet", say that; it is useful to know before you test. -->

| Objection (in the user's own words) | Honest answer | Evidence or "not yet known" |
|---|---|---|
| _____ | _____ | _____ |
| _____ | _____ | _____ |
| _____ | _____ | _____ |
| _____ | _____ | _____ |

---

## Voice & tone

<!-- guidance: Keep this consistent with the short "Voice & tone" section in DESIGN.MD. Give do and don't examples written about your own product, not generic adjectives. -->

**Voice in three adjectives:** _____

**Tone shifts (more serious in error messages? more playful in social?):** _____

| Do | Don't |
|---|---|
| <!-- e.g. "Ready in five minutes." --> | <!-- e.g. "A revolutionary, game-changing solution." --> |
| _____ | _____ |
| _____ | _____ |

**Words we use:** _____

**Words we avoid:** _____

---

## Copy deck

<!-- guidance: Every piece of text in the prototype, in one place. "Where it appears" can be a page section, a pack panel, an email, an ad, a script line. Character limits keep the text from breaking layouts, ad specs or label panels; ask your channel, printer or tool for the real limit. Mark anything unverified as [PLACEHOLDER]. -->

| Where it appears | Copy | Character limit | Status (draft / reviewed / [PLACEHOLDER]) |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

---

## Claims & proof

<!-- guidance: List every factual or promised statement in your copy: numbers, comparisons ("faster", "best", "first"), health or performance promises, "natural", "sustainable", "tested", "certified", and anything about results. Each needs real evidence you hold, or it is deleted. Health, performance, environmental, financial and comparative claims are regulated or restricted in many markets and by many ad platforms; verify with a qualified professional before real use. -->

| Claim as written | Where it appears | Evidence I hold (source, date) | Action (keep / reword / delete / verify with professional) |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

**Social proof slots:** If you do not yet have real testimonials, numbers or logos, leave a visible placeholder in the layout, for example [PLACEHOLDER: customer quote], [PLACEHOLDER: number of testers], [PLACEHOLDER: press mention]. Remove or replace every placeholder before any public or real-sale use. Do not write a quote and attribute it to a real or imagined person.

---

## Reading-level check

<!-- guidance: Plain language wins. Most general audiences read comfortably at about an 8th-grade level. Paste your headline, subhead and one body paragraph into a readability tool or a chat AI and note the result. -->

| Piece of copy | Reading level or score | Too long? | Fix |
|---|---|---|---|
| Headline and subhead | _____ | _____ | _____ |
| Main body paragraph | _____ | _____ | _____ |
| Call to action | _____ | _____ | _____ |

**Jargon check:** Is there any word a stranger would not know? List and replace: _____

---

## Ask the LLM

Paste these into Claude, ChatGPT, or Gemini one at a time. Share your PRD.MD and (if you have it) DESIGN.MD first so the AI has context.

1. "I shared my PRD. Write five versions of a one-liner for my product in under 15 words each, in plain language my target user would use. For each, say what it emphasizes. Do not invent features, numbers or customers."

2. "Using my favorite one-liner, build a messaging hierarchy: headline, subhead, three proof points and a call to action. For each proof point, tell me what evidence I would need to hold before I could print it. If I have no evidence, mark it [PLACEHOLDER] instead of making something up."

3. "List the ten most likely objections my target user would raise. Draft an honest one- or two-sentence answer to each. Where the honest answer is 'we do not know yet', say so and suggest a cheap way to find out."

4. "Define my voice in three adjectives and give me five do and don't pairs written about my product. Then rewrite this paragraph [paste] in that voice, keeping the facts exactly the same."

5. "Build a copy deck table for [website pages / pack panels / email sequence / ad set] with columns: where it appears, copy, character limit, status. Use realistic limits for [channel] and tell me to verify them in the channel's own specs."

6. "Go through my copy line by line and list every claim: numbers, comparisons, health or performance promises, 'natural', 'sustainable', 'tested', 'certified'. For each, tell me what evidence I would need and whether it is the kind of claim that is commonly regulated or restricted by ad platforms, so I can verify with a qualified professional. Suggest safer wording."

7. "Check the reading level of my headline, subhead and body paragraph. Rewrite them at about an 8th-grade level without losing meaning, and replace any jargon with plain words."

8. "Audit my copy for anything invented: testimonials, statistics, awards, endorsements, 'as seen in'. Tell me where each appears, and replace it with a visible [PLACEHOLDER] or delete it."

---

## Done when

- [ ] The one-liner passes the stranger test: someone outside your field can say back what it is and who it is for.
- [ ] The messaging hierarchy is complete, with a single primary call to action.
- [ ] Every proof point and claim has evidence you hold, or it is marked for deletion or professional review.
- [ ] No invented testimonials, statistics, awards or endorsements; every placeholder is visibly marked [PLACEHOLDER].
- [ ] Objections have honest answers, including "not yet known" where true.
- [ ] Voice is defined with real do and don't examples and matches DESIGN.MD.
- [ ] The copy deck covers every piece of text in the prototype, with character limits checked against the real channel or print spec.
- [ ] Headline, subhead and body copy have been reading-level checked and jargon removed.
