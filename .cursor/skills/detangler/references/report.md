# Report shape

You write `report.md`. This is the document the author reads.

Do not use the words "issue" or "problem" as headings. The three
bucket names are the headings.

```markdown
# Detangler report — <source filename>

<N> words. <N> sections. <ISO timestamp>.

Broken: <n>. Intentional but verify: <n>. Judgment calls: <n>.

## Broken

1. **F-001** · **s4** (line 88) — reference_orphan
   see the Resources section
   Action: Retarget the sentence, or restore a Resources heading.
   Evidence: No heading or definition named Resources remains.

## Intentional but verify

None.

## Judgment calls

None.

## Reverse outline

- **s1** Title (120 words) — one-sentence claim from this section only.
  - **s1.1** Child (40 words) — claim.

## Argument spine

| Section | Question it answers | Raised by previous |
| --- | --- | --- |
| s1 | What is this document for? | — |
| s2 | What happens when edits leave a pointer behind? | yes |

## Deferred line notes

No line-level observations were captured.
```

Empty buckets say `None.`

Every finding has an id, a location (`node_id`, line, quote), a
type, an action, and evidence. No action → the finding is not
emitted.

The outline is extracted from the text as it stands. Claims come
from each section's own text, not from intent.

`Raised by previous` for the first node is `—`.
