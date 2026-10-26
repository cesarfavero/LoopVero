# `messageDeliveryDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761255-761265](../../../../../../../reference/runtime/host-main.cjs#L761255-L761265) | `FunctionDeclaration` | no | `message` |
| [evaluation:552070-552080](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552070-L552080) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761255-761265](../../../../../../../reference/runtime/host-main.cjs#L761255-L761265) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:552070-552080](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552070-L552080) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:761255

Calls written directly in this body: `VoiceCallChannel.callIdOf`, `hashMessageChannelAddress`.

SHA-256 of the source span: `b3d7864f1d12f0f4fbb77c7a91bc01da01e05ac852f89cbf3f84edf5be32c619`.

### evaluation:552070

Calls written directly in this body: `VoiceCallChannel.callIdOf`, `hashMessageChannelAddress`.

SHA-256 of the source span: `b3d7864f1d12f0f4fbb77c7a91bc01da01e05ac852f89cbf3f84edf5be32c619`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
