# `SandHost.startWithLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786466-786553](../../../../../reference/runtime/host-main.cjs#L786466-L786553) | `method` | yes | `lifecycle2, hooks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786466-786553](../../../../../reference/runtime/host-main.cjs#L786466-L786553) | 1 | 0 | 6 | 0 | 0 | 1 |

### host:786466

Calls written directly in this body: `.api`, `.subscribeToChanges`, `Date.now`, `brandedOrInvalidId`, `createHostRosterBookkeeping`, `hooks.beforeResumeOwnership`, `hostExtensions.api`, `hostExtensions.order.join`, `hostUpgrade.activateAfterHostIdentityReady`, `hostUpgrade.resolveHostBundleIdentityVersion`, `hostUpgrade.startSharedUpdateWatch`, `lifecycle2.complete`, `logFields`, `mcp.subscribeToAuthCompletion`, `mcp.subscribeToServersUpdated`, `reportFallback`, `resumeOwnership.resumeAtStartup`, `telemetry.logs.reportHostStartup`, `telemetry.setHostBundleIdentity`, `this.backgroundWorkReady.resolve`, `this.boxStore.getStoreId`, `this.ensureLoadedResilient`, `this.hostEvents.on`, `this.reportHostState`, `this.requireHostExtensions`, `this.telemetry.reportHostLog`, `this.transcript.setAgentForgottenObserver`, `this.transcript.setShouldEmitAutomations`, `this.wireDiskPressureGateway`, `this.wireEvents`.

Assignment or increment targets: `resolvedBoxStoreId`, `this.rosterBookkeeping`, `this.stopResumeOwnership`.

SHA-256 of the source span: `586541381f1fe499f6b6f836b03c0c5b84661ffcf11672f9348c7ab3ecd6d9c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
