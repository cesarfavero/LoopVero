# `_VoiceCallRuntime.leaseReceiptSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742402-742410](../../../../../../../reference/runtime/host-main.cjs#L742402-L742410) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742402-742410](../../../../../../../reference/runtime/host-main.cjs#L742402-L742410) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:742402

Calls written directly in this body: `resolveSessionOrRefusal`, `resolved.lease[computed]`, `this.tm.groupChat.isGroupSession`.

SHA-256 of the source span: `d7e5c7b2760f627108345a9aa6330135173a3928ad7053aadbba34d5e6cad4e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
