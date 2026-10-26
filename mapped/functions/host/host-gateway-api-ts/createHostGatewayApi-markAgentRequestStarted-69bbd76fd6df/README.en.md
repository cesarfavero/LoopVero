# `createHostGatewayApi/markAgentRequestStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493009-493009](../../../../../reference/runtime/host-main.cjs#L493009-L493009) | `ArrowFunctionExpression` | yes | `{ requestId: requestId2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493009-493009](../../../../../reference/runtime/host-main.cjs#L493009-L493009) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493009 uses an implicit arrow-function return.

### host:493009

Calls written directly in this body: `.markAgentRequestStarted`, `deps.extensions.api`.

SHA-256 of the source span: `38fd595d2ffd504abe9b9fb2d30d88296dfc80209b4d1a8802f28d9101bdd64e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
