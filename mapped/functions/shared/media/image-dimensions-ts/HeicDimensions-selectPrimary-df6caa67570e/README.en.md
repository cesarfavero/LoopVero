# `_HeicDimensions.selectPrimary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497399-497444](../../../../../../reference/runtime/host-main.cjs#L497399-L497444) | `method` | no | `view` |
| [evaluation:515097-515142](../../../../../../reference/runtime/sand-eval-runner.cjs#L515097-L515142) | `method` | no | `view` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497399-497444](../../../../../../reference/runtime/host-main.cjs#L497399-L497444) | 10 | 1 | 0 | 6 | 0 | 0 |
| [evaluation:515097-515142](../../../../../../reference/runtime/sand-eval-runner.cjs#L515097-L515142) | 10 | 1 | 0 | 6 | 0 | 0 |

### host:497399

Calls written directly in this body: `_HeicDimensions.boxes`, `_HeicDimensions.contents`, `_HeicDimensions.find`, `_HeicDimensions.itemPropertyIndices`, `_HeicDimensions.primaryItemId`, `fallback3`, `indexOfFourCharTag`, `mirrorAxisOf`, `view.getUint8`.

Assignment or increment targets: `ispeBody`, `mirrorAxis`, `quarterTurns`.

SHA-256 of the source span: `601b93361cab2476d30e59fa7695726a0fe1e5e75f39614e6c3afe177a4e8629`.

### evaluation:515097

Calls written directly in this body: `_HeicDimensions.boxes`, `_HeicDimensions.contents`, `_HeicDimensions.find`, `_HeicDimensions.itemPropertyIndices`, `_HeicDimensions.primaryItemId`, `fallback2`, `indexOfFourCharTag`, `mirrorAxisOf`, `view.getUint8`.

Assignment or increment targets: `ispeBody`, `mirrorAxis`, `quarterTurns`.

SHA-256 of the source span: `3690718d877356c3979d6b9230b846e7760583431d7048965707bc0ceb4b6580`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
