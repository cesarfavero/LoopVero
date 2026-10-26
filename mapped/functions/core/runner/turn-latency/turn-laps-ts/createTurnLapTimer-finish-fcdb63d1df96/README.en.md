# `createTurnLapTimer/finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-laps.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-laps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591222-591226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591222-L591226) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591222-591226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591222-L591226) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591222

Calls written directly in this body: `Math.max`.

Assignment or increment targets: `finished`.

SHA-256 of the source span: `6e36384c90da2f95e4cbc4e63a09bdbe9723cd552905e382041bd8124132a469`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
