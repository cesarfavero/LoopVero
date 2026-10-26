# `voiceCallHangupEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt-entry.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-entry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714496-714507](../../../../../../reference/runtime/host-main.cjs#L714496-L714507) | `FunctionDeclaration` | no | `record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714496-714507](../../../../../../reference/runtime/host-main.cjs#L714496-L714507) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:714496

Calls written directly in this body: `SandVoiceCallReceipt.isNoOp`, `SandVoiceCallRecords.conversation`, `SandVoiceCallRecords.summarize`.

SHA-256 of the source span: `9761763f4e42baf4f77e3806fb1c7704925273e3a7caa2a6e26d1002e3600a51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
