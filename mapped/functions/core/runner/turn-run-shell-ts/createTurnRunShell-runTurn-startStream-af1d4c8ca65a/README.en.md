# `createTurnRunShell/runTurn/startStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592298-592328](../../../../../../reference/runtime/sand-eval-runner.cjs#L592298-L592328) | `ArrowFunctionExpression` | no | `attemptCtx, resumeFrom, persistCheckpoint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592298-592328](../../../../../../reference/runtime/sand-eval-runner.cjs#L592298-L592328) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:592298

Calls written directly in this body: `.getAwaitingUserInputTurnId`, `.getCompletedTurnId`, `.with`, `Promise.resolve`, `agent.runStream`, `attemptCtx.signal.throwIfAborted`, `attemptCtx.with`, `completeThisRun`, `host.agentStore`, `pauseThisRun`, `settleStepCheckpointWaiters`, `toRedactedConversationAction`, `toRedactedConversationStateStructure`.

SHA-256 of the source span: `96ddd164cb456d780a84009454940cf70c110f717caf7cbd2cff49701240e55f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
