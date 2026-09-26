# Severity rubric

- **broken** — the document as written is wrong. Orphaned references,
  count mismatches, contradictions, stale edits, heading number gaps,
  debris that is false or alien in this draft. Must fix.
- **intentional_but_verify** — plausibly deliberate. Forward
  references with a gloss, reinforcing repetition, a spine `partial`
  that may be a pivot, bloat in a section that is meant to be the
  centerpiece, a continuity choice that may be deliberate and is
  still worth asking about.
- **judgment_call** — reasonable people would differ. Redundant
  repetition, ordering suggestions, detachable sections, imbalance,
  an unwoven claim that could be cut or woven. The four continuity
  types default here.

`spine_weak` (`partial`) stays out of the default report.
`Raised by previous` = `no` is not, by itself, `broken`. A run of
`no` or `partial` is not, by itself, `spine_drift` at `broken`.
Use `spine_break` or `spine_drift` at `broken` when the text
promises material it never supplies, contradicts a structural
promise, or lacks a necessary premise. An unexpected next topic
with a heading that establishes its job is not that defect.

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

**judgment_call.** "Shard tokens expire at the lease window" in a
section whose claim is that writes call the hook. Concept is
named; later sections never take it up. `unwoven_claim`. Action:
cut it, or weave shard tokens into the hook.

**broken.** "The invoice PDF must include the VAT line" in a cache
note. Alien job. `debris`. Action: pull it out.

**When unsure.** A section might be a pivot or a spine break. Choose
`intentional_but_verify` (or leave `partial` / `spine_weak` off the
report). Do not mint `broken` to be safe. Do not mint `broken` on
a continuity type so that unnamed apply will edit it.

**judgment_call.** The method promises an example, then two naming
asides appear before the example. `continuity_delayed_payoff`.
Action: move the example up to the promise and relocate the
asides. No rewritten sentence.

**broken.** "The next section gives the three details the message
must include," and the next section only recounts old names.
`spine_break`. The promise is unfulfilled. A new heading is not
the procedure.
