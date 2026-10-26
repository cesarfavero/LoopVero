# `searchHitOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766124-766132](../../../../../../reference/runtime/host-main.cjs#L766124-L766132) | `FunctionDeclaration` | no | `path33, hit, query2` |
| [evaluation:559488-559496](../../../../../../reference/runtime/sand-eval-runner.cjs#L559488-L559496) | `FunctionDeclaration` | no | `path33, hit, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766124-766132](../../../../../../reference/runtime/host-main.cjs#L766124-L766132) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559488-559496](../../../../../../reference/runtime/sand-eval-runner.cjs#L559488-L559496) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:766124

Calls written directly in this body: `transcriptExcerpt`.

SHA-256 of the source span: `ee5c9b928b563de22a28e0368492744cdad16aaaa3e401814c9a21caee6a4420`.

### evaluation:559488

Calls written directly in this body: `transcriptExcerpt`.

SHA-256 of the source span: `ee5c9b928b563de22a28e0368492744cdad16aaaa3e401814c9a21caee6a4420`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
