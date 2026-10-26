# `createHostGatewayApi/deleteAgentWorkflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492793-492793](../../../../../reference/runtime/host-main.cjs#L492793-L492793) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492793-492793](../../../../../reference/runtime/host-main.cjs#L492793-L492793) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492793 uses an implicit arrow-function return.

### host:492793

Calls written directly in this body: `gatewayAgentId`, `manager.deleteAgentWorkflow`.

SHA-256 of the source span: `69c911701f25bb8130eb557b779a0af91d1dda14f8f473f4b4b0a366036135b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
