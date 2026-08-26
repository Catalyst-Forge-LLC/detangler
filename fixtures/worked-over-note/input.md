# Invalidation note

## 1. Purpose

This note is a working map of how the writer path invalidates a cache after a durable write. It is not a wish list for a later rewrite. Later sections should point back here for the job statement instead of inventing a second thesis.

The map is for people who already operate the overlay in production. It records what the text now claims, not what a planning doc once promised. If a later section restates the job, that restatement should still agree with this one.

The audience is operators who already ship the overlay. If you need flags and the sample config, see the Resources section.

## 2. Setup

Install the CLI, then copy the overlay. The Resources section has the full flag list. Nothing else belongs in setup except a path and Node 20.

A clean setup is a working binary, a config path the process can read, and an index the readers already trust. Do not add a second overlay “just in case.” The last pass that did that left two configs and one of them was stale.

Readers consult the index before they touch the blob store. Writers call CacheHook after every durable write. Support still quotes CacheHook in the runbook.

Figure 1 is the sequence. Table 1 is the field list. Appendix A holds leftover commands from a chapter that was cut.

## 4. Usage

Run the comb after a finished draft. Keep the report next to the file. See Section 2 for install. See Section 5 if you need the hook itself.

If a section still points at deleted material, that is the injury this pass is built to catch. The Resources section also covers how to keep artifacts next to the file.

## 5. Why we wait

There are three reasons to wait before shipping the hook change.

1. Current readers still resolve the old key.
2. The replica cutover is not scheduled.
3. Support still quotes the previous timeout.
4. A fourth item landed during the last edit and nobody updated the count.

The retry window on the writer path is 30 seconds after a failed invalidation. Operators copied that sentence into a later recap.

This section also restates the job: after every durable write the process calls the invalidation hook. That sentence was added “for clarity” in a later pass and now sits next to the wait-list.

The wait is not a product feature. It is a freeze while two teams finish a cutover they scheduled in different weeks. If you ship the hook change during that freeze, current readers still resolve the old key and the replica side has no story. That is the whole of the wait. Everything after this paragraph is leftover from a later editor who wanted the section to look finished.

## 6. How we invalidate

After every durable write the process calls the invalidation hook. That is the answer to a question the previous section already treated as settled.

CacheHook is the name of that hook. A term is easier to use once it has a sentence. This is that sentence.

Writes used to skip the hook, so readers saw old blobs. That is why the cache goes stale when the hook is missing. The opening already said the job is a map of invalidation. This section answers it again from the other direction.

The hook is a single call after the write is durable. It is not a queue, not a batch, and not a best-effort log line. If that call is skipped, the index still points at the previous blob and the reader has no way to know.

## 7. Recap

The retry window on the writer path is 90 seconds after a failed invalidation. The rest of this recap is furniture so the two timeout sentences stay long enough to notice.

After every durable write the process calls the invalidation hook. See the Resources section if you want the original wording.

## 8. Limits

The map does not cover multi-region replicas. Those belong in a later note. See Section 2 for the hook that this section assumes is present.

The first release reports. It does not rewrite. Line-level notes stay out of the main list. If you came here for a rewrite checklist, you are in the wrong note. The map stops at what the current text still claims.

## 9. Playbook

Install the CLI, then copy the overlay. Point it at a draft. Keep the report next to the file. See Section 2.

This is the same ground as Setup, written in a later session when someone wanted a “runbook voice.” Reasonable people would keep both or cut one.

## 10. Leftovers

Commands that used to live in the deleted Resources chapter stay here until someone files them. Appendix A is mentioned above and does not appear as a heading.
