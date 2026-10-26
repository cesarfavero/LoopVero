# `sliceReadRange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596274-596281](../../../../../../reference/runtime/sand-eval-runner.cjs#L596274-L596281) | `FunctionDeclaration` | no | `lines2, range2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596274-596281](../../../../../../reference/runtime/sand-eval-runner.cjs#L596274-L596281) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:596274

Calls written directly in this body: `.join`, `Math.max`, `lines2.slice`.

SHA-256 of the source span: `289f5d1fe7650c71f3c17b1ac1135baab0931b61ae7b1241a5566c8c94262039`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
