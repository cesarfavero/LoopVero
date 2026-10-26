# `createSendMessageTool2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761332-761613](../../../../../../../reference/runtime/host-main.cjs#L761332-L761613) | `FunctionDeclaration` | no | `deps` |
| [evaluation:552147-552428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552147-L552428) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761332-761613](../../../../../../../reference/runtime/host-main.cjs#L761332-L761613) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552147-552428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552147-L552428) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:761332

Calls written directly in this body: `advertisedSendMessageParameters`, `conciseAdvertisedSendMessageParameters`, `createSendMessageToolCall`, `createZodAgentTool`, `credentialRequestKind`, `deps.linkItems.offered`, `deps.renderCards.offered`, `deps.renderCards.shipmentOffered`, `deps.renderCards.shoppingOffered`, `deps.taskThreads`, `new Map`, `new SendMessageToolCall`, `new Set`, `rejectingUnsupportedAttachmentFields`, `reportThrownSendFailure`, `sendMessageParametersByTurnBehavior`, `sendToUserActEnabled`, `sendToUserOpenEnabled`, `usesConciseSendToUser`, `withSafeParsedArgs`.

SHA-256 of the source span: `d536af00506ebfb75dc78ccb40ad7b29ffbaf5bc69d7b0b39c01f074145477e6`.

### evaluation:552147

Calls written directly in this body: `advertisedSendMessageParameters`, `conciseAdvertisedSendMessageParameters`, `createSendMessageToolCall`, `createZodAgentTool`, `credentialRequestKind`, `deps.linkItems.offered`, `deps.renderCards.offered`, `deps.renderCards.shipmentOffered`, `deps.renderCards.shoppingOffered`, `deps.taskThreads`, `new Map`, `new SendMessageToolCall`, `new Set`, `rejectingUnsupportedAttachmentFields`, `reportThrownSendFailure`, `sendMessageParametersByTurnBehavior`, `sendToUserActEnabled`, `sendToUserOpenEnabled`, `usesConciseSendToUser`, `withSafeParsedArgs`.

SHA-256 of the source span: `0cdb06231685aca4700c71b9732c2963e98d6902b03f07159f08f1b47c2422c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
