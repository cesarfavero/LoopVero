# `globToRegExp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479346-479350](../../../../../../../reference/runtime/host-main.cjs#L479346-L479350) | `FunctionDeclaration` | no | `glob` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479346-479350](../../../../../../../reference/runtime/host-main.cjs#L479346-L479350) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479346

Calls written directly in this body: `.replace`, `escaped.replace`, `glob.replace`, `new RegExp`.

SHA-256 of the source span: `bf30f125285c62c7d2c7379bd86e3051d322856fca75bdefd6a9128a83f2c2e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
