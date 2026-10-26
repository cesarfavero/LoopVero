# `offersMemoryLibrary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-folders.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754677-754679](../../../../../../../reference/runtime/host-main.cjs#L754677-L754679) | `FunctionDeclaration` | no | `memoryTypes` |
| [evaluation:537644-537646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537644-L537646) | `FunctionDeclaration` | no | `memoryTypes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754677-754679](../../../../../../../reference/runtime/host-main.cjs#L754677-L754679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537644-537646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537644-L537646) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754677

Calls written directly in this body: `.some`, `folderMemoryTypes`.

SHA-256 of the source span: `89d12f4cd338e9902418537e90ebf0ed581486f87be5031c72e85341fbe71f26`.

### evaluation:537644

Calls written directly in this body: `.some`, `folderMemoryTypes`.

SHA-256 of the source span: `89d12f4cd338e9902418537e90ebf0ed581486f87be5031c72e85341fbe71f26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
