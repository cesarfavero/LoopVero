# `createNeedsAuthHold/boxStillReportsSignIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-hold.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584804-584834](../../../../../../reference/runtime/sand-eval-runner.cjs#L584804-L584834) | `ArrowFunctionExpression` | yes | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584804-584834](../../../../../../reference/runtime/sand-eval-runner.cjs#L584804-L584834) | 4 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584804

Calls written directly in this body: `.then`, `Promise.race`, `delayWith`, `deps.onProbeFailed`, `deps.resolvePendingSignInSlot`, `done.abort`, `new AbortController`, `new Error`, `probe.abort`.

SHA-256 of the source span: `c0ead0e9ecf14e467843fd1e69fd5f233452c350cea73ea8bc80c4ea68d8e1e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
