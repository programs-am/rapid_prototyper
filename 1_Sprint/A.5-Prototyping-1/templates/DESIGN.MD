# DESIGN.MD — Design System & Brand Look

This doc defines your product's visual language: the mood, colors, type, imagery, materials and (for digital products) component patterns. It works for any prototype: an app, a website, a physical product, a food or beauty product, a garment, a campaign, or a service. A chat AI drafts the values; you review and adjust before handing it to whoever builds or makes the prototype (an AI builder, a designer, a printer, a maker).

**Status:** AI-drafted, founder-approved. A chat AI (and an image tool for non-digital lanes) produces the first version. Review it, adjust one or two choices, then hand it to the builder or maker as context.

**Use it when:** Any lane where the look matters, which is almost all of them: software-app, website, physical-product, cpg, fashion, marketing-comms, service-experience. Skip it only for throwaway proofs where you are testing logic or a workflow, not appearance.

**Stage:** This doc is used in the early prototyping stages. A production launch would replace it with a formal brand and design-system handoff.

**Prototype guardrails:**
- This prototype stores no permanently-stored sensitive personal data.
- This prototype takes no real payments. (A consented email waitlist through a reputable form tool is the one allowed exception.)
- Mockups, renders and samples are never presented to testers as finished, safety-tested or compliant products.

**How to generate:**
- **Any lane:** Open a chat AI (Claude, ChatGPT or Gemini). Paste your PRD.MD and the prompts from "Ask the LLM" below, one at a time. Start with the moodboard and brand brief, then the palette and type. Review the output, adjust any choice you dislike, and copy the result into this file.
- **Non-digital lanes (physical-product, cpg, fashion, marketing-comms, service-experience):** After the brand brief, use an image tool (see `5_Library/prototyping/tools/`) to generate moodboard images and visual directions. Treat image output as inspiration to react to, not as a final design.
- **Digital lanes only (software-app, website, companion screens):** You can also use a design tool such as Claude Design or Stitch (access may require a Google account or a waitlist) to turn this doc into screens. Export its design tokens and map them into the tables below.

---

## Creative north star

<!-- guidance: One sentence. Name the mood, aesthetic, or reference that defines the product's look and feel. Think of a magazine, a brand you admire, a place, or an adjective pair. Example pattern: "[Personality] meets [reference] — [one visual quality]." Keep it to one line. Every downstream decision (color, type, photo, material, packaging) should be checkable against it. -->

___________________________________________________________________________

---

## Color tokens

<!-- guidance: Three to six colors is enough for a prototype. Every color needs a clear job — primary, background, text, accent, error (digital) or hero color, support color, neutral, accent (print, packaging, apparel). Avoid decorative colors with no assigned role. For print and physical goods, note that screen colors will not match printed or dyed colors exactly; ask your printer or maker for a physical color swatch before you trust any hex value. -->

| Token | Value | Use |
|---|---|---|
| `--color-primary` | <!-- hex, e.g. #1A56DB --> | Primary action or hero brand color |
| `--color-primary-dark` | <!-- hex --> | Hover / pressed state (digital) or deeper shade (print) |
| `--color-bg` | <!-- hex --> | Default page or background color |
| `--color-surface` | <!-- hex --> | Card, panel, label-panel or input background |
| `--color-text` | <!-- hex --> | Body text on the background |
| `--color-muted` | <!-- hex --> | Captions, labels, secondary text |
| `--color-border` | <!-- hex --> | Dividers, outlines, rules |
| `--color-error` | <!-- hex --> | Validation errors, warnings (digital) |

---

## Typography

<!-- guidance: Two font families is enough. One for headings (display weight, strong personality), one for body (readable at small sizes). Add a monospace font only if your product shows code or structured data. Suggest web-safe or Google Fonts options if the work is digital. For print, packaging or apparel, check that the font's license allows commercial printing or embroidery before real production. -->

**Heading font:** ___________________________________________________________________________

**Body font:** ___________________________________________________________________________

**Mono font (optional):** ___________________________________________________________________________

### Type scale

<!-- guidance: Fill in the size and where each level is used. Delete rows you will not use. For print and packaging, use points (pt) or millimeters rather than px, and add a minimum legible size for the smallest text on pack. -->

| Level | Size | Weight | Use |
|---|---|---|---|
| Display | <!-- px, rem or pt --> | <!-- e.g. 700 --> | Hero title, product name, headline |
| Heading 1 | | | Section titles |
| Heading 2 | | | Sub-section, card titles |
| Body large | | | Standard paragraphs |
| Body small | | | Supporting text, fine print |
| Label | | | Tags, metadata, ALL-CAPS short strings |

**Letter spacing notes:** <!-- guidance: e.g. tight on headlines (-0.02em), wide on uppercase labels (0.12em) -->

___________________________________________________________________________

---

## Imagery & photography direction

<!-- guidance: Describe the pictures your prototype will use, so every image looks like it belongs to the same brand. This applies to websites, packaging, campaigns, lookbooks, product pages and decks. If you do not have real photos yet, say whether you will use clearly labeled AI-generated or mocked images, and remember they must not be passed off as real product photos or real customers. -->

| Question | Your answer |
|---|---|
| Subject (product alone, in use, people, place, flat lay) | _____ |
| Style (bright and airy, moody, documentary, studio clean, illustrated) | _____ |
| Lighting and color mood | _____ |
| Composition (close crop, wide, centered, lots of empty space) | _____ |
| People (who appears, how they are represented, real vs. placeholder) | _____ |
| Do not use (stock clichés, filters, anything off-brand) | _____ |
| Source for the prototype (own phone photos, AI-generated and labeled, stock with license, illustration) | _____ |

---

## Materials, finishes & color-material-finish (CMF)

<!-- guidance: Physical-product, cpg and fashion lanes only. Delete this section for digital-only lanes. CMF is a designer's shorthand for the three things that make a physical object look and feel the way it does: the color, the material it is made of, and the finish on its surface (matte, gloss, brushed, textured). A prototype often fakes some of these, so use the last column to be honest about it. -->

| Part or surface | Color | Material | Finish | Prototype stand-in (what you will actually use) |
|---|---|---|---|---|
| <!-- e.g. outer shell, bottle, jacket body --> | | | | |
| <!-- e.g. cap, trim, zipper, label --> | | | | |
| <!-- e.g. inner pack, lining, stitching --> | | | | |

**Feel and sound:** <!-- guidance: How should it feel in the hand or on the body? Does a lid click, does fabric drape, does a pouch crinkle? Testers notice this more than founders expect. -->

___________________________________________________________________________

---

## Voice & tone

<!-- guidance: A few lines only. The full messaging, do/don't examples and copy deck live in COPY.MD. Keep this section short so the look and the voice stay consistent without duplicating work. -->

**Voice in three adjectives:** ___________________________________________________________________________

**We sound like:** ___________________________________________________________________________

**We never sound like:** ___________________________________________________________________________

For the full messaging hierarchy, tone examples and copy deck, see COPY.MD.

---

## Layout and spacing

<!-- guidance: Pick a max content width and a spacing scale. For non-digital lanes, read this as layout rules for a page, label, panel or slide: margins, gaps between elements, how much white space. If you do not know, the generator will choose. Keep it simple — one column or one clear grid is fine for a prototype. -->

**Max content width (or page / panel size):** ___________________________________________________________________________

**Base grid or column approach:** ___________________________________________________________________________

### Spacing scale

<!-- guidance: Six to eight steps. Each step should be roughly 1.4–1.6× the previous. -->

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | <!-- e.g. 4px --> | Tightest inline gap |
| `--space-2` | | Label-to-icon gap, tight inline |
| `--space-3` | | Internal padding (buttons, chips, label margins) |
| `--space-4` | | Standard paragraph and list gap |
| `--space-5` | | Between related elements in a section |
| `--space-6` | | Between sections |
| `--space-7` | | Page top and bottom padding |

**Corner radius:** <!-- guidance: 0px for angular/minimal feel; 4–8px for neutral; 12–16px for friendly/soft. Pick one value and apply it everywhere, including physical corners on packs and products. -->

___________________________________________________________________________

**Shadows / elevation:** <!-- guidance: Describe if and how you use shadow — e.g. "none — elevation is tonal only", "1 level of card shadow (0 2px 8px rgba(0,0,0,0.08))". -->

___________________________________________________________________________

---

## Component patterns (digital lanes only)

<!-- guidance: Digital lanes only: software-app, website, and companion screens for a physical product. Delete this whole section for non-digital lanes. Describe the visual spec for the 3–5 components your product actually uses. Do not spec every possible UI element. Focus on the ones the builder tool will need to construct correctly. -->

### Primary button

<!-- guidance: Background color, text color, padding, border radius, hover state. -->

___________________________________________________________________________

### Input / form field

<!-- guidance: Border style, focus state (color, width), placeholder style, error state. -->

___________________________________________________________________________

### Card

<!-- guidance: Background, border or shadow, padding, radius, any hover behavior. -->

___________________________________________________________________________

### Navigation (if applicable)

<!-- guidance: Top bar, sidebar, or tab bar — whichever your product uses. Background, height, item spacing. -->

___________________________________________________________________________

### [Add a fourth component your product needs]

<!-- guidance: Examples: data table, empty state, modal, tag/chip, avatar. Only spec what your build actually uses. -->

___________________________________________________________________________

---

## Accessibility

<!-- guidance: Check each one before handing DESIGN.MD to the builder or maker. These are non-negotiable even in a prototype — they cost almost nothing to get right from the start. Items marked (digital) apply only to screens. -->

- [ ] All text-on-background color pairs meet WCAG AA contrast (4.5:1 for body, 3:1 for large text and UI components). This applies to packs, posters and decks too, not only screens. <!-- guidance: Use https://webaim.org/resources/contrastchecker/ to verify. -->
- [ ] Smallest text is legible at real size: on a pack, label or printed piece, not only on a zoomed-in screen.
- [ ] (digital) Focus states are visible — not removed or hidden with `outline: none`. Specify the focus ring style: ___________________________________________________________________________
- [ ] (digital) Touch targets are at least 44x44px on mobile.
- [ ] Information is never carried by color alone (errors, sizes, flavors, variants also use text, shape or icon).
- [ ] (digital) All images have alt text; decorative images have `alt=""`.

---

## Ask the LLM

Paste these into Claude, ChatGPT, or Gemini to fill this doc through back-and-forth. Share your PRD.MD first so the AI has context. Use the prompts in order and skip any that do not apply to your lane.

1. "I am building [product name and one-sentence description] for [target user]. Write a brand brief and moodboard description: three adjectives for the brand, the feeling a customer should have in the first three seconds, three reference brands or places I could look at for mood (not to copy), and three things the look must avoid. Then give me one sentence I can use as my creative north star."

2. "Based on that brief, suggest a color palette: 5–8 colors, each with a hex value and a clear role (primary, background, surface, body text, muted text, border, accent). Explain the emotional reason for each in one line. Note which colors will be hard to reproduce exactly in print, dye or ink for a [pack / garment / product] and what I should ask my printer or maker to confirm."

3. "Suggest two fonts, one for headings and one for body text, that fit the north star. For each, name one alternative. Then give me a type scale (Display, H1, H2, Body large, Body small, Label) with sizes, weights and a one-line use note. Tell me whether to check font licensing before real printing, embroidery or production."

4. "Write an imagery and photography direction for my brand: subject, style, lighting, composition, how people are shown, what to avoid. Then write three prompts I can paste into an image tool to generate moodboard images in that direction. Remind me which images must be labeled as AI-generated or mocked if shown to testers."

5. (Physical-product, CPG, fashion only) "Propose a color-material-finish table for my product: for each visible part, suggest a color, a material and a finish, plus a cheap stand-in I can actually use for a prototype. Flag anything that would be expensive or slow to source at small quantity."

6. "Write the 'Voice & tone' section: three voice adjectives, a one-line 'we sound like', and a one-line 'we never sound like'. Keep it short; I will build the full copy guide separately."

7. (Digital lanes only) "Give me a visual spec for these components: primary button, form input, card, and [fourth component]. For each: background, text color, border, padding, corner radius, hover and focus states, using my color tokens. Format as a markdown table."

8. "Check my palette for WCAG AA contrast. List every foreground-on-background pair, its contrast ratio, and whether it passes for body text (4.5:1) or large text and UI (3:1). Flag failures and suggest corrected hex values. Then summarize everything we agreed into one DESIGN.MD document in raw markdown, keeping only the sections that apply to my lane."

---

## Done when

- [ ] Creative north star is one clear sentence that a builder, designer or maker can act on.
- [ ] Color table has 5 or more colors, each with a hex value and a named role — no empty cells (rows marked digital-only may be n/a). For physical goods, a physical swatch or sample has been requested or checked.
- [ ] Type scale has at least 4 levels filled in with size and weight, and font licensing has been considered if the work will be printed or produced.
- [ ] Imagery direction is filled in, and you know where the prototype's images will come from and which are mocked or AI-generated.
- [ ] (Physical-product, CPG, fashion) The CMF table is filled in with a prototype stand-in for every row.
- [ ] (Digital lanes) At least 3 component patterns are specified with enough detail that a builder tool can render them without guessing.
- [ ] Accessibility checklist is complete — contrast ratios verified, smallest text size checked.
- [ ] Sections that do not apply to your lane have been deleted, not left blank.
