# `_VoiceCallRuntime.setVoiceCallPresence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742234-742254](../../../../../../../reference/runtime/host-main.cjs#L742234-L742254) | `method` | no | `{     agentId,     callId,     isOnTheLine,     acceptsOverheard = false   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742234-742254](../../../../../../../reference/runtime/host-main.cjs#L742234-L742254) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:742234

Calls written directly in this body: `this.liveCallByAgent.delete`, `this.liveCallByAgent.get`, `this.liveCallByAgent.set`, `this.overheardCallers.add`, `this.overheardCallers.delete`, `this.overheardSpentByAgent.delete`, `this.retiredCallByAgent.get`, `this.retiredCallByAgent.set`, `this.serverStepHeardByAgent.delete`.

SHA-256 of the source span: `e2e89b03e5a9f2e13043c3c7360027c8ce761a779be8b2b8c03c776c110a056a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
