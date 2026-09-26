# Isolate types

An isolate is a named concept inside a node that never joined
the weave. It is not a clumsy sentence. Assign exactly one type.
A finding that cannot name the concept is not emitted.

Isolates live inside a node that otherwise holds. A whole node
that nothing else references, with `no` on both joints, is
`detachable` under weight, not an isolate.

## Test

1. Name the concept in one clause. It must be distinct from the
   node's claim.
2. The concept does not serve the question that node answers.
3. Later nodes do not take it up.
4. The action is only cut, weave into this node, or move to the
   node that already owns it.

If any of those four is not writable, it is a strand. Count it.
Do not list it.

The quote may be one sentence. The finding is still about the
map: this node is carrying a claim that is not on the outline
and is not load-bearing.

The distinct-concept test is for isolates only. A continuity
defect can sit inside the node's topic. Two sentences that change
actor or scope without saying so are continuity when the six-part
test in `reader-continuity.md` holds. They are not an isolate
just because both sentences belong to the section.

## Types

- **unwoven_claim** — the concept belongs to this draft's job.
  It appears once (a sentence, sometimes a short paragraph) and
  dies. The point may be good. It has no body and no joint.
  Usually `judgment_call`. Action: cut it, or extend it until
  surrounding claims depend on it — enough that it could be a
  heading, or enough that the node claim must mention it.
- **debris** — the concept belongs to another job: a leftover
  from a cut, a paste, an agent aside, a note from a different
  draft. Developing it would add a second job. `broken` when the
  sentence is false or alien in this draft. Otherwise
  `judgment_call`. Action: pull it out, or move it to the node
  or draft that owns that job.

Do not put `strand` in the type name. Strand means refuse.

A term used after its definition is gone is a reference finding
(`reference_orphan` / `forward_undefined`), not an isolate.

## Worked

**Emit.** A section on cache invalidation says "Shard tokens
expire at the lease window." The node's claim is that writes
call the hook. No later section mentions shard tokens or lease
windows. Concept: shard tokens. `unwoven_claim`,
`judgment_call`. Action: cut the sentence, or give shard tokens
a body and join them to the hook.

**Emit.** The same cache note says "The invoice PDF must include
the VAT line before we ship the storefront." Concept: VAT on
the invoice PDF. That is a storefront job. `debris`, `broken`.
Action: pull the sentence out, or move it to the draft that
owns invoicing.

**Do not emit.** A transition is stiff, or a word is ugly, and
you cannot name a concept distinct from the node's claim. Strand.
Count it. If the relationship is already clear, do not reclassify
that stiffness as `continuity_missing_handoff`.
