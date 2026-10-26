# `createTurnPerformanceObservation/maybeEmitTtfaTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547514-547581](../../../../../../reference/runtime/sand-eval-runner.cjs#L547514-L547581) | `ArrowFunctionExpression` | no | `force = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547514-547581](../../../../../../reference/runtime/sand-eval-runner.cjs#L547514-L547581) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547514

Calls written directly in this body: `safelyObserve`.

Assignment or increment targets: `ttfaTraceEmitted`.

SHA-256 of the source span: `9f35d9fd5b8d3acd4b5206ee077a33234542ceb96b4e851ba37b10acb41ae97b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
