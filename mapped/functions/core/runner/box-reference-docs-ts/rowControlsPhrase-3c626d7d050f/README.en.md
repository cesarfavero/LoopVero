# `rowControlsPhrase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558143-558149](../../../../../../reference/runtime/host-main.cjs#L558143-L558149) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558143-558149](../../../../../../reference/runtime/host-main.cjs#L558143-L558149) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:558143

Calls written directly in this body: `.join`, `isOnlyControl`, `optionsSuffix`, `row.controls.map`.

SHA-256 of the source span: `7abf7bc12ee181815d7f226f581c6ba0d3d87d34cbd3bd04706813a0ee60ad96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
