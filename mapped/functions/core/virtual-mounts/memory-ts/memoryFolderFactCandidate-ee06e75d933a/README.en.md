# `memoryFolderFactCandidate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769530-769544](../../../../../../reference/runtime/host-main.cjs#L769530-L769544) | `FunctionDeclaration` | no | `fact, index, teamBot` |
| [evaluation:565199-565213](../../../../../../reference/runtime/sand-eval-runner.cjs#L565199-L565213) | `FunctionDeclaration` | no | `fact, index, teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769530-769544](../../../../../../reference/runtime/host-main.cjs#L769530-L769544) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565199-565213](../../../../../../reference/runtime/sand-eval-runner.cjs#L565199-L565213) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:769530

Calls written directly in this body: `String`, `memoryFolderAudienceNote`.

SHA-256 of the source span: `a17bde40e13bf80dce9495cfa494cb5b1d9a90c3639e4d62b78e70e6a41c14e0`.

### evaluation:565199

Calls written directly in this body: `String`, `memoryFolderAudienceNote`.

SHA-256 of the source span: `a17bde40e13bf80dce9495cfa494cb5b1d9a90c3639e4d62b78e70e6a41c14e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
