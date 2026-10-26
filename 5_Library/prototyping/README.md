# prototyping/ — Lanes, Tools and Guides

Everything the `prototype-kit` skill draws from. You can also browse it yourself.

## 1. Pick your lane

| Lane | You are making... | Guide |
|---|---|---|
| Software / App | an app, SaaS tool, dashboard, AI product | [lanes/software-app.md](lanes/software-app.md) |
| Website | a landing page, brochure site, fake-door test | [lanes/website.md](lanes/website.md) |
| Physical product | a device, tool, appliance, furniture, other hardware | [lanes/physical-product.md](lanes/physical-product.md) |
| CPG | food, beverage, beauty, personal care, household | [lanes/cpg.md](lanes/cpg.md) |
| Fashion | apparel, footwear, bags, accessories, jewelry | [lanes/fashion.md](lanes/fashion.md) |
| Marketing & comms | a campaign, message, deck, email/social, brand | [lanes/marketing-comms.md](lanes/marketing-comms.md) |
| Service & experience | a service, program, marketplace, event, manual workflow | [lanes/service-experience.md](lanes/service-experience.md) |

Each lane guide has: what you're prototyping, a **fidelity ladder** (where to stop), the spec docs to
make, tests with example hypotheses, what the agent can build for you directly, guardrails, and starter
prompts. Combine at most two lanes (e.g. CPG + website).

## 2. Pick your tools

One guide per tool in [tools/](tools/). Each has a 5-step quickstart. Prices and limits change often,
so check the vendor before relying on anything.

| Need | Start with |
|---|---|
| Rough HTML mockups, copy, docs, simple 3D scripts | `claude-artifacts`, or the equivalent in whichever agent you use (`claude-code`, `openai-codex`, `google-antigravity`) |
| Clickable screens | `stitch`, `figma`, `v0` |
| A working web app | `google-ai-studio`, `lovable`, `bolt`, `replit` |
| A real codebase | `claude-code`, `openai-codex`, `google-antigravity`, `cursor` |
| A live web page | `carrd`, `framer`, `webflow` |
| Forms, waitlists, surveys | `tally` |
| Packaging, social, decks, brand | `canva`, `gamma` |
| Concept images, product and pack renders | `ai-image-generation`, `mockup-generators` |
| 3D: simple or code-based | `tinkercad`, `openscad` |
| 3D: serious CAD | `onshape`, `fusion-360` |
| 3D: quick concept shapes | `text-to-3d` |
| Electronics (works-like) | `wokwi-and-dev-boards` |
| Samples, prints, PCBs, co-packers, pattern makers | `prototyping-services` |

If you're unsure, run `prototype-kit` — it recommends the tool for your lane and stage.

## 3. The guides

- [Prototyping Guide](../../1_Sprint/A.5-Prototyping-1/Prototyping-Guide.md) — the universal process
- [Refine Guide](../../1_Sprint/C.3-Prototyping-2/Refine-Guide.md) — round 2
- Spec-doc templates: `1_Sprint/A.5-Prototyping-1/templates/`

## Two rules for every lane

1. **A prototype tests one hypothesis with the cheapest thing that can answer it.**
2. **A prototype is not a product.** No real payments, no permanently-stored sensitive personal data,
   and never present a mockup, render or sample as finished, safe, certified or compliant.
