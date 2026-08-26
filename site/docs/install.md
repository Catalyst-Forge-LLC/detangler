---
title: Install
---

The [skill](/docs/skill) is the product. Start with the comb folder. Apply is a second folder, after a report exists.

## Drop the folder in

You do not need npm. You need a folder named `detangler` that contains `SKILL.md`.

1. Download [detangler.zip](/skills/detangler.zip).
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here:

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/detangler/` in the project, or `~/.cursor/skills/detangler/` |
| Claude Code | `~/.claude/skills/detangler/` or `.claude/skills/detangler/` in the repo |
| claude.ai | Settings → Customize → Skills → upload the zip (do not unzip) |

4. Open a long draft. Say: *Does this still hang together after all these edits?*

That is the whole install. The agent reads the folder and writes `report.md` next to the draft.

Want an agent to work approved findings later? Same steps with [detangler-apply.zip](/skills/detangler-apply.zip) into a folder named `detangler-apply`.

## If you already use npm

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/detangler/` into a skills directory. Same for `detangler-apply` if you want the apply pass.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/detangler) and copy `skills/detangler/`.

Node.js 20+. The package is [`detangler`](https://www.npmjs.com/package/detangler) on npm.

Example prompts: [Skill](/docs/skill). A finished [sample report](/docs/sample-report).

## What the skill writes

Default folder: `<stem>.detangler/` next to the draft.

| File | What it is |
| --- | --- |
| `report.md` | The comb pass. What the author reads. |

The agent may keep other notes in that folder. The report is the deliverable.
