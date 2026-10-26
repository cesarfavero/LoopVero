# `SharedDesktopSandBox.ensureAgentReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554940-555001](../../../../../../reference/runtime/host-main.cjs#L554940-L555001) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554940-555001](../../../../../../reference/runtime/host-main.cjs#L554940-L555001) | 15 | 1 | 12 | 11 | 0 | 1 |

### host:554940

Calls written directly in this body: `isPrimaryWindowIndex`, `this.adoptPersistedAssignment`, `this.agentWindowTokens.has`, `this.agentWindowTokens.set`, `this.agentWindows.has`, `this.assignOrReclaimWindow`, `this.claimSeat`, `this.deletedAgents.has`, `this.ensureAssignmentsLoaded`, `this.establishFork`, `this.establishedForks.has`, `this.forgetRefusedSeat`, `this.forkConnection`, `this.freeDeletedAgentSeatsOnce`, `this.gateComputerUse`, `this.inner.ensureReady`, `this.inner.ensureWindow`, `this.keepFailedSeat`, `this.migrateLegacyPrimarySeat`, `this.reattachAdoptedFork`, `this.releaseUnstartableSeat`, `this.windowOptions`, `this.withoutDeletedAgentSeat`.

Assignment or increment targets: `assigned`, `attempt`, `isNewAssignment`, `seat`, `tokenIsNew`, `window2`.

SHA-256 of the source span: `0ca5cd89dd1151e001eadc3d4e6218aa577c0da69a4a1b257a7ca9fd66b22cc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
