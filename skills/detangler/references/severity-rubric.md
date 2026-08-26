# Severity rubric

- **broken** — the document as written is wrong. Orphaned references,
  count mismatches, contradictions, stale edits, heading number gaps.
  Must fix.
- **intentional_but_verify** — plausibly deliberate. Forward
  references with a gloss, reinforcing repetition, a spine `partial`
  that may be a pivot, bloat in a section that is meant to be the
  centerpiece.
- **judgment_call** — reasonable people would differ. Redundant
  repetition, ordering suggestions, detachable sections, imbalance.

`spine_weak` (`partial`) stays out of the default report.

A false `broken` costs more than a missed `judgment_call`. When unsure
between broken and verify, choose verify.

## Worked

**broken.** "see the Resources section" and Resources was deleted.
The sentence is false as written. Action: retarget or restore.

**intentional_but_verify.** "Section 4 defines the term; we flag it
here so you know it is coming." The forward pointer has a gloss.
Plausibly deliberate. Action: confirm the author wants the term
used before it is defined.

**judgment_call.** The same three reasons appear in adjacent
sections with no contradiction. Reasonable to keep as a bridge or
cut as redundant. Action: pick one instance from the spine.

**When unsure.** A section might be a pivot or a spine break. Choose
`intentional_but_verify` (or leave `partial` / `spine_weak` off the
report). Do not mint `broken` to be safe.
