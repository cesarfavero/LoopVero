# `writeLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/process-output.ts` · [Module README](../../../../modules/evaluation/process-output-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628190-628193](../../../../../reference/runtime/sand-eval-runner.cjs#L628190-L628193) | `FunctionExpression` | no | `stream3, line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628190-628193](../../../../../reference/runtime/sand-eval-runner.cjs#L628190-L628193) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:628190

Calls written directly in this body: `process[computed].write`.

SHA-256 of the source span: `ccf7f902fa613e3cb2cd9a6cfd105926e470bf8d73fad15039f865fabbd78b10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
