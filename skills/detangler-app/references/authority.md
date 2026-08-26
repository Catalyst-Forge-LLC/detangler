# Authority

In a draft, the outline is the source of truth. In a
program, single source of truth is a claim the codebase
keeps violating. The same fact in three places that
disagree is why the product feels untrustworthy even when
each screen "works."

Authority findings are first-class. Do not stretch them
into repetition unless the representations still agree.

## What a fact is

A user-visible or contract-visible value: a limit, a name,
a status list, a path, a default, a required field, who
may do a verb. Not an implementation detail.

## Types

- **ssot_conflict** — two or more representations of the
  same fact disagree. `broken`.
- **authority_unclear** — two representations, no signal
  which one wins, and they have not yet drifted. 
  `intentional_but_verify`.
- **docs_drift** — README or docs state a fact the shipped
  UI or schema does not. `broken` if a user following the
  docs will fail; `intentional_but_verify` if the docs are
  ahead on purpose and say so.

Node is an `a` id plus the fact. Also name the
representations (schema, type, form, API, copy, docs,
skill).

## Rank of representations (default)

When you must say which side to keep, prefer this order
unless the product already names a winner:

1. Schema or persisted types that ship
2. The running UI / form
3. Skill or rule text that agents follow
4. Public docs and README

That order is a default action, not a moral law. If copy
is the product (a writing skill's bans), skill text outranks
a marketing sentence on the site.

## Worked

**Emit.** Site says the zip goes in `.cursor/skills/foo/`.
Skill `name:` is `bar`. A paste-dumb install fails.
`docs_drift` or `ssot_conflict`, `broken`, node `a2` skill
folder name. Action: make site, zip, and `name:` match.

**Emit.** Zod allowlist is `draft | active`. Form offers
`archived`. `ssot_conflict`, `broken`. Action: one list;
the schema wins unless the form is the product.

**Do not emit.** Two Settings screens, user vs admin, same
fact, admin is a superset. Class as `twin_settings`,
`intentional_but_verify`. Not authority unless the values
conflict.

**Do not emit.** You think they *should* have one User
type. They have one, and it agrees with the form. No
finding.
