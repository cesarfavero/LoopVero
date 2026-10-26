# `SandMcpDefinitionSource.stdioConfigForBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-definition-source.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686682-686690](../../../../../../../reference/runtime/host-main.cjs#L686682-L686690) | `method` | yes | `name18, config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686682-686690](../../../../../../../reference/runtime/host-main.cjs#L686682-L686690) | 5 | 0 | 1 | 3 | 0 | 0 |

### host:686682

Calls written directly in this body: `pluginDataFolder`, `readsPluginInstallFolder`, `this.pluginIdForServer`, `this.pluginInstallFolder`, `withPluginDataFolder`, `withPluginInstallFolder`.

SHA-256 of the source span: `8105c60ef2a306c2bb0cb77d5cac2a883c79c8a8a7f7cdff7ab65b1f3bcb721c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
