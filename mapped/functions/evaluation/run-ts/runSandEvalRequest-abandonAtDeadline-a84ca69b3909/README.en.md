# `runSandEvalRequest/abandonAtDeadline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630383-630397](../../../../../reference/runtime/sand-eval-runner.cjs#L630383-L630397) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630383-630397](../../../../../reference/runtime/sand-eval-runner.cjs#L630383-L630397) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:630383

Calls written directly in this body: `.filter`, `.map`, `runner.abortBackgroundWork`, `runner.listSubagents`.

SHA-256 of the source span: `e09659a3612368b6c42ccf16add881f865c2d925d56ab507b21f11ef9e9ca82c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
