# `createTurnRunShell/runTurn/onDelivered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591943-591959](../../../../../../reference/runtime/sand-eval-runner.cjs#L591943-L591959) | `ArrowFunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591943-591959](../../../../../../reference/runtime/sand-eval-runner.cjs#L591943-L591959) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:591943

Calls written directly in this body: `errorFreeStep2.visibleOutput`, `performanceObservation.firstAck`, `performanceObservation.messageDispatch`.

SHA-256 of the source span: `9b2243625336670a965c73eecff66fab121239d87389fbd9e1303d9759c590ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
