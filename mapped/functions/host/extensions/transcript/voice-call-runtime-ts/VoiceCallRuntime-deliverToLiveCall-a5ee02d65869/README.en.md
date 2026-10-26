# `_VoiceCallRuntime.deliverToLiveCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742306-742311](../../../../../../../reference/runtime/host-main.cjs#L742306-L742311) | `method` | no | `{ agentId, update, kind }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742306-742311](../../../../../../../reference/runtime/host-main.cjs#L742306-L742311) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:742306

Calls written directly in this body: `this.emitInbound`, `this.liveCallByAgent.get`.

SHA-256 of the source span: `af1cc7e3bd558fcd5050fe201ff00a394c366dcca16e04d15ea6274c4ed7d618`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
