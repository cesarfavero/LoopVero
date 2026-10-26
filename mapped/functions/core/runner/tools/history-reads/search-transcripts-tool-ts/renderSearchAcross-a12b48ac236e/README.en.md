# `renderSearchAcross`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766528-766549](../../../../../../../../reference/runtime/host-main.cjs#L766528-L766549) | `FunctionDeclaration` | no | `query2, result` |
| [evaluation:559892-559913](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559892-L559913) | `FunctionDeclaration` | no | `query2, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766528-766549](../../../../../../../../reference/runtime/host-main.cjs#L766528-L766549) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559892-559913](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559892-L559913) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:766528

Calls written directly in this body: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`.

SHA-256 of the source span: `d5af8151473c90cf3451d03816f74eeea78a507ac1fbecb301f020e0adf4290f`.

### evaluation:559892

Calls written directly in this body: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`.

SHA-256 of the source span: `d5af8151473c90cf3451d03816f74eeea78a507ac1fbecb301f020e0adf4290f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
