# Tangle types

Assign exactly one type per finding. Classify before you
flag. Do not emit a second finding for evidence you already
used.

## References

Check pointers against the surface and contracts that still
exist.

- **route_orphan** — nav, button, or in-app link targets a
  path or page that is gone. `broken`.
- **copy_see_x** — UI or docs say "see X" / "open Settings"
  and X is not on the map. `broken`.
- **deep_link_orphan** — a documented or in-product URL that
  404s or lands on a stub. `broken`.
- **endpoint_orphan** — a shipped client calls a removed or
  never-shipped endpoint. `broken`.
- **nav_stale** — label and destination disagree (label
  survived a rename). `broken` if the destination is wrong;
  `intentional_but_verify` if both exist and the label is
  the old name on purpose.

Relative copy (`above`, `back to the list`) only if the
topic is gone or the direction is wrong.

## Argument

Journeys, not file trees.

- **journey_break** — a flow starts and never resolves
  (submit with no success, no error, no next surface).
  `broken`.
- **orphan_input** — a form collects a field no shipped
  feature reads. `broken` if the field is required;
  `intentional_but_verify` if optional.
- **promise_gap** — first-run, onboarding, or lockup
  promises a capability the shipped product does not have.
  `broken`.

A missing feature the founder wanted is not a promise_gap.
The promise has to be in what shipped.

## Repetition

Name the job of each instance, in one clause each, or drop
the finding.

- **twin_flow** — two create (or edit, or delete) paths for
  the same entity, same job. `judgment_call` unless they
  contradict (`broken`).
- **twin_settings** — two screens that configure the same
  fact. User vs admin can be `intentional_but_verify`.
- **parallel_schema** — two types or tables for one noun
  that drifted. Often also an authority finding: pick
  **ssot_conflict** if they disagree on a fact; use this
  type if they are duplicates that still agree.
- **drifted_duplicate** — near-duplicate modules or pages
  that used to match and now do not. `broken` if a user-
  visible fact conflicts; `judgment_call` if only structure
  doubled.
- **sibling_surface** — same job on two pages (or a short
  page and a docs page), nothing new on the later one.
  `judgment_call`. Keep the instance whose title is that
  job, or the fuller page if both share the title. Cut the
  other, or leave a pointer. Two hooks with different
  jobs (npm overlay vs skill folder) are not this class.

## Weight

Needs the job sentence from `references/map.md`.

- **area_bloat** — one nav area, dashboard, or Settings tree
  is more than about 2.5× the median sibling in primary
  actions or pages, and it is not the centerpiece of the
  job. `judgment_call`.

Do not count lines of code. Count what the user can reach.

## Authority

Types and worked examples: `references/authority.md`.
Prefer those types when the injury is "which one is true."

## Worked

**Emit.** Header "Settings" goes to `/settings`. That route
is gone. `route_orphan`, `broken`, node `r4` `/settings`.
Action: retarget the item, or restore the page.

**Emit.** `/install` and `/docs/install` both list the same
five setup steps. Class: `sibling_surface`. `judgment_call`.
Action: keep the fuller Install page; on the other leave a
pointer.

**Do not emit.** A component is messy. A function should be
renamed. That is a strand. Count it, do not list it.

**Do not emit.** Introduction names two hooks — wire a
project, and drop a skill folder. Different jobs.
