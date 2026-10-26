# `fitImageSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498452-498467](../../../../../../../reference/runtime/host-main.cjs#L498452-L498467) | `FunctionDeclaration` | no | `fit, encoding` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498452-498467](../../../../../../../reference/runtime/host-main.cjs#L498452-L498467) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:498452

Calls written directly in this body: `createMediaRenditionCache`, `fitImageSources.get`, `fitImageSources.set`, `imageRecipe`.

Assignment or increment targets: `source`.

SHA-256 of the source span: `7178582325c826c1cfb2b21f530552b5da05555506955b18061bdcc269bafc19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
