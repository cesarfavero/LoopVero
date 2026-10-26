# `transcriptAroundEndingBefore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766137-766139](../../../../../../reference/runtime/host-main.cjs#L766137-L766139) | `FunctionDeclaration` | no | `before, limit3` |
| [evaluation:559501-559503](../../../../../../reference/runtime/sand-eval-runner.cjs#L559501-L559503) | `FunctionDeclaration` | no | `before, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766137-766139](../../../../../../reference/runtime/host-main.cjs#L766137-L766139) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559501-559503](../../../../../../reference/runtime/sand-eval-runner.cjs#L559501-L559503) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766137

Calls written directly in this body: `Math.ceil`, `Math.max`, `clampSandTranscriptMessageLimit`.

SHA-256 of the source span: `2ba5f057381d76b5fcbbe23a8ecbe0f7e265c93e8564648fd6cf224c6cc51de7`.

### evaluation:559501

Calls written directly in this body: `Math.ceil`, `Math.max`, `clampSandTranscriptMessageLimit`.

SHA-256 of the source span: `2ba5f057381d76b5fcbbe23a8ecbe0f7e265c93e8564648fd6cf224c6cc51de7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
