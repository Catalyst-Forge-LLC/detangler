# Field notes

## 1. Purpose

This note records how the cache writes a value and how readers find it. The purpose is a working map of the current text, not a wish list for a later rewrite.

The opening states the job in one place so later sections can point back here without inventing a second thesis.

## 2. Setup

The writer process calls the invalidation hook after every durable write. Readers consult the index before they touch the blob store. See Section 1 if you need the job statement again.

Figure 1 is the sequence. Table 1 is the field list. Appendix A holds the leftover commands.

Figure 1. Write then invalidate.

Table 1. Index fields.

## 3. Limits

The map does not cover multi-region replicas. Those belong in a later note. See Section 2 for the hook that this section assumes is present.

There are two reasons to wait before changing the hook.

1. The current readers still work.
2. The replica work is not scheduled.

## Appendix A leftover commands

The leftover commands stay here so Section 2 can point at them without keeping them in the main path.
