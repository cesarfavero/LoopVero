# `createTurnRunShell/runTurn/pauseThisRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591852-591864](../../../../../../reference/runtime/sand-eval-runner.cjs#L591852-L591864) | `ArrowFunctionExpression` | no | `requestId = inferenceRequestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591852-591864](../../../../../../reference/runtime/sand-eval-runner.cjs#L591852-L591864) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591852

Calls written directly in this body: `cancelRun`, `new SandRunAbortError`.

Assignment or increment targets: `stopRequest`.

SHA-256 of the source span: `b3910c3a3b766d2cec34980ccad44db6562fd5afdab98f0f2d60d128eb201ad5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
