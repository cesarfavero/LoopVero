# `transcriptTargetOfPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766095-766111](../../../../../../reference/runtime/host-main.cjs#L766095-L766111) | `FunctionDeclaration` | no | `path33` |
| [evaluation:559459-559475](../../../../../../reference/runtime/sand-eval-runner.cjs#L559459-L559475) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766095-766111](../../../../../../reference/runtime/host-main.cjs#L766095-L766111) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:559459-559475](../../../../../../reference/runtime/sand-eval-runner.cjs#L559459-L559475) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:766095

Calls written directly in this body: `.filter`, `decodeURIComponent`, `path33.split`.

SHA-256 of the source span: `2bf9d53d370590d980aa2bbcb2a7aab7f9e83cbb04aa1972328ae80af9b19257`.

### evaluation:559459

Calls written directly in this body: `.filter`, `decodeURIComponent`, `path33.split`.

SHA-256 of the source span: `2bf9d53d370590d980aa2bbcb2a7aab7f9e83cbb04aa1972328ae80af9b19257`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
