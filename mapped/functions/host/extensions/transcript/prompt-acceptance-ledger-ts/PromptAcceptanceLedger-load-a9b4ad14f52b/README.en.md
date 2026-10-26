# `PromptAcceptanceLedger.load`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733320-733359](../../../../../../../reference/runtime/host-main.cjs#L733320-L733359) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733320-733359](../../../../../../../reference/runtime/host-main.cjs#L733320-L733359) | 5 | 0 | 0 | 2 | 0 | 2 |

### host:733320

Calls written directly in this body: `new Map`, `parseSendAcceptanceFile`, `parsed2.records.map`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.nowMs`, `this.persist`, `this.readDegradedMarker`, `withCorruptReset`, `withDegradedWindow`, `writeSandDataFileSync`.

Assignment or increment targets: `gaps`, `raw`, `repairNeeded`, `this.loaded`, `this.markerMayExist`.

SHA-256 of the source span: `c3f88af678f0f59c41f05ebf70465b93724ba0752f1081f9eb6f96ffc04c5d1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
