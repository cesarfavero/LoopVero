# `readJpegDimensions2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515266-515274](../../../../../../reference/runtime/sand-eval-runner.cjs#L515266-L515274) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515266-515274](../../../../../../reference/runtime/sand-eval-runner.cjs#L515266-L515274) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:515266

Calls written directly in this body: `dataViewOf`, `jpegFrameHeaderOffset`, `toImageDimensions`, `view.getUint16`.

SHA-256 of the source span: `42eef6b736ade7d0580f02e9355a106587fac8dc5de9d2d592d72d8258e8ee20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
