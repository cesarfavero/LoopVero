# `exifOrientationOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497587-497605](../../../../../../reference/runtime/host-main.cjs#L497587-L497605) | `FunctionDeclaration` | no | `view, tiffStart, tiffEnd` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497587-497605](../../../../../../reference/runtime/host-main.cjs#L497587-L497605) | 7 | 1 | 0 | 7 | 0 | 0 |

### host:497587

Calls written directly in this body: `view.getUint16`, `view.getUint32`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `87d0f26c06a688d426ac07c9f5872fd6f1d01338c1617453b6f13420191bb950`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
