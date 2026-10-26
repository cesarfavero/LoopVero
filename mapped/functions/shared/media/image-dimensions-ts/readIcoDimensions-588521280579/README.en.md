# `readIcoDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497527-497543](../../../../../../reference/runtime/host-main.cjs#L497527-L497543) | `FunctionDeclaration` | no | `buffer` |
| [evaluation:515222-515238](../../../../../../reference/runtime/sand-eval-runner.cjs#L515222-L515238) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497527-497543](../../../../../../reference/runtime/host-main.cjs#L497527-L497543) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515222-515238](../../../../../../reference/runtime/sand-eval-runner.cjs#L515222-L515238) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:497527

Calls written directly in this body: `.reduce`, `Array.from`, `buffer.subarray`, `dataViewOf`, `readPngDimensions`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 of the source span: `98b0e20582ff572e6d54b90eb7fd65b6f5f9840699b285eb11ec8b657da47f4f`.

### evaluation:515222

Calls written directly in this body: `.reduce`, `Array.from`, `buffer.subarray`, `dataViewOf`, `readPngDimensions2`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 of the source span: `f47b2e02f79d53d4c24a20abe7beaa159af2acc5b0c3a6ef8cb199311fa711b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
