# `_SandEvalContinuationRuntime.create`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628769-628775](../../../../../reference/runtime/sand-eval-runner.cjs#L628769-L628775) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628769-628775](../../../../../reference/runtime/sand-eval-runner.cjs#L628769-L628775) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:628769

Calls written directly in this body: `new FileAutomationStore`, `new _SandEvalContinuationRuntime`, `runtime.status`.

SHA-256 of the source span: `ec06586ab564d952f7704559adcbfd0d17c5c4d0fe3aa0f8d6728fd22c968021`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
