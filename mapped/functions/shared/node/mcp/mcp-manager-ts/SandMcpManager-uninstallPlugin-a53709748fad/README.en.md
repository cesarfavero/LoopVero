# `SandMcpManager.uninstallPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689804-689819](../../../../../../../reference/runtime/host-main.cjs#L689804-L689819) | `method` | yes | `rawPluginId, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689804-689819](../../../../../../../reference/runtime/host-main.cjs#L689804-L689819) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:689804

Calls written directly in this body: `reportDeferredListingFailure`, `this.accountSlots.lastListedStateView`, `this.inPluginWriteOrder`, `this.settingsStore.getActiveAccountScope`, `this.settlePluginRemoval`, `validateMarketplacePluginId`, `withoutUserPluginRows`.

SHA-256 of the source span: `79c99d1e1cb0c0ceb8ceae4e657d13f7657b4f5d8c04331fd711e4849d59ce04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
