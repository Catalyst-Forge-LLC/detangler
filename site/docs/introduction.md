---
title: What it does
---

**Detangler** is an installable skill for AI agents. It finds structural problems left by repeated edits: stale references, contradictions, duplicated sections, and flows that no longer connect.

An agent reads the matching skill and writes a report. Review does not edit the source. Apply is a second skill, after you select findings.

**[Get started](/docs/install)** — install the skill in your agent, then use it.

| | Drafts | Programs |
| --- | --- | --- |
| Comb | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Map | Reverse outline (`s1`, `s1.2`) | Surface, contracts, entities, authority |

They share report buckets. Keep them as two skills.

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A long draft, a named set of pages, or a shipped app or site |
| Writes | `report.md` |
| Changes | Nothing during review |

## What it checks

- **References.** Pointers at what is gone: a heading, a route, a screen, an endpoint.
- **Argument.** A question the text itself leaves unanswered, a journey that never resolves, or a promise the shipped product does not keep. On a draft, an unexpected next section is not automatically broken.
- **Continuity (drafts).** Passages that are clear alone and do not develop. A method, then three asides, then the example it promised. The app comb does not run this scope.
- **Repetition.** Same job on two pages. Twin flows. Parallel schemas.
- **Weight.** One area that grew out of proportion to the rest, or to the product’s job.
- **Authority (programs).** Failed single source of truth.

On a draft: sections, cross-references, argument, continuity, and repetition. Sentences are the strands, except when a relationship between passages is the finding. On a program: routes, nav, feature contracts, and sources of truth. Lint, naming, and component internals are the strands. Continuity is the draft comb only.

| Bucket | Means | Drafts | Programs |
| --- | --- | --- | --- |
| **Broken** | Wrong as written | "See the Resources section" after Resources was deleted | A button that goes to a deleted route |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined | Two Settings screens, user vs admin |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground | Two create-flows that still agree |

Working the knots is a separate action. [Get started](/docs/install#after-the-review) covers apply.

A [sample draft report](/docs/sample-report). A [sample app report](/docs/sample-app-report). The [report shape](/docs/report).
