# `SandMcpManager.adoptAccountServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689251-689311](../../../../../../../reference/runtime/host-main.cjs#L689251-L689311) | `method` | no | `display, generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689251-689311](../../../../../../../reference/runtime/host-main.cjs#L689251-L689311) | 12 | 0 | 0 | 5 | 0 | 0 |

### host:689251

Calls written directly in this body: `accountCredentialFingerprint`, `accountCredentialRowFingerprints`, `mergeUnresolvedAccountServers`, `reportMcpHostEdgeDegraded`, `runtimeConfigFromDisplay`, `this.accountSlots.clearAccountDisplayState`, `this.accountSlots.noteAccountDisplayConfig`, `this.authWatches.clearAllPendingAuthWatchesCancelled`, `this.boxRuntime.invalidateToolsCache`, `this.connectorAuth.clear`, `this.definitionSource.adoptAccountConfig`, `this.definitionSource.clearCache`, `this.definitionSource.clearLastKnownAccountConfig`, `this.disarmSignedInRowsShownWithToken`, `this.displayListing.noteAccountRecovered`, `this.instructionsAndToggles.migrateCustomInstructions`, `this.lastAccountDisplayConfigView`, `this.listingCache.clear`, `this.listingCache.dropBackend`, `this.onAccountScopeApplied`, `this.settingsStore.getActiveAccountScope`, `this.signedInRowsAwaitingAccountRead.clear`, `this.takeSignedInCredentialChanges`.

Assignment or increment targets: `this.accountRecoveryAttempted`, `this.accountServersPromise`, `this.adoptedAccountGeneration`, `this.lastAccountCacheScope`, `this.lastAccountCredentialFingerprint`, `this.lastAccountCredentialRows`.

SHA-256 of the source span: `f1675da85a7bfb78b03e0a2c582defd6a7de330e9dc198945747885a01eec4f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
