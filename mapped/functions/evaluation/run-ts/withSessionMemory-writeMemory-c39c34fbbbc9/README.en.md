# `withSessionMemory/writeMemory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630243-630243](../../../../../reference/runtime/sand-eval-runner.cjs#L630243-L630243) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630243-630243](../../../../../reference/runtime/sand-eval-runner.cjs#L630243-L630243) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:630243 uses an implicit arrow-function return.

### evaluation:630243

Calls written directly in this body: `session.writeMemory`.

SHA-256 of the source span: `13035fcc03705527d3ec1ce679a3e7837f8d2711b0c5e52e97abc76b0f9a1c7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
