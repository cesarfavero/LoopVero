# `_VoiceCallRuntime.read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742394-742398](../../../../../../../reference/runtime/host-main.cjs#L742394-L742398) | `method` | no | `{ agentId, callId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742394-742398](../../../../../../../reference/runtime/host-main.cjs#L742394-L742398) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:742394

Calls written directly in this body: `isSafeFolderId`, `readRecordFile`.

SHA-256 of the source span: `987b37ef6d66aa89943468368365a78e94923a046a08526c9f232c9900a9eeae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
