# `toSandMarketplacePlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404615-404663](../../../../../../../reference/runtime/host-main.cjs#L404615-L404663) | `FunctionDeclaration` | no | `plugin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404615-404663](../../../../../../../reference/runtime/host-main.cjs#L404615-L404663) | 8 | 0 | 0 | 2 | 0 | 0 |

### host:404615

Calls written directly in this body: `isPrivateMarketplace`, `nonEmpty`, `plugin.curatedCategoryKeys.find`, `plugin.id.toString`, `plugin.mcpServers.flatMap`, `plugin.mcpServers.map`, `plugin.skills.flatMap`, `plugin.variables.toJson`, `pluginVariablesSchemaToFields`, `privateMarketplaceSummary`, `publisherSummary`, `rememberPluginLogoUrl`, `shouldListPlugin`, `toCategoryLabel`.

SHA-256 of the source span: `1275b1c6557d16c1fdebda78e359718703b96f06988ec99505afa65d316eedd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
