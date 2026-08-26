---
title: Skill
---

The product is the comb folder: `detangler`. An agent reads it and writes the report.

`detangler-apply` is a second folder. It works findings you approve after a report exists. Drop it in if you want an agent to work the knots. It is not inside the comb skill.

Each folder is `SKILL.md` plus the reference files it reads.

The comb skill runs after a long draft has been edited a lot — especially with an agent, or by more than one person. A named document set (two pages, or a folder) is the same hour.

No folder yet? [Install](/docs/install).

## What the agent does

Comb pass (`detangler`):

1. Locate the draft or the document set.
2. Extract the outline from headings (`s1`, `s1.2`; `<stem>.s1` on a set).
3. Check references, argument, repetition, and weight. Same-claim on two pages is repetition.
4. Write `report.md`. Hand it over. Do not edit the draft.

Apply (`detangler-apply`):

1. Read `report.md`.
2. Work approved findings only (chat). Unnamed apply means every `broken` finding, then ask.
3. One approved finding at a time, including orphans that edit creates.
4. Re-run the comb skill. Show what is gone and what is new.

## Example prompts

- Does this still hang together after all these edits?
- An agent has been through this file. What tangled?
- Comb this draft.
- These two docs pages say the same thing.
- Reverse outline, then tell me what broke.
- Structural pass only. Leave the sentences.
- Apply this report.
- Work the broken findings.

It runs after a long draft has been edited a lot — especially with an agent — or when you name it. Not for grammar, tone, or a one-paragraph email.
