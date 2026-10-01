# Repetition classes

Assign exactly one class per pair. A finding that cannot name the
job of each instance is not emitted.

- **reinforcing** — reminder after a digression, at a new major part,
  or in a summary. Keep. No finding, or `judgment_call` at most.
- **bridging** — restates a prior claim to connect new material. Keep
  if the new material follows in the same section.
- **framing** — intro and conclusion restate the thesis. Expected
  unless the two versions contradict (`broken`).
- **redundant** — same job, same context, nothing new between them.
  `repetition_redundant`, `judgment_call`. Recommend which instance
  to cut from the spine.
- **sibling** — same job, other file in the set, nothing new on
  the later page. Same type: `repetition_redundant`,
  `judgment_call`. Keep the instance whose page title is that
  job. Cut the other, or leave a pointer.
- **contradictory** — claims conflict. `broken`.
- **stale_edit** — near-verbatim except a fact, number, or qualifier
  that one instance updated. `broken`.

Before cutting a `redundant` or `sibling` instance, carry any fact,
qualifier, or example only the cut instance has into the one you
keep. Name that carry-over in the action.

Bridging, reinforcing, and framing may repeat a phrase on purpose.
Do not treat that repeat as waste. If the repair is "cut the
duplicate," own it as repetition. Do not also emit
`continuity_fragmented_development` for the same cut. If both
passages belong and the defect is order or an unclear join, own
it as continuity.

## Worked

**Emit.** Two paragraphs in the same section both list the same
three reasons with no new work between them. Class: `redundant`.
`judgment_call`. Action: keep the instance that sits on the spine;
cut the other.

**Emit.** Install lists zip and npm. Skill lists zip and npm.
Class: `sibling`. `judgment_call`. Action: keep Install; on Skill
leave a pointer.

**Emit.** The overview says "The plan is free for teams under ten."
Pricing, three sections later, says "Every seat is $5 a month." The
wording shares nothing, but both answer the same question: what
does a small team pay? Class: `contradictory`. `broken`. Action:
ask which is current, then make the other match. Do not pick one
yourself. A contradiction is a same-claim pair even when the words
do not repeat.

**Do not emit.** You cannot say, in one clause each, what job A and
B are doing. No finding.
