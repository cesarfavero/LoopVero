# `scaledOnGrid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-rendition.ts` · [Module README](../../../../../modules/shared/media/image-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487288-487291](../../../../../../reference/runtime/host-main.cjs#L487288-L487291) | `FunctionDeclaration` | no | `dimensions, ratio, grid = 2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487288-487291](../../../../../../reference/runtime/host-main.cjs#L487288-L487291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487288

Calls written directly in this body: `onGrid`.

SHA-256 of the source span: `605ac921e834e03303991eb15bd07faa4035e8a576d1b551df08e42458f5cbd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
