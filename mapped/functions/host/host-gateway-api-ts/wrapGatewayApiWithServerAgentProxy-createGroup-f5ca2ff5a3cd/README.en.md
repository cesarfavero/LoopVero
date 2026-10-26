# `wrapGatewayApiWithServerAgentProxy/createGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491977-491995](../../../../../reference/runtime/host-main.cjs#L491977-L491995) | `ArrowFunctionExpression` | yes | `createArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491977-491995](../../../../../reference/runtime/host-main.cjs#L491977-L491995) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:491977

Calls written directly in this body: `api.createGroup`, `proxy.createRoom`, `proxy.serverRoomsEnabled`, `settle3`.

SHA-256 of the source span: `cfa50a79f1d1753ac7bb6f5e38289adf767cf394da78ba8131ea25032aadbfc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
