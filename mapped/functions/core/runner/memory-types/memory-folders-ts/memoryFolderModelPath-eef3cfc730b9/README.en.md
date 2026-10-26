# `memoryFolderModelPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-folders.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754680-754683](../../../../../../../reference/runtime/host-main.cjs#L754680-L754683) | `FunctionDeclaration` | no | `owner, filePath` |
| [evaluation:537647-537650](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537647-L537650) | `FunctionDeclaration` | no | `owner, filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754680-754683](../../../../../../../reference/runtime/host-main.cjs#L754680-L754683) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537647-537650](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537647-L537650) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:754680

Calls written directly in this body: `filePath.endsWith`, `filePath.slice`.

SHA-256 of the source span: `7bc3f263c7bba926d36ea351333fb8efc65191a0849655c61a10da0557d58d02`.

### evaluation:537647

Calls written directly in this body: `filePath.endsWith`, `filePath.slice`.

SHA-256 of the source span: `7bc3f263c7bba926d36ea351333fb8efc65191a0849655c61a10da0557d58d02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
