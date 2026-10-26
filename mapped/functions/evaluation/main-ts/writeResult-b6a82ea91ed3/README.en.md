# `writeResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/main.ts` · [Module README](../../../../modules/evaluation/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630749-630755](../../../../../reference/runtime/sand-eval-runner.cjs#L630749-L630755) | `FunctionDeclaration` | yes | `path33, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630749-630755](../../../../../reference/runtime/sand-eval-runner.cjs#L630749-L630755) | 0 | 0 | 3 | 0 | 0 | 0 |

### evaluation:630749

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `2d35f88ba4b9caaaca643934b403e0d3ba5c726c1db26297218e92350d3e20f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
