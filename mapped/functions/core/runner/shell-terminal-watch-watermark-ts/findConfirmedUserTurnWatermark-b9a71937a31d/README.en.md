# `findConfirmedUserTurnWatermark`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch-watermark.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-watermark-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530095-530175](../../../../../../reference/runtime/sand-eval-runner.cjs#L530095-L530175) | `FunctionDeclaration` | yes | `host, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530095-530175](../../../../../../reference/runtime/sand-eval-runner.cjs#L530095-L530175) | 16 | 1 | 2 | 7 | 0 | 1 |

### evaluation:530095

Calls written directly in this body: `ConversationTurnStructure.fromBinary`, `UserMessage.fromBinary`, `blobStore.getBlob`, `cacheResult`, `host.getBlobStore`, `host.getConfirmedUserTurnWatermarkCache`, `isConfirmedUserTurnWatermarkValid`, `isGroupTurnPromptText`, `isOffRecordMessageId`, `new Uint8Array`, `startsWithHiddenPromptMarker`, `state.turns[computed].slice`, `watermarkReads.increment`, `withBlobReadKind`.

Assignment or increment targets: `index`, `source`, `userMessage`.

SHA-256 of the source span: `74f1a06be14266faef62d9ba5e59e21e53130d509b790b3b403e8c0a9ea38177`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
