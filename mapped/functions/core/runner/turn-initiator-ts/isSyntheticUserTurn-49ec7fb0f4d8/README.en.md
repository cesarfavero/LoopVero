# `isSyntheticUserTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-initiator.ts` · [Module README](../../../../../modules/core/runner/turn-initiator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590515-590523](../../../../../../reference/runtime/sand-eval-runner.cjs#L590515-L590523) | `FunctionDeclaration` | no | `run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590515-590523](../../../../../../reference/runtime/sand-eval-runner.cjs#L590515-L590523) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:590515

Calls written directly in this body: `isCreateThreadWakePrompt`, `isReactionWakePrompt`.

SHA-256 of the source span: `c8c501ab369ac5a1a64477b5839e34fb2ed6a0aba62c5dba1c54a047f6db3940`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
