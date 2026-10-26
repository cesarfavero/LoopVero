# `_HeicDimensions.read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497308-497318](../../../../../../reference/runtime/host-main.cjs#L497308-L497318) | `method` | no | `buffer` |
| [evaluation:515006-515016](../../../../../../reference/runtime/sand-eval-runner.cjs#L515006-L515016) | `method` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497308-497318](../../../../../../reference/runtime/host-main.cjs#L497308-L497318) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515006-515016](../../../../../../reference/runtime/sand-eval-runner.cjs#L515006-L515016) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497308

Calls written directly in this body: `_HeicDimensions.primaryOf`, `dataViewOf`, `toImageDimensions`, `view.getUint32`.

SHA-256 of the source span: `f6c9102a9cb6644085227dd1f29419b1f1a2bd41b3ffc3ab98f02f3d3cc9b01e`.

### evaluation:515006

Calls written directly in this body: `_HeicDimensions.primaryOf`, `dataViewOf`, `toImageDimensions`, `view.getUint32`.

SHA-256 of the source span: `f6c9102a9cb6644085227dd1f29419b1f1a2bd41b3ffc3ab98f02f3d3cc9b01e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
