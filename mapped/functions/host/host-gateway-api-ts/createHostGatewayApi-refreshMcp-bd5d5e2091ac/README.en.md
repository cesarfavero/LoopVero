# `createHostGatewayApi/refreshMcp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493096-493102](../../../../../reference/runtime/host-main.cjs#L493096-L493102) | `ArrowFunctionExpression` | yes | `{ completion }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493096-493102](../../../../../reference/runtime/host-main.cjs#L493096-L493102) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:493096

Calls written directly in this body: `.management.restart`, `deps.extensions.api`, `deps.handleDesktopMcpAuthCompletion`.

SHA-256 of the source span: `5ab2cd1d1f9aa52f9c3c0f296451f0d30c4df68dd26f9bb52a4b1428f565e210`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
