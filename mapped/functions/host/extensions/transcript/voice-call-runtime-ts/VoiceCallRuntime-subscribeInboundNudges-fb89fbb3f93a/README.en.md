# `_VoiceCallRuntime.subscribeInboundNudges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742227-742230](../../../../../../../reference/runtime/host-main.cjs#L742227-L742230) | `method` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742227-742230](../../../../../../../reference/runtime/host-main.cjs#L742227-L742230) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742227

Calls written directly in this body: `this.nudgeListeners.add`.

SHA-256 of the source span: `f97c44c3a3a4ade3c8a4b9e8f3a490184a9e9e4bd1bf702712ae385cfdfcd4d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
