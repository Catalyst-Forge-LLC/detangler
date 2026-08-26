# Detangler: Build Specification

Version 0.3. Product spec.

Package: `detangler` on npm. Site: detangler.dev. Sibling of aiBreze (aibreze.com).

## 0. Name and metaphor

A hair detangler works on the whole head of hair, not strand by strand. You comb through large swaths, find where the knots are, and work them out. That is the exact split this tool is built on: it combs the document as a whole rather than editing single sentences.

The metaphor carries the design, so state it everywhere the product is described:

- **Swaths, not strands.** Sections, cross-references, argument flow, and repetition are the swaths. Sentences are the strands. Detangler only combs swaths. Strand work is line editing and belongs to a different pass with different eyes.
- **Comb first, then work the knots.** The comb pass finds and locates knots. Working them out is a separate action. In product terms: the **detangler** skill is the comb pass (an agent reads it and writes `report.md`); **detangler-apply** works approved findings. Neither rewrites the draft until the author asks for apply.
- **Family resemblance.** aiBreze is the spray that removes AI smells. Detangler is the next bottle on the shelf: comb a draft that has been worked over and list what the editing left behind. Same register, different job. Same shape: a skill an agent reads, not a command that calls a model.

Header lockup: *A structural pass for drafts that have been worked over.*

Hero may still use: *Combs the whole document, not single strands.* That line is opaque in the header by itself.

Product shape: two skills. npm `detangler` ships the folders. There is no command-line comb.

Naming rule for the codebase and docs: use "Detangler" alone. Drop "Prose" except where the domain is not obvious from context, such as the npm description or a first mention on an unfamiliar page.

## 1. Purpose

Detangler is a structural editing pass for long-form documents that have been worked over — by one person, by several, and especially by an agent. A lot of editing tangles the document: references drift, the argument loses its spine, the same claim appears twice for different reasons, one section grows until it swallows the rest. Cutting or reordering is one cause. Most of the damage is just accumulated edits, each of which looked fine.

It rebuilds the document's outline from the text as it exists, checks that the argument holds together, verifies every internal reference against what is still present, classifies repetition, and reports findings sorted by severity.

The first release produces a report. The skill writes it. It does not rewrite.

It is deliberately not a line editor. Line editing and structural editing use different attention and doing them simultaneously does both badly, especially when previous effort went into sentences. This pass is the hour for load-bearing walls.

One injury it catches is the deletion orphan: a section was removed correctly, but other sections still point at it. That is not the whole job. The same pass finds an argument that later rewrites left behind, a recap of something that no longer happens, a term used after its definition was rewritten out, a section that grew across many sessions. Each edit looks clean in isolation. The tangle only shows when the whole document is combed end to end.

The method is a reverse outline plus a link check. An editor's trick and a software habit, run together as one pass.

## 2. Scope

### In scope

- Markdown, plain text, and HTML input. Docx and PDF are accepted only if converted to Markdown by a pre-step.
- Documents from roughly 800 words up to book-length. Below 800 words the pass adds little. Chunking above roughly 40,000 words is a future extension (Section 7), not this release.
- Single documents. Multi-file document sets are a stated future extension (Section 10).

### Out of scope

- Grammar, word choice, sentence rhythm, tone, or any line-level change.
- Fact checking or external link validation (HTTP checks). Internal references only.
- Automatic rewriting. The comb skill reports. Applying is the separate `detangler-apply` skill (Section 9). Comb first, work the knots later.
- A command-line comb. A CLI was tried and dropped.

## 3. Design principles

1. **Rebuild from the text, never from intent.** The outline is derived from what is on the page. The author's notes, prior outlines, and commit messages are not inputs to the reconstruction step. They may be used later, only for the "intentional but verify" classification.
2. **Findings are a to-do list, not a complaint list.** Every finding has a location, a category, a severity, and a proposed action. Findings without a proposed action are dropped.
3. **Classify before flagging.** Repetition, forward references, and section imbalance all have legitimate uses. The tool must say what job the pattern is doing before it says the pattern is a problem.
4. **The agent reading the skill is the judgment.** There is no command-line comb and no model API. Outline, references, argument, repetition, and weight are the hour in `skills/detangler/SKILL.md`.
5. **Swaths, not strands.** The tool refuses to emit line-level suggestions even if the model notices them. A line-level observation is a count at the end of the report, not a list.

## 4. The hour

The agent runs four scopes, then writes `report.md`. There are no intermediate JSON artifacts and no stage to rerun. The report is the deliverable.

### Reverse outline

Parse headings into a tree. Ids are `s1`, `s1.2`, from heading order. Do not invent ids. If there are no headings, treat the whole file as `s1` and say the outline is inferred.

For each node, a one-sentence claim from that section's own text only. Record word count, heading, claim.

Every heading appears exactly once. Claims do not borrow material from other sections.

### Argument

For every outline node: what question does this section answer, and did the previous section raise it? First node: `raised_by_previous` is `—`. After that, `no` is `spine_break`, `broken`. Three or more `no`/`partial` in a row is `spine_drift`, `broken`. `partial` alone (`spine_weak`) stays out of the default report.

### References

Treat it like a linker resolving symbols.

Build a definition table: headings, explicit anchors, figure and table captions, footnote labels, numbered items, and defined terms. A term is defined when the text introduces it with a definitional pattern: "X is", "X, which", "we call this X", "X (also known as Y)", bold or italic on first use, or a glossary entry.

Build a reference table: "see Section 2", "Figure 3", "the Resources section", "Appendix B"; relative pointers (`above`, `as we saw`); uses of a defined term before its definition or after the definition is gone; count promises ("three reasons").

Resolve each reference:

- `resolved`: target exists and is in the expected direction.
- `orphan`: target does not exist. Deletion-orphan. Always `broken`.
- `misdirected`: target exists but the pointer is the wrong way or the wrong number.
- `forward_undefined`: a term is used before it is defined, with no prior gloss.
- `count_mismatch`: promised count does not match.
- `ambiguous`: two or more plausible targets. Report both.

If headings are numbered, they must be contiguous and in order.

Rules: `skills/detangler/references/reference-patterns.md`.

### Repetition

Find near-verbatim passages, same-claim pairs, and the same example used twice. For each pair, name the job of each instance, then assign exactly one class:

- `reinforcing`: the reader plausibly needs the reminder. Keep, or `judgment_call` at most.
- `bridging`: restates a prior claim to connect new material. Keep if the new material follows in the same section. Otherwise `judgment_call`.
- `framing`: introduction and conclusion restate the thesis. No finding unless they contradict, which is `broken`.
- `redundant`: both instances do the same job with nothing new between them. `judgment_call`. Recommend which instance to cut from which position is load-bearing.
- `contradictory`: the claims conflict. `broken`.
- `stale_edit`: near-verbatim except a fact, number, or qualifier that one instance updated. `broken`.

A finding that cannot name the job of each instance is not emitted. Classes: `skills/detangler/references/repetition-classes.md`.

### Weight

A top-level section more than about 2.5× the median top-level section is `section_bloat`, `judgment_call`, unless it is meant to be the centerpiece. A section under 0.3× the median that three or more others reference is underweight. A section nothing else references, with `no` on both joints, is detachable.

### Severity

Three buckets. Rubric: `skills/detangler/references/severity-rubric.md`.

- `broken`: wrong as written. Orphans, count mismatches, contradictions, stale edits, heading gaps, spine breaks. Must fix.
- `intentional_but_verify`: plausibly deliberate. Confirm it.
- `judgment_call`: reasonable people would differ.

Sort by severity, then by document position. If the same location produces two findings, merge them.

A false `broken` costs more than a missed `judgment_call`.

## 5. Finding shape

Every finding uses this shape. The report is markdown; this is the fields, not a file on disk.

```json
{
  "id": "F-014",
  "severity": "broken",
  "type": "reference_orphan",
  "location": {
    "node_id": "s4.2",
    "quote": "see the Resources section for the full list",
    "approx_line": 212
  },
  "evidence": [
    "No heading matching 'Resources' exists in the current outline.",
    "Nearest surviving neighbor is s5 ('Limitations')."
  ],
  "job_analysis": null,
  "action": "Delete the cross-reference, or restore a Resources section, or repoint to s5 if the list moved there."
}
```

`job_analysis` is required for repetition findings and null elsewhere. `action` is always required and always phrased as something the author can do.

## 6. Report format

`report.md` is what the author reads. Shape: `skills/detangler/references/report.md`.

1. **Header:** document name, word count, section count, timestamp, totals by severity.
2. **Broken.** Numbered list. Each item: id, location, type, quote, action, evidence.
3. **Intentional but verify.** Same format.
4. **Judgment calls.** Same format.
5. **Reverse outline.** Nested list with claim summaries from the text as it stands.
6. **Argument spine.** Section, question it answers, whether the previous section raised it.
7. **Deferred line notes.** One sentence with a count, or none. No list.

Empty buckets say `None.` The report never uses the words "issue" or "problem" as headings.

## 7. Chunking for long documents

Not in this release. When it ships, above roughly 40,000 words:

1. Outline per chapter or top-level section, then merge.
2. Definition table across the whole document first. Deletion orphans cross chunk boundaries, so that table is never chunk-local.
3. Near-verbatim and same-claim run on the whole outline, then drill into text only for candidate pairs.
4. Argument runs on the merged outline.

## 8. Sample drafts

`fixtures/` are tangled drafts for trying the skill. Each folder has `input.md`. `expected.json`, where present, names the injected faults. Nothing here is a command-line corpus.

| Folder | Injected fault | What the skill should catch |
|---|---|---|
| `orphan-section` | Delete a section that two others reference by name | `reference_orphan`, broken |
| `orphan-term` | Delete the paragraph that defines a term used later | `forward_undefined` or `reference_orphan` on later uses |
| `renumber-miss` | Delete Section 3 without renumbering 4 to 6 | `heading_gap`, plus `misdirected` on any "see Section 5" |
| `count-drift` | Change "three reasons" to list four | `count_mismatch` |
| `stale-fact` | Update a number in one place but not its restatement | `stale_edit`, broken |
| `reinforcing-ok` | Legitimate recap after a long digression | No broken finding; at most `judgment_call` |
| `spine-gap` | Reorder two sections so a question is answered before it is raised | `spine_break` |
| `clean` | No injected faults | Zero `broken` findings |

A false `broken` on `clean` is a miss of the product.

## 9. Skill packaging

The skill **is** the comb pass. An agent reads it and writes `report.md`. npm ships the folders. No command-line comb, no Python scripts, no model API.

```
skills/detangler/
├── SKILL.md
└── references/
    ├── report.md
    ├── reference-patterns.md
    ├── repetition-classes.md
    └── severity-rubric.md
skills/detangler-apply/
├── SKILL.md
└── references/
    └── apply.md
```

**SKILL.md description** (make it pushy; agents undertrigger): "Detangler combs the whole document, not single strands. Structural editing pass for long drafts after a lot of edits — the user's, a collaborator's, an agent's. Finds what the editing tangled: orphaned references, argument gaps, stale repetition, sections that have grown out of proportion. Use when a long draft has been edited a lot (especially with an agent or by more than one person), when the user asks whether it still hangs together, mentions tangled structure, orphaned references, stale repetition, or a draft that no longer tracks after many passes, asks for a reverse outline, or wants a structural rather than line-level edit. Trigger even if they only say 'does this still make sense' about a long document. Not for grammar, tone, a one-paragraph email, chat-only, line editing, or applying a report."

**SKILL.md body:** the hour (locate draft, extract outline, four scopes, write `report.md`, stop), pointers to the reference files, refuse apply in the description, name the sibling skill only in the body.

`detangler-apply` works only the knots the author has approved, one finding at a time, then re-runs the comb. Chat-only approval. Unnamed apply means every `broken` finding, then ask.

## 10. Future extensions

Not in the first build. Listed so the method does not preclude them.

- Multi-file document sets: references that cross file boundaries. The definition table would need a file field.
- Diff mode: two versions, report only findings introduced between them.
- Reader-question model: the questions a reader carries into each section, so `spine_break` can say which question was abandoned.
- Term glossary export: the definition table is already a glossary; emit it as one.

## 11. Open decisions

1. Near-verbatim thresholds (0.25 edit distance, 0.6 shingle overlap) are guesses. Tune in use.
2. `spine_weak` (`partial`) stays out of the default report.
3. An optional author-supplied intended outline ("what you meant vs what you wrote") is out of scope. If added later, it must not leak into the reverse outline.
