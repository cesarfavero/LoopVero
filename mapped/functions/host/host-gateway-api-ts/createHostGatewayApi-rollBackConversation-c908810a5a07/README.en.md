# `createHostGatewayApi/rollBackConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492611-492616](../../../../../reference/runtime/host-main.cjs#L492611-L492616) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492611-492616](../../../../../reference/runtime/host-main.cjs#L492611-L492616) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492611

Calls written directly in this body: `new ServerAgentProxyRefusedError`.

Explicit throw targets: `ServerAgentProxyRefusedError`.

SHA-256 of the source span: `377c20bd75d95c06b29536760d3a43ece400fe710acc1f98867114241c618803`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
