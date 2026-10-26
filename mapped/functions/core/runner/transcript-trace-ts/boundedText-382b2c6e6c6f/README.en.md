# `boundedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765654-765656](../../../../../../reference/runtime/host-main.cjs#L765654-L765656) | `FunctionDeclaration` | no | `text3` |
| [evaluation:559019-559021](../../../../../../reference/runtime/sand-eval-runner.cjs#L559019-L559021) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765654-765656](../../../../../../reference/runtime/host-main.cjs#L765654-L765656) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559019-559021](../../../../../../reference/runtime/sand-eval-runner.cjs#L559019-L559021) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765654

Calls written directly in this body: `truncateMiddle`.

SHA-256 of the source span: `6550c269619f68edb5e1115489795b7a4855a181243038aa1ac36eee1aebb57f`.

### evaluation:559019

Calls written directly in this body: `truncateMiddle`.

SHA-256 of the source span: `6550c269619f68edb5e1115489795b7a4855a181243038aa1ac36eee1aebb57f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
