# 0_System — Repo Engine

The machinery that makes this workspace work. Founders rarely need to open this folder —
the bootstrap and skills drive everything.

## What's here

| Path | Purpose |
|---|---|
| `bootstrap/setup.mjs` | Links `CLAUDE.md` and `GEMINI.md` → `AGENTS.md`, links every skill flat into `.claude/skills/` and `.agents/skills/` so Claude Code, Codex, Antigravity and Gemini CLI find them natively (symlinks on Mac/Linux, junctions or copies on Windows), + environment readiness checks (Node, git). Cross-platform, dependency-free Node. Safe to re-run. |
| `scripts/scan-skills.py` | Regenerates `.agents/skills/skills.json` (a slim `{name, path, enabled}` registry) from the SKILL.md files on disk. Run after adding or removing a skill: `python3 0_System/scripts/scan-skills.py` |
| `scripts/parse-sources.py` | Tiered `raw/ → processed/` converter (the `ingest-sources` engine). Auto-uses the best converter installed (Docling → MarkItDown → built-in text/CSV; stubs the rest), mirrors subfolders, and **recommends installs but never runs them**. `--plan` dry-runs the analysis; `--force` reconverts. `python3 0_System/scripts/parse-sources.py` |

## How the pieces fit

- **`AGENTS.md` is the source of truth.** `CLAUDE.md` and `GEMINI.md` are **symlinks to `AGENTS.md`**
  (created by `setup.mjs`; Windows falls back to a generated copy), and are gitignored. Edit
  `AGENTS.md`, re-run setup, never hand-edit the aliases.
- **Skills are stored in buckets, linked flat.** Agent tools look for `<skills-dir>/<skill>/SKILL.md`,
  one level deep, so `setup.mjs` symlinks each bucketed skill into `.agents/skills/` (Codex,
  Antigravity, Gemini CLI) and `.claude/skills/` (Claude Code). The links are generated and gitignored
  (a managed block in `.gitignore` lists them). Add a skill, run `scan-skills.py` then `setup.mjs`.
- **Skills are auto-discovered** from `.agents/skills/` (each `SKILL.md`). The frontmatter is the
  source of truth for what a skill does and when it fires. The manifest (`skills.json`) is a slim
  registry — it records `name`, `path`, and `enabled` state only (no descriptions, so it can't go
  stale); `scan-skills.py` preserves enabled flags when it rescans.
- **No servers, no background processes.** This repo is plain files; everything runs
  inside the agent session.

This engine descends from the WNCP AI Founder OS workspace — see `NOTICE.md` at the repo root.
