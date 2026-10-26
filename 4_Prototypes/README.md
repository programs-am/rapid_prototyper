# 4_Prototypes — Prototype and Build Projects

Everything you make to test or launch the product. Each prototype lives in its own subfolder created
by the `prototype-kit` skill, named with a short slug (for example `smart-bottle-v1`). Larger builds can
use the `YYYY.MM Short Name` convention.

A prototype folder typically holds:

```
4_Prototypes/<slug>/
├── PRD.MD                    # what you are making and why
├── TECH_STACK.MD or BUILD_PLAN.MD
├── SPEC_SHEET.MD · PACKAGING.MD · COPY.MD · CAMPAIGN.MD · SERVICE_BLUEPRINT.MD · UI.MD · DESIGN.MD ...
├── FIRST_BUILD.MD            # which tool/vendor, the prompt to paste, what to bring back
├── prototype/                # the artifact itself: HTML, SVG, images, STL/OpenSCAD, deck, scripts, photos
└── prototype-v1.md           # lane, hypothesis, pass, test plan, results (then prototype-v2.md ...)
```

Works for any product: an app, a web page, a device, a pack and samples, a garment, a campaign, a
service run by hand. If a project outgrows this folder (a large codebase, team contributors), it
graduates to its own repo — link back from here.
