# `createSystemPromptAssembly/resolveSpeakerPinnedUserBotNotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553046-553059](../../../../../../reference/runtime/sand-eval-runner.cjs#L553046-L553059) | `FunctionDeclaration` | no | `live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553046-553059](../../../../../../reference/runtime/sand-eval-runner.cjs#L553046-L553059) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553046

Calls written directly in this body: `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveUserBotNotesPrompt`.

SHA-256 of the source span: `0da4b4d7c8db7d322a1569d360a3564bcf04c45f8601a6148a6ebc00e8b7f528`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
