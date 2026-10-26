# `wrapGatewayApiWithServerAgentProxy/voteFeedback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492118-492124](../../../../../reference/runtime/host-main.cjs#L492118-L492124) | `ArrowFunctionExpression` | yes | `voteArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492118-492124](../../../../../reference/runtime/host-main.cjs#L492118-L492124) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492118

Calls written directly in this body: `act`, `api.voteFeedback`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `5d156b95bc47b971d80878a3b6b433ce6cfdded3a09dbc2522221d211b828bce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
