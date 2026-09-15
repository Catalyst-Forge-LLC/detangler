<p align="center">
  <img src="site/static/logo.png" alt="Detangler" width="128" />
</p>

# Detangler

An installable skill for AI agents.

Find structural problems left by repeated edits: stale references,
contradictions, duplicated sections, and flows that no longer connect.

An agent reads the matching skill and writes a report. Review does not
edit the source. Apply is a second skill, after you select findings.

| Object | Comb | Apply | A defect it can report |
| --- | --- | --- | --- |
| Drafts | `detangler` | `detangler-apply` | “See Resources” after Resources was deleted |
| Programs | `detangler-app` | `detangler-app-apply` | A Settings item that goes nowhere |

Copy the pair you need.

**Get started:** pick the agent, install the skill, then run a named
example — [detangler.dev/docs/install](https://detangler.dev/docs/install).

- [Cursor](https://detangler.dev/docs/install#cursor)
- [Claude Code](https://detangler.dev/docs/install#claude-code)

A writable workspace is required. Sample draft report:
[detangler.dev/docs/sample-report](https://detangler.dev/docs/sample-report).
Sample app report:
[detangler.dev/docs/sample-app-report](https://detangler.dev/docs/sample-app-report).

## First run

Save [this short note](https://detangler.dev/samples/stale-reference.md)
as `stale-reference.md`, then ask:

> Use Detangler on `stale-reference.md`. Follow the installed Detangler
> skill. Write the report. Leave the note unchanged. This short fixture
> is an explicit first-run request.

The report lands in `stale-reference.detangler/report.md`. The note
should be unchanged. The report should flag the Resources pointers.

Install the review skill first. After that, install the matching apply
skill and prefer naming the finding ids you want worked. Unnamed
“apply the report” authorizes every broken finding under the apply
contract.

For programs, use the
[broken-settings](https://detangler.dev/samples/broken-settings/)
fixture on first use.

## Other installation methods

npm supplies the skill files. It does not register the skill with the
agent.

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/<name>/` into the same destination
the [Get started](https://detangler.dev/docs/install) page names for
your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

Smell Check, Misemphasis, and Cold-eye are optional neighbors, not
requirements.

## License

MIT. Copyright Catalyst Forge LLC.
