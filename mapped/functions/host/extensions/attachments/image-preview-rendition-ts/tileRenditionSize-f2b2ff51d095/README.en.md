# `tileRenditionSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498386-498391](../../../../../../../reference/runtime/host-main.cjs#L498386-L498391) | `FunctionDeclaration` | no | `sourcePath2, sourceDimensions, tile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498386-498391](../../../../../../../reference/runtime/host-main.cjs#L498386-L498391) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498386

Calls written directly in this body: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitShortEdge`, `tileRenditionEdge`.

SHA-256 of the source span: `4508f52eafdef44c9506d33b777e58f8ac05d882b4558b9e8b990fe65c31b0b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
