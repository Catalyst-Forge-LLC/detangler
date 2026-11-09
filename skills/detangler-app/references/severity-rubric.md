# Severity rubric

- **broken** — the product as shipped is wrong. Dead
  routes, promise gaps, facts that disagree, a button that
  goes nowhere. Must fix.
- **intentional_but_verify** — plausibly deliberate. User
  vs admin Settings, a docs line that says it is ahead, an
  optional field no feature reads yet.
- **judgment_call** — reasonable people would differ. Twin
  flows that still agree, bounded context vs copy-paste,
  weight in an area that might be the centerpiece.

A false `broken` costs more than a missed `judgment_call`.
When unsure between broken and verify, choose verify.

## Worked

**broken.** A Settings item goes to `/settings`. The page
was deleted. The button goes nowhere. Action: retarget or
restore.

**intentional_but_verify.** Two Settings screens. One is
user, one is admin. Same noun, different audience.
Action: confirm both should stay, and that shared facts
still match.

**judgment_call.** Two create-job paths do the same job for
the same audience. It is unclear why someone would choose one.
Action: establish which door serves that job. If one is quick
capture and the other creates in a chosen project, and both
preserve that context, drop the finding.

**When unsure.** A kitchen-sink Settings page might be the
job. Choose `judgment_call` or skip. Do not mint `broken`
to be safe.
