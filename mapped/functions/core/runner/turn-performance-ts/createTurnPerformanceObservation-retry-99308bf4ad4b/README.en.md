# `createTurnPerformanceObservation/retry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547828-547854](../../../../../../reference/runtime/sand-eval-runner.cjs#L547828-L547854) | `FunctionExpression` | no | `observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547828-547854](../../../../../../reference/runtime/sand-eval-runner.cjs#L547828-L547854) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:547828

Calls written directly in this body: `safelyObserve`.

Assignment or increment targets: `nextRequestIsRetry`, `retriesBeforeFirstToken`, `retryDelayBeforeFirstTokenMs`, `suppressNextGap`.

SHA-256 of the source span: `06b713a080e417eb60c57892cbb06dc5607b3a813ff0542ac8986a86f9b62c3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
