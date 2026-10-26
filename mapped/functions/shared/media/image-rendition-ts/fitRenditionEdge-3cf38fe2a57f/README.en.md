# `fitRenditionEdge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-rendition.ts` · [Module README](../../../../../modules/shared/media/image-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487275-487281](../../../../../../reference/runtime/host-main.cjs#L487275-L487281) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487275-487281](../../../../../../reference/runtime/host-main.cjs#L487275-L487281) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:487275

Calls written directly in this body: `/^fit-([1-9]\d{2,3})$/.exec`, `Number`.

SHA-256 of the source span: `20cf87b5bea7e5eaacb5294a7062280238cfe6890efd24a8608c9aa5d076d287`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
