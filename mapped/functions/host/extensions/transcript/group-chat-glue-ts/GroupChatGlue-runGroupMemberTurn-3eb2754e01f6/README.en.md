# `GroupChatGlue.runGroupMemberTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738642-738651](../../../../../../../reference/runtime/host-main.cjs#L738642-L738651) | `method` | yes | `roomSession, request5, isRoomTurnCurrent, traceCtx, lane = "background", requestSource, attachments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738642-738651](../../../../../../../reference/runtime/host-main.cjs#L738642-L738651) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:738642

Calls written directly in this body: `parseAgentId`, `this.memberKindOf`, `this.reportMemberTurnOutcome`, `this.runTemporalGroupMemberTurn`.

SHA-256 of the source span: `e3563c1212e0bc43f6717189d3234c670d7a292b9993221bf795c365c309cba0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
