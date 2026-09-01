---
title: Find what the editing tangled.
description: Structural pass for drafts and programs that have been worked over. An agent with the skill writes the report.
order: 0
---

*Combs the whole draft or the whole program, not single strands.*

A draft or a program, many passes. You, a collaborator, an agent. Each edit looked fine. The thing tangled.

**Detangler** is a structural pass for drafts and programs that have been worked over. An agent reads the matching skill and writes a report of what the editing left behind.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## Two combs

The metaphor is the same. The object is not. Drafts and programs share report buckets and use different maps. Do not run the draft skill on an app, or the app skill on a prose draft.

| | Drafts | Programs |
| --- | --- | --- |
| Skill | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Object | A long draft, or a named set of pages | An app, a site, an iterated product |
| Map | Reverse outline from headings | Surface, contracts, entities, authority |
| Signature break | “See Resources” after Resources was deleted | A Settings item that goes nowhere |

One package: copy the pair you need.

## What you get

The skill writes `report.md`. Findings first, then the map taken from the draft or the product as it is now.

Findings come in three kinds.

| Kind | Means | Drafts | Programs |
| --- | --- | --- | --- |
| **Broken** | Wrong as written | “See the Resources section” after Resources was deleted | A button that goes to a deleted route |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined | Two Settings screens, user vs admin |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground | Two create-flows that still agree |

Nothing in the draft or the product changes. The report is a to-do list you work by hand, or hand to an agent.

A [sample report](/docs/sample-report) from a cache-invalidation note after many passes:

1. **F-001** · **s1** — reference_orphan — “see the Resources section” after Resources was deleted.
2. **F-007** · **s4** — stale_edit — retry window is 30 seconds here and 90 in the recap.

The full report has twelve findings and the outline extracted from the text.

A [sample app report](/docs/sample-app-report) from [Smell Check](https://smellcheck.dev) after many passes:

1. **F-001** · **c1** — route_orphan — pocket card links die after copy into `.cursor/rules/`.
2. **F-003** · **a3** — ssot_conflict — package `0.1.8`, SkillFacts still `0.1.6`.

Five broken findings were worked after the comb. The page is the report as written, then what was fixed and what was left.

## What it checks

A lot of editing produces the same kinds of tangle.

- **References.** A “see also” at a heading that is gone. A nav item, a deep link, or a client aimed at a removed screen.
- **Argument.** A section that never answers the question the previous one raised. A journey that starts and never resolves. Onboarding that promises a capability the product does not have.
- **Repetition.** Two pages that restated the same job. Two create-flows, twin settings, parallel schemas for one noun.
- **Weight.** One section that swallowed the draft. A kitchen-sink Settings or a god dashboard that swallowed the product’s job.
- **Authority (programs).** The same fact in two places that disagree. Failed single source of truth.

## Not a line editor

Grammar, tone, sentence rhythm, lint, and file cleanup stay out. Structural work and strand work use different eyes. Doing both at once does both badly.

[Smell Check](https://smellcheck.dev) sprays AI smells off prose. Detangler is the next bottle on the shelf.

## Install

Pick the pair. [Download the zip](/docs/install), put the folder where the table says, and ask whether it still hangs together.

If you already use npm:

```bash
pnpm add -D detangler
```

Then copy `skills/detangler` or `skills/detangler-app` out of `node_modules`. Apply is a second skill, after a report exists.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
