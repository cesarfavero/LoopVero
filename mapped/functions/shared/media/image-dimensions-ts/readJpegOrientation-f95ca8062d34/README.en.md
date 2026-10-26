# `readJpegOrientation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497606-497634](../../../../../../reference/runtime/host-main.cjs#L497606-L497634) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497606-497634](../../../../../../reference/runtime/host-main.cjs#L497606-L497634) | 7 | 1 | 0 | 5 | 0 | 0 |

### host:497606

Calls written directly in this body: `JPEG_SEGMENTLESS_MARKERS.has`, `Math.min`, `dataViewOf`, `exifOrientationOf`, `fourCharTag`, `view.getUint16`, `view.getUint8`.

Assignment or increment targets: `offset2`.

SHA-256 of the source span: `72a1585dfb205a40d1437c37745b97e1224fc8097560c89fe306edabc548136f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
