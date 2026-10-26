# `createTurnRunShell/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591415-591501](../../../../../../reference/runtime/sand-eval-runner.cjs#L591415-L591501) | `FunctionDeclaration` | yes | `prompt, options2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591415-591501](../../../../../../reference/runtime/sand-eval-runner.cjs#L591415-L591501) | 7 | 0 | 1 | 1 | 1 | 1 |

### evaluation:591415

Calls written directly in this body: `Date.now`, `Number`, `Number.isSafeInteger`, `beginTurnBotBlock`, `classifySandTurnInitiator`, `classifyUserTurnPosition`, `createTurnPerformanceObservation`, `createTurnSetupLaps`, `errorFreeStep2.ended`, `errorFreeSteps.beginRun`, `host.getConversationId`, `host.getConversationState`, `host.metricsClock.monotonicNow`, `host.metricsTurn`, `performanceObservation.complete`, `resolveTurnOutcomeTags`, `resolveTurnTraceOutcome`, `runTurn`.

Assignment or increment targets: `failure3`, `outcome`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ee5fef63c52d5c5b7ec2b080f2433a323368cc730076e27e79a86270b7c71479`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
