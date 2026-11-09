# Dispatch Desk review fixture

The [app](../../site/static/samples/dispatch-desk/index.html) is the same
single file served on the Detangler site. Open it directly in a browser;
there is no install, server, network request, or persistent data.

Give a fresh reviewer only the installed `detangler-app` skill and a
copy of the app folder. Keep this directory and the public walkthrough
out of its inputs:

> Review Dispatch Desk with detangler-app. Follow one repair ticket
> across the views that handle it. Write the report; do not edit the app.

Afterward compare the report to [expected.json](expected.json) by
behavior, not wording, assigned IDs, or the order of independent
findings. Both breaks should be actionable; flagging the two creation
paths as a duplicate is a false positive. A source-only review may
pass, but must not claim to have clicked anything. Check the actual
input, result, and evidence before accepting either finding.

## First blind run · 2026-11-09

A reviewer given the app and skill alone exercised the browser and
found both breaks. The Queue row rejected Ticket 3; its editor sent
it to Bench. Searching its unique title returned two rows, both
opening Ticket 3. After creating a separate bench ticket with the
same title, four rows opened IDs 3, 4, 3, 4. That last check rules
out a tempting repair: merging tickets solely by title. The reviewer
kept both creation paths and verified that returning from the editor
preserved the search query.
