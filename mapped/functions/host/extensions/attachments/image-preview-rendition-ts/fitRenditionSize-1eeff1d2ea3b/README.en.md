# `fitRenditionSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498392-498397](../../../../../../../reference/runtime/host-main.cjs#L498392-L498397) | `FunctionDeclaration` | no | `sourcePath2, sourceDimensions, fit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498392-498397](../../../../../../../reference/runtime/host-main.cjs#L498392-L498397) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498392

Calls written directly in this body: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitEncodingOf`, `fitLongEdge`, `fitRenditionEdge`.

SHA-256 of the source span: `f55f9e2a2505dfc9cf099e060b862415d793e1a3cc6299d0facb5bbee2c899c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
