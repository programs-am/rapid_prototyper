# OS detection & agent file links (Step 0 detail)

## Instruction files and skill links

Agent tools read different filenames. `AGENTS.md` is the single source of truth; `0_System/bootstrap/setup.mjs`
creates the rest, all gitignored (generated plumbing, not content):

| File or folder | Read by | How it is made |
|---|---|---|
| `AGENTS.md` | Codex, Antigravity, Cursor, Copilot, Windsurf | the real file |
| `CLAUDE.md` | Claude Code | symlink to `AGENTS.md` (generated copy on Windows) |
| `GEMINI.md` | Gemini CLI (and Antigravity as a fallback) | symlink to `AGENTS.md` (generated copy on Windows) |
| `.claude/skills/<name>` | Claude Code | symlink to the skill folder |
| `.agents/skills/<name>` | Codex, Antigravity, Gemini CLI | symlink to the skill folder (junction on Windows) |

Skills live in buckets (`.agents/skills/founder-os/<skill>/`) but tools only look one folder deep,
which is why the flat links exist.

If Node isn't available, create the aliases directly:

- **Mac/Linux:** `ln -sf AGENTS.md CLAUDE.md && ln -sf AGENTS.md GEMINI.md`
- **Windows (PowerShell, as admin):** `New-Item -ItemType SymbolicLink -Name CLAUDE.md -Target AGENTS.md` (repeat for `GEMINI.md`)

Without the skill links nothing breaks: ask the agent to "use find-skills" and it reads the `SKILL.md`
files from disk. The links only make the skills register natively.

## Detect OS

- **Mac:** `uname -s` returns `Darwin`
- **Linux:** `uname -s` returns `Linux`
- **Windows:** `$env:OS` returns `Windows_NT` (PowerShell), or `ver` shows a Windows version.
  **Do not assume WSL or Git Bash** — founders on Windows may be in plain PowerShell or a desktop
  agent app with no Unix shell.

State what you detected and confirm before proceeding. Every OS-specific command branches on this.
