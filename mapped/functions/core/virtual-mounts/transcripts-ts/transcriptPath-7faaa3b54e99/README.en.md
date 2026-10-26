# `transcriptPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766083-766094](../../../../../../reference/runtime/host-main.cjs#L766083-L766094) | `FunctionDeclaration` | no | `target` |
| [evaluation:559447-559458](../../../../../../reference/runtime/sand-eval-runner.cjs#L559447-L559458) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766083-766094](../../../../../../reference/runtime/host-main.cjs#L766083-L766094) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559447-559458](../../../../../../reference/runtime/sand-eval-runner.cjs#L559447-L559458) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:766083

Calls written directly in this body: `encodeURIComponent`.

SHA-256 of the source span: `347c4df2977009cf3fd1bd2d66d03daf6045feafab2545b35299cb87ffd59f4c`.

### evaluation:559447

Calls written directly in this body: `encodeURIComponent`.

SHA-256 of the source span: `347c4df2977009cf3fd1bd2d66d03daf6045feafab2545b35299cb87ffd59f4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
