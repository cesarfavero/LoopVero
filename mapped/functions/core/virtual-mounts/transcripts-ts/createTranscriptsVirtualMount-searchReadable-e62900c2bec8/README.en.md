# `createTranscriptsVirtualMount/searchReadable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766193-766211](../../../../../../reference/runtime/host-main.cjs#L766193-L766211) | `FunctionDeclaration` | yes | `ctx, request5` |
| [evaluation:559557-559575](../../../../../../reference/runtime/sand-eval-runner.cjs#L559557-L559575) | `FunctionDeclaration` | yes | `ctx, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766193-766211](../../../../../../reference/runtime/host-main.cjs#L766193-L766211) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:559557-559575](../../../../../../reference/runtime/sand-eval-runner.cjs#L559557-L559575) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:766193

Calls written directly in this body: `outcome.hits.map`, `reader.searchReadableTranscripts`, `refused2`.

SHA-256 of the source span: `e383ebc24f52bb976c24988b10cf38e4f9625a5169dd8df396831796556cbd3d`.

### evaluation:559557

Calls written directly in this body: `outcome.hits.map`, `reader.searchReadableTranscripts`, `refused`.

SHA-256 of the source span: `1ae4f7f710b1bb948ee17766dce9bb4dfde1d26b1212a34e8933aa100cf3aecf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
