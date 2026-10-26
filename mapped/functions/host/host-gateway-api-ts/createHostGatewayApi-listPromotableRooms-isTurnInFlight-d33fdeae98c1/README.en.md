# `createHostGatewayApi/listPromotableRooms/isTurnInFlight`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493051-493051](../../../../../reference/runtime/host-main.cjs#L493051-L493051) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493051-493051](../../../../../reference/runtime/host-main.cjs#L493051-L493051) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493051 uses an implicit arrow-function return.

### host:493051

Calls written directly in this body: `.has`, `manager.liveRunningAgentIds`.

SHA-256 of the source span: `b0ec877f28f6ad5e07171a8e70b3c95f0ce89107d0d47547a1a1804eccde192b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
