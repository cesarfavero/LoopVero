# `createNeedsAuthCards/canSurface`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584953-584957](../../../../../../reference/runtime/sand-eval-runner.cjs#L584953-L584957) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584953-584957](../../../../../../reference/runtime/sand-eval-runner.cjs#L584953-L584957) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:584953 uses an implicit arrow-function return.

### evaluation:584953

Calls written directly in this body: `connectCardEmittedForServer.has`, `cursorScmProviderForMcpServerIdentifier`.

SHA-256 of the source span: `be893b5f0bcaefba67aed1788761b85c771e66bb3d9c23ea9955a00c51f0c8dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
