# `readWebpDimensions2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497449-497474](../../../../../../reference/runtime/host-main.cjs#L497449-L497474) | `FunctionDeclaration` | no | `buffer` |
| [evaluation:515144-515169](../../../../../../reference/runtime/sand-eval-runner.cjs#L515144-L515169) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497449-497474](../../../../../../reference/runtime/host-main.cjs#L497449-L497474) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:515144-515169](../../../../../../reference/runtime/sand-eval-runner.cjs#L515144-L515169) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:497449

Calls written directly in this body: `dataViewOf`, `fourCharTag`, `readU24LE`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 of the source span: `0152c23ff7596e7eb2aff9de1335454295a8bb08f2d4b457358ab145499b3f29`.

### evaluation:515144

Calls written directly in this body: `dataViewOf`, `fourCharTag`, `readU24LE`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 of the source span: `0152c23ff7596e7eb2aff9de1335454295a8bb08f2d4b457358ab145499b3f29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
