# `createHostGatewayApi/getMcpCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492860-492860](../../../../../reference/runtime/host-main.cjs#L492860-L492860) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492860-492860](../../../../../reference/runtime/host-main.cjs#L492860-L492860) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492860 uses an implicit arrow-function return.

### host:492860

Calls written directly in this body: `.plugins.getCatalog`, `deps.extensions.api`.

SHA-256 of the source span: `f2b5626f0b15aeea0474c5ba3737ae3b15da23bf7a7a8980abe97f2976abe1d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
