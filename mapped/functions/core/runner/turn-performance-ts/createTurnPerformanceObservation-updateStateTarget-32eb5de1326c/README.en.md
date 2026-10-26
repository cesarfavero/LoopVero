# `createTurnPerformanceObservation/updateStateTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547825-547827](../../../../../../reference/runtime/sand-eval-runner.cjs#L547825-L547827) | `FunctionExpression` | no | `callId, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547825-547827](../../../../../../reference/runtime/sand-eval-runner.cjs#L547825-L547827) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:547825

Calls written directly in this body: `classifyUpdateStateTarget`, `updateStateTargets.set`.

SHA-256 of the source span: `1af821e8fad933aa7b2e9ff5c56ea628703bf59105eb31fb0e2e47d93a04b5b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
