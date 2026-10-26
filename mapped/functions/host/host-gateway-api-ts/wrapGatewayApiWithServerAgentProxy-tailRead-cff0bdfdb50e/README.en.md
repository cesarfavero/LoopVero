# `wrapGatewayApiWithServerAgentProxy/tailRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491956-491956](../../../../../reference/runtime/host-main.cjs#L491956-L491956) | `ArrowFunctionExpression` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491956-491956](../../../../../reference/runtime/host-main.cjs#L491956-L491956) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:491956 uses an implicit arrow-function return.

### host:491956

Calls written directly in this body: `proxy.getAgentTranscriptTail`.

SHA-256 of the source span: `cf1db62094ca0e29d0e7bc216fd8410a4a093debf2860db846f30ce33e18d831`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
