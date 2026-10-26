# `createTranscriptsVirtualMount/search`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766254-766297](../../../../../../reference/runtime/host-main.cjs#L766254-L766297) | `ArrowFunctionExpression` | yes | `ctx, _access, request5` |
| [evaluation:559618-559661](../../../../../../reference/runtime/sand-eval-runner.cjs#L559618-L559661) | `ArrowFunctionExpression` | yes | `ctx, _access, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766254-766297](../../../../../../reference/runtime/host-main.cjs#L766254-L766297) | 8 | 0 | 5 | 8 | 0 | 0 |
| [evaluation:559618-559661](../../../../../../reference/runtime/sand-eval-runner.cjs#L559618-L559661) | 8 | 0 | 5 | 8 | 0 | 0 |

### host:766254

Calls written directly in this body: `new Map`, `openSpoken`, `outcome.hits.map`, `reader.searchTranscript`, `refused2`, `request5.query.trim`, `result.hits.flatMap`, `scanSpoken`, `scanned.entries.map`, `searchReadable`, `transcriptPath`, `transcriptSearch`, `transcriptTargetOfPath`.

SHA-256 of the source span: `d486b509ed454ccf383124f61c756c1c3b239560d10c08974e540751374985b4`.

### evaluation:559618

Calls written directly in this body: `new Map`, `openSpoken`, `outcome.hits.map`, `reader.searchTranscript`, `refused`, `request3.query.trim`, `result.hits.flatMap`, `scanSpoken`, `scanned.entries.map`, `searchReadable`, `transcriptPath`, `transcriptSearch`, `transcriptTargetOfPath`.

SHA-256 of the source span: `ed889d83fa0951ed29ecd6caab0a5c4239b3e7f26e804571a1d14d8518edcbf4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
