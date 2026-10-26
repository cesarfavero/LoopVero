# `createHostGatewayApi/createBrokeredCredentialAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493164-493178](../../../../../reference/runtime/host-main.cjs#L493164-L493178) | `ArrowFunctionExpression` | yes | `{ agentId, goal, logins, windowIndex }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493164-493178](../../../../../reference/runtime/host-main.cjs#L493164-L493178) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:493164

Calls written directly in this body: `broker.createAccessRequest`, `deps.extensions.api`.

SHA-256 of the source span: `a6c2c03aa6f01b74300d0628f9abd8c0ee6de3deb2e8411014d92d6651e17d53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
