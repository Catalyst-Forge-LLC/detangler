---
title: Skill
---

The product is two comb folders. An agent reads one and writes the report.

| Object | Comb | Apply |
| --- | --- | --- |
| Drafts | `detangler` | `detangler-apply` |
| Programs | `detangler-app` | `detangler-app-apply` |

Apply works findings you approve after a report exists. It is not inside the comb skill. Each folder is `SKILL.md` plus the reference files it reads.

The hour is the same: something has been edited a lot, especially with an agent or by more than one person, and it no longer hangs together. A named document set (two pages, or a folder) is the draft hour. A repo, a site, or an iterated product is the app hour. Keep the two skills apart.

No folder yet? [Install](/docs/install).

## What the agent does

Comb pass (`detangler` or `detangler-app`):

1. Locate the draft, the document set, or the product.
2. Extract the map. Drafts: outline from headings (`s1`, `s1.2`; `<stem>.s1` on a set). Programs: surface, contracts, entities, authority.
3. Check references, argument, repetition, and weight. Programs also check authority. Same job on two pages is repetition.
4. Write `report.md`. Hand it over. Do not edit the draft or the product.

Apply (`detangler-apply` or `detangler-app-apply`):

1. Read `report.md`.
2. Work approved findings only (chat). Unnamed apply means every `broken` finding, then ask.
3. One approved finding at a time, including orphans that edit creates. The app apply does not refactor a neighboring route.
4. Re-run the matching comb. Show what is gone and what is new.

## Example prompts

Drafts:

- Does this still hang together after all these edits?
- An agent has been through this file. What tangled?
- Comb this draft.
- These two docs pages say the same thing.
- Reverse outline, then tell me what broke.

Programs:

- Does this app still hang together after all these edits?
- Comb the product. Dead routes, twin settings, failed single source of truth.
- An agent has been through this repo. What tangled?

Either:

- Structural pass only. Leave the strands.
- Apply this report.
- Work the broken findings.

It runs after a lot of edits, especially with an agent, or when you name it. Not for grammar, lint, naming, a first architecture, or a one-paragraph email.
