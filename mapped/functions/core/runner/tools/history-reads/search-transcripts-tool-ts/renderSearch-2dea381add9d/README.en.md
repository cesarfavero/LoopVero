# `renderSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766510-766527](../../../../../../../../reference/runtime/host-main.cjs#L766510-L766527) | `FunctionDeclaration` | no | `query2, result, target` |
| [evaluation:559874-559891](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559874-L559891) | `FunctionDeclaration` | no | `query2, result, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766510-766527](../../../../../../../../reference/runtime/host-main.cjs#L766510-L766527) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559874-559891](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559874-L559891) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:766510

Calls written directly in this body: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`, `targetArgument`.

SHA-256 of the source span: `f360177e50a5db6625a04043a9d92be8271faeaf232a5a6bec7d421b7a0dca83`.

### evaluation:559874

Calls written directly in this body: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`, `targetArgument`.

SHA-256 of the source span: `f360177e50a5db6625a04043a9d92be8271faeaf232a5a6bec7d421b7a0dca83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
