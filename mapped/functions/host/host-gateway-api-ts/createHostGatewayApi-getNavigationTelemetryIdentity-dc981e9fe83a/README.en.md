# `createHostGatewayApi/getNavigationTelemetryIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492997-493008](../../../../../reference/runtime/host-main.cjs#L492997-L493008) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492997-493008](../../../../../reference/runtime/host-main.cjs#L492997-L493008) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492997 uses an implicit arrow-function return.

### host:492997

Calls written directly in this body: `.logs.getEgressIpHash`, `.logs.getHttpProxyName`, `deps.extensions.api`, `readSandBoxBrowserForAnyDisplay`, `readSandEgressRoute`, `readWebBotAuthSignedCacheRaw`, `resolveSandBoxClusterName`.

SHA-256 of the source span: `dbfa9a1e0efe1c849399c1f764cb63883de3b3e3e933e24010f64869a36a18da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
