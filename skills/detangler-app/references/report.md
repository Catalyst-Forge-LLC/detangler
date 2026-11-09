# Report shape

You write `report.md`. This is the document they read.

Do not use the words "issue" or "problem" as headings. The
three bucket names are the headings.

```markdown
# Detangler report — <stem> (app)

<N> surface nodes. <N> contracts. <N> entities. <ISO timestamp>.

Job (from what shipped): <one sentence>

Broken: <n>. Intentional but verify: <n>. Judgment calls: <n>.

Fix first: F-001 — people cannot reach account settings from the header.

## Broken

1. **F-001** · **r4** `/settings` — route_orphan
   Header "Settings" goes to `/settings`.
   Action: Retarget the item, or restore the page.
   Evidence (traced): The shipped header links to `/settings`; the
   route table contains no such page.
   Check: Open Settings from the header and reach the account controls.

## Intentional but verify

None.

## Judgment calls

None.

## App map

Job: <same sentence>
Scope: <item or deliverable followed; what was exercised or only traced>.

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

Use “Fix first” for the broken finding or two with the clearest
user consequence. Say who is blocked or what they can no longer
trust. A dead primary action and a dead link on an unlisted prototype
may both be broken. Do not invent usage figures, add a score, or
promote a judgment call to fill this line. Omit it if nothing is broken.

Label the evidence for each finding. **Observed** means the reviewer
exercised the shipped behavior or inspected the delivered artifact:
give the input, action, and result. **Traced** means the relevant
paths were followed in source or packaging: name those paths and
what they establish. If the basis is mixed, label the claims separately.
Keep a policy decision separate from the behavior you can prove.
For a fix-first finding, give one repeatable check of the intended result.

Every finding has an id, a location (`node_id` plus path or
noun), a type, an action, and evidence. No action → the
finding is not emitted. No map node → not a finding.

The map is extracted from what shipped. Claims come from
each node's own surface, not from intent.

Do not emit line-level suggestions. Do not attach a
feature roadmap.
