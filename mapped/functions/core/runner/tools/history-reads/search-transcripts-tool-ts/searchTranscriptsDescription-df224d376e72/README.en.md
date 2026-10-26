# `searchTranscriptsDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766484-766494](../../../../../../../../reference/runtime/host-main.cjs#L766484-L766494) | `FunctionDeclaration` | no | `deps` |
| [evaluation:559848-559858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559848-L559858) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766484-766494](../../../../../../../../reference/runtime/host-main.cjs#L766484-L766494) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559848-559858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559848-L559858) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766484

Calls written directly in this body: `.join`, `noIdSearchLine`, `offersAllConversations`.

SHA-256 of the source span: `cb00222a5ba3619f9d28aca8383f54ac27bca0e2201c58fa70c38720400e36dc`.

### evaluation:559848

Calls written directly in this body: `.join`, `noIdSearchLine`, `offersAllConversations`.

SHA-256 of the source span: `cb00222a5ba3619f9d28aca8383f54ac27bca0e2201c58fa70c38720400e36dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
