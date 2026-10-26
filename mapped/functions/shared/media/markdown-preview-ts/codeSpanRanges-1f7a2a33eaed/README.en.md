# `codeSpanRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721992-722054](../../../../../../reference/runtime/host-main.cjs#L721992-L722054) | `FunctionDeclaration` | no | `input2, fences, options2 = {}` |
| [evaluation:539969-540031](../../../../../../reference/runtime/sand-eval-runner.cjs#L539969-L540031) | `FunctionDeclaration` | no | `input2, fences, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721992-722054](../../../../../../reference/runtime/host-main.cjs#L721992-L722054) | 9 | 5 | 0 | 1 | 0 | 0 |
| [evaluation:539969-540031](../../../../../../reference/runtime/sand-eval-runner.cjs#L539969-L540031) | 9 | 5 | 0 | 1 | 0 | 0 |

### host:721992

Calls written directly in this body: `blankLineGaps`, `cursorByLength.get`, `cursorByLength.set`, `indices.push`, `input2.matchAll`, `insideRanges`, `isBackslashEscaped`, `new Map`, `new Set`, `ranges.push`, `runIndicesByLength.get`, `runIndicesByLength.set`, `runs.entries`, `runs.push`, `unopenable.add`, `unopenable.has`.

Assignment or increment targets: `cursor`, `gapIndex`, `index`.

SHA-256 of the source span: `a1c50e85efc92f00f34e7f50659224445cae10e719900079af8ca63d074782fe`.

### evaluation:539969

Calls written directly in this body: `blankLineGaps`, `cursorByLength.get`, `cursorByLength.set`, `indices.push`, `input2.matchAll`, `insideRanges`, `isBackslashEscaped`, `new Map`, `new Set`, `ranges.push`, `runIndicesByLength.get`, `runIndicesByLength.set`, `runs.entries`, `runs.push`, `unopenable.add`, `unopenable.has`.

Assignment or increment targets: `cursor`, `gapIndex`, `index`.

SHA-256 of the source span: `40c8c17378e834888258d588b26eaa7ff0dcd90b1f5f7e60738abd2d7891a0ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
