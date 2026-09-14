---
title: Find what the editing tangled.
description: "Find structural problems left by repeated edits: broken references, contradictions, duplicated material, and flows that no longer connect."
order: 0
---

Find structural problems left by repeated edits: stale references, contradictions, duplicated sections, and application flows that no longer connect. Choose the draft or application skill, review its findings, then apply only the changes you select.

An agent reads the matching skill and writes `report.md`. Review does not edit the source.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## Which comb

| | Drafts | Programs |
| --- | --- | --- |
| Skill | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Object | A long draft, or a named set of pages | An app, a site, an iterated product |
| A defect it can report | “See Resources” after Resources was deleted | A Settings item that goes nowhere |

One package: copy the pair you need. Do not run the draft skill on an app, or the app skill on a prose draft.

## Review, then apply

1. Pick the object: draft or program.
2. Run the matching review skill.
3. Read `report.md`. Findings stay in the report until you choose them.
4. Invoke the matching apply skill on the findings you select.
5. Unnamed “apply the report” means every `broken` finding, then the agent asks. `intentional_but_verify` and `judgment_call` stay until you name them.

Nothing in the draft or the product changes during review. Apply consumes the report and leaves rejected or unnamed suggestions in place.

## Evidence in the report

A [sample draft report](/docs/sample-report) from a cache-invalidation note after many passes. One broken finding, quoted from that page:

1. **F-001** · **s1** (line 9) · reference_orphan
   see the Resources section
   Action: Restore a Resources heading, or retarget every pointer that names it.
   Evidence: No heading or definition named Resources remains. The same pointer appears in s2, s3, and s6.

Line numbers help the next agent find the sentence. If the draft moved, search for the quoted phrase rather than treating the line number as law.

A [sample app report](/docs/sample-app-report) from Smell Check after many passes:

1. **F-001** · **c1** · route_orphan
   pocket card links die after copy into `.cursor/rules/`.
   Evidence: After the advertised copy, `.cursor/rules/core.md` is not on disk.

F-001 is observed breakage. A judgment call on the same draft, two sections covering the same ground, is a debatable cut, not a broken pointer.

## Findings

| Kind | Means | Drafts | Programs |
| --- | --- | --- | --- |
| **Broken** | Wrong as written | “See the Resources section” after Resources was deleted | A button that goes to a deleted route |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined | Two Settings screens, user vs admin |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground | Two create-flows that still agree |

## Optional neighbors

Detangler is a structural pass. You can finish a review without other products.

- [Smell Check](https://smellcheck.dev) reviews prose register.
- [Misemphasis](https://misemphasis.com) reviews likely readings.
- [Cold-eye](https://coldeye.dev) checks whether a newcomer can use what you are about to ship.

Grammar, tone, lint, and file cleanup stay out.

## Install

Pick the pair. [Download the zip](/docs/install), put the folder where the table says, and ask whether it still hangs together.

```bash
pnpm add -D detangler
```

Then copy `skills/detangler` or `skills/detangler-app` out of `node_modules`. Apply is a second skill, after a report exists.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
