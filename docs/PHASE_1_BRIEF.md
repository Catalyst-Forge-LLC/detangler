# Detangler — architecture brief

Canonical product spec: [`GENESIS.md`](./GENESIS.md) (draft comb). Family and app variant: [`FAMILY.md`](./FAMILY.md). This file is the stack and repo shape. If they drift on the draft comb, GENESIS wins.

**Status:** current  
**Updated:** 2026-08-26 — two skills, no command-line comb. A CLI was tried and dropped.

---

## 1. What this is

Detangler is a structural editing pass for long drafts that have been worked over — by one person, by several, and especially by an agent. A lot of editing tangles references, argument, repetition, and section weight. Cutting or reordering is one cause, not the job.

The **skill** is the product. An agent reads it and writes `report.md`. npm `detangler` ships the folders. There is no command-line comb.

Family: [aiBreze](https://aibreze.com) is the spray that removes AI smells. Detangler is the next bottle. Same register, different job. Same shape: a skill an agent reads, not a command that calls a model.

**Archetype:** `product`

**v1 done:**

- Comb skill (`detangler`) writes `<stem>.detangler/report.md`.
- Apply skill (`detangler-apply`) works approved findings, one at a time, then re-runs the comb.
- Site at detangler.dev: home, docs (install, skill, report), about.
- npm package ships `skills/` plus a tiny path catalog. No `bin`.

---

## 2. Users and hero flow

**Primary users:** authors, editors, and agents on long Markdown (or converted) drafts after a lot of edits.

**Hero flow:** load the comb skill → agent writes `report.md` (broken, then intentional-but-verify, then judgment calls, then reverse outline and spine) → author decides what to fix, or hands approved findings to apply.

**Also:** install the skill folders; read the site for install and skill copy.

---

## 3. Constraints

- **Technical:** TypeScript ESM, Node ≥20, pnpm. No accounts. Input: Markdown, plain text, HTML. Docx/PDF only via a pre-step. Documents ~800 words to book length.
- **Business:** npm name `detangler` is staked. Domain detangler.dev is registered. The maintainer publishes to npm.
- **Non-goals:** line editing, fact checking, external HTTP link checks, automatic rewrite, multi-file sets, a command-line comb.

**State:** local files only. The draft and `report.md` are the state.

**Exports:** `report.md` is the deliverable. Not a PDF/DOCX product.

**Tenancy:** none.

**Draft text:** fence as data. Do not send it to a project-owned cloud API.

**Live web search:** no.

---

## 4. Stack

| Area | Choice |
| --- | --- |
| Package | Two skill folders + TypeScript path catalog. No `bin`. |
| Language | TypeScript, ESM (`"type": "module"`) |
| Runtime | Node ≥20 |
| Package manager | pnpm |
| DB / auth | none |
| Site | FilePress (`getfilepress`) + Cloudflare Pages |
| Tests | `tsc` + `node --test` on the catalog |
| License | MIT, Catalyst Forge LLC |
| GitHub | Catalyst-Forge-LLC/detangler |

```
detangler/
├── src/                      # skill catalog (paths only)
├── skills/detangler/         # comb pass
├── skills/detangler-apply/   # work approved findings
├── fixtures/                 # sample tangled drafts
├── site/                     # FilePress
├── docs/                     # GENESIS + this brief
└── package.json              # name: detangler, no bin
```

---

## 5. Report shape

The deliverable is `report.md` in `<stem>.detangler/`. Shape: `skills/detangler/references/report.md`.

- **Outline node** — id from heading order (`s1`, `s1.2`). Inferred as `s1` if there are no headings.
- **Finding** — id `F-001`, location, type, severity, evidence, action. No action → drop it.
- **Severity** — broken / intentional but verify / judgment call.
- **Scopes** — references, argument, repetition, weight.
- **Line-level notes** — a count at the end, not a list.

Fixtures in `fixtures/` are sample tangled drafts, not a command-line corpus.

---

## 6. Integrations

| Integration | Purpose |
| --- | --- |
| Hosting agent | Reads the skill. That is the judgment. No provider path, no package API key. |
| FilePress / Wrangler | Marketing site. `pnpm ship`. |
| npm | Package. Maintainer publishes. |

No payments, email, analytics, or search API.

---

## 7. Decisions

**D1.** npm `detangler` + FilePress site + agent skills. Sibling of aiBreze.

**D2.** Comb first, then work the knots. `detangler` writes the report. `detangler-apply` works findings the author approved. Neither rewrites until asked.

**D3.** No accounts, no PocketBase. The document and the report are the state.

**D4.** TypeScript ESM catalog, not a pipeline. House language. aiBreze parity.

**D5.** No command-line comb. A CLI was scaffolded and dropped: the report is agent behavior.

**D6.** One finding shape. No finding without an action. Line-level notes are a count.

**D7.** Site modeled on aiBreze FilePress. Pages and docs speak as the product.

**D8.** `spine_weak` stays out of the default report.

---

## 8. Out of scope (v1)

- Grammar, word choice, sentence rhythm, tone, line-level edits
- Fact checking and external HTTP link checks
- Automatic rewriting of the draft
- Multi-file document sets
- Native docx/PDF parsing
- Accounts, billing, cloud document storage
- A command-line comb
- Diff mode, reader-question model, glossary export (GENESIS §10)
