# Handbook

## Opening

The cache fails because writes bypass the invalidation hook after each durable store. Hold that claim. The middle of this note is a long walk so the recap at the end is a reminder, not a second thesis.

## Middle walk

This stretch is the digression. It talks about replica lag, operator runbooks, and the order of deploys. It does not restate the opening claim. It exists so a later reminder has something to come back from. Replica lag shows up as a reader seeing yesterday's blob. Runbooks tell people to bounce the writer. Deploys go region by region. None of that changes the hook rule. More walk: the index is rebuilt at boot, the blob store is append-only, and the on-call sheet still names the old dashboard. Keep walking. The point of this section is distance.

## Close

The cache fails because writes bypass the invalidation hook after each durable store. That line returns after the walk so a reader can pick the claim back up.
