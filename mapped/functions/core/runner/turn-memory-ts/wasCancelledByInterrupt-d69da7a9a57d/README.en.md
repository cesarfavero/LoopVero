# `wasCancelledByInterrupt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/turn-memory.ts` · [Module README](../../../../../modules/core/runner/turn-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590604-590606](../../../../../../reference/runtime/sand-eval-runner.cjs#L590604-L590606) | `FunctionDeclaration` | no | `error63, continuity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590604-590606](../../../../../../reference/runtime/sand-eval-runner.cjs#L590604-L590606) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590604

Calls written directly in this body: `continuity.wasInterrupted`, `isCancellationError`.

SHA-256 of the source span: `a1bfbab1e699b6974e0775d843ebfdd3781e9414b66c434ed3e2906830e34107`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
