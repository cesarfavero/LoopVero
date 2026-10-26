# `createHostGatewayApi/listMcpServerTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492874-492874](../../../../../reference/runtime/host-main.cjs#L492874-L492874) | `ArrowFunctionExpression` | no | `{ serverId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492874-492874](../../../../../reference/runtime/host-main.cjs#L492874-L492874) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492874 uses an implicit arrow-function return.

### host:492874

Calls written directly in this body: `.plugins.listServerTools`, `deps.extensions.api`.

SHA-256 of the source span: `ee9cf454404d319b07f8892e0ac20e50b060032f7c1ba97c03c5ef3ff164f427`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
