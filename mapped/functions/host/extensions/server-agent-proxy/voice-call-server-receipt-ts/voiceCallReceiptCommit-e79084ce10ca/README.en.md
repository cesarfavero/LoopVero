# `voiceCallReceiptCommit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/voice-call-server-receipt.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/voice-call-server-receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714513-714526](../../../../../../../reference/runtime/host-main.cjs#L714513-L714526) | `FunctionDeclaration` | no | `agentId, record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714513-714526](../../../../../../../reference/runtime/host-main.cjs#L714513-L714526) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714513

Calls written directly in this body: `entries.map`, `voiceCallHangupEntries`.

SHA-256 of the source span: `f646ea22ada81109a93a1f5c73a5e17ccea54697e58d26fbba50501080bda121`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
