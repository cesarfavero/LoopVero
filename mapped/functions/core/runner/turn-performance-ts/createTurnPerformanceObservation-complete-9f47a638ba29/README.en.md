# `createTurnPerformanceObservation/complete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547961-548009](../../../../../../reference/runtime/sand-eval-runner.cjs#L547961-L548009) | `FunctionExpression` | no | `outcome, errorType = "none"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547961-548009](../../../../../../reference/runtime/sand-eval-runner.cjs#L547961-L548009) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547961

Calls written directly in this body: `clock.monotonicNow`, `emitInferenceTtft`, `flushAwaitingModel`, `maybeEmitTtfaTrace`, `safelyObserve`.

Assignment or increment targets: `active`.

SHA-256 of the source span: `23e7e257054a1a961c85c109750f37d533e7ebfba1d09f1ad63abffcdc78126a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
