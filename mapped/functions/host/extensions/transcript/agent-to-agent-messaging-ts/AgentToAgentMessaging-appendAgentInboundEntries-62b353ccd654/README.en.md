# `AgentToAgentMessaging.appendAgentInboundEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734606-734632](../../../../../../../reference/runtime/host-main.cjs#L734606-L734632) | `method` | no | `session, messages2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734606-734632](../../../../../../../reference/runtime/host-main.cjs#L734606-L734632) | 5 | 1 | 0 | 0 | 0 | 0 |

### host:734606

Calls written directly in this body: `entryRaisesUserActivitySignal`, `getTranscript`, `nextEntryId`, `session.db.appendTranscriptEntry`, `session.db.getTranscriptEntries`, `this.tm.appendEntry`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionActivity`.

Assignment or increment targets: `raisesUserActivity`.

SHA-256 of the source span: `d2306c05f4e22df67323c5e998826a9bc1685bc3324d61865498f861d7e41f0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
