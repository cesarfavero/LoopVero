# `createSandEvalUserMachines/resolve`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596538-596541](../../../../../../reference/runtime/sand-eval-runner.cjs#L596538-L596541) | `ArrowFunctionExpression` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596538-596541](../../../../../../reference/runtime/sand-eval-runner.cjs#L596538-L596541) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596538

Calls written directly in this body: `.handle`, `[computed].handle`, `registered.get`, `registered.values`.

SHA-256 of the source span: `348bfd18683f918f7023790f46b29a6ca0751aca71827e0e4e86538513e9a229`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
