# `createTurnPerformanceObservation/prewarmArmTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547339-547342](../../../../../../reference/runtime/sand-eval-runner.cjs#L547339-L547342) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547339-547342](../../../../../../reference/runtime/sand-eval-runner.cjs#L547339-L547342) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547339

Calls written directly in this body: `prewarmArm`.

Assignment or increment targets: `prewarmArmLabel`.

SHA-256 of the source span: `aab1cb4e3a72a2b69f26c5e15c9010f66dc4bb9dbe9ea59829ebd450741f7fe0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
