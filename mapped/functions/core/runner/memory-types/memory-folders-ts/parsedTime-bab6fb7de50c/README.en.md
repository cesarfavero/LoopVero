# `parsedTime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-folders.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754689-754692](../../../../../../../reference/runtime/host-main.cjs#L754689-L754692) | `FunctionDeclaration` | no | `createdAt` |
| [evaluation:537656-537659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537656-L537659) | `FunctionDeclaration` | no | `createdAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754689-754692](../../../../../../../reference/runtime/host-main.cjs#L754689-L754692) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537656-537659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537656-L537659) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754689

Calls written directly in this body: `Date.parse`, `Number.isNaN`.

SHA-256 of the source span: `2af27b8d99266cf4b9486af263e5a3a965bdff5aad7e6dedba9bf786f6d07fbd`.

### evaluation:537656

Calls written directly in this body: `Date.parse`, `Number.isNaN`.

SHA-256 of the source span: `2af27b8d99266cf4b9486af263e5a3a965bdff5aad7e6dedba9bf786f6d07fbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
