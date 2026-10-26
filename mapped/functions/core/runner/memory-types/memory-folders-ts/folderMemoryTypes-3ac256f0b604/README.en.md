# `folderMemoryTypes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-folders.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754674-754676](../../../../../../../reference/runtime/host-main.cjs#L754674-L754676) | `FunctionDeclaration` | no | `memoryTypes` |
| [evaluation:537641-537643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537641-L537643) | `FunctionDeclaration` | no | `memoryTypes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754674-754676](../../../../../../../reference/runtime/host-main.cjs#L754674-L754676) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537641-537643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537641-L537643) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754674

Calls written directly in this body: `memoryTypes.filter`.

SHA-256 of the source span: `c2ff2345dbb5a0ff030b5f9c80d39286f4ff39c09a9ab1cfd4d1d04f59e69e97`.

### evaluation:537641

Calls written directly in this body: `memoryTypes.filter`.

SHA-256 of the source span: `c2ff2345dbb5a0ff030b5f9c80d39286f4ff39c09a9ab1cfd4d1d04f59e69e97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
