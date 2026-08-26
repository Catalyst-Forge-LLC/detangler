---
title: Skill
---

The product is the comb folder: `detangler`. An agent reads it and writes the report. That is the first install.

`detangler-apply` is a second folder. It works findings you approve after a report exists. Drop it in if you want an agent to work the knots. It is not inside the comb skill.

Each folder is `SKILL.md` plus the reference files it reads.

The comb skill runs after a long draft has been edited a lot — especially with an agent, or by more than one person.

No skills directory yet? Start on [Install](/docs/install): download the zip, put the folder where the table says, ask the agent to comb the draft.

## Download the ZIP

[Download detangler.zip](/skills/detangler.zip) · [Download detangler-apply.zip](/skills/detangler-apply.zip)

Unpack one. Move the folder that contains `SKILL.md` into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/detangler.git
```

Copy `skills/detangler/` and, if you want the apply pass, `skills/detangler-apply/` from the clone into a skills directory.

## Install from npm

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/detangler/` and `node_modules/detangler/skills/detangler-apply/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/<name>/`
- Claude Code, one repo: `.claude/skills/<name>/`
- Cursor: `.cursor/skills/<name>/` or `~/.cursor/skills/<name>/`

The folder you drop in must be named `detangler` or `detangler-apply` and must contain `SKILL.md`.

## What the agent does

Comb pass (`detangler`):

1. Locate the draft.
2. Extract the outline from headings (`s1`, `s1.2`).
3. Check references, argument, repetition, and weight.
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
- Reverse outline, then tell me what broke.
- Structural pass only. Leave the sentences.
- Apply this report.
- Work the broken findings.

It runs after a long draft has been edited a lot — especially with an agent — or when you name it. Not for grammar, tone, or a one-paragraph email.
