# `_VoiceCallRuntime.lineIsOpen`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742287-742293](../../../../../../../reference/runtime/host-main.cjs#L742287-L742293) | `method` | no | `{     agentId,     address   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742287-742293](../../../../../../../reference/runtime/host-main.cjs#L742287-L742293) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742287

Calls written directly in this body: `VoiceCallChannel.callIdOf`, `this.liveCallByAgent.get`.

SHA-256 of the source span: `836908a24e75b85470491d89f04885c3e416ebeae3bc35e307fd9fad33aec6b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
