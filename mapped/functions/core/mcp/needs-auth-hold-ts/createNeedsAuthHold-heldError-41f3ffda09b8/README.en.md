# `createNeedsAuthHold/heldError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-hold.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584846-584856](../../../../../../reference/runtime/sand-eval-runner.cjs#L584846-L584856) | `FunctionExpression` | yes | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584846-584856](../../../../../../reference/runtime/sand-eval-runner.cjs#L584846-L584856) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584846

Calls written directly in this body: `boxStillReportsSignIn`, `clock.now`, `errors.get`, `onComputerSignInSinceMs.get`, `release`.

SHA-256 of the source span: `5cffc7ec82f54b495978f3e24b2fe5c2e89bc6f65521d67794f2407c5090d15e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
