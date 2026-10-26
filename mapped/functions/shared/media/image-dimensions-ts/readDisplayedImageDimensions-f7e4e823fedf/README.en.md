# `readDisplayedImageDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497658-497663](../../../../../../reference/runtime/host-main.cjs#L497658-L497663) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497658-497663](../../../../../../reference/runtime/host-main.cjs#L497658-L497663) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:497658

Calls written directly in this body: `readImageFileDimensions`, `readJpegOrientation`.

SHA-256 of the source span: `d38ad3ab1a22249cdfb616da5c038f17cee6bef893bd503fd8d2b4f8c8eea2c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
