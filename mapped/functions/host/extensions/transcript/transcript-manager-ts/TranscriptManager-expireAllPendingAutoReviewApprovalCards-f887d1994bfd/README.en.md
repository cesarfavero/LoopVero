# `TranscriptManager.expireAllPendingAutoReviewApprovalCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783640-783642](../../../../../../../reference/runtime/host-main.cjs#L783640-L783642) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783640-783642](../../../../../../../reference/runtime/host-main.cjs#L783640-L783642) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783640

Calls written directly in this body: `this.widgetResponses.expireAllPendingAutoReviewApprovalCards`.

SHA-256 of the source span: `25293deb7ac3de2f279caa1d098feba565cc3a45927bc134bb82ee96a4e910d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
