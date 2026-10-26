# `createReadTranscriptTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766425-766458](../../../../../../../reference/runtime/host-main.cjs#L766425-L766458) | `FunctionDeclaration` | no | `deps` |
| [evaluation:559789-559822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559789-L559822) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766425-766458](../../../../../../../reference/runtime/host-main.cjs#L766425-L766458) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559789-559822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559789-L559822) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766425

Calls written directly in this body: `defineZod4CommunicateTool`, `offersTranscriptSearch`, `readParameters2.extend`, `readTranscriptDescription`, `readTranscriptParameters`.

SHA-256 of the source span: `539457bfc7d9f404534b131487d56cb1e332f93aa8681520431b32d11889202d`.

### evaluation:559789

Calls written directly in this body: `defineZod4CommunicateTool`, `offersTranscriptSearch`, `readParameters2.extend`, `readTranscriptDescription`, `readTranscriptParameters`.

SHA-256 of the source span: `539457bfc7d9f404534b131487d56cb1e332f93aa8681520431b32d11889202d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
