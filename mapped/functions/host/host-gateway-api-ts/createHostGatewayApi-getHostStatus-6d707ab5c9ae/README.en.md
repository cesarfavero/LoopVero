# `createHostGatewayApi/getHostStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492987-492991](../../../../../reference/runtime/host-main.cjs#L492987-L492991) | `ArrowFunctionExpression` | yes | `{ includeManagedCapabilities }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492987-492991](../../../../../reference/runtime/host-main.cjs#L492987-L492991) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:492987 uses an implicit arrow-function return.

### host:492987

Calls written directly in this body: `.getVersionState`, `deps.extensions.api`, `deps.getHealth`, `hostCapabilities`.

SHA-256 of the source span: `cb57d1eb5f4f32cdf0dd3ab5f565587f138065b4c642d491779b674e6478e6e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
