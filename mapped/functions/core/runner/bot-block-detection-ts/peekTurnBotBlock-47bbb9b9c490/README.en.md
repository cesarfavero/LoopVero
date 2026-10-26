# `peekTurnBotBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454976-454978](../../../../../../reference/runtime/host-main.cjs#L454976-L454978) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:484506-484508](../../../../../../reference/runtime/sand-eval-runner.cjs#L484506-L484508) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454976-454978](../../../../../../reference/runtime/host-main.cjs#L454976-L454978) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:484506-484508](../../../../../../reference/runtime/sand-eval-runner.cjs#L484506-L484508) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454976

Calls written directly in this body: `slotsByConversation.get`.

SHA-256 of the source span: `9cf4e39d42809b87ccf07a9c7898373a09d3f498748d54c3291a16a6af865d01`.

### evaluation:484506

Calls written directly in this body: `slotsByConversation.get`.

SHA-256 of the source span: `9cf4e39d42809b87ccf07a9c7898373a09d3f498748d54c3291a16a6af865d01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
