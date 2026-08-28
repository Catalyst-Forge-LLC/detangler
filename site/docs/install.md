---
title: Install
---

The [skill](/docs/skill) is the product. Two combs, two folder pairs. Apply is a second folder, after a report exists.

| Object | Comb | Apply |
| --- | --- | --- |
| Drafts | [detangler.zip](/skills/detangler.zip) | [detangler-apply.zip](/skills/detangler-apply.zip) |
| Programs | [detangler-app.zip](/skills/detangler-app.zip) | [detangler-app-apply.zip](/skills/detangler-app-apply.zip) |

## Drop the folder in

You do not need npm. You need a folder that contains `SKILL.md`, named for the skill you want.

1. Download the zip for that skill.
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here (swap the name for the skill you picked):

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/<name>/` in the project, or `~/.cursor/skills/<name>/` |
| Claude Code | `~/.claude/skills/<name>/` or `.claude/skills/<name>/` in the repo |
| claude.ai | Settings → Customize → Skills → upload the zip (do not unzip) |

4. Ask whether it still hangs together. A draft: *Does this still hang together after all these edits?* A program: *Does this app still hang together after all these edits?*

That is the whole install. The agent reads the folder and writes `report.md`.

## If you already use npm

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/<name>/` into a skills directory. The four names are `detangler`, `detangler-apply`, `detangler-app`, and `detangler-app-apply`. If a folder is missing from the package, use the zip.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/detangler) and copy `skills/<name>/`.

Node.js 20+. The package is [`detangler`](https://www.npmjs.com/package/detangler) on npm.

Example prompts: [Skill](/docs/skill). A finished [sample report](/docs/sample-report) from a draft comb.

## What the skill writes

| Comb | Folder | Deliverable |
| --- | --- | --- |
| Drafts | `<stem>.detangler/` next to the draft (or the set) | `report.md` |
| Programs | `<stem>.detangler-app/` at the repo root | `report.md` |

The agent may keep other notes in that folder. The report is the deliverable.
