# `createHostMcp/getPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701221-701244](../../../../../../reference/runtime/host-main.cjs#L701221-L701244) | `FunctionExpression` | yes | `pluginId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701221-701244](../../../../../../reference/runtime/host-main.cjs#L701221-L701244) | 3 | 0 | 3 | 2 | 0 | 0 |

### host:701221

Calls written directly in this body: `.catch`, `.map`, `Promise.all`, `manager.getCatalog`, `manager.listEffectivePlugins`, `manager.listServers`, `manager.listServersFromCache`, `state.servers.filter`, `toCatalogFields`, `toPluginSummary`, `views.find`.

Assignment or increment targets: `view`, `views`.

SHA-256 of the source span: `9b39dbd00b934de85246612e37ff75d73fd647cf840480ed0a20fa4291e60464`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
