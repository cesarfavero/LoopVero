# `createTurnLapTimer/timeBranch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-laps.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-laps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591205-591221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591205-L591221) | `FunctionExpression` | no | `branch, work` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591205-591221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591205-L591221) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591205

Calls written directly in this body: `.then`, `Promise.resolve`, `clock.monotonicNow`.

SHA-256 of the source span: `570b2cb0688016a93a1a7a18f3d726a7335b621fcf5f43baa7feaf12350ab231`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
