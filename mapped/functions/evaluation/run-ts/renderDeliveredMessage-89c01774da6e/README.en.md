# `renderDeliveredMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630252-630254](../../../../../reference/runtime/sand-eval-runner.cjs#L630252-L630254) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630252-630254](../../../../../reference/runtime/sand-eval-runner.cjs#L630252-L630254) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630252

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `3537cfc674d2a791c2021405757d25fdc90d44dbe877724ee352eda61a1cf9c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
