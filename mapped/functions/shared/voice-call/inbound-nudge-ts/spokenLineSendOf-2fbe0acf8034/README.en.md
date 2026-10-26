# `spokenLineSendOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/inbound-nudge.ts` · [Module README](../../../../../modules/shared/voice-call/inbound-nudge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742164-742172](../../../../../../reference/runtime/host-main.cjs#L742164-L742172) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742164-742172](../../../../../../reference/runtime/host-main.cjs#L742164-L742172) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:742164

Calls written directly in this body: `VoiceCallChannel.callIdOf`, `VoiceCallChannelSends.spokenText`.

SHA-256 of the source span: `e6dc10b292a2675da4d548ce798ccd9e4d7ed4a980107ce8329bf15a1314c419`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
