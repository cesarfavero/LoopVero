# `createSystemPromptAssembly/resolveMemoryControl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553010-553045](../../../../../../reference/runtime/sand-eval-runner.cjs#L553010-L553045) | `FunctionDeclaration` | no | `live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553010-553045](../../../../../../reference/runtime/sand-eval-runner.cjs#L553010-L553045) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:553010

Calls written directly in this body: `deps.compactionEpoch`, `deps.memorySnapshots`, `deps.promptSectionSnapshots`, `isMemoryFreezeEnabled`, `memoryControlPin`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveFrozenMemoryPrompt`, `resolveFrozenPromptSection`, `snapshots.clearMemoryPromptSnapshot`, `snapshots.getMemoryPromptSnapshot`, `snapshots.setMemoryPromptSnapshot`, `withOtherAgentMemorySnapshot`.

SHA-256 of the source span: `ffe973ab433e6cde4306d0e7ddf2b318d73d52d0cec772fdc694b331caea9a1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
