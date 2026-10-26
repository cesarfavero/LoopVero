# `createRemoteBoxResourceAccessor/failedRetryError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534460-534465](../../../../../../reference/runtime/sand-eval-runner.cjs#L534460-L534465) | `ArrowFunctionExpression` | no | `error63, unrepeatableSent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534460-534465](../../../../../../reference/runtime/sand-eval-runner.cjs#L534460-L534465) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534460

Calls written directly in this body: `callMayHaveRun`, `freshConnectionError`, `new SandBoxCallOutcomeUnknownError`.

SHA-256 of the source span: `ab0c9d6386a1b40c8211c66afa224aa140837e7494ba09b1bc3cc027ce8ebe76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
