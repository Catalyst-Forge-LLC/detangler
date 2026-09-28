---
format_version: 0.1.0
id: lesson-be2a9d1d8a26
kind: lesson
title: Named-section regex that allows any Title-case run before the word
  'section' mat
record_status: active
created_at: 2026-08-25T20:40:00Z
updated_at: 2026-08-25T20:40:00Z
recorded_by:
  id: migration-import
  type: import
visibility: internal
relations: []
claims: []
data:
  context: Imported from workflow tracking gotchas[].
  problem: Named-section regex that allows any Title-case run before the word
    'section' matches clauses like 'See Section 2 for the hook that this
    section' and 'If a section'.
  resolution: Require '[Tt]he Title Case Name section'. Keep Section N on the
    numbered pattern.
  limits: Imported as a historical assertion. Verification was not recorded.
  generalization_status: observed
---


