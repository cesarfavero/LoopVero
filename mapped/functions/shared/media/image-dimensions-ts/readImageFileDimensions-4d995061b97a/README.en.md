# `readImageFileDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497655-497657](../../../../../../reference/runtime/host-main.cjs#L497655-L497657) | `FunctionDeclaration` | no | `buffer` |
| [evaluation:515275-515277](../../../../../../reference/runtime/sand-eval-runner.cjs#L515275-L515277) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497655-497657](../../../../../../reference/runtime/host-main.cjs#L497655-L497657) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515275-515277](../../../../../../reference/runtime/sand-eval-runner.cjs#L515275-L515277) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497655

Calls written directly in this body: `readBmpDimensions`, `readGifDimensions`, `readIcoDimensions`, `readJpegDimensions`, `readPngDimensions`, `readWebpOrHeicDimensions`.

SHA-256 of the source span: `d537680b0b137e8fe08878277cedc27671efe4609974ec31c50cff0d388b451c`.

### evaluation:515275

Calls written directly in this body: `readBmpDimensions2`, `readGifDimensions2`, `readIcoDimensions`, `readJpegDimensions2`, `readPngDimensions2`, `readWebpOrHeicDimensions`.

SHA-256 of the source span: `bf6c981345f1bfb002f268d015abb3d153d1ec11374745937118cdc4615305ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
