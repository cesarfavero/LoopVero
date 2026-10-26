# `voiceCallPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742179-742181](../../../../../../../reference/runtime/host-main.cjs#L742179-L742181) | `FunctionDeclaration` | no | `{ agentId, callId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742179-742181](../../../../../../../reference/runtime/host-main.cjs#L742179-L742181) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742179

Calls written directly in this body: `voiceCallsDir`.

SHA-256 of the source span: `8d85ea1d806d7025813a3a7cdf4c9acd427a6c640045e7eb607dd3c2e43e868c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
