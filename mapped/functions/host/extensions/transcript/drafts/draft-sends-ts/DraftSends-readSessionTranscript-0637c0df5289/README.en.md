# `DraftSends.readSessionTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737292-737294](../../../../../../../../reference/runtime/host-main.cjs#L737292-L737294) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737292-737294](../../../../../../../../reference/runtime/host-main.cjs#L737292-L737294) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737292

Calls written directly in this body: `getTranscript`, `session.db.getTranscriptEntries`, `this.isSessionOnScreen`.

SHA-256 of the source span: `3bf2244ca4df9d6441922e39fd9c0e8189df9e36edcfda23c8d1ddc650b543fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
