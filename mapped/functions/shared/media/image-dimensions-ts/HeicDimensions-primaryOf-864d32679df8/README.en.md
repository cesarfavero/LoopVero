# `_HeicDimensions.primaryOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497324-497329](../../../../../../reference/runtime/host-main.cjs#L497324-L497329) | `method` | no | `buffer` |
| [evaluation:515022-515027](../../../../../../reference/runtime/sand-eval-runner.cjs#L515022-L515027) | `method` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497324-497329](../../../../../../reference/runtime/host-main.cjs#L497324-L497329) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515022-515027](../../../../../../reference/runtime/sand-eval-runner.cjs#L515022-L515027) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497324

Calls written directly in this body: `_HeicDimensions.selectPrimary`, `dataViewOf`, `fourCharTag`.

SHA-256 of the source span: `bdd24a0310db384576b6418c691acc23bac95ae0b8f8016173d8d8f4fb55686a`.

### evaluation:515022

Calls written directly in this body: `_HeicDimensions.selectPrimary`, `dataViewOf`, `fourCharTag`.

SHA-256 of the source span: `bdd24a0310db384576b6418c691acc23bac95ae0b8f8016173d8d8f4fb55686a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
