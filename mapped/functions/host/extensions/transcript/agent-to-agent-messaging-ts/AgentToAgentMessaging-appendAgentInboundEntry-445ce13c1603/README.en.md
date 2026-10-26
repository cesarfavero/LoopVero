# `AgentToAgentMessaging.appendAgentInboundEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734633-734663](../../../../../../../reference/runtime/host-main.cjs#L734633-L734663) | `method` | yes | `agentId, from2, text3, timestampMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734633-734663](../../../../../../../reference/runtime/host-main.cjs#L734633-L734663) | 5 | 0 | 1 | 2 | 0 | 1 |

### host:734633

Calls written directly in this body: `__callDispose`, `__using`, `cloudAgentInboundEntryId`, `entries.some`, `getTranscript`, `nextEntryId`, `session.db.appendTranscriptEntry`, `session.db.getTranscriptEntries`, `this.tm.appendEntry`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.leaseBackgroundSession`.

SHA-256 of the source span: `8a0b89384db0ea63df8ad40c387b45d1ebae77605945859663079a830d397a82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
