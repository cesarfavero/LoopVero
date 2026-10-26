# `DraftSends.sendDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736981-737067](../../../../../../../../reference/runtime/host-main.cjs#L736981-L737067) | `method` | yes | `{     entryId,     draft,     agentId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736981-737067](../../../../../../../../reference/runtime/host-main.cjs#L736981-L737067) | 8 | 0 | 2 | 6 | 0 | 0 |

### host:736981

Calls written directly in this body: `.find`, `buildDraftSendCall`, `isDraftMessage`, `replyFactVerified`, `session.db.updateTranscriptEntry`, `this.readSessionTranscript`, `this.resolveTargetSession`, `this.runClaimedDraftSend`, `this.tm.trayErrors.pushError`.

SHA-256 of the source span: `19caa8830df4750115014de8b7f57e5118760c8ddac93850dc6ffcad5b9936e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
