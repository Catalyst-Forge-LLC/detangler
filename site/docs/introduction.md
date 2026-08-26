---
title: Introduction
---

**Detangler** is a structural editing pass for long drafts after a lot of edits — yours, a collaborator's, an agent's. It is a skill: an agent reads it and writes a report of what the editing left behind.

A lot of editing tangles the document. References drift. The argument loses its spine. The same claim appears twice. One section grows until it swallows the rest. Cutting or reordering is one cause. Most of the damage is just accumulated edits, each of which looked fine.

npm **`detangler`**. Site **detangler.dev**. Sibling of [aiBreze](https://aibreze.com).

## Swaths, not strands

Sections, cross-references, argument flow, and repetition are the swaths. Sentences are the strands. Line editing is a different pass with different eyes, and doing both at once does both badly.

## Comb first, then work the knots

The skill writes `report.md`. Findings in three buckets, then the outline extracted from the text as it stands.

| Bucket | Means | Example |
| --- | --- | --- |
| **Broken** | Wrong as written | "See the Resources section" after Resources was renamed |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground after separate passes |

Working the knots is a separate action. The `detangler-apply` skill works findings you approve, one at a time. Neither skill rewrites the draft until you ask for apply.

## What it checks

A lot of editing produces four kinds of tangle.

- **References.** Headings get renamed, sections get merged, a "see also" points at something that is gone or never existed.
- **Argument.** Later passes rewrite a section without the earlier ones noticing.
- **Repetition.** Near-verbatim passages, sorted by the job each one does.
- **Weight.** Sections that have grown out of proportion to the rest.

## Two hooks

- [Install](/docs/install) — skill folder, or npm that ships the folders
- [Skill](/docs/skill) — comb pass, plus `detangler-apply` for working a report
