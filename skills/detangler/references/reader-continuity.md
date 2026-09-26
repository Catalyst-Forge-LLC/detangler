# Reader continuity

Continuity is the relationship between passages. A passage can be
clear and still fail to develop into the next one. The finding is
that relationship. The smallest repair may change one sentence.
The report still does not contain a rewritten sentence.

This is not a model of what every reader thinks. It is an editorial
reconstruction of what the text establishes, what it assumes, and
what it leaves the reader to supply.

## Test

All six must be writable before you emit:

1. Two related units, with source locations. Not a mood about the
   whole draft.
2. The job of each unit.
3. The relationship or missing dependency.
4. A material effect: an abandoned question, an unclear change of
   scope, an unfulfilled setup, a repeated restart, or an
   unsupported inference. Dislike of the phrasing is not enough.
5. A bounded repair: move, combine, clarify, reconnect, or remove
   genuine duplication, and where.
6. What the repair must preserve: caveat, uncertainty, attribution,
   boundary, warning, or deliberate pause.

A finding about two sentences can qualify. A finding about ten
paragraphs can fail. Resolve ordering at section level before you
propose a local bridge. If moving a section removes the handoff
problem, the move is the repair.

Do not flag a missing transition word. A shared subject is not
continuity. Repeating the prior subject is not required when the
relationship is already clear.

## Types

All four default to `judgment_call`. Use `intentional_but_verify`
only when a material choice may be deliberate. Do not mark them
`broken` to make a broad apply pick them up. A hard reference
failure, contradiction, or missing premise stays in its existing
type. Mention the continuity consequence there. Do not emit a
second finding for the same repair.

- **continuity_backtrack** — one stage is established, then the
  text returns to an earlier stage without developing it or
  explaining the return. Name both stages and the displaced next
  step. A return that develops, applies, contrasts, or recaps is
  not a backtrack.
- **continuity_delayed_payoff** — a setup creates a concrete
  expectation, and intervening material postpones it without being
  a prerequisite. Name the setup, the interruption, and the payoff.
  There is no paragraph-count threshold. A warning that must
  precede an action is a prerequisite. Leave it there.
- **continuity_missing_handoff** — related passages leave a
  consequential change of actor, scope, assumption, or logical
  relationship unstated, and the relationship is supportable from
  the text. If you cannot name a supported relationship, it is an
  argument gap. Do not invent a "therefore."
- **continuity_fragmented_development** — one explanation stops
  and restarts often enough that the parts no longer develop each
  other. Name the unfinished development and at least two
  boundaries. Short paragraphs, aphorisms, and deliberate pauses
  are not this type.

## Ownership

| Observation | Owner |
| --- | --- |
| A term is used after its definition was removed | References |
| A premise the conclusion needs is absent | Argument |
| Two passages do the same job and add nothing | Repetition |
| A concept appears once and is never taken up | Isolate |
| Both passages belong, and the order or relationship is unclear | Continuity |
| A section is large | Weight, unless one displaced payoff is the defect |

A bridge may repeat a phrase. That repetition is not automatically
waste. Do not also emit fragmented development for a cut you
already recommended as repetition.

## Spine severity

`Raised by previous` stays an observation. A progression basis may
be the preceding section, an earlier open question, an explicit
pivot, a comparison, a chronological step, a heading that
establishes the new job, a summary, or an independent entry
(`not applicable`). These are explanations, not a new enum.

An unexpected next section is not `spine_break`. A clear pivot
needs no finding. An ordering preference is `judgment_call` under
continuity when the six-part test holds.

`broken` remains for a demonstrable defect. Example: a section
says the next section supplies a procedure, and the next section
never supplies it. That is `spine_break`, `broken`. Do not
downgrade it to `continuity_delayed_payoff` because the heading
changed.

A FAQ or reference page of independent entries does not need a
continuous narrative. `not applicable` is allowed.

## Report

For a continuity finding, keep the ordinary fields and add, in
prose: related locations, passage jobs, the connection, the
reader effect, the action, what to preserve, and what to verify.
The reader effect is an editorial assessment, not a measured
reaction.

The action names the move, reconnect, or clarification, with a
source range and a destination when material moves. Do not include
a rewritten sentence or sample wording.

## Worked

**Emit.** A paragraph says the next example shows three details in
one message. Two paragraphs of naming history follow. Then the
message appears. Jobs: promise the example; recount old names;
show the message. The history is not a prerequisite.
`continuity_delayed_payoff`, `judgment_call`. Action: move the
message to sit with the promise, and move the history out of this
sequence. Do not require deleting the history from the document.

**Emit.** One paragraph assigns interpretation to the reader. The
next discusses another person's conduct and does not say whose
job changed. `continuity_missing_handoff`, `judgment_call`.
Action: state the change of actor at the boundary. Do not assign
equal blame.

**Do not emit.** The same two paragraphs already state both
responsibilities, and the join sounds formal. Strand. Count it.

**Do not emit.** A permanent-delete warning sits immediately
before the cleanup example. Do not move the warning after the
example.

**Do not emit.** A headed section starts a new job the previous
section did not ask about, and nothing in the text depends on
that missing ask. No continuity finding. No `broken` spine.

**Do not emit as continuity.** Two claims have no supported
relation. Argument gap. Do not write a bridge that supplies the
missing premise.

**broken spine.** "The next section gives the three details" and
the next section is only a history of names. `spine_break`,
`broken`. The heading does not fulfill the promise.
