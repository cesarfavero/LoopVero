# `withTileImageSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498443-498450](../../../../../../../reference/runtime/host-main.cjs#L498443-L498450) | `FunctionDeclaration` | no | `tile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498443-498450](../../../../../../../reference/runtime/host-main.cjs#L498443-L498450) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:498443

Calls written directly in this body: `tileImageSource`, `tileImageSources.get`, `tileImageSources.set`.

Assignment or increment targets: `source`.

SHA-256 of the source span: `60818507a5edce2305bba0b415e356f23a664c21ebdc0944f545bca8d80a8279`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
