# `readPngDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497493-497503](../../../../../../reference/runtime/host-main.cjs#L497493-L497503) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497493-497503](../../../../../../reference/runtime/host-main.cjs#L497493-L497503) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497493

Calls written directly in this body: `PNG_SIGNATURE.every`, `dataViewOf`, `fourCharTag`, `toImageDimensions`, `view.getUint32`.

SHA-256 of the source span: `c4307fc7adcd4dda72fc22896f217ccbe43bd557d519edd6cb0531e362eb7e1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
