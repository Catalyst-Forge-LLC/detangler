# Apply an app report

Standing rules for working a Detangler app report. The comb
skill writes `report.md`. This hour edits the product.

## When to use it

They have `<stem>.detangler-app/report.md` and want the
knots worked. They may say apply the app report, work the
broken findings, or fix what the app comb found.

## Rules

1. Work only findings they approved. Approval is chat-only.
2. Prefer named finding ids. Selected IDs are the default editing
   example.
3. If they said apply the report and named no ids: that request
   authorizes every `broken` finding under this contract, in
   report order. Do not treat verify or judgment-call items as
   approved by that phrase. Ask before `intentional_but_verify`
   and `judgment_call`.
4. Before the first edit under a broad apply, state which broken
   findings you will work. Then proceed under that authorization.
5. One approved finding at a time, including orphans that
   edit creates. Finish its `action`. Stop if the next edit
   would turn into a file cleanup or a neighboring route.
6. Do the finding's `action`. Do not expand into lint,
   naming, performance, security, or internals.
7. After the edit, remaining pointers must still resolve.
   If you delete a route, retarget or remove the nav, copy,
   and clients that aimed at it as part of that same
   approved finding.
8. Do not invent findings. If the product already satisfies
   the action, skip and say so.
9. Re-run the detangler-app comb skill after each approved
   finding. Show what is gone and what is new. Then
   continue or stop.
10. If the product is in git, one commit per finding is
    allowed. Do not commit unless asked.

Swaths, not strands. This is still not a cleanup hour.
Do not drive-by refactor a neighboring route.
