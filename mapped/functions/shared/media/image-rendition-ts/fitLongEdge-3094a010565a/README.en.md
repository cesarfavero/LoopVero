# `fitLongEdge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-rendition.ts` · [Module README](../../../../../modules/shared/media/image-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487292-487296](../../../../../../reference/runtime/host-main.cjs#L487292-L487296) | `FunctionDeclaration` | no | `dimensions, maxEdge, grid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487292-487296](../../../../../../reference/runtime/host-main.cjs#L487292-L487296) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:487292

Calls written directly in this body: `Math.max`, `scaledOnGrid`.

SHA-256 of the source span: `f90ca8d0c8f953af5d75c21bd2caf1ab9fc280d4f38ef44ffa70e62779721a04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
