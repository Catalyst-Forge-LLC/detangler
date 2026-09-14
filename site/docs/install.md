---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path.

## What are you reviewing?

- **A draft or a set of pages** — install `detangler`. Apply later is `detangler-apply`.
- **An app, a site, or a product** — install `detangler-app`. Apply later is `detangler-app-apply`.

Download the review skill first. Add apply when a report exists.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download the zip for the skill you chose:

| Review | Zip |
| --- | --- |
| Drafts | [detangler.zip](/skills/detangler.zip) |
| Programs | [detangler-app.zip](/skills/detangler-app.zip) |

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

- Drafts: `.cursor/skills/detangler/`
- Programs: `.cursor/skills/detangler-app/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor to use the installed skill on the sample below. If it writes `report.md`, it found the skill and the reference files.

### Try it

**Drafts.** Save this note as `stale-reference.md` in the project, or [download it](/samples/stale-reference.md):

```markdown
# Operator guide

## Setup

Install the CLI, then copy the overlay. See the Resources section for the full list of flags and the sample config.

The rest of setup is a path and a working Node 20 install. Nothing else belongs here.

## Usage

Run the comb pass on a finished draft. The Resources section also covers how to keep artifacts next to the file.
```

Then ask:

> Use Detangler on `stale-reference.md`. Follow the installed Detangler skill. Write the report.

**Programs.** Point at the app or site you already have:

> Use detangler-app on this repo. Follow the installed detangler-app skill. Write the report.

### Find the result

| Review | Where |
| --- | --- |
| Drafts | `stale-reference.detangler/report.md` next to the note |
| Programs | `<stem>.detangler-app/report.md` at the repo root |

The source should be unchanged. On the draft sample, the report should flag the Resources pointers as broken. Wording varies by model. Do not expect an identical report every time.

## Claude Code

### Get it

Same zips as Cursor: [detangler.zip](/skills/detangler.zip) or [detangler-app.zip](/skills/detangler-app.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

- Drafts: `.claude/skills/detangler/`
- Programs: `.claude/skills/detangler-app/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/` instead.

### Confirm it

Same check as Cursor: the first run must produce `report.md`.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same paths as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [detangler.zip](/skills/detangler.zip) or [detangler-app.zip](/skills/detangler-app.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent writes a Detangler report, it loaded the skill.

### Try it

Paste the sample note from [Cursor](#try-it), or attach `stale-reference.md`. Then ask:

> Use Detangler on this note. Follow the installed Detangler skill. Write the report.

For a program, attach the site or repo you already have and name `detangler-app`.

### Find the result

The report appears in the chat. When the agent can write files, drafts land in `stale-reference.detangler/report.md`.

## After the review

The matching apply skill performs the edit. Detangler does not rewrite during review.

| Review | Apply zip |
| --- | --- |
| Drafts | [detangler-apply.zip](/skills/detangler-apply.zip) |
| Programs | [detangler-app-apply.zip](/skills/detangler-app-apply.zip) |

Add it the same way you added the review skill. Then name the findings you want worked.

Unnamed “apply the report” means every **broken** finding, then the agent asks.

## Other ways to ask

Once the first run works:

- Does this still hang together after all these edits?
- An agent has been through this file. What tangled?
- Comb this draft.
- Comb the product. Dead routes, twin settings, failed single source of truth.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/<name>/` into the same destination you would use above. The four names are `detangler`, `detangler-apply`, `detangler-app`, and `detangler-app-apply`.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`detangler`](https://www.npmjs.com/package/detangler) on npm.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/detangler) and copy `skills/<name>/`.

### Install for all projects

- Cursor: `~/.cursor/skills/<name>/`
- Claude Code: `~/.claude/skills/<name>/`

Same folder shape. The first-run check is the same.

## Sample reports

- [Draft report](/docs/sample-report)
- [App report](/docs/sample-app-report)
