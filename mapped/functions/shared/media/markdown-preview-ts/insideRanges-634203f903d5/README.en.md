# `insideRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721942-721944](../../../../../../reference/runtime/host-main.cjs#L721942-L721944) | `FunctionDeclaration` | no | `index, ranges` |
| [evaluation:539919-539921](../../../../../../reference/runtime/sand-eval-runner.cjs#L539919-L539921) | `FunctionDeclaration` | no | `index, ranges` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721942-721944](../../../../../../reference/runtime/host-main.cjs#L721942-L721944) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539919-539921](../../../../../../reference/runtime/sand-eval-runner.cjs#L539919-L539921) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721942

Calls written directly in this body: `ranges.some`.

SHA-256 of the source span: `cbf8d5cebdeb853d40d486ed835b616b412f12e1013221cb9b23177141434bed`.

### evaluation:539919

Calls written directly in this body: `ranges.some`.

SHA-256 of the source span: `cbf8d5cebdeb853d40d486ed835b616b412f12e1013221cb9b23177141434bed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
