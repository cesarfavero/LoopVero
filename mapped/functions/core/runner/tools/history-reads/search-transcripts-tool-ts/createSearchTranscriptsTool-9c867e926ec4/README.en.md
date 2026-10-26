# `createSearchTranscriptsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766550-766580](../../../../../../../../reference/runtime/host-main.cjs#L766550-L766580) | `FunctionDeclaration` | no | `deps` |
| [evaluation:559914-559944](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559914-L559944) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766550-766580](../../../../../../../../reference/runtime/host-main.cjs#L766550-L766580) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559914-559944](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559914-L559944) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766550

Calls written directly in this body: `defineZod4CommunicateTool`, `offersAllConversations`, `parameters4.extend`, `searchTranscriptsDescription`, `searchTranscriptsParameters`.

SHA-256 of the source span: `26707957833f1ab0eae8a3fb055145cf6bb70f27bf7f3e636059fa63a719ed24`.

### evaluation:559914

Calls written directly in this body: `defineZod4CommunicateTool`, `offersAllConversations`, `parameters4.extend`, `searchTranscriptsDescription`, `searchTranscriptsParameters`.

SHA-256 of the source span: `26707957833f1ab0eae8a3fb055145cf6bb70f27bf7f3e636059fa63a719ed24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
