---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path.

Detangler writes a report file. A writable workspace is required. Claude.ai without project files is not a supported first-use route.

## What are you reviewing?

- **A draft or a set of pages** — install `detangler`. Apply later is `detangler-apply`.
- **An app, a site, or a product** — install `detangler-app`. Apply later is `detangler-app-apply`.

Use draft review for structural relationships in text. Use application review for relationships between interface, state, and behavior. A documentation site may contain both jobs. Download the review skill first. Add apply when a report exists and you want edits.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Same |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Unverified |
| Claude.ai | — | Writable project files | Not a supported first-use route without files |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A report alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

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

If Cursor lists installed skills, confirm the skill name. Otherwise ask it to open that skill’s `SKILL.md` and quote the first heading.

### Try it

**Drafts.** Save this note as `stale-reference.md` in the project, or [download it](/samples/stale-reference.md):

```markdown
# Operator guide

## Setup

Install the CLI, then copy the overlay. See the Resources section for the full list of flags and the sample config.

The rest of setup is a path and a working Node 20 install. Nothing else belongs here.

## Usage

Run the comb pass on a finished draft. The Resources section also covers how to keep artifacts next to the file.

If a section still points at deleted material, that is the injury this pass is built to catch.

## Limitations

The first release reports. It does not rewrite. Line-level notes stay out of the main list.
```

Then ask:

> Use Detangler on `stale-reference.md`. Follow the installed Detangler skill. Write the report. Leave the note unchanged. This short fixture is an explicit first-run request.

**Programs.** Download the [broken-settings](/samples/broken-settings/) fixture (or copy that folder into the project), then ask:

> Use detangler-app on the broken-settings fixture. Follow the installed detangler-app skill. Write the report. Leave the files unchanged.

The fixture has a working Account page and a Settings nav item that goes nowhere. Reviewing a real app still needs access to the relevant project files; a pasted description is narrower evidence.

### Find the result

| Review | Where |
| --- | --- |
| Drafts | `stale-reference.detangler/report.md` next to the note |
| Programs | `<stem>.detangler-app/report.md` at the fixture or repo root |

The source should be unchanged. On the draft sample, the report should flag the Resources pointers as broken without inventing broader failures to make the sample seem substantial. On the app fixture, look for the dead Settings connection and the working Account control. Wording varies by model.

That the example behaved is not the same check as discovery.

## Claude Code

### Get it

Download [detangler.zip](/skills/detangler.zip) or [detangler-app.zip](/skills/detangler-app.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

- Drafts: `.claude/skills/detangler/`
- Programs: `.claude/skills/detangler-app/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/` instead.

### Confirm it

If Claude Code lists skills, confirm the skill name. Otherwise ask it to open that skill’s `SKILL.md` and quote the first heading.

### Try it

**Drafts.** Save `stale-reference.md` as in [Cursor](#try-it) (or [download it](/samples/stale-reference.md)), then ask:

> Use Detangler on `stale-reference.md`. Follow the installed Detangler skill. Write the report. Leave the note unchanged. This short fixture is an explicit first-run request.

**Programs.** Use the [broken-settings](/samples/broken-settings/) fixture, then ask:

> Use detangler-app on the broken-settings fixture. Follow the installed detangler-app skill. Write the report. Leave the files unchanged.

### Find the result

Open `stale-reference.detangler/report.md` or `<stem>.detangler-app/report.md`. Source unchanged. Look for the stale Resources pointers or the dead Settings nav.

## After the review

Install only a review skill first. The matching apply skill performs edits. Detangler does not rewrite during review.

| Review | Apply zip |
| --- | --- |
| Drafts | [detangler-apply.zip](/skills/detangler-apply.zip) |
| Programs | [detangler-app-apply.zip](/skills/detangler-app-apply.zip) |

Add it the same way you added the review skill. Prefer naming the finding ids you want worked.

Example:

> Apply F-001 from `stale-reference.detangler/report.md`. Follow the installed detangler-apply skill.

Unnamed “apply the report” authorizes every **broken** finding under the current apply contract. Before the first edit, the agent should state which broken findings it will work. Verify and judgment-call findings stay until you name them.

### Update or remove

Replace the installed skill folder to update. Delete that folder to uninstall. Copied skills do not refresh when you bump the npm package.

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

Same folder shape. Discovery and first-use checks are the same.

## Sample reports

- [Draft report](/docs/sample-report)
- [App report](/docs/sample-app-report)
