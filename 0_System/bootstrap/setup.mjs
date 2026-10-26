#!/usr/bin/env node
// setup.mjs — cross-platform onboarding entry point for Founder OS.
//
// Run once after cloning:
//   node 0_System/bootstrap/setup.mjs
//
// What it does:
//   1. Creates CLAUDE.md and GEMINI.md → AGENTS.md (symlink on Mac/Linux, generated copy on Windows)
//      so Claude Code and Gemini-based tools read the same instructions Codex reads from AGENTS.md
//   2. Links every skill flat into .agents/skills/<name> (Codex, Antigravity, Gemini CLI) and
//      .claude/skills/<name> (Claude Code), because those tools only look one folder deep
//   3. Runs non-fatal readiness checks: node version, git
//   4. Prints next steps
//
// Safe to re-run: CLAUDE.md is recreated each time (idempotent). No persistent state.
// Uses node:fs, node:path, node:url only — no shell-isms, no child_process.

import { existsSync, readFileSync, writeFileSync, symlinkSync, unlinkSync, lstatSync, readdirSync,
         mkdirSync, rmSync, readlinkSync } from 'node:fs';
import { join, dirname, delimiter, relative } from 'node:path';
// node:url is required for cross-platform file:// → OS path conversion.
// import.meta.dirname is not available on the Node 18 floor; fileURLToPath is.
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// 1. Resolve repo root
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
// bootstrap/ is at <repo-root>/0_System/bootstrap/
const REPO_ROOT  = join(__dirname, '..', '..');

const agentsPath = join(REPO_ROOT, 'AGENTS.md');

// ---------------------------------------------------------------------------
// 2. Instruction-file aliases — AGENTS.md is the source; Codex, Cursor, Copilot, Windsurf and
//    Antigravity read it directly, Claude Code reads CLAUDE.md, Gemini CLI reads GEMINI.md.
//    Symlink on Mac/Linux, generated copy on Windows (symlinks need elevated rights there).
// ---------------------------------------------------------------------------
if (!existsSync(agentsPath)) {
  console.error('✗ AGENTS.md not found — cannot create CLAUDE.md / GEMINI.md');
  process.exit(1);
}

const platform = process.platform; // 'darwin' | 'win32' | 'linux'

for (const alias of ['CLAUDE.md', 'GEMINI.md']) {
  const aliasPath = join(REPO_ROOT, alias);
  // Remove any existing alias (file or symlink) so re-runs are idempotent.
  if (existsSync(aliasPath) || isLink(aliasPath)) unlinkSync(aliasPath);

  if (platform !== 'win32') {
    try {
      symlinkSync('AGENTS.md', aliasPath);
      console.log(`✓ ${alias} symlinked to AGENTS.md`);
    } catch (err) {
      writeCopy(aliasPath);
      console.log(`✓ ${alias} generated (symlink failed: ${err.code ?? err.message} — copy fallback)`);
    }
  } else {
    writeCopy(aliasPath);
    console.log(`✓ ${alias} generated (Windows copy fallback)`);
  }
}

// ---------------------------------------------------------------------------
// 2b. Skill links — skills live in buckets (.agents/skills/founder-os/<skill>/), but agent tools
//     discover skills only at <skills-dir>/<skill>/SKILL.md. Link each skill flat so it is a
//     native skill everywhere. Links are generated and gitignored; real files never move.
// ---------------------------------------------------------------------------
linkSkills();

// ---------------------------------------------------------------------------
// 3. Non-fatal readiness checks (warn only — nothing exits on failure)
// ---------------------------------------------------------------------------

// Node version: must be ≥18 for this setup script (the future local-rag MCP server also needs it).
const nodeVersion = process.versions.node; // e.g. "20.11.0"
const nodeMajor   = parseInt(nodeVersion.split('.')[0], 10);
if (nodeMajor >= 18) {
  console.log(`✓ Node ${nodeVersion}`);
} else {
  console.warn(`⚠ Node ${nodeVersion} detected — Node 18+ is required for this setup script.`);
  printNodeInstallHint();
}

// git: probe PATH for the binary, no subprocess.
const pathDirs = (process.env.PATH || '').split(delimiter);

checkBinary('git', ['git', 'git.exe'], () => {
  console.warn('⚠ git not found in PATH.');
  if (platform === 'win32') {
    console.warn('  Install: winget install --id Git.Git -e --source winget');
    console.warn('  Then open a NEW terminal so PATH refreshes.');
  } else if (platform === 'darwin') {
    console.warn('  Install: brew install git   (or xcode-select --install)');
  } else {
    console.warn('  Install: sudo apt install git   (or your distro package manager)');
  }
});

// ---------------------------------------------------------------------------
// 4. Next steps
// ---------------------------------------------------------------------------
console.log(`
Setup complete. Next:
  • Open the repo in your agent (Claude Code, Codex, Google Antigravity, Cursor, Gemini CLI, etc.).
    It reads AGENTS.md (or the CLAUDE.md / GEMINI.md alias) automatically. Then say "get me started."
  • Skills are linked for each tool above; the find-skills skill also lists them by name.
  • Restart your agent session if it was already open, so it picks up the new skill links.
  • Drop raw discovery data into 5_Library/sources/raw/, then run the ingest-sources skill to
    process it into the pipeline.
  • Ground-truth context lives in 0_User/ (founder profile) and 0_Company/ (company context) —
    skills read from there; the bootstrap interview builds those files on first run.`);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Write a generated copy of AGENTS.md to targetPath.
 * Used as a Windows fallback (and non-Windows EPERM fallback).
 */
function writeCopy(targetPath) {
  const agentsContent = readFileSync(agentsPath, 'utf8');
  const claudeContent =
    '<!-- GENERATED FROM AGENTS.md by 0_System/bootstrap/setup.mjs — DO NOT EDIT. -->\n' +
    '<!-- Edit AGENTS.md and re-run setup.mjs instead. -->\n' +
    '\n' +
    agentsContent;
  writeFileSync(targetPath, claudeContent, 'utf8');
}

/**
 * Scan PATH for any of the given file names.
 * Pure fs — no subprocess.
 */
function checkBinary(label, names, onMissing) {
  const found = pathDirs.some(dir =>
    names.some(name => existsSync(join(dir, name)))
  );
  if (found) {
    console.log(`✓ ${label} found`);
  } else {
    onMissing();
  }
}

function printNodeInstallHint() {
  if (platform === 'win32') {
    console.warn('  Install: winget install --id OpenJS.NodeJS.LTS -e --source winget');
    console.warn('  Then open a NEW terminal so PATH refreshes.');
  } else if (platform === 'darwin') {
    console.warn('  Install: brew install node');
  } else {
    console.warn('  Install: https://nodejs.org/en/download  (use LTS)');
  }
}

function isLink(p) {
  try { return lstatSync(p).isSymbolicLink(); } catch { return false; }
}

/** Every SKILL.md under .agents/skills/ → [{ name, dir }], skipping symlinked duplicates. */
function findSkills() {
  const root = join(REPO_ROOT, '.agents', 'skills');
  const found = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue; // symlinks report isSymbolicLink, so generated links are skipped
      const sub = join(dir, entry.name);
      const skillFile = join(sub, 'SKILL.md');
      if (existsSync(skillFile)) {
        const m = readFileSync(skillFile, 'utf8').match(/^name:\s*["']?([^\s"']+)["']?\s*$/m);
        found.push({ name: m ? m[1] : entry.name, dir: sub });
      }
      walk(sub);
    }
  };
  walk(root);
  return found;
}

/**
 * Link each skill flat into the two places agent tools look:
 *   .agents/skills/<name>  — Codex, Google Antigravity, Gemini CLI
 *   .claude/skills/<name>  — Claude Code
 * Re-runnable: only symlinks this script made are replaced; real folders are never touched.
 * Windows uses directory junctions (no admin rights needed).
 */
function linkSkills() {
  const skills = findSkills();
  const targets = [join(REPO_ROOT, '.agents', 'skills'), join(REPO_ROOT, '.claude', 'skills')];
  const linkType = platform === 'win32' ? 'junction' : 'dir';
  const agentLinks = new Set(); // only links made inside .agents/skills need a .gitignore line
  let made = 0, failed = 0;

  for (const base of targets) {
    mkdirSync(base, { recursive: true });
    // Drop stale links from earlier runs (skill renamed or removed).
    for (const entry of readdirSync(base, { withFileTypes: true })) {
      if (entry.isSymbolicLink() || (platform === 'win32' && isLink(join(base, entry.name)))) {
        unlinkSync(join(base, entry.name));
      }
    }
    for (const { name, dir } of skills) {
      const linkPath = join(base, name);
      if (existsSync(linkPath) || isLink(linkPath)) continue; // a real skill folder already sits here (e.g. find-skills)
      try {
        // Windows junctions need an absolute target; elsewhere a relative one survives moving the repo.
        const target = platform === 'win32' ? dir : relative(base, dir);
        symlinkSync(target, linkPath, linkType);
        if (base === targets[0]) agentLinks.add(name);
        made++;
      } catch (err) {
        failed++;
        console.warn(`⚠ Could not link skill ${name} into ${relative(REPO_ROOT, base)}: ${err.code ?? err.message}`);
      }
    }
  }
  if (made) console.log(`✓ ${skills.length} skills linked for Claude Code (.claude/skills) and Codex / Antigravity / Gemini CLI (.agents/skills)`);
  if (failed) console.warn('  Skills still work without links: your agent can read them via find-skills.');
  updateGitignore([...agentLinks].sort());
}

/** Keep a generated block in .gitignore listing the links, so they are never committed. */
function updateGitignore(names) {
  const file = join(REPO_ROOT, '.gitignore');
  const begin = '# >>> generated skill links (setup.mjs — do not edit this block)';
  const end = '# <<< generated skill links';
  let text = existsSync(file) ? readFileSync(file, 'utf8') : '';
  const block = [begin, '.claude/skills/', ...names.map((n) => `.agents/skills/${n}`), end].join('\n');
  const re = new RegExp(`${begin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end}`);
  text = re.test(text) ? text.replace(re, block) : text.replace(/\n*$/, '\n\n') + block + '\n';
  writeFileSync(file, text, 'utf8');
}
