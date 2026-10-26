# `_VoiceCallRuntime.readMainAgentContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742312-742317](../../../../../../../reference/runtime/host-main.cjs#L742312-L742317) | `method` | no | `{ agentId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742312-742317](../../../../../../../reference/runtime/host-main.cjs#L742312-L742317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742312

Calls written directly in this body: `.has`, `Promise.resolve`, `this.tm.runLifecycle.runningAgentIds`.

SHA-256 of the source span: `8a84a0841c79295fb60b13ac9ee7345bd54626e325509f56df171645f3244c77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
