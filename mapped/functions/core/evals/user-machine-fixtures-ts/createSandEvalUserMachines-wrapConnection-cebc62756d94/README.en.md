# `createSandEvalUserMachines/wrapConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596518-596534](../../../../../../reference/runtime/sand-eval-runner.cjs#L596518-L596534) | `ArrowFunctionExpression` | no | `connection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596518-596534](../../../../../../reference/runtime/sand-eval-runner.cjs#L596518-L596534) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596518

Calls written directly in this body: `new CombinedResourceAccessor`, `resourceEntry`.

SHA-256 of the source span: `144d4e4eded04ca0bbad6ca3d7f83600234ae780c63fdf4a16d0900c68c9bfec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
