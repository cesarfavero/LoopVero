# `wrapGatewayApiWithServerAgentProxy/submitSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492082-492088](../../../../../reference/runtime/host-main.cjs#L492082-L492088) | `ArrowFunctionExpression` | yes | `secretArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492082-492088](../../../../../reference/runtime/host-main.cjs#L492082-L492088) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492082

Calls written directly in this body: `act`, `api.submitSecret`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `eadea26e0ea0e76697481b2f05cc4204848acf49a3f5b158143936c05db53a66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
