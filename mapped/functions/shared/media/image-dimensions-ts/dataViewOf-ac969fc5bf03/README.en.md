# `dataViewOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497278-497280](../../../../../../reference/runtime/host-main.cjs#L497278-L497280) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:514976-514978](../../../../../../reference/runtime/sand-eval-runner.cjs#L514976-L514978) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497278-497280](../../../../../../reference/runtime/host-main.cjs#L497278-L497280) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514976-514978](../../../../../../reference/runtime/sand-eval-runner.cjs#L514976-L514978) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497278

Calls written directly in this body: `new DataView`.

SHA-256 of the source span: `c10e171c160c0084e796797d9401890868ee65445bb1eae39425aedaa00350cd`.

### evaluation:514976

Calls written directly in this body: `new DataView`.

SHA-256 of the source span: `c10e171c160c0084e796797d9401890868ee65445bb1eae39425aedaa00350cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
