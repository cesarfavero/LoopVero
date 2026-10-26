# `createHostGatewayApi/startFreshConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492605-492610](../../../../../reference/runtime/host-main.cjs#L492605-L492610) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492605-492610](../../../../../reference/runtime/host-main.cjs#L492605-L492610) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492605

Calls written directly in this body: `new ServerAgentProxyRefusedError`.

Explicit throw targets: `ServerAgentProxyRefusedError`.

SHA-256 of the source span: `d9e23aec7b6744aa23c5efdef7de81f2aec7c1404f5c5353a770caacac97259b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
