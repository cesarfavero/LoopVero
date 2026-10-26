# `voiceCallAddressOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/voice-call/owner-voice-wake.ts` · [Module README](../../../../../../modules/core/runner/voice-call/owner-voice-wake-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752181-752184](../../../../../../../reference/runtime/host-main.cjs#L752181-L752184) | `FunctionDeclaration` | no | `line` |
| [evaluation:529879-529882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529879-L529882) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752181-752184](../../../../../../../reference/runtime/host-main.cjs#L752181-L752184) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529879-529882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529879-L529882) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752181

Calls written directly in this body: `CALL_HEADER.exec`, `VoiceCallChannel.callIdOf`.

SHA-256 of the source span: `22ef5302536205fff27d01e07e93aa76aeba1ba8eaf698a8ae34a79f6bdaa7d3`.

### evaluation:529879

Calls written directly in this body: `CALL_HEADER.exec`, `VoiceCallChannel.callIdOf`.

SHA-256 of the source span: `22ef5302536205fff27d01e07e93aa76aeba1ba8eaf698a8ae34a79f6bdaa7d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
