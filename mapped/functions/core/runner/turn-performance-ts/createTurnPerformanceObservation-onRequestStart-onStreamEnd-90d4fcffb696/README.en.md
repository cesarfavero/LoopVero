# `createTurnPerformanceObservation/onRequestStart/onStreamEnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547668-547689](../../../../../../reference/runtime/sand-eval-runner.cjs#L547668-L547689) | `FunctionExpression` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547668-547689](../../../../../../reference/runtime/sand-eval-runner.cjs#L547668-L547689) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547668

Calls written directly in this body: `Math.min`, `String`, `clock.monotonicNow`, `recordPreFirstMessageRequest`, `turnStepInference.histogram`.

Assignment or increment targets: `ended`, `lastRequestState`, `occupiedGapMs`, `occupiedGapStartedAt`, `previousRequestEndedAt`.

SHA-256 of the source span: `e723149af209164457511b1844bb2a74bea3444e8846ed04a962d9de5d7cf686`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
