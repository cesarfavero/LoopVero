# `createHostGatewayApi/getBotTemplateVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492565-492565](../../../../../reference/runtime/host-main.cjs#L492565-L492565) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492565-492565](../../../../../reference/runtime/host-main.cjs#L492565-L492565) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:492565 uses an implicit arrow-function return.

### host:492565

Calls written directly in this body: `.getVersion`, `botTemplateGatewayView`, `deps.extensions.api`.

SHA-256 of the source span: `77a2e2865ab5d2752800f0ae68e0d8a8c8d9cd77833e064890e07034e90ca7e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
