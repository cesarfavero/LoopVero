# `SandMcpCatalogFlow.requireCachedPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686410-686423](../../../../../../../reference/runtime/host-main.cjs#L686410-L686423) | `method` | yes | `pluginId, getAccessToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686410-686423](../../../../../../../reference/runtime/host-main.cjs#L686410-L686423) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:686410

Calls written directly in this body: `new SandMcpConfigError`, `this.catalogCache.get`, `this.getCatalog`.

Assignment or increment targets: `cached2`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `b5208203cd5c437b8e3e4a44385fff091f720886dea63a1205d4beb07f242f8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
