# `createTurnPromptExecutor/getExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/turn-composition/prompt-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587457-587496](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587457-L587496) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587457-587496](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587457-L587496) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587457

Calls written directly in this body: `allows`, `applyAgentStatusReminder`, `applyChannelStatusReminders.reduce`, `applyDiskPressureReminder`, `applyFirstStepAckReminder`, `applyFrozenToolDescriptions`, `applyInheritedInferenceLineage`, `applyLoopNudge`, `applyMcpStillLoadingReminder`, `applyMcpUnavailableReminder`, `applyModelStreamWallClockLimit`, `applyParentConversationCall`, `applySendMessageReminder`, `applyStartOfTurnAckReminder`, `applyStepCapReminder`, `applyToolCallTelemetry`, `applyToolsChangedReminder`, `chatSilenceRemindersApply`, `createAutomationCompletionMiddleware`, `createFirstStreamMessageSnapshotMiddleware`, `createModelVisiblePathMiddleware`, `frozenPromptTools.middleware`, `host.automationCompletions`, `host.setLatestPromptMessagesGetter`, `new SimplePromptToolExecutor`, `session.getExecutor`.

Assignment or increment targets: `latestPromptMessages`.

SHA-256 of the source span: `d5adcbc95793ef1016c162772a98653140a3f38c87f04b01ac8c96ce81e13da2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
