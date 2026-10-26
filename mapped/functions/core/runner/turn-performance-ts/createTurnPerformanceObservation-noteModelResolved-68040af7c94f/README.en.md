# `createTurnPerformanceObservation/noteModelResolved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547954-547957](../../../../../../reference/runtime/sand-eval-runner.cjs#L547954-L547957) | `FunctionExpression` | no | `resolvedModelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547954-547957](../../../../../../reference/runtime/sand-eval-runner.cjs#L547954-L547957) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:547954

Calls written directly in this body: `flushAwaitingModel`.

Assignment or increment targets: `modelId`.

SHA-256 of the source span: `3fd0039ad6f8963be2423da162e7e032ca84ace42d8a70e27c6667e97d03e193`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
