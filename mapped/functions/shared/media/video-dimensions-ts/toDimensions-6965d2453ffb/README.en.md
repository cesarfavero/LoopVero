# `toDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/video-dimensions.ts` · [Module README](../../../../../modules/shared/media/video-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497666-497670](../../../../../../reference/runtime/host-main.cjs#L497666-L497670) | `FunctionDeclaration` | no | `{ width, height }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497666-497670](../../../../../../reference/runtime/host-main.cjs#L497666-L497670) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497666

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `1d322b3b575387305e6df867b86712280fb85372e75e07959c47685b30457017`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
