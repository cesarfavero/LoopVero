# `loadOrSearchSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: skills](../../components/skills/README.en.md) · [Index](../../README.en.md)

**Primary source:** [sand-eval-runner.cjs:566055-566080](../../../reference/runtime/sand-eval-runner.cjs#L566055-L566080). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`loadOrSearchSkill(ctx,deps,search,args)` decides between searching the catalog and loading a specific skill. Returns text/instructions or an error visible to the model.

## Decision

Normalizes empty strings to absence and builds pools of listed and unlisted skills. Without a name, a query is required and invokes search with trigger query. With a name, it attempts exact/by-label resolution using both pools. Missing increments not_found and searches using the supplied query or the name itself. Ambiguous counts the occurrence and throws a message listing candidates. Found calls `loadResolvedSkill`.

## Effect

Searching neither loads nor applies a skill. Only unique resolution proceeds to reading the body. The tool may find content omitted from the prompt catalog due to its budget, so “did not appear in the shortlist” does not mean “does not exist.”

## Dependencies

`searchSkills` uses the `/skills` mount, fuzzy ranking, and up to 10 results. `loadResolvedSkill` reads the skill and records its application; this function does not execute scripts mentioned in the instructions. Read errors and ambiguity must remain distinct in a reconstruction.

## Limit

Pool visibility and read permission are supplied by the stores. The function neither grants the right to edit third-party skills nor changes a remote plugin.
