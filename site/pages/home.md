---
title: Find what the editing tangled.
description: Structural editing pass for long drafts after a lot of edits — yours, a collaborator's, an agent's. An agent with the skill writes the report.
order: 0
---

*Combs the whole document, not single strands.*

A long draft, many passes. You, a collaborator, an agent. Each edit looked fine. The document tangled.

**Detangler** is a structural editing pass for drafts that have been worked over. It is a skill: an agent reads it and writes a report of what the editing left behind.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## What you get

The skill writes `report.md`. Findings first, then the outline extracted from the text as it stands.

Findings come in three kinds.

| Kind | Means | Example |
| --- | --- | --- |
| **Broken** | Wrong as written | "See the Resources section" after Resources was deleted |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground after separate passes |

Nothing in your draft changes. The report is a to-do list you work by hand, or hand to an agent.

## What it checks

A lot of editing produces four kinds of tangle. An agent in the file produces them faster.

- **References.** Headings get renamed, sections get merged, a "see also" points at something that is gone or never existed.
- **Argument.** Later passes rewrite a section without the earlier ones noticing. Section by section: what question does this one answer, and did the previous section raise it?
- **Repetition.** An agent restates "for clarity." Two editors cover the same ground. Near-verbatim passages, sorted by the job each one does.
- **Weight.** One section keeps getting expanded.

## Not a line editor

Grammar, tone, and sentence rhythm stay out. Structural editing and line editing use different eyes, and doing both at once does both badly, especially when you already spent effort on the sentences. This is the hour for load-bearing walls.

[aiBreze](https://aibreze.com) sprays AI smells off prose. Detangler is the next bottle on the shelf.

## Install

The [skill](/docs/skill) is a folder. Drop it in. That is the product.

```bash
pnpm add -D detangler
```

The package ships both folders. The comb is the one you need first. Apply is a second skill, after a report exists.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
