# `transcriptAroundBefore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766134-766136](../../../../../../reference/runtime/host-main.cjs#L766134-L766136) | `FunctionDeclaration` | no | `around, limit3` |
| [evaluation:559498-559500](../../../../../../reference/runtime/sand-eval-runner.cjs#L559498-L559500) | `FunctionDeclaration` | no | `around, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766134-766136](../../../../../../reference/runtime/host-main.cjs#L766134-L766136) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559498-559500](../../../../../../reference/runtime/sand-eval-runner.cjs#L559498-L559500) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766134

Calls written directly in this body: `Math.ceil`, `clampSandTranscriptMessageLimit`.

SHA-256 of the source span: `b008204289207075cdcf4d8797470bfa15bee61e86c6abec03195ece3defb079`.

### evaluation:559498

Calls written directly in this body: `Math.ceil`, `clampSandTranscriptMessageLimit`.

SHA-256 of the source span: `b008204289207075cdcf4d8797470bfa15bee61e86c6abec03195ece3defb079`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
