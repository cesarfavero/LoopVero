# `previewRenditionSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498381-498385](../../../../../../../reference/runtime/host-main.cjs#L498381-L498385) | `FunctionDeclaration` | no | `sourcePath2, sourceDimensions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498381-498385](../../../../../../../reference/runtime/host-main.cjs#L498381-L498385) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498381

Calls written directly in this body: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitLongEdge`.

SHA-256 of the source span: `5ab55b5a97e5a9aa5ea34154f889fea7600db270ff5a081e33db2238c7f61868`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
