# `fourCharTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497284-497291](../../../../../../reference/runtime/host-main.cjs#L497284-L497291) | `FunctionDeclaration` | no | `view, offset2` |
| [evaluation:514982-514989](../../../../../../reference/runtime/sand-eval-runner.cjs#L514982-L514989) | `FunctionDeclaration` | no | `view, offset2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497284-497291](../../../../../../reference/runtime/host-main.cjs#L497284-L497291) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514982-514989](../../../../../../reference/runtime/sand-eval-runner.cjs#L514982-L514989) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497284

Calls written directly in this body: `String.fromCharCode`, `view.getUint8`.

SHA-256 of the source span: `fc343f6b1fc85a701d86cfb73db6f8c23f8048a47c9ce9fdafe4dc74cc052b93`.

### evaluation:514982

Calls written directly in this body: `String.fromCharCode`, `view.getUint8`.

SHA-256 of the source span: `fc343f6b1fc85a701d86cfb73db6f8c23f8048a47c9ce9fdafe4dc74cc052b93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
