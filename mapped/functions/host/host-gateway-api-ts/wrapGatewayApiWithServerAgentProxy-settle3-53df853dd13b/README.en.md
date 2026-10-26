# `wrapGatewayApiWithServerAgentProxy/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491933-491944](../../../../../reference/runtime/host-main.cjs#L491933-L491944) | `ArrowFunctionExpression` | yes | `reply2, onOk, fallback3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491933-491944](../../../../../reference/runtime/host-main.cjs#L491933-L491944) | 4 | 0 | 1 | 2 | 2 | 0 |

### host:491933

Calls written directly in this body: `fallback3`, `new ServerAgentProxyRefusedError`, `new ServerAgentProxyUnavailableError`, `onOk`.

Explicit throw targets: `ServerAgentProxyRefusedError`, `ServerAgentProxyUnavailableError`.

SHA-256 of the source span: `ac9e3cc8bef333e88085ad151a332b25ffaeb6938d8b958275fb280734987456`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
