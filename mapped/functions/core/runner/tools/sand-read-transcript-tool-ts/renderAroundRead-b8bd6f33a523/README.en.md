# `renderAroundRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766372-766384](../../../../../../../reference/runtime/host-main.cjs#L766372-L766384) | `FunctionDeclaration` | no | `read2, window2` |
| [evaluation:559736-559748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559736-L559748) | `FunctionDeclaration` | no | `read2, window2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766372-766384](../../../../../../../reference/runtime/host-main.cjs#L766372-L766384) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559736-559748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559736-L559748) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:766372

Calls written directly in this body: `.join`, `transcriptAroundEndingBefore`.

SHA-256 of the source span: `e7825818e39082f3ee1cca17c9e1b999ce7e59ceb939aaa24e8c70d3a1b891a5`.

### evaluation:559736

Calls written directly in this body: `.join`, `transcriptAroundEndingBefore`.

SHA-256 of the source span: `e7825818e39082f3ee1cca17c9e1b999ce7e59ceb939aaa24e8c70d3a1b891a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
