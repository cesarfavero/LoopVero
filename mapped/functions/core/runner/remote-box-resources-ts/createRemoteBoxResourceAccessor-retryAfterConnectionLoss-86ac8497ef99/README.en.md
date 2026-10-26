# `createRemoteBoxResourceAccessor/retryAfterConnectionLoss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534466-534506](../../../../../../reference/runtime/sand-eval-runner.cjs#L534466-L534506) | `ArrowFunctionExpression` | yes | `ctx, loss` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534466-534506](../../../../../../reference/runtime/sand-eval-runner.cjs#L534466-L534506) | 8 | 0 | 1 | 1 | 4 | 0 |

### evaluation:534466

Calls written directly in this body: `.then`, `box.reconnectAfterConnectionLoss`, `callMayHaveRun`, `dropConnection`, `freshConnectionError`, `isSandBoxConnectionLoss`, `new SandBoxCallOutcomeUnknownError`, `new SandBoxNotReadyError`.

Assignment or increment targets: `aConnectionWasLost`, `reconnect`.

Explicit throw targets: `SandBoxCallOutcomeUnknownError`, `SandBoxNotReadyError`, `surfaced`.

SHA-256 of the source span: `6e683a8623bbb5b58495b8cd611c8a2cc4471fbeaf3896f47a885779a14c3a03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
