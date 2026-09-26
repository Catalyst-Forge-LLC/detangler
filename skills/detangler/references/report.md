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

| Section | Question it answers | Raised by previous | Progression basis |
| --- | --- | --- | --- |
| s1 | What is this document for? | — | not applicable |
| s2 | What happens when edits leave a pointer behind? | yes | preceding section |

## Continuity overview

Two or three sentences on how the piece develops, then the
consequential continuity findings by id. If none qualify, say no
actionable continuity findings were identified in the reviewed
scope. Do not claim the prose is fluent. If coverage is partial,
say so here and in the header.

## Deferred line notes

No line-level observations were captured.
```

Empty buckets say `None.`

Every finding has an id, a location (`node_id`, line, quote), a
type, an action, and evidence. No action → the finding is not
emitted.

The outline is extracted from the text as it stands. Claims come
from each section's own text, not from intent. A document set
prefixes the file stem (`install.s1`).

`Raised by previous` for the first node is `—`. `no` is an
observation. It does not by itself make `spine_break` `broken`.
Progression basis names why the next section is legitimate, or
why it is not. Independent entries may say `not applicable`.

A continuity finding uses the same id, node, type, severity,
evidence, and action. In the evidence, name the related
locations (node, line, short quote), each passage's job, the
connection, and the reader effect. The action names the move,
reconnect, or clarification, plus a destination when material
moves. Name what the repair must preserve and what relationship
to check afterward. Do not include a rewritten sentence or
sample wording.

Say which scopes you reviewed. A continuity-focused request
still says so when other scopes were skipped.
