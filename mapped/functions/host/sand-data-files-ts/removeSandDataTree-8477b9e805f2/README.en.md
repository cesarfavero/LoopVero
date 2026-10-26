# `removeSandDataTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453893-453907](../../../../../reference/runtime/host-main.cjs#L453893-L453907) | `FunctionDeclaration` | yes | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453893-453907](../../../../../reference/runtime/host-main.cjs#L453893-L453907) | 1 | 0 | 3 | 1 | 1 | 1 |

### host:453893

Calls written directly in this body: `findSystemErrno`, `held.parent.handle.close`, `openParentNoFollow2`, `removeTreeNoFollow`, `sandDataNoFollowRoot`.

Assignment or increment targets: `held`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `1684125575b4d6f7309a5717e7ae4fed6d706621dbbfc99959952cf217762c36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
