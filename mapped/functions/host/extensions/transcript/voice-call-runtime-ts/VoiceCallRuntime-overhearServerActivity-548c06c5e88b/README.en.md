# `_VoiceCallRuntime.overhearServerActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742255-742267](../../../../../../../reference/runtime/host-main.cjs#L742255-L742267) | `method` | no | `agentId, live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742255-742267](../../../../../../../reference/runtime/host-main.cjs#L742255-L742267) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:742255

Calls written directly in this body: `_VoiceCallRuntime.ownerSessionServerStep`, `areAgentActivitiesEqual`, `isWorthOverhearing`, `overheardStep`, `this.deliverOverheard`, `this.isOverheardEnabled`, `this.serverStepHeardByAgent.delete`, `this.serverStepHeardByAgent.get`, `this.serverStepHeardByAgent.set`.

SHA-256 of the source span: `53d1344062dec885e0ea58243c81ea1f16d09e27604d99ee2a0d349d0e16af09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
