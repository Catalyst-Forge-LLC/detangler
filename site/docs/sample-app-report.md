---
title: Sample app report
---

A comb of [Smell Check](https://smellcheck.dev) on 2026-08-26. The object is a skill-and-site product after many passes. The report is the comb as written. What follows the findings is what happened after.

**After the comb**

- **F-001–F-005** worked. The pocket card now points at paths that survive the copy. AppFacts dropped the missing png. SkillFacts matched the package version and the files in the zip. `core.md` says the pocket card ships on npm, not in the zip.
- **F-006** left. `cursor-skill` is the SkillFacts kind, not the install story.
- **F-007** left. The Files table is the index. The raw-link line is incomplete, not broken.
- **F-008 / F-009** left on purpose. Short `/install` and `/skill` pages that restate dest dirs are the house skill-page shape. Docs is the long copy.

This is not a living issue list. A [draft sample](/docs/sample-report) sits next to it.

# Detangler report — Smell Check (app)

18 surface nodes. 5 contracts. 5 entities. 2026-08-26T17:50:00Z.

Job (from what shipped): An installable writing rule set for AI agents — editorial rules for prose that says something instead of sounding like it.

Broken: 5. Intentional but verify: 1. Judgment calls: 3.

## Broken

1. **F-001** · **c1** Wire project — route_orphan
   `rules/cursor.mdc` links `./core.md`, `./audit.md`, `./civic.md`, and the other siblings. Install step 1 copies that file to `.cursor/rules/smellcheck.mdc`. Those relatives no longer resolve.
   Action: Point the pocket card only at paths that survive the copy (`node_modules/smellcheck/rules/…` or the public `/rules/` URLs), or ship a copy-dest variant without sibling links.
   Evidence: After the advertised copy, `.cursor/rules/core.md` is not on disk. Step 2 tells the agent to open `node_modules` instead. The links in the copied file stay false.

2. **F-002** · **a4** APP_FACTS.png — docs_drift
   `APP_FACTS.md` says to scan `APP_FACTS.png`. The file is not in the repo. GitHub returns 404 for `…/blob/main/APP_FACTS.png`.
   Action: Add the image next to `APP_FACTS.md`, or drop the scan line and keep the viewer link only.
   Evidence: README and the site footer send people to this label. The markdown pointer is still there. The png is not.

3. **F-003** · **a3** package version — ssot_conflict
   npm `package.json` is `0.1.8`. `skills/smellcheck/SKILL_FACTS.md` still says `0.1.6` in the frontmatter and in the table.
   Action: Make the SkillFacts version match the package, or remove version from the label if it is not kept in lockstep.
   Evidence: Footer and README treat SkillFacts as the skill nutrition label. Two shipped numbers disagree.

4. **F-004** · **a5** SkillFacts bundled list — docs_drift
   SkillFacts lists bundled artifacts as `rules/core.md`, `rules/audit.md`, `rules/claims.md` only. The skill zip and `skills/smellcheck/rules/` also ship the six genre files.
   Action: List every file the zip contains, or say “core plus genre files” so the label matches the folder.
   Evidence: A reader of the footer label will under-count what the skill folder is. The zip has ten files.

5. **F-005** · **e1** Rule — copy_see_x
   `core.md` says cursor.mdc is also in this package. The skill zip copies that sentence and omits `cursor.mdc` (Skill page: “That file is not in the skill ZIP”).
   Action: Qualify the inventory so it stays true in both the npm tree and the skill copy (“pocket card ships in `rules/` on npm; download it separately from the zip”).
   Evidence: Identical `core.md` in `rules/` and in the zip. Surrounding files differ. The sentence is true in one tree and false in the other.

## Intentional but verify

1. **F-006** · **a7** skill kind — docs_drift
   SkillFacts `kind` is `cursor-skill`. The Skill page is zip-first and names claude.ai upload, Claude Code paths, and Cursor.
   Action: Confirm the label should stay Cursor-specific, or change `kind` so it matches the hosts the Skill page already lists.
   Evidence: Same skill folder. The nutrition label names one host. The install surface names three.

## Judgment calls

1. **F-007** · **r2.5** `/docs/files` — nav_stale
   The Files table lists every rule file. The “Raw on this host” line links core, audit, claims, civic, academic, and cursor.mdc, and skips essays, landing, outreach, and launch. Those four still 200 at `/rules/…`.
   Action: Link every hosted file, or drop the raw line and let the table be the index.
   Evidence: Civic and academic were added to the link line. The middle genre files are on disk and on the host, just not in that sentence.

2. **F-008** · **r3** `/install` — sibling_surface
   `/install` and `/docs/install` share a title and the same five Agent setup steps. The docs page then adds the file table and the Node snippet. The short page restates the whole list and adds a pointer at the end.
   Action: Keep `/docs/install` as the Install job. On `/install` leave `pnpm` and a pointer. Do not restate the five steps.
   Evidence: Both pages copy the same numbered list. Docs has new work. Short does not.

3. **F-009** · **r4** `/skill` — sibling_surface
   `/skill` and `/docs/skill` are near-copies: zip, clone, npm, skills directories, pocket card, one-off URLs, “what you say.”
   Action: Keep `/docs/skill` as the Skill job. On `/skill` leave a pointer (and the zip link if that is the door). Cut the restated body.
   Evidence: The short page already says “Full guide: docs.” It then repeats the guide. Nav still points at `/skill` and `/install`, not at `/docs/…`.

## App map

Job: An installable writing rule set for AI agents — editorial rules for prose that says something instead of sounding like it.

### Surface
- **r1** `/` Home — smell, earn-the-word, package file table
  - **r2** `/docs/` Docs
  - **r2.1** `/docs/` Introduction — what it is, two hooks
  - **r2.2** `/docs/install` Install (docs) — npm, overlay, file table, Node
  - **r2.3** `/docs/skill` Skill (docs) — zip, clone, npm, pocket card
  - **r2.4** `/docs/overlay` Overlay — what a project file may contain
  - **r2.5** `/docs/files` Files — inventory of `rules/`
  - **r2.6** `/docs/node` Node — `readRule`, no publish from agents
- **r3** `/install` Install (short) — five setup steps
- **r4** `/skill` Skill (short) — zip-first
- **r5** `/posts` Posts
  - **r5.1** `/posts/name-the-thing` Name the thing
  - **r5.2** `/posts/dont-copy-the-bans` Don't copy the bans
- **r6** `/about` About — spray metaphor, names
- **r7** `/skills/smellcheck.zip` Skill zip
- **r8** `/rules/` Raw rule host (`core.md` … `cursor.mdc`)
- **r9** `/rss.xml` RSS
- **r10** `/writing` Redirect to `/posts`

### Contracts
- **c1** Wire project — `pnpm add -D smellcheck` → copy pocket card → overlay → point at `core.md`
- **c2** Load skill — zip, clone, or npm copy of `skills/smellcheck/` into a skills directory
- **c3** Spray / publish pass — agent reads core + overlay, then audit or claims
- **c4** One-off — point an agent at the raw `/skills/…/SKILL.md` and `/rules/…` URLs
- **c5** readRule — Node import of catalog markdown from the package

### Entities
- **e1** Rule — `core.md`, genre files, `audit.md`, `claims.md`; created in the package; listed on Files
- **e2** Overlay — written in the consuming project; not a file this package ships
- **e3** Skill folder — `SKILL.md` plus `rules/*.md`; no `cursor.mdc`
- **e4** Pocket card — `rules/cursor.mdc`; copied to `.cursor/rules/smellcheck.mdc`
- **e5** Package — npm `smellcheck`; no `bin`

### Authority
- **a1** canon — skill and pocket card say `core.md` wins if a digest conflicts
- **a2** pocket card path — sibling links in `rules/` vs after copy into `.cursor/rules/`
- **a3** package version — `package.json` `0.1.8` vs SkillFacts `0.1.6`
- **a4** APP_FACTS.png — named in `APP_FACTS.md`; missing on disk
- **a5** SkillFacts bundled list — three files vs ten in the zip
- **a6** file inventory in `core.md` — names `cursor.mdc`; skill zip omits it
- **a7** skill kind — SkillFacts `cursor-skill` vs Skill page hosts

## Deferred strand notes

2 file-level notes captured, not listed (label LLC vs short name; AppFacts `type: library`).
