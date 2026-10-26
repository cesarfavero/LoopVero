# `blankLineGaps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721971-721986](../../../../../../reference/runtime/host-main.cjs#L721971-L721986) | `FunctionDeclaration` | no | `input2` |
| [evaluation:539948-539963](../../../../../../reference/runtime/sand-eval-runner.cjs#L539948-L539963) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721971-721986](../../../../../../reference/runtime/host-main.cjs#L721971-L721986) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:539948-539963](../../../../../../reference/runtime/sand-eval-runner.cjs#L539948-L539963) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:721971

Calls written directly in this body: `gaps.push`, `input2.indexOf`.

Assignment or increment targets: `at3`, `between`, `blank`, `previous`.

SHA-256 of the source span: `7d1e293f92d3b12541bb416bffcd4f665e9de25115ba5d691571fddd9d59b520`.

### evaluation:539948

Calls written directly in this body: `gaps.push`, `input2.indexOf`.

Assignment or increment targets: `at3`, `between`, `blank`, `previous`.

SHA-256 of the source span: `7d1e293f92d3b12541bb416bffcd4f665e9de25115ba5d691571fddd9d59b520`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
