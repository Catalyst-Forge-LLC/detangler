# Reference patterns

Check all of these against what is still in the document.

- `Section N` / `Section N.M`
- `Figure N` / `Table N` / `Appendix X`
- Named sections only in the form `the Title Case Name section`
  (the word `the` is required). "see Section 2 for the hook that
  this section" is not a named-section hit.
- Figure/table **definitions** look like `Figure N.` or `Figure N:`
  in a caption. "Figure 1 is discussed below" is a use, not a second
  definition.
- Count promises next to a list: `three reasons`, `the following
  four steps`.
- Heading number gaps (`## 3.` after `## 1.` with no `## 2.`).
- CamelCase uses with no definitional hit; `we call this X`,
  `X is a`, `**X**` as definition sites.
- Relative references: `above`, `below`, `earlier`, `later`,
  `as we saw`, `recall that`. Resolve to a direction plus a topic,
  then match content in that direction. Emit only if the topic is
  gone or the direction is wrong.
- Glossary terms the CamelCase patterns miss (lowercase names,
  italic first use, `X (also known as Y)`). Same orphan /
  forward-undefined logic.

Do not emit a second finding for a quote you already listed.

## Worked

**Emit.** "see the Resources section" and no heading or definition
named Resources remains. `reference_orphan`, `broken`. Action:
retarget or restore the heading.

**Do not emit.** "as we saw above" after a paragraph that did state
the claim, still in range. The relative points at living text.
No finding.
