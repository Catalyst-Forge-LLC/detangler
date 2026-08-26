# Cache note

## How we invalidate

After every durable write the process calls the invalidation hook. That is the answer to a question this draft has not raised yet.

## Why the cache goes stale

Writes used to skip the hook, so readers saw old blobs. This is the question the previous section already answered.
