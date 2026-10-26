# `validateMarketplacePluginId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-runtime.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685121-685127](../../../../../../../reference/runtime/host-main.cjs#L685121-L685127) | `FunctionDeclaration` | no | `rawPluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685121-685127](../../../../../../../reference/runtime/host-main.cjs#L685121-L685127) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685121

Calls written directly in this body: `/^\d+$/.test`, `new SandMcpConfigError`, `rawPluginId.trim`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `27c6b23f9b7635de2d49f22160ff19121a5905c83c702ce761c208f8fe8498e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
