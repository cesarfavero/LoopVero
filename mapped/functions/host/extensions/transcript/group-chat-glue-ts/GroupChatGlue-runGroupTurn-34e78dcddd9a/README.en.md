# `GroupChatGlue.runGroupTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738518-738551](../../../../../../../reference/runtime/host-main.cjs#L738518-L738551) | `method` | yes | `session, epoch, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738518-738551](../../../../../../../reference/runtime/host-main.cjs#L738518-L738551) | 4 | 0 | 3 | 1 | 1 | 1 |

### host:738518

Calls written directly in this body: `describeAgentRunError`, `hostTrayTitle`, `new GroupChatOrchestrator`, `orchestrator.run`, `this.groupIdentityFor`, `this.groupOrchestratorDeps`, `this.localGroupConfig`, `this.tm.roster.emitAgentUpdate`, `this.tm.runLifecycle.endSessionRun`, `this.tm.trayErrors.pushError`.

Explicit throw targets: `result.failure.error`.

SHA-256 of the source span: `d7112a670001a1b431bbccb9f9495794e1353e9e97b6dcd9fcf09ffd6687a385`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
