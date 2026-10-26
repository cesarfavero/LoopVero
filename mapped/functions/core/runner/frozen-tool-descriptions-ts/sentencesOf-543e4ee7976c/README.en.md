# `sentencesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586548-586550](../../../../../../reference/runtime/sand-eval-runner.cjs#L586548-L586550) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586548-586550](../../../../../../reference/runtime/sand-eval-runner.cjs#L586548-L586550) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586548

Calls written directly in this body: `.filter`, `.flatMap`, `text3.split`.

SHA-256 of the source span: `22e3f1fa14e7409672880f0eb40447b6e174c404808850745e83c6cd2d878ae2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
