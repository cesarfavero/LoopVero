# `createHostGatewayApi/createAgentAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492743-492755](../../../../../reference/runtime/host-main.cjs#L492743-L492755) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492743-492755](../../../../../reference/runtime/host-main.cjs#L492743-L492755) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:492743

Calls written directly in this body: `.analytics.markActive`, `.analytics.trackEvent`, `brandedId`, `deps.extensions.api`, `manager.createAgentAutomation`, `manager.getAgentAutomations`.

SHA-256 of the source span: `26537c0279d1723e2c91466567fcbcc8cbf4ad5e9620812fc8b6f6361a33a5a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
