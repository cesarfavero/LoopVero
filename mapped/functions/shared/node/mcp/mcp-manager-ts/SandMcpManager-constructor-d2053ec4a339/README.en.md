# `SandMcpManager.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689145-689230](../../../../../../../reference/runtime/host-main.cjs#L689145-L689230) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689145-689230](../../../../../../../reference/runtime/host-main.cjs#L689145-L689230) | 7 | 0 | 0 | 0 | 0 | 0 |

### host:689145

Calls written directly in this body: `createDeadlinePolicy`, `new SandMcpAccountSlotLifecycle`, `new SandMcpAuthWatchLifecycle`, `new SandMcpCatalogFlow`, `new SandMcpConnectorAuthReader`, `new SandMcpDefinitionSource`, `new SandMcpDisplayListing`, `new SandMcpInstructionsAndToggles`, `new SandMcpListingCache`, `new SandMcpListingSummaries`.

Assignment or increment targets: `this.accountDisplayConfigProvider`, `this.accountMcpWriter`, `this.accountServersProvider`, `this.accountSlots`, `this.authWatches`, `this.backendMcpExec`, `this.boxRuntime`, `this.catalogFlow`, `this.clock`, `this.connectorAuth`, `this.definitionSource`, `this.displayListing`, `this.effectivePluginsProvider`, `this.grokBotAgentServersProvider`, `this.instructionsAndToggles`, `this.listingCache`, `this.listingObserver`, `this.onAccountScopeApplied`, `this.onDiscoveryFailed`, `this.settingsStore`, `this.statusListingDeadline`, `this.summaries`.

SHA-256 of the source span: `03b8b8339116b677f20ba1cf276c0e2e70b3325650c1acc7b0dab8824ad78217`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
