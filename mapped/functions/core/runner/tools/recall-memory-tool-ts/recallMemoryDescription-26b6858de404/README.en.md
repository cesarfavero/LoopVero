# `recallMemoryDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769709-769715](../../../../../../../reference/runtime/host-main.cjs#L769709-L769715) | `FunctionDeclaration` | no | `offersMemoryUpdate, library` |
| [evaluation:565378-565384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565378-L565384) | `FunctionDeclaration` | no | `offersMemoryUpdate, library` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769709-769715](../../../../../../../reference/runtime/host-main.cjs#L769709-L769715) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565378-565384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565378-L565384) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:769709

Calls written directly in this body: `.join`.

SHA-256 of the source span: `f5f00cbcbb2cf9e4558dba42c46c61963a1b64da38e32f78d017bd1eac2dc1f7`.

### evaluation:565378

Calls written directly in this body: `.join`.

SHA-256 of the source span: `f5f00cbcbb2cf9e4558dba42c46c61963a1b64da38e32f78d017bd1eac2dc1f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
