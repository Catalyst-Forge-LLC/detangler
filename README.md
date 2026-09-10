<p align="center">
  <img src="site/static/logo.png" alt="Detangler" width="128" />
</p>

# Detangler

Find structural problems left by repeated edits: stale references,
contradictions, duplicated sections, and flows that no longer connect.

An agent reads the matching skill and writes a report. Review does not
edit the source. Apply is a second skill, after you select findings.

| Object | Comb | Apply | A defect it can report |
| --- | --- | --- | --- |
| Drafts | `detangler` | `detangler-apply` | “See Resources” after Resources was deleted |
| Programs | `detangler-app` | `detangler-app-apply` | A Settings item that goes nowhere |

Copy the pair you need. Sample draft report:
[detangler.dev/docs/sample-report](https://detangler.dev/docs/sample-report).
Sample app report:
[detangler.dev/docs/sample-app-report](https://detangler.dev/docs/sample-app-report).

**Docs:** [detangler.dev/docs](https://detangler.dev/docs) · **Site:** [detangler.dev](https://detangler.dev)

## Review, then apply

1. Pick draft or program.
2. Run the matching review.
3. Inspect `report.md`.
4. Invoke the matching apply path on the findings you select.

Unnamed apply means every `broken` finding, then the agent asks.
Unresolved suggestions stay in the report.

## Install

[Download the zip](https://detangler.dev/docs/install) for the pair you
need, or:

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/<name>/` into a skills directory.

Smell Check, Misemphasis, and Cold-eye are optional neighbors, not
requirements.

## License

MIT. Copyright Catalyst Forge LLC.
