# `isPlacePhotoAuthor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707828-707830](../../../../../../reference/runtime/host-main.cjs#L707828-L707830) | `FunctionDeclaration` | no | `value` |
| [evaluation:564315-564317](../../../../../../reference/runtime/sand-eval-runner.cjs#L564315-L564317) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707828-707830](../../../../../../reference/runtime/host-main.cjs#L707828-L707830) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564315-564317](../../../../../../reference/runtime/sand-eval-runner.cjs#L564315-L564317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707828

Calls written directly in this body: `isNonEmptyString3`, `isOptional`, `isUnknownRecord2`.

SHA-256 of the source span: `696c7afc5353ae3683e4b62206f4edf5f91fdd6cb00733f5bfcf6a2d7badf4ca`.

### evaluation:564315

Calls written directly in this body: `isNonEmptyString2`, `isOptional`, `isUnknownRecord2`.

SHA-256 of the source span: `24c64f411bfb0aef60df3d28e8796c040c5ce878f278d5b1cb3828f32150da0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
