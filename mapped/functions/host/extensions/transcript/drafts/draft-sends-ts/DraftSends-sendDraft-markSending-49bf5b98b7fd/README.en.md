# `DraftSends.sendDraft/markSending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737005-737009](../../../../../../../../reference/runtime/host-main.cjs#L737005-L737009) | `ArrowFunctionExpression` | no | `item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737005-737009](../../../../../../../../reference/runtime/host-main.cjs#L737005-L737009) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737005

Calls written directly in this body: `withEditedDraft`.

Assignment or increment targets: `didStamp`.

SHA-256 of the source span: `9684a8f74ddc2f8f2713106231de1bf62720def3b2212b586694bf38a3f57fe2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
