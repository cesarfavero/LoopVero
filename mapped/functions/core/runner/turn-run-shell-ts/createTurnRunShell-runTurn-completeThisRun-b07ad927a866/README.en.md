# `createTurnRunShell/runTurn/completeThisRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591842-591848](../../../../../../reference/runtime/sand-eval-runner.cjs#L591842-L591848) | `ArrowFunctionExpression` | no | `requestId = inferenceRequestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591842-591848](../../../../../../reference/runtime/sand-eval-runner.cjs#L591842-L591848) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591842

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `stopRequest`.

SHA-256 of the source span: `6f7a238a968841565cb68a43d99769ce068e9d930f69f41c92311e4d5499772c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
