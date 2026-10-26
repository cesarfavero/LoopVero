# `createLocalAttachmentStore/persistMediaBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596008-596014](../../../../../../reference/runtime/sand-eval-runner.cjs#L596008-L596014) | `ArrowFunctionExpression` | yes | `filename, data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596008-596014](../../../../../../reference/runtime/sand-eval-runner.cjs#L596008-L596014) | 2 | 0 | 1 | 1 | 2 | 0 |

### evaluation:596008

Calls written directly in this body: `filename.includes`, `filename.trim`, `new Error`, `store`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `3ab98d62e19330b1504d94528c289427985f1b65fa7d2bf44d43dc386a6c0871`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
