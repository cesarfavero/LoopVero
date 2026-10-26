# `_VoiceCallRuntime.appendReceiptToBoxChat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742365-742393](../../../../../../../reference/runtime/host-main.cjs#L742365-L742393) | `method` | yes | `agentId, record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742365-742393](../../../../../../../reference/runtime/host-main.cjs#L742365-L742393) | 3 | 2 | 2 | 2 | 1 | 1 |

### host:742365

Calls written directly in this body: `__callDispose`, `__using`, `new SandVoiceCallReceiptUndeliverableError`, `session.db.appendTranscriptEntry`, `this.leaseReceiptSession`, `this.tm.appendEntry`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `voiceCallHangupEntries`.

Explicit throw targets: `SandVoiceCallReceiptUndeliverableError`.

SHA-256 of the source span: `9e441c9e37722ec2614e4ed81f2a75a9a38239c6390dcf4c68f1fa5029bc9b19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
