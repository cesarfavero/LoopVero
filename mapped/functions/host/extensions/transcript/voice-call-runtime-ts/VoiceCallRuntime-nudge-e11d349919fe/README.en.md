# `_VoiceCallRuntime.nudge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742323-742337](../../../../../../../reference/runtime/host-main.cjs#L742323-L742337) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742323-742337](../../../../../../../reference/runtime/host-main.cjs#L742323-L742337) | 3 | 0 | 1 | 4 | 1 | 1 |

### host:742323

Calls written directly in this body: `VoiceCallRequests.parse`, `args.request.trim`, `args.sink.relay`, `new SandWireParseError`, `reportFallback`.

Assignment or increment targets: `output2`.

Explicit throw targets: `SandWireParseError`.

SHA-256 of the source span: `8d612b00d6a991f9205fd66de115a12c2b6787397808676216d54d2b2e38946e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
