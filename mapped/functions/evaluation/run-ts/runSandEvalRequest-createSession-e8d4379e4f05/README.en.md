# `runSandEvalRequest/createSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630295-630298](../../../../../reference/runtime/sand-eval-runner.cjs#L630295-L630298) | `ArrowFunctionExpression` | no | `onRequestId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630295-630298](../../../../../reference/runtime/sand-eval-runner.cjs#L630295-L630298) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:630295 uses an implicit arrow-function return.

### evaluation:630295

Calls written directly in this body: `dependencies.inference.createSession`.

SHA-256 of the source span: `1458999052287dc982fbe046c771a5e04714defd6a4dd6d55d0b91d1f530c21b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
