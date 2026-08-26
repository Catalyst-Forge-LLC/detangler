---
title: Install
---

The [skill](/docs/skill) is the product. Two folders: `detangler` (comb pass) and `detangler-apply` (work approved findings). The package ships the same folders. There is no command-line comb.

## Get the folders

1. Download [detangler.zip](/skills/detangler.zip) and [detangler-apply.zip](/skills/detangler-apply.zip), or clone the [repo](https://github.com/Catalyst-Forge-LLC/detangler), or add the package:

```bash
pnpm add -D detangler
```

2. Copy `detangler/` to `.cursor/skills/detangler/` (or `~/.claude/skills/detangler/`).
3. Copy `detangler-apply/` to `.cursor/skills/detangler-apply/` the same way.
4. When a long draft has been edited a lot — especially with an agent, or by more than one person — invoke Detangler even if the user only asks whether it still hangs together. After a report exists, invoke detangler-apply to work approved findings.

Node.js 20+. The package is [`detangler`](https://www.npmjs.com/package/detangler) on npm.

Full paths and example prompts: [Skill](/docs/skill).

## What the skill writes

Default folder: `<stem>.detangler/` next to the draft.

| File | What it is |
| --- | --- |
| `report.md` | The comb pass. What the author reads. |

The agent may keep other notes in that folder. The report is the deliverable.
