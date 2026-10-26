# `createTurnPromptExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/turn-composition/prompt-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587347-587505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587347-L587505) | `FunctionDeclaration` | no | `host, turnToolHost, session, turnScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587347-587505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587347-L587505) | 12 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587347

Calls written directly in this body: `allows`, `createAgentStatusReminderMiddleware`, `createDiskPressureReminderMiddleware`, `createFirstStepAckReminderMiddleware`, `createFrozenToolDescriptionsMiddleware`, `createInheritedInferenceLineageMiddleware`, `createLoopNudgeMiddleware`, `createMcpStillLoadingReminderMiddleware`, `createMcpUnavailableReminderMiddleware`, `createModelStreamWallClockMiddleware`, `createOutOfStepToolCallEventRecorder`, `createParentConversationCallMiddleware`, `createSandFrozenPromptTools`, `createSendMessageReminderMiddleware`, `createStartOfTurnAckReminderMiddleware`, `createStepCapReminderMiddleware`, `createToolCallEventMiddleware`, `createToolsChangedReminderMiddleware`, `host.toolDescriptionSnapshots`, `turnToolHost.channels.flatMap`.

SHA-256 of the source span: `d700d2e711dec1749d5908bace7d0d378c4497716f87243fc75ff82c4bf2837b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
