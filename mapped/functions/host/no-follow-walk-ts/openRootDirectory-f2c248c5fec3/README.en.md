# `openRootDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453531-453543](../../../../../reference/runtime/host-main.cjs#L453531-L453543) | `FunctionDeclaration` | yes | `root, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453531-453543](../../../../../reference/runtime/host-main.cjs#L453531-L453543) | 1 | 0 | 2 | 1 | 1 | 1 |

### host:453531

Calls written directly in this body: `refusedParentOr2`.

Explicit throw targets: `AwaitExpression`.

SHA-256 of the source span: `3462f853a843412dd4521c944b0be3e5f17d91a8da3f398c605a8b54ba4ae4b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
