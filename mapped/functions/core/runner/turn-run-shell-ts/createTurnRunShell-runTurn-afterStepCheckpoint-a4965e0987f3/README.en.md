# `createTurnRunShell/runTurn/afterStepCheckpoint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591905-591920](../../../../../../reference/runtime/sand-eval-runner.cjs#L591905-L591920) | `ArrowFunctionExpression` | no | `persisted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591905-591920](../../../../../../reference/runtime/sand-eval-runner.cjs#L591905-L591920) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591905

Calls written directly in this body: `Promise.resolve`, `endTurnHold.settleStep`, `inFlightStepCheckpoints.add`, `new Promise`, `options2.onStepCheckpoint`, `persisted.finally`, `runSpan.span.addEvent`, `stopRunIfRequested`.

Assignment or increment targets: `settledSteps`, `stopRequest`, `unclaimedStepCheckpoint`.

SHA-256 of the source span: `b034b9ac5dd9f6255276c942bc6fffd920aa0d6c936de4ec22ed3ebb94ae8f50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
