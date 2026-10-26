# `publishVoiceCallReceiptToServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/voice-call-server-receipt.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/voice-call-server-receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714527-714541](../../../../../../../reference/runtime/host-main.cjs#L714527-L714541) | `FunctionDeclaration` | yes | `record3, commit2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714527-714541](../../../../../../../reference/runtime/host-main.cjs#L714527-L714541) | 3 | 0 | 1 | 2 | 2 | 0 |

### host:714527

Calls written directly in this body: `commit2`, `new VoiceCallReceiptPublishError`, `parseAgentId`, `voiceCallReceiptCommit`.

Explicit throw targets: `VoiceCallReceiptPublishError`.

SHA-256 of the source span: `2c7c722026543c5541215ceba8ee629df4b268c7955544cb6c2c5bc06bf577e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
