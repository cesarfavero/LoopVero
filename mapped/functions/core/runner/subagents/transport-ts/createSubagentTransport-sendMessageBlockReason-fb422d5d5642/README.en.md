# `createSubagentTransport/sendMessageBlockReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/transport.ts` · [Module README](../../../../../../modules/core/runner/subagents/transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536909-536918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536909-L536918) | `ArrowFunctionExpression` | no | `message, deliverTo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536909-536918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536909-L536918) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:536909

Calls written directly in this body: `VoiceCallChannel.callIdOf`, `VoiceCallChannelSends.reason`, `parentTransport.sendMessageBlockReason`.

SHA-256 of the source span: `95ce773ce16e8a0d28dbc1593ac3d9e5069a15a727f20653456b5174588a295c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
