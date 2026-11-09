---
title: Report
---

`report.md` is what you read. The matching comb skill writes it.

Shared:

1. Header: name, counts, timestamp, counts by severity
2. Broken
3. Intentional but verify
4. Judgment calls
5. The map
6. Deferred strand notes: a count, not the notes

Every finding has an id, a location on the map, a type, evidence, and an action. Findings without an action are dropped. No map node → not a finding.

| | Drafts | Programs |
| --- | --- | --- |
| Map | Reverse outline, then argument spine, then a short continuity overview | Surface, contracts, entities, authority |
| Location | Outline node (`s1`, `install.s2`), plus the other passages a continuity finding needs | Typed id plus path or noun (`r4` `/settings`) |

Severity:

- **broken** — the draft or the product as written is wrong
- **intentional but verify** — plausibly deliberate
- **judgment call** — reasonable people would differ

On a draft, the argument spine records whether the previous section raised the question and a progression basis. `no` is not automatically broken. A continuity finding names the passages, the relationship, and the repair. It does not include a rewritten sentence. The continuity overview is a few sentences after the spine, not another bucket.

## Following an item

An app report records which item the reviewer followed and which paths were exercised or traced. When something is broken, **Fix first** points to the finding that blocks a user action or makes a result unreliable. It uses the existing finding ID. The three buckets still mean the same thing.

Try [Dispatch Desk](/samples/dispatch-desk/) with the practice ticket **Inspect lamp**. In Queue, try **Send to bench** on the row. Then open the ticket and try the same action. One path says “Ticket not found.” The other sends that very ticket to the bench. That comparison gives the fix a repeatable check: either door should put the same ticket on the bench once.

If the reviewer tried both doors, the evidence is **observed**. If the reviewer only read the two handlers, it is **traced**, with the relevant paths named. Neither label changes the severity. Queue and Bench also open a shared editor for new tickets; each starts the ticket in the place the user chose. That is useful overlap to keep.

In a blind browser review of the sample, one bench ticket produced two search results. A second ticket with the same title produced four. Opening them revealed just two ticket IDs. That evidence narrows the repair: count each ticket once while keeping separate tickets that happen to have the same title.
