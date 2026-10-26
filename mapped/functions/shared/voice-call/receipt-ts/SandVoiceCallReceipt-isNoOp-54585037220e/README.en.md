# `_SandVoiceCallReceipt.isNoOp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714446-714448](../../../../../../reference/runtime/host-main.cjs#L714446-L714448) | `method` | no | `record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714446-714448](../../../../../../reference/runtime/host-main.cjs#L714446-L714448) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714446

Calls written directly in this body: `SandVoiceCallRecords.hasNoDuration`, `SandVoiceCallRecords.summarize`.

SHA-256 of the source span: `9f2d689fe669da384a53bbac38408cfa30576ccbde9d651cb976604f5f55c475`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
