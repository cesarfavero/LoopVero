# `wrapGatewayApiWithServerAgentProxy/getAgentTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492243-492246](../../../../../reference/runtime/host-main.cjs#L492243-L492246) | `ArrowFunctionExpression` | yes | `readArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492243-492246](../../../../../reference/runtime/host-main.cjs#L492243-L492246) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492243

Calls written directly in this body: `api.getAgentTranscriptTail`, `proxy.getAgentTranscriptTail`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `19e908492d9f976f72c682bbd9b9c8695a646488e38351a2d255dcd7179d4b2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
