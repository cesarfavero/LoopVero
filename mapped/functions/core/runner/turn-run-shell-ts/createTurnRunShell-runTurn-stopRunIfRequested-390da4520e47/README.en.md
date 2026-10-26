# `createTurnRunShell/runTurn/stopRunIfRequested`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591883-591904](../../../../../../reference/runtime/sand-eval-runner.cjs#L591883-L591904) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591883-591904](../../../../../../reference/runtime/sand-eval-runner.cjs#L591883-L591904) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591883

Calls written directly in this body: `cancelRun`, `isRunCompletionRequested`, `isRunStopped`, `new SandRunAbortError`.

Assignment or increment targets: `pausedForUpgrade`.

SHA-256 of the source span: `1d57701060fc663e692b48e040bd6ce066f4e1c1e11d17130cff1349fb8c0837`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
