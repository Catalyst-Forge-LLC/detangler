# Map shape

The map is the outline equivalent. Extract it from what
**shipped**. Not from TODO, ROADMAP, tickets, or chat.

Four layers. Every finding points at one node. Typed id plus
the path or noun in the finding, so apply can find the surface.

## Surface (`r`)

Routes, pages, nav, information architecture, entry points.

Sources: router tables, `pages/`, `src/routes/`, FilePress
`site/pages` and `site/docs`, `_nav.json`, header/footer
links, sitemap, the live site if it is up.

Ids: `r1`, `r1.2`, in the order you meet them in nav, then
orphans the nav does not list. Write the path or page title
next to the id.

A skill-and-site product (no app router) still has a surface:
home, docs, install, about, download links. Those are `r`
nodes.

## Contracts (`c`)

Features as inputs → outputs. What the user can **do**, not
what files exist.

Sources: primary buttons, first-run, empty states, skill
hours, CLI only if a `bin` ships, forms that complete a job.

Ids: `c1`, `c2`, … plus a verb-noun (`Install skill`,
`Create job`, `Run comb`).

A button that does not complete a job is not a contract. It
may be a reference tangle on a surface node.

## Entities (`e`)

Nouns the product claims are real, and where each may be
created, edited, listed, deleted, or only mentioned.

Sources: schema, types, forms, list pages, copy that names
the noun as if it exists.

Ids: `e1`, `e2`, … plus the noun (`User`, `Job`, `Rule`).

Do not mint an entity for a file the user never meets.

## Authority (`a`)

Which representation is allowed to be true for one fact.

Sources: schema, types, form fields, API, UI copy, README,
docs, skill text. Pair them only when they name the same fact.

Ids: `a1`, `a2`, … plus the fact (`retry window`, `plan
limit`, `skill folder name`).

How to judge disagreement: `references/authority.md`.

## Job (not a node)

Before weight findings, write one sentence for what the
product is **for**, taken from lockup, first-run, or README
as it stands. Put that sentence at the top of the map in
the report. Do not use a pitch deck or a remembered intent.

## Do not put on the map

- Planned features
- Tests, unless they are the only proof a shipped route
  exists
- Component internals, hooks, CSS
- A second product's surface sitting in `node_modules`
