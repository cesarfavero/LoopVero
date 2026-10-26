# `createTurnSettle/settleCompletedTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591091-591150](../../../../../../reference/runtime/sand-eval-runner.cjs#L591091-L591150) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591091-591150](../../../../../../reference/runtime/sand-eval-runner.cjs#L591091-L591150) | 6 | 0 | 2 | 0 | 0 | 0 |

### evaluation:591091

Calls written directly in this body: `.filter`, `.join`, `BigInt`, `Date.now`, `Math.max`, `Math.min`, `args.finalState.turnTimings.push`, `host.isRunSuperseded`, `host.latestPromptMessages`, `host.renamedPromptMarkers`, `host.userTimeZone`, `host.vaultMounted`, `isMemorableExchange`, `lastAssistantText`, `new Date`, `new StepTiming`, `new TurnTelemetryState`, `recordAutomationRunLabeling`, `recordPostTurnLabeling`, `recordTurnTranscript`, `runMemoryExtraction`, `runsPerTurnMemoryExtraction`, `turnEndedOnSilentToolCalls`.

Assignment or increment targets: `args.finalState.turnTelemetry`, `endedOnSilentToolCalls`, `finalAssistantText`.

SHA-256 of the source span: `7be2245aa04971ec3ff57e1ff7f7109f881283255fe8896dc18ee8a704b4dece`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
