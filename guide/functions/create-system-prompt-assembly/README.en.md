# `createSystemPromptAssembly`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: prompts](../../components/prompts/README.en.md) · [Index](../../README.en.md)

**Primary source:** [sand-eval-runner.cjs:552679-553779](../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`createSystemPromptAssembly(deps)` returns rendering and snapshot-control functions. The closure retains an in-memory profile snapshot, section hashes, recent static prefixes, and rendered memory state. There is no single final prompt independent of `deps`.

## Composition

Resolves tool decisions and distinguishes the main agent from a subagent. The base prompt can be a lean executor, a full override, a base override, or the normal/mediated-automation variant. `renderSections` builds an ordered `Map` containing profile, identity, timezone, memory, sessions, routines, tasks, skills, channels, directory, sending rules, MCP, and box/computer.

## Snapshots and updates

The profile and frozen sections are indexed by `compactionEpoch`. A profile change may be announced before the prefix is replaced. `persistAnnouncedAgentProfile` checks that the snapshot still corresponds to the expected epoch and identity. Memory may render policy in the system prompt and facts in user-info; pending resolution and retention are explicit states.

## Output

The object exposes `getSystemPrompt`, `createSystemPromptGeneratorForRun`, access to hashes, memory context, section updates, and profile preparation/persistence. `renderSystemPrompt` computes SHA-256 per section and retains prefixes for observation.

## Boundary

Preserving a prefix may benefit caching, but the benefit requires provider metrics. The snapshot neither freezes every tool nor guarantees that production data has already been loaded. This function depends on injected stores and providers.
