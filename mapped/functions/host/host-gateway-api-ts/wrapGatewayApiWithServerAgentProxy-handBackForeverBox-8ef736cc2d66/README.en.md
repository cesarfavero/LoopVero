# `wrapGatewayApiWithServerAgentProxy/handBackForeverBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492184-492210](../../../../../reference/runtime/host-main.cjs#L492184-L492210) | `ArrowFunctionExpression` | yes | `handBackArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492184-492210](../../../../../reference/runtime/host-main.cjs#L492184-L492210) | 3 | 0 | 1 | 1 | 1 | 0 |

### host:492184

Calls written directly in this body: `act`, `api.handBackForeverBox`, `new ServerAgentProxyRefusedError`, `parseAgentId`, `proxy.activityOverlayFor`, `proxy.isProxiedAgent`.

Explicit throw targets: `ServerAgentProxyRefusedError`.

SHA-256 of the source span: `8a9ac0cf811362bb9f85bc75b899a3c1e549bb2fdd04880e4cc6b17e12ecab64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
