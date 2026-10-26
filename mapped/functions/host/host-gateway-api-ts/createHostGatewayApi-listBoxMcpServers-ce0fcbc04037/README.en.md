# `createHostGatewayApi/listBoxMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493103-493114](../../../../../reference/runtime/host-main.cjs#L493103-L493114) | `ArrowFunctionExpression` | yes | `{ serverIdentifiers }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493103-493114](../../../../../reference/runtime/host-main.cjs#L493103-L493114) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:493103

Calls written directly in this body: `.listBoxServers`, `deps.extensions.api`, `servers.map`.

SHA-256 of the source span: `b56e61f7ac514d1a29c884f50f45410c65a3efd6d5cf1396ffff77f7729e9313`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
