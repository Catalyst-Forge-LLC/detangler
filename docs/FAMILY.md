# Detangler family

**Status:** app skills drafted; not dogfooded  
**Updated:** 2026-08-26

Draft (prose) comb law: [`GENESIS.md`](./GENESIS.md). Stack: [`PHASE_1_BRIEF.md`](./PHASE_1_BRIEF.md). If they drift on the draft comb, GENESIS wins. This file owns the family, the app variant, and the next public proof.

Do not fold the two combs into one skill.

---

## 1. What is locked

A real failure mode, not a rewriter. Each pass looked fine. The thing tangled. Grammar tools do not see it. A full-document “improve this” agent usually makes it worse.

**Shared philosophy** (both variants):

- Comb the whole artifact, not single strands.
- Write a report. Do not rewrite.
- Three finding kinds: **broken** / **intentional but verify** / **judgment call**.
- Apply is a second pass, one approved finding at a time.
- Cosmetic work stays out.
- Findings point at the **map**, not at sentences or file internals. No map node → not a finding.
- Rebuild the map from what shipped, never from intent or the roadmap.
- A false `broken` costs more than a missed `judgment_call`.

**Family resemblance.** [aiBreze](https://aibreze.com) sprays smell off prose. Detangler finds what editing left behind. Same shelf, different bottle. Same shape: a skill an agent reads, not a command that calls a model.

**Voice.** Short sentences. No hype. Site as a small press, not a SaaS funnel. Header lockup names the job. The comb line may sit under a hero; it is opaque next to the name alone.

**Name.** `Detangler` is the family. Variants:

| Folder | Object |
| --- | --- |
| `detangler` + `detangler-apply` | Drafts (prose) |
| `detangler-app` + `detangler-app-apply` | Programs (apps, sites, iterated products) |

No second brand. No second npm package. One package, `detangler`, ships the skill folders. Two modes are two pairs of folders, not two registries. Copy the pair you need. Keywords and the README name both modes so a developer does not think the package is drafts-only.

Hair products own the search term. That is accepted. A new name before either variant has a public sample report only splits attention.

**Consultancy shelf.** Catalyst Forge will list Detangler (and the rest of the shelf) on the consultancy site. That is acknowledgment, not a second product page. Do it when CF is ready; do not block the sample report on it.

**Apply stays conservative.** Chat-only approval. Unnamed apply = every `broken` finding, in report order, then ask. Never unnamed-apply `judgment_call`. One finding at a time. No drive-by rewrite of neighboring sections. Re-run the matching comb after each finding. Comb is the product. Apply is how you lose the room.

---

## 2. Two combs, one report family

Same metaphor. Different object. A writer feels a repeated paragraph. A user feels two Settings screens that almost agree. Fluency dies because the thing no longer has one reliable shape.

If one skill pretends they are the same, the agent wanders. On a draft it reviews components. On an app it rewrites README prose. The constraint is the product. Split the constraint.

**Shared report schema** (buckets, finding fields, ranking):

- Header, then Broken, Intentional but verify, Judgment calls.
- Then the map (outline or app map).
- Then deferred strand notes as a **count**, not a list.
- Every finding: id, map node, type, severity, evidence, action. No action → drop it.

**Separate:** what you extract as the map, what counts as a tangle, what weight means.

| | Drafts | Programs |
| --- | --- | --- |
| Map | Reverse outline from headings (`s1`, `s1.2`) | Surface, contracts, entities, authority |
| References | Pointers, named sections, counts, terms | Dead routes, nav to missing screens, copy that says “see X”, deep links, clients aimed at removed endpoints |
| Argument | Section questions; did the previous raise it? | Journeys that start and never resolve; a form that collects data no feature consumes; onboarding that promises a capability the app does not have |
| Repetition | Near-verbatim and same-claim, ranked by **job** | Two create-flows, twin settings, parallel schemas for one noun, near-duplicate modules that drifted |
| Weight | Section size vs the document as it stands | One area hypertrophied relative to the product’s **job** (god dashboard, kitchen-sink Settings) |
| Authority | The outline *is* the source of truth | Failed single source of truth — first-class tangle, not a footnote under repetition |
| Strands (refuse) | Line editing, tone, rhythm | Lint, naming, “clean up this file,” implementation style, component internals, performance, security |

---

## 3. Draft comb (ships now)

Law: GENESIS. Skills: `detangler`, `detangler-apply`. npm `detangler`. Site detangler.dev.

The outline at the bottom of the report is load-bearing. Findings already carry `node_id`. Keep it that way. Apply agents that “fix” sentences have left the hour.

**Still unfinished (public proof):**

1. **Sample report on the homepage.** A real 8–12 finding `report.md` plus the outline it extracted, from a comb of a real draft or a fixture run in the open. Not a mocked table. This sells faster than another paragraph about the metaphor. First public proof is “we ran this on X and here is the report.”
2. **Paste-dumb install.** `pnpm add` and “drop the folder in” are correct for people who already have a skills directory. The other half of the audience is editors and spec writers with a long draft and no `skills/` path. One path: download or copy `SKILL.md`, put it *here* (Claude.ai upload, Cursor project skill, a paste block). Widen it. Do not water the product down.
3. **`/install` and `/skill` must not 404.** Nav already points at `/docs/install` and `/docs/skill`. Add redirects (`/install` → `/docs/install`, `/skill` → `/docs/skill`) so old or guessed URLs work. A skill product that 404s on Install is a joke at its own expense.

**The hard part, still the hour:**

- Reference tangles earn trust fast. Deletion orphan is the signature `broken` example, not a rename.
- Repetition ranks by job, not string similarity.
- Argument and weight need the extracted outline, not vibes. “This section grew out of proportion” is relative to the document as it stands. “A question was raised and never answered” is a spine check on outline nodes.

---

## 4. App comb (skills drafted)

Same bottle family. Different comb. Folders: `skills/detangler-app`, `skills/detangler-app-apply`. Do not treat a skill draft as a public sample. Dogfood on a real owned app before the site offers an install path.

### 4.1 The map (the outline equivalent)

Extract from the **shipped** product: running app, routes, nav, copy, schemas, types. Not from the backlog.

1. **Surface** — routes, nav, information architecture, entry points. Ids: `r1`, `r1.2`, or the path.
2. **Contracts** — features as inputs → outputs. What the user can *do*, not what files exist. Ids: `c1`, …
3. **Entities** — nouns the app claims are real (User, Job, Document…) and where each may be created, edited, listed, deleted. Ids: `e1`, …
4. **Authority** — which representation is allowed to be true (schema, types, form, API, copy, docs). Ids: `a1`, …

If a finding cannot point at one of those nodes, it does not belong in the report.

### 4.2 Authority is the invention

In drafts, the outline is the single source of truth. In an app, SSOT is a claim the codebase keeps violating. The same fact defined in three places that disagree is why an app feels untrustworthy even when each screen “works.”

Authority conflicts are first-class findings, not a stretch of “repetition.”

Finding kinds still hold. Two Settings screens can be intentional (user vs admin) → `intentional_but_verify` or `judgment_call`. Broken is “this button goes nowhere.” Judgment call is “bounded context or copy-paste?”

### 4.3 Weight

Needs a theory of what the product is **for**, extracted from what shipped (lockup, first-run, README as it stands). Not from the founder’s intent. A kitchen-sink Settings page is weight only relative to that job.

### 4.4 Failure mode

App detangling wants to become a generic architecture review. That market is full. The cut is the same as drafts:

- accumulated **edit** artifacts (many hands, many agents, many passes)
- whole-product structure
- report first
- do not touch strands (Harden owns security, performance, internals)

If the first dogfood report reads like a junior architect’s slide deck, the constraint leaked. If it is not embarrassing, the variant is real.

### 4.5 Skills and package

```
skills/detangler-app/
├── SKILL.md
└── references/     # map shape, tangle types, authority, report
skills/detangler-app-apply/
├── SKILL.md
└── references/apply.md
```

Description refuses the draft comb and architecture-review-as-roadmap. Name `detangler` only in the body. Add the folders to the existing `detangler` package after the dogfood report exists. Do not publish a second package.

Apply for apps: same conservatism. Do not drive-by refactor a neighboring route.

### 4.6 Where this sits next to ForgeTrail

ForgeTrail is the lifecycle that tries not to create tangles. Detangler is the comb you run when they already exist. The app comb is an instrument in Refine / Align, not an eighth phase and not a competing methodology. Fold it into ForgeTrail and it becomes another prompt pack. Keep it a report-only skill and it stays honest.

---

## 5. Out of scope (both)

- Line editing, lint, rename-the-file, “make this cleaner”
- Fact checking, external HTTP as the product
- Automatic rewrite
- Security, performance, component internals (Harden)
- A second public name
- A second npm package
- Building both variants at once
- Treating the app comb as a feature roadmap

---

## 6. Open decisions

1. **Map id scheme for apps.** Locked: typed ids (`r` / `c` / `e` / `a`) plus the path or noun in the finding, so apply can find the surface.

**Decided.** Consultancy shelf: CF lists the products. npm: one package, folder pairs per mode. Map ids: typed + path/noun.

---

## 7. Build order

Do this in order. Do not start the app comb until 1–3 exist in public.

1. **Redirects.** `/install` → `/docs/install`, `/skill` → `/docs/skill`.
2. **Sample draft report.** Run the shipping comb on a real draft or an owned fixture. Put 8–12 findings plus the outline on the homepage (and a docs page if it helps). That is the first public proof.
3. **Paste-dumb install.** One copy-or-download path for people with no `skills/` directory. Keep npm and folder drop for people who already live there.
4. **Tighten the draft skill** only where the sample report shows a hole: outline nodes on every finding, apply never unnamed-applies judgment calls, deletion orphan as the broken example (already on the site).
5. **Dogfood the app comb** on one iterated app you own. Publish *that* report: surface map, contract inventory, three buckets, authority conflicts first-class. No second landing page until that report exists.
6. **Write the skills** (done in-repo). After a dogfood report exists, ship the folders in the next npm publish and change the site line from “not in the zip” to the install path.

---

## 8. What “done” looks like for the family

- A stranger can install the draft comb without knowing what a skills directory is, and can stare at a real report on the homepage.
- The two combs are two folder pairs in one npm package. They share philosophy and report buckets. They do not share a map.
- Apply remains how you lose the room if it gets greedy. The spec does not let it.
