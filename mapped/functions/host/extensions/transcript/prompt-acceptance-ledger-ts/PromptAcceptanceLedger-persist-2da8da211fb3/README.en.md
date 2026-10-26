# `PromptAcceptanceLedger.persist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733378-733400](../../../../../../../reference/runtime/host-main.cjs#L733378-L733400) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733378-733400](../../../../../../../reference/runtime/host-main.cjs#L733378-L733400) | 3 | 0 | 0 | 2 | 0 | 1 |

### host:733378

Calls written directly in this body: `JSON.stringify`, `loaded.records.values`, `this.enterDegraded`, `this.nowMs`, `this.removeDegradedMarker`, `withDegradedWindow`, `writeSandDataFileSync`.

Assignment or increment targets: `loaded.gaps`, `this.degradedSinceMs`.

SHA-256 of the source span: `417e644797ca89506c2f457daf7a039de7c8537ff62514b0b8bc5a24b3785f04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
