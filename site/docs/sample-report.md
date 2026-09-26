---
title: Sample report
---

A comb of [`fixtures/worked-over-note/input.md`](https://github.com/Catalyst-Forge-LLC/detangler/blob/main/fixtures/worked-over-note/input.md). The draft is a cache-invalidation note after many passes. Nothing in the draft was rewritten. Why we wait is not broken merely because Usage did not ask that question. The [app sample](/docs/sample-app-report) is a sibling comb, then what was fixed. A continuity example sits in [`fixtures/reader-continuity/`](https://github.com/Catalyst-Forge-LLC/detangler/blob/main/fixtures/reader-continuity/c02-delayed-payoff.md).

# Detangler report — worked-over-note.md

814 words. 9 sections. 2026-08-26.

Broken: 7. Intentional but verify: 1. Judgment calls: 3.

## Broken

1. **F-001** · **s1** (line 9) — reference_orphan
   see the Resources section
   Action: Restore a Resources heading, or retarget every pointer that names it.
   Evidence: No heading or definition named Resources remains. The same pointer appears in s2, s3, and s6.

2. **F-002** · **s2** (line 19) — reference_orphan
   Figure 1 is the sequence. Table 1 is the field list. Appendix A holds leftover commands
   Action: Restore those artifacts, or delete the sentences that promise them.
   Evidence: No figure, table, or Appendix A heading exists. s9 mentions Appendix A again.

3. **F-003** · **s2** — heading_gap
   ## 1. Purpose … ## 2. Setup … ## 4. Usage
   Action: Insert a ## 3 or renumber 4–10.
   Evidence: Numbered headings skip 3. A common miss after a cut.

4. **F-004** · **s3** (line 23) — misdirected
   See Section 5 if you need the hook itself.
   Action: Point at s5 (How we invalidate), or name the hook section by title.
   Evidence: The heading numbered 5 is Why we wait. The hook is defined in s5 / heading 6.

5. **F-005** · **s7** (line 60) — misdirected
   See Section 2 for the hook that this section assumes is present.
   Action: Point at s5, or drop the pointer.
   Evidence: Section 2 is Setup. It uses CacheHook; it does not define the hook.

6. **F-006** · **s4** (line 29) — count_mismatch
   There are three reasons to wait
   Action: Change the count to four, or drop the fourth item.
   Evidence: The list has four items. The sentence still says three.

7. **F-007** · **s4** (line 36) — stale_edit
   The retry window on the writer path is 30 seconds
   Action: Pick 30 or 90 and make both sentences agree.
   Evidence: s6 says 90 seconds in a near-verbatim recap.

## Intentional but verify

1. **F-008** · **s2** (line 17) — forward_undefined
   Writers call CacheHook after every durable write.
   Action: Confirm the term may appear before s5 defines it, or add a gloss, or move the definition up.
   Evidence: CacheHook is named in Setup. The definition sentence is in s5.

## Judgment calls

1. **F-009** · **s4** (line 38) — repetition_redundant
   after every durable write the process calls the invalidation hook
   Action: Keep the sentence in s5. Cut it from Why we wait, or turn it into a pointer.
   Evidence: s5 is the how. s4 added the same sentence “for clarity.” Same job, adjacent sections.

2. **F-010** · **s8** — repetition_redundant
   Install the CLI, then copy the overlay.
   Action: Keep Setup or Playbook. Cut the other, or make Playbook a pointer to s2.
   Evidence: Playbook covers the same ground as Setup, written later as a “runbook voice.”

3. **F-011** · **s4** — section_bloat
   Why we wait
   Action: Cut the leftover paragraph that exists so the section looks finished, or accept this as the centerpiece.
   Evidence: About 2.5× the median section. The last paragraph says it is leftover from a later editor.

## Reverse outline

- **s1** 1. Purpose (108 words) — This note maps how the writer path invalidates a cache after a durable write.
  - **s2** 2. Setup (119 words) — Install the CLI, copy the overlay, and call CacheHook after each durable write.
  - **s3** 4. Usage (61 words) — Run the comb on a finished draft and keep the report next to the file.
  - **s4** 5. Why we wait (175 words) — Freeze the hook change for four operational reasons, while the lead sentence still says three.
  - **s5** 6. How we invalidate (139 words) — After a durable write the process calls CacheHook; skipping it leaves readers on a stale blob.
  - **s6** 7. Recap (53 words) — Restates the retry window as 90 seconds and the hook sentence.
  - **s7** 8. Limits (55 words) — Multi-region replicas are out; the note reports and does not rewrite.
  - **s8** 9. Playbook (50 words) — Same install-and-run steps as Setup, in runbook voice.
  - **s9** 10. Leftovers (30 words) — Commands from the deleted Resources chapter wait here.

## Argument spine

| Section | Question it answers | Raised by previous | Progression basis |
| --- | --- | --- | --- |
| s1 | What is this note for? | — | not applicable |
| s2 | How do you install the overlay? | partial | purpose names the overlay; the heading establishes install |
| s3 | How do you run the comb? | yes | setup already raised install |
| s4 | Why is the hook change frozen? | no | the heading establishes the freeze; Usage does not promise this section |
| s5 | How does invalidation work? | partial | the note's job is invalidation; Why we wait already treats the hook as settled |
| s6 | What should an operator remember? | yes | recap of the window and the hook |
| s7 | What does this note refuse? | partial | limits of the map |
| s8 | What are the run steps? | no | the heading establishes a runbook; the duplicate of Setup is F-010, not a spine break |
| s9 | What remains from the cut chapter? | yes | leftovers from the chapter the note already says was cut |

## Continuity overview

No actionable continuity findings. Why we wait follows Usage without Usage promising that section, so the heading is enough and the old automatic spine break is not a finding. How we invalidate says it is answering a question the previous section already treated as settled.

## Deferred line notes

No line-level observations were captured.
