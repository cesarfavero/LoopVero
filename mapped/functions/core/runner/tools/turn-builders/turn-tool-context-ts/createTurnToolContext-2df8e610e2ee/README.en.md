# `createTurnToolContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569381-569440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569381-L569440) | `FunctionDeclaration` | no | `host, turn, props, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569381-569440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569381-L569440) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:569381

Calls written directly in this body: `BigInt`, `createMessageDeliveryRecorder`, `createSandAutoReviewClassifierContextExtractor`, `createToolHandoff`, `createTurnDynamicToolRegistry`, `createTurnMachineTools`, `host.getConversationId`, `isLargeOutputSpillEnabled`, `sandAutoReviewClassifierContextOptions`, `sandMcpMetaToolNames`.

SHA-256 of the source span: `fb4a757f8a3a9d24b320b1d46dac523ae86de0493c6f75aaf05bfabbec811a95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
