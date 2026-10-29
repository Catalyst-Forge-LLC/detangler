---
title: "Find and repair what repeated edits left disconnected."
description: "After a draft or app has changed many times, Detangler checks for stale references, contradictions, duplicated material, and flows that no longer connect. Review the findings, then use the separate apply skill to repair the ones you select."
order: 0
---

<section class="value-hero" aria-label="Detangler overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Review and repair skills for your AI agent</p><h1>Find and repair what repeated edits left disconnected.</h1></div><div class="value-pitch"><p class="value-lede">After a draft or app has changed many times, Detangler checks for stale references, contradictions, duplicated material, and flows that no longer connect. Review the findings, then use the separate apply skill to repair the ones you select.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Detangler</a><a class="cta cta-secondary" href="#one-example">See a pointer repaired</a></div><p class="value-limit">Review leaves the source unchanged. Apply named findings when you are ready. Draft and app reviews use separate skills.</p></div></div>
<figure class="value-proof worked-example" id="one-example" tabindex="-1">
<figcaption>Send readers to the section that actually has the answer</figcaption>
<p class="example-context">From the worked-over-note fixture: headings moved during editing, but an old numbered reference survived.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>1 · Edited draft</span> The pointer sends readers to the wrong section</h2>
<blockquote><p>See Section 5 if you need the hook itself.</p></blockquote><p>Section 5 is now <strong>Why we wait</strong>. The hook is under <strong>How we invalidate</strong>, now section 6.</p>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>2 · Detangler report</span> Locate the stale reference</h2>
<p><strong>F-004 · broken · misdirected</strong><br><code>s3 (line 23)</code></p><p><strong>Action:</strong> Point at s5 (How we invalidate), or name the hook section by title.</p><p>The report uses stable section IDs; <code>s5</code> identifies the heading now numbered 6.</p>
</section>
<section class="example-step" aria-labelledby="example-step-3">
<h2 id="example-step-3"><span>3 · Author-applied repair</span> Name the destination readers need</h2>
<blockquote><p>See “How we invalidate” if you need the hook itself.</p></blockquote><p class="example-payoff">The reader can find the hook without chasing an obsolete section number.</p><p>The author can make this one edit or ask the Apply skill to address <code>F-004</code>.</p>
</section>
<p class="value-note">The finding comes from the sample report. The repaired sentence is an illustrative author edit; review alone leaves the draft unchanged.</p>
<p class="example-links"><a href="/docs/sample-report">Read the full draft report</a> · <a href="/docs/sample-app-report">See a different example for apps</a></p>
</figure></section>

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A long draft, a named set of pages, or a shipped app or site |
| Writes | `report.md` in a folder next to the work |
| Changes | Nothing during review. Naming finding ids applies those. “Apply the report” authorizes every finding marked broken. The agent states those ids before editing. Other classes need separate approval |

## Draft or application

Choose Draft for prose and document sets. Choose App for screens, navigation, and user flows. Install the matching Apply skill only when you want it to work approved findings. A documentation set is the draft route unless you are reviewing interaction flows.

<div class="comparison-scroll" role="region" aria-label="Draft and application review comparison" tabindex="0">

| | Drafts | Programs |
| --- | --- | --- |
| Skill | `detangler` | `detangler-app` |
| Apply | `detangler-apply` | `detangler-app-apply` |
| Object | A long draft, or a named set of pages | An app, a site, an iterated product |
| A defect it can report | “See Resources” after Resources was deleted | A Settings item that goes nowhere |

</div>

Do not run the draft skill on an app, or the app skill on a prose draft.

## After the report

Install the matching apply skill. Name finding ids to apply those. “Apply the report” authorizes every finding marked broken. The agent states those ids before editing. Intentional-but-verify and judgment-call findings need separate approval.

## Findings

<div class="comparison-scroll" role="region" aria-label="Finding types and examples" tabindex="0">

| Kind | Means | Drafts | Programs |
| --- | --- | --- | --- |
| **Broken** | Wrong as written | “See the Resources section” after Resources was deleted | A button that goes to a deleted route |
| **Intentional but verify** | Looks deliberate, check it | A term used two sections before it is defined | Two Settings screens, user vs admin |
| **Judgment call** | Reasonable people would differ | Two sections covering the same ground | Two create-flows that still agree |

</div>

## Optional neighbors

Detangler is a structural pass. You can finish a review without other products.

- [Smell Check](https://smellcheck.dev) reviews prose register.
- [Misemphasis](https://misemphasis.com) reviews likely readings.
- [Cold-eye](https://coldeye.dev) checks whether a newcomer can use what you are about to ship.

Grammar, tone, lint, and file cleanup stay out.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
