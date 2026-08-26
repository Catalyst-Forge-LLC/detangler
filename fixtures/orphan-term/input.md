# Retry note

## Setup

The writer retries through CacheHook when a store write fails. Support still quotes CacheHook in the runbook even though the defining paragraph was cut.

Nothing else in setup belongs here. The rest of the path is ordinary Node I/O.

## Aftermath

Without CacheHook the reader keeps the stale blob. That is the leftover use this fixture is meant to catch.
