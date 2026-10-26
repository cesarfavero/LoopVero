# `createHostGatewayApi/resolveConnectorGrant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492504-492507](../../../../../reference/runtime/host-main.cjs#L492504-L492507) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492504-492507](../../../../../reference/runtime/host-main.cjs#L492504-L492507) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492504

Calls written directly in this body: `.analytics.markActive`, `deps.extensions.api`, `fail`.

Explicit throw targets: `fail`.

SHA-256 of the source span: `506377fecfe7f3a704f8d1baed2214038ec592fbc6d6097d0a446262b6bbed22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
