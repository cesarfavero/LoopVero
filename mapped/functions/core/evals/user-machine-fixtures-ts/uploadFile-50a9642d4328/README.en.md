# `uploadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596437-596441](../../../../../../reference/runtime/sand-eval-runner.cjs#L596437-L596441) | `ArrowFunctionExpression` | yes | `_ctx, _agentId, path33, data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596437-596441](../../../../../../reference/runtime/sand-eval-runner.cjs#L596437-L596441) | 1 | 0 | 0 | 0 | 1 | 0 |

### evaluation:596437

Calls written directly in this body: `new Error`, `new Uint8Array`, `this.assertReachable`, `this.files.set`, `this.normalizePath`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `cf75cae27818c9cde6000e1a48b36a60ea99368fc27630ba20adc90e5f7030ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
