# `PromptAcceptanceLedger.removeDegradedMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733419-733428](../../../../../../../reference/runtime/host-main.cjs#L733419-L733428) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733419-733428](../../../../../../../reference/runtime/host-main.cjs#L733419-L733428) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:733419

Calls written directly in this body: `removeSandDataFileSync`, `this.markerPath`.

Assignment or increment targets: `this.markerMayExist`.

SHA-256 of the source span: `318f4a3ef42bcea04a304b9b87975b54be24605d83a9315d19bd1dbc1bd71f7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
