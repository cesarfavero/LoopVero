# `jpegFrameHeaderOffset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497544-497570](../../../../../../reference/runtime/host-main.cjs#L497544-L497570) | `FunctionDeclaration` | no | `buffer` |
| [evaluation:515239-515265](../../../../../../reference/runtime/sand-eval-runner.cjs#L515239-L515265) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497544-497570](../../../../../../reference/runtime/host-main.cjs#L497544-L497570) | 7 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:515239-515265](../../../../../../reference/runtime/sand-eval-runner.cjs#L515239-L515265) | 7 | 1 | 0 | 5 | 0 | 0 |

### host:497544

Calls written directly in this body: `JPEG_NON_FRAME_MARKERS.has`, `JPEG_SEGMENTLESS_MARKERS.has`, `dataViewOf`, `view.getUint16`, `view.getUint8`.

Assignment or increment targets: `offset2`.

SHA-256 of the source span: `09189b17b940054a6c7d264032c0589a784a20081b80d3589dd653c969e75176`.

### evaluation:515239

Calls written directly in this body: `JPEG_NON_FRAME_MARKERS.has`, `JPEG_SEGMENTLESS_MARKERS.has`, `dataViewOf`, `view.getUint16`, `view.getUint8`.

Assignment or increment targets: `offset2`.

SHA-256 of the source span: `09189b17b940054a6c7d264032c0589a784a20081b80d3589dd653c969e75176`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
