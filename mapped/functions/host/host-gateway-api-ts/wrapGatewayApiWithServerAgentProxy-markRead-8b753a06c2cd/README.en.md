# `wrapGatewayApiWithServerAgentProxy/markRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491962-491973](../../../../../reference/runtime/host-main.cjs#L491962-L491973) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491962-491973](../../../../../reference/runtime/host-main.cjs#L491962-L491973) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491962

Calls written directly in this body: `.catch`, `act`, `api.setAgentUnread`.

SHA-256 of the source span: `1f1a1b57231475e319e003a84cb10b38fefd26c4b6e27b37708e38d70b795422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
