# `isReactionWakePrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/reactions.ts` · [Module README](../../../../modules/core/reactions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538623-538625](../../../../../reference/runtime/sand-eval-runner.cjs#L538623-L538625) | `FunctionDeclaration` | no | `prompt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538623-538625](../../../../../reference/runtime/sand-eval-runner.cjs#L538623-L538625) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538623

Calls written directly in this body: `prompt.startsWith`.

SHA-256 of the source span: `16b25c0218abe920508340b4d9aabc2262c13a9076945c88eb140b21497b6e5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
