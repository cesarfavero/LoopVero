# `createSystemPromptAssembly/getSectionUpdatesForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553165-553207](../../../../../../reference/runtime/sand-eval-runner.cjs#L553165-L553207) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553165-553207](../../../../../../reference/runtime/sand-eval-runner.cjs#L553165-L553207) | 6 | 1 | 0 | 3 | 0 | 0 |

### evaluation:553165

Calls written directly in this body: `.filter`, `.join`, `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `liveFrozenSection`, `memoryFactsInUserInfo`, `pinnedSection`, `renderFrozenPromptSectionUpdates`, `renderMemoryLive`, `renderOtherAssistantMemoryUpdate`, `resolveFrozenPromptSectionUpdate`, `resolveOtherAgentMemoryPromptUpdate`, `resolveRelatedConversationsSection`, `updates.push`.

Assignment or increment targets: `memorySnapshotToPersist`, `peerMemoryUpdateText`.

SHA-256 of the source span: `c8443d1a929c56c1118e29dbd6dfc3edc48dc92c6e2cc8fd5ccc076229c799a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
