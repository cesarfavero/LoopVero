# `_Mp4Dimensions.childBoxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/video-dimensions.ts` · [Module README](../../../../../modules/shared/media/video-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497732-497745](../../../../../../reference/runtime/host-main.cjs#L497732-L497745) | `method` | no | `view, range2, type2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497732-497745](../../../../../../reference/runtime/host-main.cjs#L497732-L497745) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:497732

Calls written directly in this body: `_Mp4Dimensions.clampedBoxAt`, `children.push`, `fourCharTag2`.

Assignment or increment targets: `offset2`.

SHA-256 of the source span: `b970ea8a811be0c9ea5f3670db9baf760bd886bcbc06b8e93101212db162851f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
