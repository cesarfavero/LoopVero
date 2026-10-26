# `createTurnPerformanceObservation/flushAwaitingModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547450-547454](../../../../../../reference/runtime/sand-eval-runner.cjs#L547450-L547454) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547450-547454](../../../../../../reference/runtime/sand-eval-runner.cjs#L547450-L547454) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:547450

Calls written directly in this body: `awaitingModel.splice`, `safelyObserve`.

SHA-256 of the source span: `f41f5d8a7609567ffdf501bad77318b9fdb5ae36b42d0def50d19790d3c20182`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
