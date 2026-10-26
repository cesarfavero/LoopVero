# `createHostGatewayApi/activateAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493275-493275](../../../../../reference/runtime/host-main.cjs#L493275-L493275) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493275-493275](../../../../../reference/runtime/host-main.cjs#L493275-L493275) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493275 uses an implicit arrow-function return.

### host:493275

Calls written directly in this body: `manager.announceRemoteActivation`.

SHA-256 of the source span: `9db665de2637f539b3db6f0b33d7fa54c79d4c3158cf3b1533fdd3ea9f8bb6ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
