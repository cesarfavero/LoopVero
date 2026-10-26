# `createSystemPromptAssembly/resolveMemoryFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552972-553009](../../../../../../reference/runtime/sand-eval-runner.cjs#L552972-L553009) | `FunctionDeclaration` | no | `live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552972-553009](../../../../../../reference/runtime/sand-eval-runner.cjs#L552972-L553009) | 6 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552972

Calls written directly in this body: `deps.compactionEpoch`, `deps.memorySnapshots`, `deps.promptSectionSnapshots`, `isMemoryFreezeEnabled`, `memoryFactsPin`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveFrozenMemoryPrompt`, `resolveFrozenPromptSection`, `snapshots.clearMemoryPromptSnapshot`, `snapshots.getMemoryPromptSnapshot`, `snapshots.setMemoryPromptSnapshot`, `withOtherAgentMemorySnapshot`.

SHA-256 of the source span: `80ebe184aa9ee26b225208fa6f0cd079890d57ad2dbcfebce56d19e136ba1dea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
