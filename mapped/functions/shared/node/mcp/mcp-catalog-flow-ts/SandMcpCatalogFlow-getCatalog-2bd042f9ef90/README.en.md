# `SandMcpCatalogFlow.getCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686341-686378](../../../../../../../reference/runtime/host-main.cjs#L686341-L686378) | `method` | yes | `getAccessToken, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686341-686378](../../../../../../../reference/runtime/host-main.cjs#L686341-L686378) | 3 | 1 | 3 | 3 | 1 | 1 |

### host:686341

Calls written directly in this body: `.then`, `Promise.resolve`, `bestEffortToken2`, `fetchPlugins`, `marketplacePluginToView2`, `this.catalogCache.clear`, `this.catalogCache.set`, `this.core.clock.now`, `this.marketplaceFetcherForBackend`, `views.push`, `views.sort`.

Assignment or increment targets: `listing`, `this.catalogViewsCache`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `26fc300b1a3f4d0c8035569c4ba7e92df20b15cf64e0e9989bde8a5dfd222b66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
