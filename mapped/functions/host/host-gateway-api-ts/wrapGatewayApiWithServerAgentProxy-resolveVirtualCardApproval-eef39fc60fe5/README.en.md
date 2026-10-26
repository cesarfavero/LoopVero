# `wrapGatewayApiWithServerAgentProxy/resolveVirtualCardApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492162-492183](../../../../../reference/runtime/host-main.cjs#L492162-L492183) | `ArrowFunctionExpression` | yes | `cardArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492162-492183](../../../../../reference/runtime/host-main.cjs#L492162-L492183) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492162

Calls written directly in this body: `act`, `api.resolveVirtualCardApproval`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `2f8528f0abc44f2f1ba9bcbfe57a944a56973455af045ed1ee60f9c9de57d2f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
