# `_SandVoiceCallReceipt.hasNothingToSummarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714449-714453](../../../../../../reference/runtime/host-main.cjs#L714449-L714453) | `method` | no | `record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714449-714453](../../../../../../reference/runtime/host-main.cjs#L714449-L714453) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:714449

Calls written directly in this body: `_SandVoiceCallReceipt.isNoOp`, `record3.turns.filter`.

SHA-256 of the source span: `e3d09fabe3aa5ba84e7275889e3ff205783cfaaa345cec2eccbc6c8ca6097bab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
