# `fetchEffectiveUserPlugins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690518-690549](../../../../../../../reference/runtime/host-main.cjs#L690518-L690549) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690518-690549](../../../../../../../reference/runtime/host-main.cjs#L690518-L690549) | 10 | 1 | 1 | 1 | 0 | 0 |

### host:690518

Calls written directly in this body: `BigInt`, `accountMcpBackendClient`, `client.getEffectiveUserPlugins`, `new GetEffectiveUserPluginsRequest`, `plugin.id.toString`, `plugin.mcpServers.map`, `plugins.push`, `toEffectivePluginInstallMode`.

SHA-256 of the source span: `70c3d9fffcb120e09e92ccf58891a822be65b8dbb28d0d33bf086f22677a6259`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
