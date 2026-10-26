# `wrapGatewayApiWithServerAgentProxy/getAgentTranscriptPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492296-492310](../../../../../reference/runtime/host-main.cjs#L492296-L492310) | `ArrowFunctionExpression` | yes | `readArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492296-492310](../../../../../reference/runtime/host-main.cjs#L492296-L492310) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:492296

Calls written directly in this body: `api.getAgentTranscriptPage`, `entries.filter`, `proxy.isProxiedAgent`, `readTailUntil`.

SHA-256 of the source span: `d4fe25f221379ea233e38345576814cf551f76f0dd78e336a2f9ac32b267904f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
