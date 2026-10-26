# Per-Job Loop

Load this at the start of each job. Three steps in order. Do not move to the next step
until the current one is fully resolved.

---

## Step 1 — Complete and validate the statement

**Goal:** A clean, solution-agnostic job statement the founder wrote themselves.

**Format:**
> "When [specific situation], I want to [motivation or underlying goal],
> so I can [outcome — the progress made]."

If starting from a pre-populated stub:
Say: "Good choice — here's your job so far:" then show the stub. Ask the founder to
complete the "so I can" first, then review the full statement together.

If starting from scratch (no stubs available, or "Other" selected):
Ask: "Describe the situation — what is the customer doing when this job comes up?"
Then build When → I want to → so I can one piece at a time.

**What to do with their answer:**

| Answer type | Response |
|---|---|
| Clean statement — no product, specific situation, real outcome | Accept — move to Step 2 |
| Solution smuggled in ("I want to use [app / the bottle / a subscription box] to…") | "Your product is in there — remove it. What does the customer want to accomplish regardless of how?" |
| Vague trigger ("when I need to be organized", "when I want to eat better") | "That's a condition, not a moment. What is the customer actually doing when this comes up?" |
| Vague outcome ("so I can be more productive", "so I can feel good") | "More specific — what does progress look like for them? What changes when this job is done?" |
| Outcome describes the founder's goal ("so I can reduce churn", "so I can sell more units") | "That's your goal, not theirs. What does the customer get out of it?" |
| Duplicate of a previous job | "This is close to Job [N]. What's different — the situation, the customer, or the outcome? If it's the same underlying goal, we don't need it twice." |

**Validation — run all three before accepting:**

| Criterion | Pass | Fail → one probe |
|---|---|---|
| **No product reference** | Zero mentions of product, app, platform, feature, or technology | "Your product is still in there. What does the customer want to accomplish without it?" |
| **Specific situation** | A concrete moment, task, or decision point — not a general state | "Still a general condition. Give me the specific moment this comes up." |
| **Real outcome** | Progress the customer would recognise — not abstract, not the founder's metric | "What does done look like for the customer specifically?" |

Do not move to Step 2 until all three pass. Ask one probe at a time. Wait for the
answer. Move to the next failed criterion. One pass only — not a rewrite loop.

**Worked examples — broken vs. clean:**

| Wrong | What's broken | Corrected |
|---|---|---|
| "When I'm on the app, I want to see a spending dashboard so I can track my expenses." | "on the app" and "spending dashboard" describe the solution | "When I finish a week of spending, I want to understand where my money went, so I can feel in control instead of anxious about what's coming." |
| "When I need to be organized, I want a tool that helps me manage my work, so I can be more productive." | vague trigger, product reference, vague outcome | "When I start a new project with more than two collaborators, I want one place where all work and decisions live, so I can stop losing context and focus on building instead of searching." |
| "When users sign up, I want them to create their first item, so I can reduce churn." | subject is the founder's goal, not the customer's | "When I join a new platform, I want to see something valuable before my day gets busy, so I can justify spending time learning something new." |
| "When I'm at the gym, I want a smart bottle that tracks my water, so I can hit my hydration goal." | "smart bottle" is the solution; "tracks" is a feature | "When I'm mid-workout and thirsty, I want to drink without breaking my rhythm or guessing how much I've had, so I can finish strong and not feel off the rest of the day." |
| "When shoppers see our new granola bar, I want them to buy it, so I can get into more stores." | subject is the founder; outcome is the founder's goal | "When I'm packing school lunches at 7am, I want a snack I know my kid will eat and I won't worry about, so I can hand it over and be done with one decision." |
| "When a plant manager needs a valve, I want our sensor-equipped valve, so I can win the account." | product in the statement; founder's goal | "When a line goes down at 2am, I want to know within minutes which part failed and have a replacement on hand, so I can restart production before the shift loses a day." |

---

## Step 2 — Three-layer tag

**Goal:** Name the primary dimension of this job.

Say: "Note: most jobs have all three dimensions present. This tag names which one drives
the job most."

Then use **AskUserQuestion** to present three options:

Question text: "Which dimension is primary for this job?"  
Header: "Layer tag"  
Options:
- Label: "Functional" | Description: "A practical task to accomplish"
- Label: "Emotional" | Description: "How the customer wants to feel"
- Label: "Social" | Description: "How they want to be seen"

**What to do with their answer:**

| Answer type | Response |
|---|---|
| One of the three selected | Accept — move to Step 3 |
| "All three" or "I'm not sure" (via Other) | "If the customer could only get one — the task done, the feeling resolved, or how they look to others — which would they choose? That's the primary." Then re-ask with AskUserQuestion. |

**Layer reference:**
- **Functional** — the practical task to accomplish (e.g. "Stay full until lunch")
- **Emotional** — how the customer wants to feel once this is handled (e.g. "Feel calm about money")
- **Social** — how they want to be seen by a boss, client, or peer (e.g. "Look credible to a client")

Most products are hired for functional reasons and fired for emotional ones. The social
layer shows up in B2B, gifting, fashion, and team jobs (look credible, fit in, be seen as
thoughtful) — do not dismiss it.

---

## Step 3 — AI-role tag (only if AI is part of the product)

**Goal:** An explicit, per-job call on where AI fits in the solution for this job — but only
when the product has an AI component.

**Rule.** Ask this question only when AI is part of the product — company ground truth
`02_Product` "Product type" includes software/AI features, or the founder says AI is part of the
solution. Otherwise **do not ask**: record the tag as `Irrelevant` with the rationale
"No AI component in this product", and move on. (The one-time notice — "Your product doesn't use
AI, so I'm marking AI role as Irrelevant for every job — tell me if that's wrong." — is given once
at the start of the job loop, per SKILL.md, not repeated here.)

**When AI is part of the product, it is mandatory for every job and cannot be skipped or
deferred.**

Say: "Last question for this job: where does AI fit in the solution?"

Then use **AskUserQuestion** to present four options:

Question text: "Where does AI fit in solving this job?"  
Header: "AI role"  
Options:
- Label: "Feature" | Description: "AI enhances a primarily non-AI product"
- Label: "Product core" | Description: "AI is the primary mechanism that makes solving this job possible"
- Label: "Not yet" | Description: "AI could play a role but it's unclear or too early to call"
- Label: "Irrelevant" | Description: "This job does not involve AI in any meaningful way"

After they select a tag, ask in plain text: "One sentence on why — what's the reasoning
behind that call?"

**What to do with their rationale:**

| Answer type | Response |
|---|---|
| One line of rationale | Accept — report the locked job in SKILL.md "Between jobs" section |
| "I don't know" | "Mark it 'not yet' and tell me what would need to be true for AI to play a role." Then re-ask with AskUserQuestion. |
| Blanket answer that applies to all jobs | "That's a product-level answer. For this specific job — [restate job] — where does AI fit in how you'd solve it?" Then re-ask with AskUserQuestion. |

---

## Guardrail interventions (per-job)

**If the founder is stuck writing the "so I can":**
> "What changes for the customer when this job is done? What can they do, feel, or show
> that they could not before?"

**If AI is part of the product and the founder wants to skip the AI-role question:**
> "This one cannot be skipped when AI is part of your product — it is a per-job call that feeds
> into your product decisions later. It does not affect prioritization, but it matters for how
> you build. Thirty seconds: feature, product core, not yet, or irrelevant?"

**If AI is not part of the product:** do not ask or push the question. Record `Irrelevant —
No AI component in this product`.

**If the founder is running long before reaching 3 jobs:**
> "We need at least 3 for prioritization to be meaningful. How quickly can you describe
> the next customer situation?"
