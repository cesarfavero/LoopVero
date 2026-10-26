# `SandMcpManager.writePluginUninstall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689890-689932](../../../../../../../reference/runtime/host-main.cjs#L689890-L689932) | `method` | yes | `pluginId, requiredAccountScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689890-689932](../../../../../../../reference/runtime/host-main.cjs#L689890-L689932) | 2 | 1 | 2 | 1 | 2 | 0 |

### host:689890

Calls written directly in this body: `.filter`, `.some`, `BigInt`, `Promise.all`, `attributedRows.some`, `display.servers.filter`, `new SandMcpConfigError`, `pluginRows.filter`, `pluginRows.some`, `this.authWatches.clearPendingAuthWatchesForServer`, `this.displayForPluginUninstall`, `this.instructionsAndToggles.deleteDisabledToolsForServer`, `this.readReplicaEffectivePlugins`, `this.requireAccountWriter`, `this.settingsStore.deleteMcpCustomInstructionByServerId`, `writer.uninstallPlugin`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `9b60d93ee3143519ecde5659a070706d96e34f22b9f950030be4a68452e01a21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
