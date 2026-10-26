# `createHostGatewayApi/deleteBotTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492574-492577](../../../../../reference/runtime/host-main.cjs#L492574-L492577) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492574-492577](../../../../../reference/runtime/host-main.cjs#L492574-L492577) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:492574

Calls written directly in this body: `.analytics.markActive`, `.delete`, `deps.extensions.api`.

SHA-256 of the source span: `7c80669569e98d13cee5dfc792ddfe3b715a4b8f52fad9c11e38690e41ab7055`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
