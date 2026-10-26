# PACKAGING.MD — Pack, Label & Unboxing Spec

Defines what your product's package is, how it is built, what goes on each panel, and how you will mock it up for testing. For a shopper, the package is the product's first impression: on a shelf, in a shipping box, or as a thumbnail on a screen. This doc gives a designer, printer or AI image tool something precise to work from.

**Status:** Recommended for cpg (required once you test the pack itself). Optional for physical-product (if the pack matters to what you are testing) and for fashion (labels, hangtags, shipping). Skip it for software, website, marketing-comms and service-experience lanes.

**Use it when:** You want testers to react to how the product looks as a package, you are briefing a designer or printer, or you need a mockup for a pre-launch page or shelf test. Fill it in after PRD.MD, BUILD_PLAN.MD and SPEC_SHEET.MD, because the pack format depends on what is inside and what it costs.

<!-- guidance: A prototype pack is a mockup. Use clearly fake or placeholder values wherever you do not have real, verified ones. Nothing in this doc is a statement of what the law requires; every label and claim item is a checklist to verify with a qualified professional for your market. -->

**Prototype guardrails:** A prototype stores no permanently-stored sensitive personal data and takes no real payments. A mocked pack must never be presented to testers as a finished, compliant, safety-tested or sale-ready product, and a pack that is not label-checked must never go on a product a person can buy or consume.

---

## Pack format & structure

<!-- guidance: Describe the physical package. Pick what exists today (a standard bottle, pouch, jar, tube, box, bag) rather than a custom shape: standard formats are cheap and quick to source at small quantities. -->

| Item | Your answer |
|---|---|
| Pack type (bottle, jar, pouch, tube, carton, box, tin, bag, hangtag, other) | _____ |
| Material (glass, PET, paper, board, foil, fabric, other) | _____ |
| Closure or opening (cap, zip, tear, lid, flap) | _____ |
| Inner pack or protection (liner, insert, tissue, shrink sleeve) | _____ |
| Is this a stock pack with a custom label, or a custom pack? | _____ |
| Multi-pack or single | _____ |
| Does the pack need to protect the product (light, air, moisture, heat)? | _____ |

## Dimensions

| Item | Size | Notes |
|---|---|---|
| Pack height x width x depth (or diameter) | _____ | |
| Label or printable area (per panel) | _____ | <!-- guidance: Ask your pack supplier or printer for the exact printable area. --> |
| Fill or capacity | _____ | |
| Shipping carton size (if shipping samples) | _____ | |

---

## Panel content hierarchy

<!-- guidance: The 3-second test: a shopper should grasp what it is, who it is for, and why it is different within three seconds, from three steps away on a shelf or in a small image on a screen. Decide what is #1, #2, #3 on the front. Everything else moves to the back or side. Do not put anything on the front that you cannot yet support. -->

**The 3-second test.** In three seconds, a shopper must grasp:

1. What it is: _____
2. Who or what it is for: _____
3. Why choose it: _____

| Panel | Primary content (in priority order) | Secondary content | Notes |
|---|---|---|---|
| Front | _____ | _____ | |
| Back | _____ | _____ | |
| Left / right side | _____ | _____ | |
| Top / bottom | _____ | _____ | |
| Inside (lid, insert, inner wrapper) | _____ | _____ | |

---

## Required label elements — checklist to verify

<!-- guidance: Do NOT treat this list as legal advice or as a complete list. What a label must show, where, in what size and wording, differs by product type and by country or region. Take it to a qualified professional (a regulatory consultant, a label-compliance service, or a lawyer) and the regulator's published guidance for your market. Tick "Verified" only after a professional has confirmed it. -->

| Element | What I plan to show (draft, mock or placeholder) | Rules to verify for my product and market | Verified by a professional? |
|---|---|---|---|
| Product name or statement of identity | _____ | _____ | [ ] |
| Net quantity (weight, volume, count) | _____ | _____ | [ ] |
| Ingredients or materials list | _____ | _____ | [ ] |
| Allergen information | _____ | _____ | [ ] |
| Claims (health, performance, environmental, "natural", etc.) | _____ | _____ | [ ] |
| Country or place of origin | _____ | _____ | [ ] |
| Maker, importer or responsible party name and address | _____ | _____ | [ ] |
| Barcode (type and number) | <!-- guidance: Use a clearly fake or placeholder barcode in mockups. Do not copy a real one. --> | _____ | [ ] |
| Batch, lot or best-before information | _____ | _____ | [ ] |
| Care, usage or safety warnings | _____ | _____ | [ ] |
| Fiber content and care symbols (fashion) | _____ | _____ | [ ] |
| Recycling or disposal marks | _____ | _____ | [ ] |
| Language(s) required | _____ | _____ | [ ] |
| Minimum text size and placement | _____ | _____ | [ ] |

**Questions to ask the professional:** _____

---

## Brand elements

<!-- guidance: Pull these from DESIGN.MD (done first for this lane) so the pack matches everything else. If a claim on the front is itself what you are testing, show it as concept text marked "concept — claim not verified" and have a qualified professional check it before any real pack is made. Only list what appears on the pack. -->

| Element | Your answer |
|---|---|
| Logo and where it sits | _____ |
| Colors (with roles) | _____ |
| Fonts | _____ |
| Photography or illustration | _____ |
| Tagline or short copy (here, or in COPY.MD if you made one) | _____ |
| Variant coding (how flavors, scents, sizes or colorways are told apart) | _____ |

---

## Shelf & competitor context

<!-- guidance: Your pack does not exist alone. Photograph or list 3 to 5 products it will sit next to, on a shelf or on a screen. Decide whether you want to blend in (to feel familiar) or stand out (to be noticed), and which colors or shapes are overused in that aisle. -->

| Competitor or neighbor | Where it sits | What it does well | What I will do differently |
|---|---|---|---|
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |
| _____ | _____ | _____ | _____ |

**Where the pack will be seen (shelf, online thumbnail, shipping box, in hand):** _____

---

## Mockup plan

<!-- guidance: Work from cheap to convincing: a flat dieline (the 2D layout of the pack, like an unfolded box with cut and fold lines), then a 3D mockup on screen, then a photo of a real or physical mock sample. Stop at the cheapest step that answers your question. Mockups must be labeled as mockups when shown to testers. -->

| Step | What it is | Tool or vendor | Done when |
|---|---|---|---|
| 1. Flat dieline | Pack laid out flat with panel sizes, bleed and fold lines | A dieline template from your supplier or printer | Panels and sizes confirmed |
| 2. Label artwork | Front, back and side designs placed on the dieline | A design tool (see `5_Library/prototyping/tools/`) | Hierarchy passes the 3-second test |
| 3. 3D mockup | Artwork wrapped on a virtual pack | A mockup tool | One hero image per variant |
| 4. Physical mock (optional) | Printed label on a stock pack, or a short print run | A local or online printer | One hand-held sample |
| 5. Photo | Photo or short video of the mock | Phone, a plain background, daylight | Image ready for testing |

**Printer or supplier I will ask for a quote:** _____

---

## Sustainability notes

<!-- guidance: Note what you want to be true about materials and disposal, and what you can actually support. Environmental claims such as "recyclable", "compostable" or "carbon neutral" are regulated in many markets and must be substantiated. Treat them as claims to verify (see the claims table in COPY.MD). -->

| Question | Your answer |
|---|---|
| Material choice and why | _____ |
| Can it be recycled or reused where my customers live? (verify locally) | _____ |
| Can I reduce material, size or layers without hurting the product? | _____ |
| Environmental claim I want to make, and evidence I hold | _____ |

---

## Unboxing experience (if relevant)

<!-- guidance: Only fill this if the moment of opening matters to what you are testing: gifts, subscriptions, beauty, apparel, shipped goods. Skip it otherwise. -->

| Moment | What the customer sees, feels or hears | Cheap prototype version |
|---|---|---|
| Arrives (outer box, label) | _____ | _____ |
| Opens (first look, smell, sound) | _____ | _____ |
| Reveals the product | _____ | _____ |
| Finds extras (insert, thank-you note, instructions) | _____ | _____ |
| Keeps or disposes | _____ | _____ |

---

## Ask the LLM

Paste these into Claude, ChatGPT, or Gemini one at a time. Share your PRD.MD, SPEC_SHEET.MD and DESIGN.MD first so the AI has context.

1. "I shared my product docs. Recommend three standard pack formats (not custom-molded) that would suit this product at small quantity, and for each give the pros, cons, typical materials and what to ask a supplier about minimum order and printable area."

2. "Run the 3-second shelf test on my pack. Given my one-liner and these three priorities [what it is, who it is for, why choose it], propose a front-panel hierarchy: what is largest, what is second, what is third, and what moves to the back. Give me two alternative layouts described in words."

3. "Make a checklist of the label elements that packs of my kind commonly carry (name, net quantity, ingredients or materials, allergens, claims, origin, barcode, warnings). Phrase each as a question to verify with a qualified professional for [my market], and do not tell me what is legally required."

4. "Look at this list of competitors on my shelf [list them]. Describe their color, shape and message patterns in words, tell me where I could stand out without becoming hard to read, and what a shopper might assume about me if I look too similar."

5. "Write three image-generation prompts for exploring label concepts for my product, one per direction. Each prompt should describe the pack type, the layout of front-panel content, the colors and the mood from my DESIGN.MD. Use placeholder text only and remind me not to include real claims, real barcodes or logos I do not own."

6. "Give me a step-by-step plan to go from a flat dieline to a 3D mockup to a photo, using free or low-cost tools. List what I need to ask my printer for, and what I must label as a mockup when showing it to testers."

7. "Suggest sustainability choices for my pack that I could actually support. For each, list the claim I might be tempted to make and the evidence or professional check I would need before making it."

8. "Review my PACKAGING.MD. Tell me what content is on the front that I cannot yet support, which label checklist items I have not planned for, and what a tester could mistake for a finished, compliant product."

---

## Done when

- [ ] Pack type, material, closure and dimensions are stated, and the printable area has been confirmed with a supplier or printer.
- [ ] The front panel passes the 3-second test: what it is, who it is for, why choose it.
- [ ] The label checklist is filled in with draft or placeholder content, and each row has a "rules to verify" note and a named type of professional to ask.
- [ ] No claim, barcode, certification or logo appears that you do not have the right to use or cannot substantiate; placeholders are visibly marked.
- [ ] Brand elements match DESIGN.MD.
- [ ] Three or more neighboring products are listed with a note on how you will differ.
- [ ] A mockup plan exists, and every mockup shown to testers will be labeled as a mockup.
- [ ] You can state clearly that this pack is a prototype and has not been checked for labeling or compliance.
