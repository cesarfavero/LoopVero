# `_VoiceCallRuntime.record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742338-742364](../../../../../../../reference/runtime/host-main.cjs#L742338-L742364) | `method` | yes | `record3, sink` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742338-742364](../../../../../../../reference/runtime/host-main.cjs#L742338-L742364) | 5 | 0 | 3 | 2 | 2 | 0 |

### host:742338

Calls written directly in this body: `isSafeFolderId`, `new SandVoiceCallReceiptUndeliverableError`, `parseAgentId`, `sink.publish`, `this.appendReceiptToBoxChat`, `this.liveCallByAgent.get`, `this.setVoiceCallPresence`, `writeRecordFile`.

Explicit throw targets: `SandVoiceCallReceiptUndeliverableError`.

SHA-256 of the source span: `15a817f9e610e390e440dc1aa9bb8b9b3fa5ce571d63a651800d30325705dc05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
