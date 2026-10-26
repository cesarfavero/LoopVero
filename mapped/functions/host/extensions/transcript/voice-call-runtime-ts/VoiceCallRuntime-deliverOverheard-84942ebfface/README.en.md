# `_VoiceCallRuntime.deliverOverheard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742274-742286](../../../../../../../reference/runtime/host-main.cjs#L742274-L742286) | `method` | no | `step, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742274-742286](../../../../../../../reference/runtime/host-main.cjs#L742274-L742286) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:742274

Calls written directly in this body: `step.slice`, `this.deliverToLiveCall`, `this.overheardCallers.has`, `this.overheardSpentByAgent.get`, `this.overheardSpentByAgent.set`.

SHA-256 of the source span: `628fe8cc2ceeb66914f35e965b193e20b4729a7e81c793250c50cffdde7bdf24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
