<p align="center">
  <img src="https://detangler.dev/logo.png" alt="Detangler" width="128" />
</p>

# Detangler

**Find and repair what repeated edits left disconnected.**

Detangler supplies review and repair skills for AI agents working on drafts or apps. Find stale references, contradictions, duplicated sections, and flows that no longer connect, then apply the repairs you select.

An agent reads the matching skill and writes a report. Review does not
edit the source. Apply is a second skill, after you select findings.

| Object | Comb | Apply | A defect it can report |
| --- | --- | --- | --- |
| Drafts | `detangler` | `detangler-apply` | “See Resources” after Resources was deleted |
| Programs | `detangler-app` | `detangler-app-apply` | A Settings item that goes nowhere |

On a draft, the comb also checks continuity: passages that make sense alone and do not develop. The method ends, then three asides sit between it and the example. The report names the interruption and where the example could sit. It does not rewrite the sentence. The app comb does not run that scope.

Copy the pair you need.

**Get started:** pick the agent, install the skill, then run a named
example — [detangler.dev/docs/install](https://detangler.dev/docs/install).

- [Cursor](https://detangler.dev/docs/install#cursor)
- [Claude Code](https://detangler.dev/docs/install#claude-code)

A writable workspace is required. Sample draft report:
[detangler.dev/docs/sample-report](https://detangler.dev/docs/sample-report).
Sample app report:
[detangler.dev/docs/sample-app-report](https://detangler.dev/docs/sample-app-report).

## Repair a reference left behind by an edit

The worked-over-note fixture still says **“See Section 5 if you need the hook itself.”** Section 5 is now **Why we wait**. The hook moved to **How we invalidate**, numbered 6.

The [sample report](https://detangler.dev/docs/sample-report) identifies the mismatch:

> **F-004 · broken · misdirected** at `s3 (line 23)`.
> Point at s5 (How we invalidate), or name the hook section by title.

The report uses stable section IDs: `s5` identifies the heading now numbered 6. An author-applied repair is:

> See “How we invalidate” if you need the hook itself.

The reader reaches the hook without chasing the obsolete number. Review leaves the draft unchanged. Make this edit yourself or ask the matching Apply skill to address `F-004`. The finding comes from the sample report; the repaired sentence illustrates the resulting edit.

## First run

Save [this short note](https://detangler.dev/samples/stale-reference.md)
as `stale-reference.md`, then ask:

> Use Detangler on `stale-reference.md`. Follow the installed Detangler
> skill. Write the report. Leave the note unchanged. This short fixture
> is an explicit first-run request.

The report lands in `stale-reference.detangler/report.md`. The note
should be unchanged. The report should flag the Resources pointers.

Install the review skill first. After that, install the matching apply
skill. Name finding ids to apply those. Unnamed “apply the report”
authorizes every finding marked broken. The agent states those ids
before editing. Intentional-but-verify and judgment-call findings need
separate approval.

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

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
