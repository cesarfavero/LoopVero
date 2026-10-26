# `searchTranscriptsParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766464-766470](../../../../../../../../reference/runtime/host-main.cjs#L766464-L766470) | `ArrowFunctionExpression` | no | `deps` |
| [evaluation:559828-559834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559828-L559834) | `ArrowFunctionExpression` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766464-766470](../../../../../../../../reference/runtime/host-main.cjs#L766464-L766470) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:766464 uses an implicit arrow-function return.
| [evaluation:559828-559834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559828-L559834) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:559828 uses an implicit arrow-function return.

### host:766464

Calls written directly in this body: `.describe`, `.int`, `.max`, `.min`, `.optional`, `.positive`, `.trim`, `number2`, `object`, `string2`, `transcriptTargetParameters`.

SHA-256 of the source span: `cfe40e1a0d554a879511902b157b33a7f054c14fefdd3be71cd517560a9fc9ae`.

### evaluation:559828

Calls written directly in this body: `.describe`, `.int`, `.max`, `.min`, `.optional`, `.positive`, `.trim`, `number2`, `object`, `string2`, `transcriptTargetParameters`.

SHA-256 of the source span: `cfe40e1a0d554a879511902b157b33a7f054c14fefdd3be71cd517560a9fc9ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
