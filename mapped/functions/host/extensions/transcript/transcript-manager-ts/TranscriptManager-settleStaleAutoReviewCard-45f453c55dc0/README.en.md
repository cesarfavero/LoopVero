# `TranscriptManager.settleStaleAutoReviewCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783637-783639](../../../../../../../reference/runtime/host-main.cjs#L783637-L783639) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783637-783639](../../../../../../../reference/runtime/host-main.cjs#L783637-L783639) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783637

Calls written directly in this body: `this.widgetResponses.settleStaleAutoReviewCard`.

SHA-256 of the source span: `f92f10b546b35ba98a715356a101091569fb5b36050f8268db38b90c58b7ed64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
