# `wrapGatewayApiWithServerAgentProxy/openRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491951-491955](../../../../../reference/runtime/host-main.cjs#L491951-L491955) | `ArrowFunctionExpression` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491951-491955](../../../../../reference/runtime/host-main.cjs#L491951-L491955) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:491951 uses an implicit arrow-function return.

### host:491951

Calls written directly in this body: `proxy.getAgentTranscriptTail`, `proxy.openAgentTail`.

SHA-256 of the source span: `12acc6f13350d96dc220e21733024f4c9a275cf16e17bad5d98aae0e08d4841a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
