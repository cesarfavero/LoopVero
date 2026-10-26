# `downloadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596442-596452](../../../../../../reference/runtime/sand-eval-runner.cjs#L596442-L596452) | `ArrowFunctionExpression` | yes | `_ctx, _agentId, path33, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596442-596452](../../../../../../reference/runtime/sand-eval-runner.cjs#L596442-L596452) | 2 | 0 | 0 | 1 | 2 | 0 |

### evaluation:596442

Calls written directly in this body: `missingFileMessage`, `new BoxFileTooLargeError`, `new Error`, `this.assertReachable`, `this.files.get`, `this.normalizePath`.

Explicit throw targets: `BoxFileTooLargeError`, `Error`.

SHA-256 of the source span: `208a4a709db11475865e43fe220a7be5c0ef1c80d7415f1f197a5e8b5cb52704`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
