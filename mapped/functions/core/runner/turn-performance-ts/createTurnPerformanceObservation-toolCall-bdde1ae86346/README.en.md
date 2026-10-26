# `createTurnPerformanceObservation/toolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547762-547824](../../../../../../reference/runtime/sand-eval-runner.cjs#L547762-L547824) | `FunctionExpression` | no | `{ event, callId, toolCall: toolCall2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547762-547824](../../../../../../reference/runtime/sand-eval-runner.cjs#L547762-L547824) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547762

Calls written directly in this body: `safelyObserve`.

SHA-256 of the source span: `dca11dcc8fae6b526db442a1de88c879a240b80431cc50689595f4d88a8f83e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
