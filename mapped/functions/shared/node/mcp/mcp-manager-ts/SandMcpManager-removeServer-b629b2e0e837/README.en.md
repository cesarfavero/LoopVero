# `SandMcpManager.removeServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689745-689789](../../../../../../../reference/runtime/host-main.cjs#L689745-L689789) | `method` | yes | `rawServerId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689745-689789](../../../../../../../reference/runtime/host-main.cjs#L689745-L689789) | 6 | 1 | 8 | 4 | 1 | 0 |

### host:689745

Calls written directly in this body: `.find`, `.servers.filter`, `Object.entries`, `isGrokDisplayServerId`, `new SandMcpConfigError`, `rawServerId.trim`, `this.authWatches.clearPendingAuthWatchesForServer`, `this.classifyRemoveOutcome`, `this.instructionsAndToggles.deleteDisabledToolsForServer`, `this.lastAccountDisplayConfigView`, `this.listServers`, `this.reloadServers`, `this.requireAccountWriter`, `this.resolveDisplayServer`, `this.settingsStore.deleteMcpCustomInstructionByServerId`, `this.settingsStore.getActiveAccountScope`, `this.uninstallPluginRows`, `validateMcpServerId`, `writer.getConfigForEdit`, `writer.setConfig`.

Assignment or increment targets: `nextIds[computed]`, `nextServers[computed]`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `ba2ee277039a83de3141cd7e11b93648285a4c6092a4103c4a5a235e807939a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
