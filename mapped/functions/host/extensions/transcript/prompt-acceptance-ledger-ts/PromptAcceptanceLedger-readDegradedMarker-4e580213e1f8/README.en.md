# `PromptAcceptanceLedger.readDegradedMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733360-733377](../../../../../../../reference/runtime/host-main.cjs#L733360-L733377) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733360-733377](../../../../../../../reference/runtime/host-main.cjs#L733360-L733377) | 3 | 0 | 0 | 5 | 0 | 2 |

### host:733360

Calls written directly in this body: `JSON.parse`, `isFiniteNumber4`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.markerPath`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `c6c776ccd074babf60a5842cb3c6046ececf0dddca572dc97be6fb0f7c8f44a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
