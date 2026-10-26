# `transcriptTargetOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766334-766347](../../../../../../../reference/runtime/host-main.cjs#L766334-L766347) | `FunctionDeclaration` | no | `args` |
| [evaluation:559698-559711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559698-L559711) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766334-766347](../../../../../../../reference/runtime/host-main.cjs#L766334-L766347) | 4 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:559698-559711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559698-L559711) | 4 | 0 | 0 | 1 | 1 | 0 |

### host:766334

Calls written directly in this body: `new SandToolInputError`, `presentId`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `523f116b3edf6576ab55b380734297d6ee2aca05254e5e42b11de3278710fed7`.

### evaluation:559698

Calls written directly in this body: `new SandToolInputError`, `presentId`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `523f116b3edf6576ab55b380734297d6ee2aca05254e5e42b11de3278710fed7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
