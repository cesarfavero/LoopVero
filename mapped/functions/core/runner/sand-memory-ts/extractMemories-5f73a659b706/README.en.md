# `extractMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536344-536367](../../../../../../reference/runtime/sand-eval-runner.cjs#L536344-L536367) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536344-536367](../../../../../../reference/runtime/sand-eval-runner.cjs#L536344-L536367) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:536344

Calls written directly in this body: `buildExtractionUserPrompt`, `buildProfileOnlyExtractionSystemPrompt`, `collectExecutorText`, `executor.appendMessages`, `parseExtractedMemories`.

SHA-256 of the source span: `7955062b0fd485eec91e3b765d0faa66853153840fde6c826042f05c314f4bb3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
