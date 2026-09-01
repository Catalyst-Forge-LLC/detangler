---
title: Introduction
---

**Detangler** is a structural pass for drafts and programs after a lot of edits: yours, a collaborator's, an agent's. An agent reads the matching skill and writes a report of what the editing left behind.

A lot of editing tangles the thing. References drift. The argument or the journey loses its spine. The same job appears twice. One area grows until it swallows the rest. On a program, the same fact is true in two places that disagree. Cutting or reordering is one cause. Most of the damage is just accumulated edits, each of which looked fine.

npm **`detangler`**. Site **detangler.dev**. Sibling of [aiBreze](https://aibreze.com).

| | Drafts | Programs |
| --- | --- | --- |
| Comb | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Map | Reverse outline (`s1`, `s1.2`) | Surface, contracts, entities, authority |

They share report buckets. Keep them as two skills.

## Swaths, not strands

On a draft: sections, cross-references, argument flow, and repetition. Sentences are the strands. On a program: routes, nav, feature contracts, and sources of truth. Lint, naming, and component internals are the strands. Line editing and file cleanup are a different pass.

## Comb first, then work the knots

The skill writes `report.md`. Findings in three buckets, then the map taken from the draft or the product as it is now.

| Bucket | Means | Drafts | Programs |
| --- | --- | --- | --- |
| **Broken** | Wrong as written | "See the Resources section" after Resources was deleted | A button that goes to a deleted route |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined | Two Settings screens, user vs admin |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground | Two create-flows that still agree |

Working the knots is a separate action. `detangler-apply` or `detangler-app-apply` works findings you approve, one at a time. Neither rewrites until you ask for apply.

## What it checks

- **References.** Pointers at what is gone: a heading, a route, a screen, an endpoint.
- **Argument.** A question raised and never answered. A journey that never resolves. A promise the shipped product does not keep.
- **Repetition.** Same job on two pages. Twin flows. Parallel schemas.
- **Weight.** One area that grew out of proportion to the rest, or to the product’s job.
- **Authority (programs).** Failed single source of truth.

## Two hooks

- [Install](/docs/install) — download the zip for the pair you need
- [Skill](/docs/skill) — both combs, plus apply after a report exists
- [Sample report](/docs/sample-report) — twelve findings and the outline, from a draft comb
- [Sample app report](/docs/sample-app-report) — aiBreze, then what was fixed and what was left
