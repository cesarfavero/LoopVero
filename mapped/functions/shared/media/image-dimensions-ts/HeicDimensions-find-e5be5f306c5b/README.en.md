# `_HeicDimensions.find`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497353-497355](../../../../../../reference/runtime/host-main.cjs#L497353-L497355) | `method` | no | `boxes, type2` |
| [evaluation:515051-515053](../../../../../../reference/runtime/sand-eval-runner.cjs#L515051-L515053) | `method` | no | `boxes, type2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497353-497355](../../../../../../reference/runtime/host-main.cjs#L497353-L497355) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515051-515053](../../../../../../reference/runtime/sand-eval-runner.cjs#L515051-L515053) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497353

Calls written directly in this body: `boxes.find`.

SHA-256 of the source span: `0de8499734dfb6f02d9e85d00a184a2d2995e12b14401b5e7a4997d4746e415c`.

### evaluation:515051

Calls written directly in this body: `boxes.find`.

SHA-256 of the source span: `0de8499734dfb6f02d9e85d00a184a2d2995e12b14401b5e7a4997d4746e415c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
