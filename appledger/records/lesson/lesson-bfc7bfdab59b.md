---
format_version: 0.1.0
id: lesson-bfc7bfdab59b
kind: lesson
title: "5182 is already leased to ollanet-site. ensure-lease claimed 5182 in the
  script "
record_status: active
created_at: 2026-08-25T20:53:00Z
updated_at: 2026-08-25T20:53:00Z
recorded_by:
  id: migration-import
  type: import
visibility: internal
relations: []
claims: []
data:
  context: Imported from workflow tracking gotchas[].
  problem: 5182 is already leased to ollanet-site. ensure-lease claimed 5182 in
    the script but never passed --port to FilePress, so preview landed on a
    random port.
  resolution: Claim detangler-site on 5199. site-dev.mjs prints the lease port and
    starts filepress dev --port <lease>.
  limits: Imported as a historical assertion. Verification was not recorded.
  generalization_status: observed
---


