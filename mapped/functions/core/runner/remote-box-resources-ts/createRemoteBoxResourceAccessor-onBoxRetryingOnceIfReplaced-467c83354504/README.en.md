# `createRemoteBoxResourceAccessor/onBoxRetryingOnceIfReplaced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534507-534526](../../../../../../reference/runtime/sand-eval-runner.cjs#L534507-L534526) | `ArrowFunctionExpression` | yes | `ctx, reason, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534507-534526](../../../../../../reference/runtime/sand-eval-runner.cjs#L534507-L534526) | 1 | 1 | 3 | 1 | 1 | 1 |

### evaluation:534507

Calls written directly in this body: `connect3`, `failedRetryError`, `markConnectionAnswered`, `retryAfterConnectionLoss`, `run`.

Assignment or increment targets: `retried`.

Explicit throw targets: `failedRetryError`.

SHA-256 of the source span: `4fe6bb132bb04327fa6d1b8e68a8b11f50eea54a7b7a4e2c61e69f076c3e4f92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
