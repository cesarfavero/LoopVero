# `AgentToAgentMessaging.appendAgentOutboundEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734664-734692](../../../../../../../reference/runtime/host-main.cjs#L734664-L734692) | `method` | no | `fromAgentId, to3, text3, timestampMs, media = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734664-734692](../../../../../../../reference/runtime/host-main.cjs#L734664-L734692) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:734664

Calls written directly in this body: `entryRaisesUserActivitySignal`, `getTranscript`, `isVisibleOutboundAgentPeerMessageEntry`, `nextEntryId`, `session.db.appendTranscriptEntry`, `session.db.getTranscriptEntries`, `this.tm.appendEntry`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionActivity`, `this.tm.sessions.liveSessions.get`.

SHA-256 of the source span: `19f675d1828ea95fb5ca1a4beb6c27e005591575b66605e02331094cb2655cc7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
