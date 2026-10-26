# `createHostGatewayApi/updateAgentWorkflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492792-492792](../../../../../reference/runtime/host-main.cjs#L492792-L492792) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492792-492792](../../../../../reference/runtime/host-main.cjs#L492792-L492792) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492792 uses an implicit arrow-function return.

### host:492792

Calls written directly in this body: `gatewayAgentId`, `manager.updateAgentWorkflow`.

SHA-256 of the source span: `f8d6f7d76b03f33eb737cd49c2c2cb6e9ad7f53d12298181c22feda1cc774fc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
