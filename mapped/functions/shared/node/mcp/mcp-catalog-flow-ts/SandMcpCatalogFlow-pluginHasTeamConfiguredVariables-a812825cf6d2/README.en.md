# `SandMcpCatalogFlow.pluginHasTeamConfiguredVariables`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686444-686456](../../../../../../../reference/runtime/host-main.cjs#L686444-L686456) | `method` | yes | `pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686444-686456](../../../../../../../reference/runtime/host-main.cjs#L686444-L686456) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:686444

Calls written directly in this body: `list`, `plugins.some`, `reportMcpHostEdgeFailure`.

SHA-256 of the source span: `0d655b2ad8745cb9dc582fe2cf736115a9d5c23aabdeaff9c342561923fb3f20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
