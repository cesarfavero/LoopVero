# `DraftSends.discardDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737195-737215](../../../../../../../../reference/runtime/host-main.cjs#L737195-L737215) | `method` | yes | `{     entryId,     agentId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737195-737215](../../../../../../../../reference/runtime/host-main.cjs#L737195-L737215) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:737195

Calls written directly in this body: `.find`, `isDraftMessage`, `session.db.updateTranscriptEntry`, `this.emitDraftEntryUpdate`, `this.readSessionTranscript`, `this.resolveTargetSession`.

SHA-256 of the source span: `00aca7be87c53f13acbde4df898a9957a276d115654c95cf7b561ddf0935e1bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
