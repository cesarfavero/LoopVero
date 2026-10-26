# `createSandEvalUserMachines/machineFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596509-596512](../../../../../../reference/runtime/sand-eval-runner.cjs#L596509-L596512) | `ArrowFunctionExpression` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596509-596512](../../../../../../reference/runtime/sand-eval-runner.cjs#L596509-L596512) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596509

Calls written directly in this body: `boxMachineIds.has`, `replayMachines.get`.

SHA-256 of the source span: `ce34ec53a241e2066777ed9f1f26050f83aac614e08c9c5b94e871393224e39b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
