# `createTurnPerformanceObservation/recordFirstSubagentDispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547455-547479](../../../../../../reference/runtime/sand-eval-runner.cjs#L547455-L547479) | `ArrowFunctionExpression` | no | `harness2, subagent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547455-547479](../../../../../../reference/runtime/sand-eval-runner.cjs#L547455-L547479) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:547455

Calls written directly in this body: `classifyRequestStep`, `clock.monotonicNow`, `onceModelKnown`.

SHA-256 of the source span: `b5bbd8089e36e03dcec16f90d6cec31dd44f637cfc825aa0d60554dc8da4fbc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
