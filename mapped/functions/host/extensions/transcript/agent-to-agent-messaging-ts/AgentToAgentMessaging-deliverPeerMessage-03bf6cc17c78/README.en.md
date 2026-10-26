# `AgentToAgentMessaging.deliverPeerMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734544-734577](../../../../../../../reference/runtime/host-main.cjs#L734544-L734577) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734544-734577](../../../../../../../reference/runtime/host-main.cjs#L734544-L734577) | 9 | 0 | 2 | 8 | 0 | 0 |

### host:734544

Calls written directly in this body: `Date.now`, `parseAgentId`, `this.appendInbound`, `this.rememberPeerMessageId`, `this.tm.groupChat.postToGroupWithStatus`.

SHA-256 of the source span: `2aa03436ebd7a290c6c4078cf0feee2e972309abd353b2b437f8c53f4bb97fb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
