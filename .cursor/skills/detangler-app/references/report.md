# Report shape

You write `report.md`. This is the document they read.

Do not use the words "issue" or "problem" as headings. The
three bucket names are the headings.

```markdown
# Detangler report — <stem> (app)

<N> surface nodes. <N> contracts. <N> entities. <ISO timestamp>.

Job (from what shipped): <one sentence>

Broken: <n>. Intentional but verify: <n>. Judgment calls: <n>.

## Broken

1. **F-001** · **r4** `/settings` — route_orphan
   Header "Settings" goes to `/settings`.
   Action: Retarget the item, or restore the page.
   Evidence: No route, page, or nav target remains for `/settings`.

## Intentional but verify

None.

## Judgment calls

None.

## App map

Job: <same sentence>

### Surface
- **r1** `/` Home — <one clause from the page>
  - **r1.2** `/docs` Docs

### Contracts
- **c1** Install skill — zip or npm → folder on disk

### Entities
- **e1** Rule — created in the package; listed on the site

### Authority
- **a1** skill folder name — skill `name:` vs site install path

## Deferred strand notes

No lint, naming, or file-level notes were captured.
```

Empty buckets say `None.`

Every finding has an id, a location (`node_id` plus path or
noun), a type, an action, and evidence. No action → the
finding is not emitted. No map node → not a finding.

The map is extracted from what shipped. Claims come from
each node's own surface, not from intent.

Do not emit line-level suggestions. Do not attach a
feature roadmap.
