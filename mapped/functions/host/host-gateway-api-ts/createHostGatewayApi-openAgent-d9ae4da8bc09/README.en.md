# `createHostGatewayApi/openAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492686-492698](../../../../../reference/runtime/host-main.cjs#L492686-L492698) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492686-492698](../../../../../reference/runtime/host-main.cjs#L492686-L492698) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:492686

Calls written directly in this body: `.analytics.markActive`, `.logs.reportAgentOpen`, `Date.now`, `deps.extensions.api`, `manager.getActiveAgentId`, `manager.switchAgent`.

SHA-256 of the source span: `601c6aa931b802fa62d2a2eab2f38dfdf896b4d62c2163e52468f05da08fc776`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
