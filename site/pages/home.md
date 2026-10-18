---
title: "Find what repeated edits left disconnected."
description: "After a draft or app has changed many times, Detangler checks for stale references, contradictions, duplicated material, and flows that no longer connect. Read the report, then choose the repairs."
order: 0
---

<section class="value-hero" aria-label="Detangler overview"><div class="value-intro"><p class="value-kind">Structural review skills for your AI agent</p><h1>Find what repeated edits left disconnected.</h1><p class="value-lede">After a draft or app has changed many times, Detangler checks for stale references, contradictions, duplicated material, and flows that no longer connect. Read the report, then choose the repairs.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Detangler</a><a class="cta cta-secondary" href="/docs/sample-report">Read a sample report</a></div><p class="value-limit">Review leaves the source unchanged. Apply named findings when you are ready. Draft and app reviews use separate skills.</p></div><figure class="value-proof"><figcaption>Illustrative example</figcaption><p><strong>Starting point</strong><br>A note says “see the Resources section.” That section was deleted.</p><div class="value-result"><p><strong>What you get</strong><br>A finding marked broken, with the location of the stale pointer.</p></div><p>You can repair the reference without treating the whole draft as a rewrite.</p><p class="value-note">Illustrative finding. Applying a report is a separate instruction.</p></figure></section>

## One example

A note still says “see the Resources section” after Resources was deleted.

The report flags that pointer as **broken**, names the section that said it, and leaves the note unchanged.

A method can end, and three asides can sit between it and the example. On a draft, the report names that interruption and where the example could sit. It does not rewrite the sentence.

[Install in your agent](/docs/install) · [See a draft report](/docs/sample-report) · [See an app report](/docs/sample-app-report)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A long draft, a named set of pages, or a shipped app or site |
| Writes | `report.md` in a folder next to the work |
| Changes | Nothing during review. Naming finding ids applies those. “Apply the report” authorizes every finding marked broken. The agent states those ids before editing. Other classes need separate approval |

## Draft or application

Choose Draft for prose and document sets. Choose App for screens, navigation, and user flows. Install the matching Apply skill only when you want it to work approved findings. A documentation set is the draft route unless you are reviewing interaction flows.

| | Drafts | Programs |
| --- | --- | --- |
| Skill | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Object | A long draft, or a named set of pages | An app, a site, an iterated product |
| A defect it can report | “See Resources” after Resources was deleted | A Settings item that goes nowhere |

Do not run the draft skill on an app, or the app skill on a prose draft.

## After the report

Install the matching apply skill. Name finding ids to apply those. “Apply the report” authorizes every finding marked broken. The agent states those ids before editing. Intentional-but-verify and judgment-call findings need separate approval.

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
