# `createTranscriptsVirtualMount/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766220-766253](../../../../../../reference/runtime/host-main.cjs#L766220-L766253) | `ArrowFunctionExpression` | yes | `ctx, access5, path33, window2 = {}` |
| [evaluation:559584-559617](../../../../../../reference/runtime/sand-eval-runner.cjs#L559584-L559617) | `ArrowFunctionExpression` | yes | `ctx, access4, path33, window2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766220-766253](../../../../../../reference/runtime/host-main.cjs#L766220-L766253) | 11 | 0 | 5 | 6 | 0 | 0 |
| [evaluation:559584-559617](../../../../../../reference/runtime/sand-eval-runner.cjs#L559584-L559617) | 11 | 0 | 5 | 6 | 0 | 0 |

### host:766220

Calls written directly in this body: `openSpoken`, `readSandTranscriptWindow`, `readSpoken`, `reader.openTranscript`, `refused2`, `transcriptAroundBefore`, `transcriptTargetOfPath`.

SHA-256 of the source span: `9ce35ff8974810e91cabe78bd70308677b2a2b64a2d6992ccdac3ae25988cf16`.

### evaluation:559584

Calls written directly in this body: `openSpoken`, `readSandTranscriptWindow`, `readSpoken`, `reader.openTranscript`, `refused`, `transcriptAroundBefore`, `transcriptTargetOfPath`.

SHA-256 of the source span: `7a0b61a91ccaa8e2c0a536082612f11a07369703c92f6b34e993a5cf8a06a444`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
