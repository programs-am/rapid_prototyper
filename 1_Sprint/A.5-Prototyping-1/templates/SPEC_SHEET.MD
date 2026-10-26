# SPEC_SHEET.MD — Product Specification

A plain-language spec for a physical thing: what it is made of, how big it is, how it should perform, what it should cost to make and what it sells for. One template covers three lanes (physical-product, cpg, fashion) with a clearly marked block for each. Keep the block for your lane and delete the other two. This is the physical equivalent of a data model: it gives a maker, supplier, kitchen, factory or sample-maker something precise to quote and build against.

**Status:** Required for physical-product, cpg and fashion lanes. Not used for software, website, marketing-comms or service-experience lanes.

**Use it when:** You are about to ask anyone to make, source, quote or sample your product, or you want to know whether the numbers can work before you spend money. A rough spec with honest blanks is better than a polished spec with invented numbers.

<!-- guidance: Write "unknown" or "to research" instead of guessing. Blanks are useful: they become your list of questions for suppliers and advisors. Never invent numbers, certifications or test results. -->

**Prototype guardrails:** A prototype stores no permanently-stored sensitive personal data and takes no real payments. Samples and mockups must never be presented to testers as finished, safety-tested, certified or compliant products. Every compliance, safety, labeling and claims item in this doc is a question to verify with a qualified professional for your market, not an answer.

---

## Basics (all lanes)

<!-- guidance: Fill these four rows before the lane block. Keep your answers consistent with PRD.MD. -->

| Item | Your answer |
|---|---|
| Product name (working) | _____ |
| Lane (physical-product / cpg / fashion) | _____ |
| One-line description | _____ |
| Target user and use situation | _____ |
| Market(s) you want to sell in eventually (matters for rules) | _____ |

---

## Block A — Physical product (hardware, devices, consumer goods)

<!-- guidance: Keep this block only if your lane is physical-product. Delete Blocks B and C. -->

### A1. Size, weight and form

| Item | Target | Notes |
|---|---|---|
| Dimensions (length x width x height) | _____ | <!-- guidance: Say how it is used: held, worn, desk, wall. Size drives materials, cost and shipping. --> |
| Weight | _____ | |
| Shape or form notes | _____ | |
| Parts that move or open | _____ | |

### A2. Materials

| Part | Material (or "to research") | Why | Alternative |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

### A3. Components & rough BOM

<!-- guidance: BOM means bill of materials: the list of every part that goes into one unit. For a prototype, list what you can buy off the shelf. Unit cost is what one costs at your prototype quantity; at real volumes it is usually different. Write "unknown" until you have a quote or listing. -->

| Part | Qty per unit | Off the shelf or custom | Source (or "to find") | Unit cost |
|---|---|---|---|---|
| _____ | _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ | _____ |

### A4. Performance targets

<!-- guidance: Targets a tester or engineer could measure. "Fast" is not a target; "boils 500 ml in under N minutes" is. Use your own numbers only if you have a reason for them. -->

| What it must do | How you will measure it | Target | Prototype can fake it? |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

### A5. Power & interfaces

| Item | Your answer |
|---|---|
| Power source (battery, mains, USB, none) | _____ |
| Connectivity (Bluetooth, Wi-Fi, none) | _____ |
| Controls (buttons, dials, touch, app) | _____ |
| Companion app or screen? (if yes, fill UI.MD) | _____ |

### A6. Safety & compliance questions to verify

<!-- guidance: These are questions, not claims. Do not assume any rule does or does not apply. Take this list to a qualified professional (a product-compliance consultant, a test lab, a lawyer, or the regulator's published guidance for your market) and record what they tell you. -->

- [ ] What electrical safety rules apply to this kind of product in my target market(s)?
- [ ] Is electromagnetic compliance testing required (for example FCC in the United States, CE marking in the EU, or the local equivalent)? What does it involve?
- [ ] If it contains a battery: what are the rules for the battery type and for shipping it by post or air?
- [ ] If children could use it or be near it: what child-safety, small-parts and labeling rules apply?
- [ ] Are there material restrictions (for example on certain chemicals or finishes) for my market?
- [ ] Does anything about the design raise a patent or trademark question I should check before showing it publicly?
- [ ] What product liability or insurance questions should I ask before giving samples to the public?

### A7. Target cost and price

| Item | Figure | Source of figure |
|---|---|---|
| Target landed cost per unit (COGS) | _____ | <!-- e.g. rough BOM, supplier quote, guess --> |
| Target retail price | _____ | |
| Implied gross margin (price minus COGS, divided by price) | _____ | |

### A8. Looks-like vs works-like: what the prototype will fake

<!-- guidance: Be honest about what is mocked. Testers who think a mockup works will give you the wrong feedback. -->

| Area | Real in the prototype | Faked or stood in | Said to testers? |
|---|---|---|---|
| Looks (shape, color, finish) | _____ | _____ | _____ |
| Works (function, performance, battery) | _____ | _____ | _____ |
| Feel (weight, texture, sound) | _____ | _____ | _____ |
| Safety and compliance | Not assessed | Not assessed | Yes, always |

---

## Block B — CPG (food, beverage, beauty, personal care, household)

<!-- guidance: Keep this block only if your lane is cpg. Delete Blocks A and C. Food, beverage, cosmetics and household chemicals are regulated products. Nothing here is cleared for sale or for giving samples to the public until a qualified professional for your market has reviewed it. -->

### B1. Formulation brief

<!-- guidance: Describe what you want, not a secret recipe. Whoever makes your sample (a kitchen, a contract manufacturer, a formulator) will turn this into a formula. List what must be in it, what must not be, and any dietary or ingredient constraints. -->

| Item | Your answer |
|---|---|
| What it is (category, format) | _____ |
| Key ingredients or actives you want | _____ |
| Ingredients to avoid (allergens, additives, preferences) | _____ |
| Dietary or lifestyle positioning (if any) | _____ |
| Who will make the first sample | _____ |

### B2. Sensory targets

<!-- guidance: How should it taste, smell, look, feel or sound? Use words and reference products ("closer to X than Y"). Testers can react to references more easily than to adjectives. -->

| Sense | Target | Reference product to compare against |
|---|---|---|
| Taste / scent | _____ | _____ |
| Texture / feel | _____ | _____ |
| Appearance | _____ | _____ |
| Aftertaste, residue or finish | _____ | _____ |

### B3. Variants & sizes

| Variant (flavor, scent, shade) | Size or count | Who it is for | Prototype or later? |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

### B4. Nutrition or ingredient-list draft

<!-- guidance: A draft list for planning only. Ingredient naming, order, allergen statements and any nutrition panel are regulated and vary by country. Do not put a draft on anything a person can buy or consume without review. -->

| Ingredient (in descending order by weight, as you currently expect) | Approx. amount | Purpose |
|---|---|---|
| _____ | _____ | _____ |
| _____ | _____ | _____ |
| _____ | _____ | _____ |

**Allergens I think may be present (verify with a professional):** _____

### B5. Shelf life & storage

| Item | Your answer |
|---|---|
| Storage conditions (shelf, fridge, freezer, away from heat) | _____ |
| Target shelf life | _____ |
| How it will be tested for shelf life (to verify with a professional) | _____ |
| What the prototype sample will be labeled for testers (for example "use within N days, made in small batch") | _____ |

### B6. Claims: want to make vs can substantiate

<!-- guidance: Health, performance, "natural", "organic", "clinically proven" and similar claims are regulated, and rules differ by market. Treat every claim here as a wish until a qualified professional (a regulatory consultant or lawyer) has confirmed whether you may use it and what evidence you must hold. Leave out any claim you cannot back up. -->

| Claim I want to make | Evidence I have | Evidence I would need | Verified by a professional? |
|---|---|---|---|
| _____ | _____ | _____ | No |
| _____ | _____ | _____ | No |

### B7. Unit economics

<!-- guidance: Fill with real quotes where you can; otherwise write "unknown". Margin is the share of the price left after cost. Wholesale is the price a retailer pays you; retail is the shelf price. -->

| Item | Per unit | Source of figure |
|---|---|---|
| Ingredients / materials | _____ | _____ |
| Making (labor, co-packer fee) | _____ | _____ |
| Packaging | _____ | _____ |
| **COGS (total cost of goods sold)** | _____ | _____ |
| Wholesale price | _____ | _____ |
| Retail price | _____ | _____ |
| Your margin at wholesale | _____ | |
| Retailer margin at retail | _____ | |

### B8. Looks-like vs works-like: what the prototype will fake

| Area | Real in the prototype | Faked or stood in | Said to testers? |
|---|---|---|---|
| Taste, scent or feel | _____ | _____ | _____ |
| Look and pack | _____ | _____ | _____ |
| Shelf life and stability | Not assessed | Not assessed | Yes, always |
| Safety, labeling and claims | Not assessed | Not assessed | Yes, always |

---

## Block C — Fashion (apparel, footwear, accessories, jewelry)

<!-- guidance: Keep this block only if your lane is fashion. Delete Blocks A and B. This is a "tech pack lite": a simplified version of the document a factory or sample maker uses. Add a flat sketch or reference photos alongside it. -->

### C1. Silhouette and flat description

<!-- guidance: Describe it so someone could sketch it without seeing it: front, back, side, key shapes. Attach a flat sketch (a simple, front-on drawing with no model) if you have one. -->

| View | Description |
|---|---|
| Front | _____ |
| Back | _____ |
| Side / detail | _____ |
| Reference images (links or filenames) | _____ |

### C2. Fabric & trims

| Part | Fabric or material | Weight / thickness | Color | Source or stand-in |
|---|---|---|---|---|
| Body | _____ | _____ | _____ | _____ |
| Lining / inside | _____ | _____ | _____ | _____ |
| Trims (zips, buttons, thread, labels, hardware) | _____ | _____ | _____ | _____ |

### C3. Colorways

| Colorway name | Fabric color | Trim color | Prototype or later? |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

### C4. Size range & fit notes

| Item | Your answer |
|---|---|
| Size range (and whether sizes are numeric, lettered, or one-size) | _____ |
| Base or sample size for the prototype | _____ |
| Fit (slim, regular, relaxed, oversized) and reference garment | _____ |
| Key measurements to fix (chest, waist, length, inseam, etc.) | _____ |

### C5. Construction details

<!-- guidance: Stitching, seams, closures, pockets, finishing. If you do not know the terms, describe what you see in a reference garment and ask the chat AI to translate into sewing terms. -->

- _____
- _____
- _____

### C6. Care label & content

<!-- guidance: Fiber content and care instructions are regulated in many markets, and the wording rules vary. Draft for planning only and verify required wording and placement with a qualified professional before any real sale. -->

| Item | Draft | Verified for market? |
|---|---|---|
| Fiber content | _____ | No |
| Care instructions | _____ | No |
| Country of origin | _____ | No |

### C7. Cost per unit & MOQ questions

<!-- guidance: MOQ means minimum order quantity: the smallest batch a supplier will make. Ask early; it often decides whether a plan is realistic. -->

| Item | Figure | Source |
|---|---|---|
| Fabric cost per unit | _____ | _____ |
| Trims cost per unit | _____ | _____ |
| Cut-and-sew (labor) per unit | _____ | _____ |
| Sampling cost (one-off) | _____ | _____ |
| **Cost per unit** | _____ | _____ |
| Target wholesale and retail price | _____ | _____ |

**Questions to ask a sample maker or factory:**

- [ ] What is your minimum order per style and per colorway?
- [ ] What is the lead time for a first sample, and how many revisions are included?
- [ ] Do you provide pattern making, grading (making other sizes) and fit sessions, or do I bring those?
- [ ] What materials can you source, and what do I need to supply?

### C8. Looks-like vs works-like: what the prototype will fake

| Area | Real in the prototype | Faked or stood in | Said to testers? |
|---|---|---|---|
| Fabric and color | _____ | _____ | _____ |
| Fit and construction | _____ | _____ | _____ |
| Durability (washing, wear) | Not assessed | Not assessed | Yes, always |
| Labels and content claims | Not assessed | Not assessed | Yes, always |

---

## Ask the LLM

Paste these into Claude, ChatGPT, or Gemini one at a time. Share your PRD.MD first so the AI has context. Use the prompts for your lane only.

1. "I shared my PRD. My lane is [physical-product / cpg / fashion]. Interview me one question at a time to fill in my SPEC_SHEET Basics and the block for my lane. Stop after each answer and ask the next question. When I do not know something, write 'unknown' and add it to a list of questions to research."

2. (Physical-product) "Based on my PRD, propose a rough bill of materials for a first prototype: list each part, whether it is off the shelf or custom, and what I should search for. Do not invent prices; tell me what to look up. Then list the five measurable performance targets I should set."

3. (Physical-product) "Give me a list of safety and compliance questions I should take to a qualified professional for a [product type] aimed at [market]. Cover electrical safety, electromagnetic compliance (such as FCC or CE), batteries and shipping, and child safety if relevant. Phrase everything as questions to verify, not as statements of what the law requires."

4. (CPG) "Turn my idea into a formulation brief and a sensory target table that a kitchen or contract manufacturer could quote from. Use reference products I can compare against. List the allergens that could be present and tell me which questions I must verify with a qualified food, beauty or regulatory professional before any sample reaches the public."

5. (CPG) "Review my list of claims. For each one, tell me what kind of evidence is typically needed, why claims in this area are regulated, and what to ask a qualified professional. Flag any claim that sounds like a health or performance promise, and suggest a safer, more modest wording to discuss with them."

6. (Fashion) "Translate my description of the garment or accessory into a tech-pack-lite: silhouette, fabric and trims, construction details, and key measurements. Use correct sewing and sourcing terms. List the questions I should ask a sample maker about minimum order, lead time and number of revisions."

7. (All lanes) "Walk me through unit economics for my product using only the numbers I give you. Show cost, wholesale, retail and margin in a table. Mark any figure I have not confirmed as 'unconfirmed' and tell me which three quotes would most change the answer."

8. (All lanes) "Review my completed SPEC_SHEET. Fill in the 'Looks-like vs works-like' table honestly: what in my prototype is real, what is faked, and what I must tell testers. Then list anything that contradicts my PRD or that a supplier would ask me that I cannot yet answer."

---

## Done when

- [ ] You kept only the block for your lane and deleted the other two.
- [ ] Every blank is either filled with a number you can source or marked "unknown" with a note on how to find out.
- [ ] Costs and prices are supported by a quote, a listing or a clearly labeled estimate; no invented figures.
- [ ] The safety, compliance, labeling or claims checklist for your lane is written out as questions, with a named type of professional to ask for each.
- [ ] Every claim you want to make is either backed by evidence you hold or removed.
- [ ] The "Looks-like vs works-like" table is filled in, and it states that safety and compliance are not assessed.
- [ ] A supplier or sample-maker could read this and give you a quote without guessing.
