# `SandMcpCatalogFlow.reconcileUnpublishedPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686434-686438](../../../../../../../reference/runtime/host-main.cjs#L686434-L686438) | `method` | yes | `pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686434-686438](../../../../../../../reference/runtime/host-main.cjs#L686434-L686438) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:686434

Calls written directly in this body: `this.catalogCache.delete`, `this.core.reloadServers`.

Assignment or increment targets: `this.catalogViewsCache`.

SHA-256 of the source span: `688a498df43f60b17c9b97e426b57efbac7432750a65770d1edd2ce8bccf6488`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
