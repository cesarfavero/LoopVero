# `createSearchTranscriptsTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766559-766578](../../../../../../../../reference/runtime/host-main.cjs#L766559-L766578) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |
| [evaluation:559923-559942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559923-L559942) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766559-766578](../../../../../../../../reference/runtime/host-main.cjs#L766559-L766578) | 5 | 0 | 1 | 2 | 2 | 0 |
| [evaluation:559923-559942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559923-L559942) | 5 | 0 | 1 | 2 | 2 | 0 |

### host:766559

Calls written directly in this body: `allConversationsArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `renderSearch`, `renderSearchAcross`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.search`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b5445736e406c9470c5467ea11a4a9ec8ebb7ee59cd2c92144745d7b0658a4b0`.

### evaluation:559923

Calls written directly in this body: `allConversationsArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `renderSearch`, `renderSearchAcross`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.search`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b5445736e406c9470c5467ea11a4a9ec8ebb7ee59cd2c92144745d7b0658a4b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
