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

**judgment_call.** Two create-job paths that still write
the same entity the same way. Bounded context or leftover
duplicate. Action: pick one as the door, or name why both
exist on the map.

**When unsure.** A kitchen-sink Settings page might be the
job. Choose `judgment_call` or skip. Do not mint `broken`
to be safe.
