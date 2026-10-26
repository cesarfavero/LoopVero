# `DraftSends.settleSentDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737336-737348](../../../../../../../../reference/runtime/host-main.cjs#L737336-L737348) | `method` | no | `session, entryId, state, draft` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737336-737348](../../../../../../../../reference/runtime/host-main.cjs#L737336-L737348) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737336

Calls written directly in this body: `session.db.updateTranscriptEntry`, `this.emitDraftEntryUpdate`.

SHA-256 of the source span: `f058e3bbf27c95823d377c828575f9e1f9d21e61825d769a4252a0989685c79e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
