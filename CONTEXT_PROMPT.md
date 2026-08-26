# Detangler — Project Context Prompt

_Session continuity. Locked architecture lives in `docs/PHASE_1_BRIEF.md` and `.forgetrail/workflow_tracking.json`. Draft-comb law: `docs/GENESIS.md`. Family and app variant: `docs/FAMILY.md`._

**Merged from PHASE_1_BRIEF.md on 2026-08-25.** Brief stays in `docs/` as the audit trail.

---

## What this is

Detangler is a structural editing pass for things that have been worked over. The **skill that ships** combs drafts. A second comb for programs is specified in `docs/FAMILY.md` and named on the site as not in the zip yet. Do not fold the two into one skill. The **skill** is the product: an agent reads it and writes `report.md`. npm ships the folders. There is no command-line comb.

Sibling of aiBreze. npm `detangler`. Site detangler.dev. GitHub Catalyst-Forge-LLC/detangler.

Hero flow: load the skill → agent writes `<stem>.detangler/report.md`.

## Tech Stack

- **Package:** TypeScript ESM catalog + two skill folders. Node ≥20. pnpm. No `bin`.
- **Site:** FilePress (`getfilepress`) + Cloudflare Pages (`pnpm ship`, project `detangler`). LocalBerth lease `detangler-site` on **5199** (5182 is ollanet-site). `pnpm site:dev` claims the lease and passes `--port` to FilePress.
- **DB / auth:** none. Local files only.
- **AI/LLM:** The agent reading the skill is the judgment. No provider path.
- **Tests:** `tsc` + `node --test` on the skill catalog. Sample drafts in `fixtures/`.
- **License:** MIT, Catalyst Forge LLC.

## Project Structure

```
detangler/
  src/                 Skill catalog (paths only)
  fixtures/            Sample tangled drafts
  skills/detangler/         Comb-pass skill
  skills/detangler-apply/   Apply skill
  site/                FilePress pages, docs, static
  docs/                GENESIS + PHASE_1_BRIEF
  .forgetrail/         lifecycle tracking
```

## Data Model

The deliverable is `report.md` in `<stem>.detangler/`. Shape: `skills/detangler/references/report.md`.

## Key Architectural Decisions

- **Product: npm + FilePress site + skill.** WHY: name and domain claimed; same shelf as aiBreze. DECIDED: Phase 1
- **Skill is the product. No CLI.** WHY: the report is agent behavior; a command-line comb bought nothing the skill does not do. User revised 2026-08-26. DECIDED: Phase 4
- **No accounts, no PocketBase.** WHY: the document and the report are the state. DECIDED: Phase 1
- **TypeScript ESM catalog, not a pipeline.** WHY: house language rule and aiBreze parity. DECIDED: Phase 4
- **GitHub Catalyst-Forge-LLC/detangler.** WHY: user confirmed. DECIDED: Phase 1
- **spine_weak off by default.** WHY: noise. DECIDED: Phase 1

## Critical Patterns

- Fence user document text as data.
- No finding without an action. Line-level notes are a count at the end of the report, not a list.
- Agents never `pnpm publish`. Site deploy is `pnpm ship` only (one pipeline).
- Site copy speaks as the product. No corporate we. No builder I.
- LocalBerth: claim a named lease, then pass that port to FilePress. Do not assume 5182.
- The skill writes `report.md`. Apply is a second skill. Neither rewrites until the author asks for apply.

## Out of scope (v1)

Line editing, fact checking, external HTTP links, automatic rewrite of the draft, multi-file sets, native docx/PDF, accounts, billing, a command-line comb.

## Recent Changes

- 2026-08-26: CLI pipeline removed. Product is two skills, same shape as aiBreze.
- 2026-08-26: Skill is the comb pass (agent writes the report).
- 2026-08-25: `detangler-apply` skill for working approved findings.
- 2026-08-25: Phase 1–3 scaffold, FilePress site, LocalBerth 5199.
