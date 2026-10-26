# `createHostGatewayApi/recordVoiceCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492824-492843](../../../../../reference/runtime/host-main.cjs#L492824-L492843) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492824-492843](../../../../../reference/runtime/host-main.cjs#L492824-L492843) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:492824

Calls written directly in this body: `SandVoiceCallRecords.fromWire`, `deps.extensions.api`, `manager.recordVoiceCall`, `parseAgentId`, `proxy.isProxiedAgent`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b590e56ed644e459a8a19b64af227da087b487c3f738d988d09f5e00332e4506`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
