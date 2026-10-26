# `GroupChatGlue.postGroupMemberMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738727-738747](../../../../../../../reference/runtime/host-main.cjs#L738727-L738747) | `method` | no | `session, member, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738727-738747](../../../../../../../reference/runtime/host-main.cjs#L738727-L738747) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:738727

Calls written directly in this body: `Date.now`, `getTranscript`, `nextEntryId`, `parseAgentId`, `session.db.appendTranscriptEntry`, `session.db.getTranscriptEntries`, `this.tm.appendEntry`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionActivity`.

SHA-256 of the source span: `1dbedd8f8ce5d987da91876a5e763c5b6ec956d7f69e971af00ee4fbd303554d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
