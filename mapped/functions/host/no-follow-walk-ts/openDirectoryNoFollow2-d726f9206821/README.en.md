# `openDirectoryNoFollow2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453544-453552](../../../../../reference/runtime/host-main.cjs#L453544-L453552) | `FunctionDeclaration` | yes | `parent, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453544-453552](../../../../../reference/runtime/host-main.cjs#L453544-L453552) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:453544

Calls written directly in this body: `entryOf`, `refusedParentOr2`.

Explicit throw targets: `AwaitExpression`.

SHA-256 of the source span: `cf26280a702b8b960a8a34ebf4abbdd79f60ce10f3edec860e8f4dec7775ed4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
