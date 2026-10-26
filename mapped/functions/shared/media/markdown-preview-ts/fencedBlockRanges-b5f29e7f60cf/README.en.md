# `fencedBlockRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721945-721970](../../../../../../reference/runtime/host-main.cjs#L721945-L721970) | `FunctionDeclaration` | no | `input2` |
| [evaluation:539922-539947](../../../../../../reference/runtime/sand-eval-runner.cjs#L539922-L539947) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721945-721970](../../../../../../reference/runtime/host-main.cjs#L721945-L721970) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539922-539947](../../../../../../reference/runtime/sand-eval-runner.cjs#L539922-L539947) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:721945

Calls written directly in this body: `FENCE_LINE_PATTERN.exec`, `infoString.includes`, `input2.split`, `line.slice`, `line.trim`, `ranges.push`.

Assignment or increment targets: `offset2`, `openIndent`, `openRun`, `openStart`.

SHA-256 of the source span: `1411aab10a9aa344173d5a4fa17fe5733ff92de5b15d730654637b053b57bf2f`.

### evaluation:539922

Calls written directly in this body: `FENCE_LINE_PATTERN.exec`, `infoString.includes`, `input2.split`, `line.slice`, `line.trim`, `ranges.push`.

Assignment or increment targets: `offset2`, `openIndent`, `openRun`, `openStart`.

SHA-256 of the source span: `1411aab10a9aa344173d5a4fa17fe5733ff92de5b15d730654637b053b57bf2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
