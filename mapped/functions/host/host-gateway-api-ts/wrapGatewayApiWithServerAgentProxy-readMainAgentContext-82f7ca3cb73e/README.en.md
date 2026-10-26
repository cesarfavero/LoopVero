# `wrapGatewayApiWithServerAgentProxy/readMainAgentContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491957-491961](../../../../../reference/runtime/host-main.cjs#L491957-L491961) | `ArrowFunctionExpression` | yes | `readArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491957-491961](../../../../../reference/runtime/host-main.cjs#L491957-L491961) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:491957

Calls written directly in this body: `api.readMainAgentContext`, `liveOverlayRunningTurn`, `proxy.activityOverlayFor`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `c2ee6849a7b6d1413c16192736daabb7d5083d2c6f120c1d06a1d3f7a467095a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
