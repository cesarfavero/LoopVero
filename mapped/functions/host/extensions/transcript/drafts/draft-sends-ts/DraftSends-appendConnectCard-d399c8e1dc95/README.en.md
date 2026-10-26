# `DraftSends.appendConnectCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737301-737323](../../../../../../../../reference/runtime/host-main.cjs#L737301-L737323) | `method` | no | `{     session,     connector,     serverId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737301-737323](../../../../../../../../reference/runtime/host-main.cjs#L737301-L737323) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737301

Calls written directly in this body: `Date.now`, `createSendMessageEntry`, `nextEntryId`, `session.db.appendTranscriptEntry`, `this.isSessionOnScreen`, `this.readSessionTranscript`, `this.tm.roster.emitAgentUpdate`, `this.tm.sendPipeline.appendSendMessageEntry`.

SHA-256 of the source span: `31ef982f0081f9587c2fb6d9faceda1ecb5e6fe696027f5719f5942026d7e1e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
