# `createHostGatewayApi/uninstallMcpPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492869-492869](../../../../../reference/runtime/host-main.cjs#L492869-L492869) | `ArrowFunctionExpression` | no | `{ pluginId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492869-492869](../../../../../reference/runtime/host-main.cjs#L492869-L492869) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492869 uses an implicit arrow-function return.

### host:492869

Calls written directly in this body: `.plugins.uninstallPlugin`, `deps.extensions.api`.

SHA-256 of the source span: `6e1c5e38accfae36c70563aca400a7564d967f3cd71b7103cf23948ce2823db3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
