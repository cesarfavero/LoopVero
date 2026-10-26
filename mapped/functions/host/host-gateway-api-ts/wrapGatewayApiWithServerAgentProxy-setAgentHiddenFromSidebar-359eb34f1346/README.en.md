# `wrapGatewayApiWithServerAgentProxy/setAgentHiddenFromSidebar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492225-492235](../../../../../reference/runtime/host-main.cjs#L492225-L492235) | `ArrowFunctionExpression` | yes | `hiddenArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492225-492235](../../../../../reference/runtime/host-main.cjs#L492225-L492235) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:492225

Calls written directly in this body: `.catch`, `api.setAgentHiddenFromSidebar`, `proxy.isProxiedAgent`, `proxy.setAgentHidden`, `settle3`.

SHA-256 of the source span: `8b07848ca4108e5f4721a93a5149f201cfc40085e9cddce4c9dbadd792d01d6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
