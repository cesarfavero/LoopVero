# `withImageRenditionSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498475-498479](../../../../../../../reference/runtime/host-main.cjs#L498475-L498479) | `FunctionDeclaration` | no | `rendition` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498475-498479](../../../../../../../reference/runtime/host-main.cjs#L498475-L498479) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498475

Calls written directly in this body: `isSandFitRendition`, `withFitImageSource`, `withTileImageSource`.

SHA-256 of the source span: `3a369b8898b8e1bb973b45e1893a8f82b683b0f45e7c32cb240e2b89e39c862e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
