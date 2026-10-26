# PRD.MD — Product Requirements Document

The single source of truth for what you are making and why. Every tool, every prototype lane, every designer, maker or vendor, and every AI you work with during prototyping reads from this doc first. If it is not here, they will invent it — and you will not like what they invent.

**Status:** Required

**Use it when:** Every lane — software-app, website, physical-product, cpg, fashion, marketing-comms, service-experience. The same PRD feeds all of them; the lane-specific documents (TECH_STACK, BUILD_PLAN, SPEC_SHEET, PACKAGING, COPY, CAMPAIGN, SERVICE_BLUEPRINT, UI, DESIGN, DATA, API) are built from it by the `prototype-kit` skill.

**Note on prior work:** If you already ran the PRD exercise (stage A.5-PRD-v1), you drafted a version of this doc. Start there. The skill at `.agents/skills/founder-os/8-draft-prd/SKILL.md` walks you through the draft step by step. This template is the prototyping-ready version — tighter, with a Prototype section the earlier draft does not have.

**Stage:** This is a prototype: fast, structured and testable — not production. Build accordingly: you are making the cheapest thing that can answer your hypothesis, not the finished product.

---

## 1. Company & Value Proposition

<!-- guidance: Keep this section to three fields. The value proposition is one sentence in this format: "[Product] lets [user] [do the thing] without [the friction they hate]." Do not expand it here. -->

| | |
|---|---|
| Company name | <!-- Your venture's name exactly as you use it day-to-day --> |
| One-line product | <!-- What the product does, in plain language. Not a tagline. Example structure: "[Product] lets [user] [do the thing] without [the friction they hate]." --> |
| The change it creates | <!-- What is different in the user's life or work after they use it? One sentence. This is not a feature — it is the outcome. --> |

---

## 2. Target User

<!-- guidance: Describe one real person, not a demographic bucket. If you have done discovery calls, base this on the person who had the most acute version of the pain. Do not describe two user types here — pick the primary one. -->

| | |
|---|---|
| Who they are | <!-- One-line identity: role, context, defining characteristic. Example structure: "A [role] who [defining situation]." --> |
| Their context | <!-- What are they doing, or trying to do, when this problem shows up? Be specific about the moment, not the category. --> |
| The pain | <!-- What goes wrong, costs them, or frustrates them right now? State it plainly. If you heard a user say it in their own words during discovery, use that quote here. --> |

---

## 3. Job To Be Done

<!-- guidance: A "job to be done" is the thing the user is trying to accomplish — independent of any product. The format is: When [situation], I want to [goal], so I can [outcome]. Fill in one job only — the top-priority one your prototype will address. If you have a ranked JTBD list from A.4, copy the #1 job here. -->

**The single top job:**

> When _____________________________, I want to _____________________________, so I can _____________________________.

**The trigger:**

<!-- guidance: What specific event or moment causes the user to feel the job urgently? This is the moment your prototype must catch them. One sentence. -->

_______________________________________________

**Their current workaround:**

<!-- guidance: What do they do today instead of using your product? Name the tool, the behavior, or the manual step. This is what you are replacing. -->

_______________________________________________

---

## 4. Features

<!-- guidance: A feature is anything the customer experiences: a capability (software), an attribute or spec ("keeps drinks cold 12 hours", "5 g sugar", "fits true to size"), or an asset or experience (a campaign message, a service step). List every feature you are considering. Then ruthlessly mark priorities. A prototype only needs the Must-have features — everything else is Future. "Why it serves the job" forces you to connect each feature back to Section 3. If you cannot complete that column, the feature probably does not belong in the prototype. -->

| Feature | Why it serves the job | Priority |
|---|---|---|
| <!-- Name the capability in plain language --> | <!-- One sentence connecting it to the job in Section 3 --> | Must have |
| | | Must have |
| | | Nice to have |
| | | Nice to have |
| | | Future |
| | | Future |

### Not in scope

<!-- guidance: List what this prototype explicitly will NOT do. This is as important as the feature list. State it plainly so the AI builder does not add it. Common examples: user accounts and login, payment processing, email notifications, admin dashboards, third-party integrations — or, for physical goods, production tooling, certification, final materials, retail packaging, and more than one variant. -->

- _______________________________________________
- _______________________________________________
- _______________________________________________

**Prototype guardrails — state these to your builder (AI tool, maker, designer or vendor) at the start of every session:**
- This prototype stores no permanently-stored sensitive personal data.
- This prototype takes no real payments (a consented email waitlist through a reputable form tool is the one allowed collection).
- This prototype is never presented as a finished, safe, certified or compliant product.

---

## 5. The Prototype

<!-- guidance: A prototype tests one hypothesis with the minimum set of features. Do not build everything in Section 4 — build the ONE flow that answers your riskiest question. Fill in each field below before you open any build tool. -->

**What you will make (the prototype form):**

<!-- guidance: Pick one: app or clickable screens / web page / physical model or rig / pack and hand-made samples / campaign or deck / service you run by hand. Name a second form only if the first cannot answer the hypothesis alone. -->

_______________________________________________

**The one flow to build first** (the steps your tester goes through, from first meeting it to the outcome — for non-digital products, how they encounter it, handle it and decide):

<!-- guidance: Describe the single user journey from start to finish. What does the user do, in what order, to accomplish the top job? Write it as steps. Three to five steps is usually right. -->

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________

**The hypothesis:**

<!-- guidance: Complete this sentence exactly. Do not paraphrase the structure — the structure is doing work. "Observable result" means something you can see or measure after a user tries the flow: they completed it, they said a specific thing, they asked to use it again. -->

> This prototype tests whether [user] can [do the job] using [feature]. A pass = [observable result].
>
> (For something people react to rather than operate: "This prototype tests whether [customer] will [behavior] when shown / given [prototype]. A pass = [observable result].")

**The test:**

<!-- guidance: Who exactly, how many, and how. Examples: 5 home bakers watched using the clickable flow; 15 shoppers shown the pack for 3 seconds among 5 competitors; 10 runners wearing the model on a 1 km run; 40 people sent the email, half each version. -->

| | |
|---|---|
| Who | |
| How many | |
| Method | |

**The riskiest assumption:**

<!-- guidance: What is the one thing that, if it turns out to be wrong, kills the idea? Name it plainly. This is what you are actually testing — everything else is secondary. One sentence. -->

_______________________________________________

---

## Ask the LLM

Paste these into Claude, ChatGPT, or Gemini one at a time. Answer its follow-up questions before moving to the next prompt. Each prompt fills a specific section of this doc.

1. "I am a founder filling in a PRD so I can prototype my product quickly (it may be software, a physical product, a food or beauty product, clothing, a marketing campaign or a service). My product is [describe it in 2-3 sentences]. Help me write the one-line product description for my PRD using this format: '[Product] lets [user] [do the thing] without [the friction they hate].' Ask me any questions you need before you write it."

2. "Here is my target user: [paste your Section 2 draft or describe them]. Write a one-sentence 'job to be done' for this user in this format: When [situation], I want to [goal], so I can [outcome]. Then tell me what their most likely current workaround is. Ask me questions if you are not sure."

3. "Here is my top job to be done: [paste from Section 3]. List 5 features a prototype could include to help the user accomplish this job. For each one, write one sentence explaining why it directly serves the job. Then mark each one Must have, Nice to have, or Future — where Must have means the prototype is useless without it."

4. "Based on the features I marked Must have: [list them]. What should this prototype explicitly NOT do? Give me a short 'not in scope' list I can paste into my PRD to prevent the AI builder from adding features I do not need."

5. "Here is my full top job and the must-have features: [paste]. Write the single user flow — 3 to 5 steps, from the moment the customer first meets it (opens it, picks it up, sees it on a shelf, gets the email, takes the first call) to the moment the job is done. Then complete this hypothesis sentence for me: 'This prototype tests whether [user] can [do the job] using [feature]. A pass = [observable result].'"

6. "Here is my PRD so far: [paste the whole doc]. What is the single riskiest assumption buried in this PRD — the one thing that, if wrong, means the product does not work? Give me one sentence."

7. "Read my PRD and tell me: is there anything in the 'Not in scope' list that I probably forgot? What are the three most common things founders accidentally ask builders to include, that they later wish they had excluded from the prototype?"

8. "I have these Must-have features: [list them]. I only have [time or budget — e.g. a day, or $200] to make a prototype. Which single feature or interaction gives me the most evidence about whether this product idea works? Tell me what one flow to build and why everything else can wait."

---

## Done when

- [ ] Sections 1-3 are filled in — every blank has a real answer, not a placeholder.
- [ ] The Feature table has at least two Must-have features and a Not-in-scope list with at least three items.
- [ ] The Prototype section has a prototype form, a numbered flow, a completed hypothesis sentence, a named test (who, how many, how), and a riskiest assumption.
- [ ] The prototype guardrails (no sensitive personal data, no real payments, never presented as finished or compliant) are acknowledged.
- [ ] You can read the hypothesis sentence aloud and a person who has never heard of your product understands exactly what you are testing.
