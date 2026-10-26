# `mergeSessionLiveOverlays`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:710890-710943](../../../../../../../reference/runtime/host-main.cjs#L710890-L710943) | `FunctionDeclaration` | no | `sessions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710890-710943](../../../../../../../reference/runtime/host-main.cjs#L710890-L710943) | 13 | 2 | 0 | 2 | 0 | 0 |

### host:710890

Calls written directly in this body: `.sort`, `awaitingSessionIds.push`, `grokBotGroupChatRoomIdOf`, `groupTurns.push`, `liveOverlayRunningTurn`, `runningSessionIds.push`, `sandTaskSessionId`, `workingTaskSessionIds.push`.

Assignment or increment targets: `awaitingUserResponse`, `boxHandoff`, `isRunningTurn`, `primary`.

SHA-256 of the source span: `27f2690c35b3a4e7802a29da1181b39315fb374b0b3b1cfcd9ecb9c5a207a73b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
