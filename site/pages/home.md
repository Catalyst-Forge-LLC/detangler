---
title: Find what the editing tangled.
description: "An installable skill for AI agents. Finds structural problems left by repeated edits: broken references, contradictions, duplicated material, and flows that no longer connect."
order: 0
---

An installable skill for AI agents. Detangler finds structural problems left by repeated edits: stale references, contradictions, duplicated sections, and application flows that no longer connect.

An agent reads the skill and writes a report. The draft or the product does not change until you apply findings you select.

## One example

A note still says “see the Resources section” after Resources was deleted.

The report flags that pointer as **broken**, names the section that said it, and leaves the note unchanged.

[Install in your agent](/docs/install) · [See a draft report](/docs/sample-report) · [See an app report](/docs/sample-app-report)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A long draft, a named set of pages, or a shipped app or site |
| Writes | `report.md` in a folder next to the work |
| Changes | Nothing during review. The matching apply skill edits only findings you select |

## Draft or application

Choose before you install. They are different skills.

| | Drafts | Programs |
| --- | --- | --- |
| Skill | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Object | A long draft, or a named set of pages | An app, a site, an iterated product |
| A defect it can report | “See Resources” after Resources was deleted | A Settings item that goes nowhere |

Do not run the draft skill on an app, or the app skill on a prose draft.

## After the report

Install the matching apply skill. Name the findings you want worked. Unnamed “apply the report” means every **broken** finding, then the agent asks. Intentional and judgment-call items stay until you name them.

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

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
