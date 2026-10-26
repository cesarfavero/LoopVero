# `TranscriptManager.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783222-783252](../../../../../../../reference/runtime/host-main.cjs#L783222-L783252) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783222-783252](../../../../../../../reference/runtime/host-main.cjs#L783222-L783252) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:783222

Calls written directly in this body: `createTaskBoundaryPolicy`, `new PromptAcceptanceLedger`, `new RunLifecycle`, `new SessionRuntime`, `new UpgradeRecreateResume`, `this.sessionStore.cleanupLegacyGroupMemberDirs`, `this.sessionStore.setBeingDeletedPredicate`, `this.sessionStore.setMemory`.

Assignment or increment targets: `this.acceptanceLedger`, `this.attachments`, `this.boxHarnessRefusals`, `this.boxSecretStore`, `this.clock`, `this.contentSearch`, `this.draftExecution`, `this.execution`, `this.hostLog`, `this.memory`, `this.productAnalytics`, `this.requestCredentialAutoFill`, `this.runLifecycle`, `this.sessionStore`, `this.sessions`, `this.taskBoundary`, `this.telemetry`, `this.temporalMemberDelegate`, `this.traceFlusher`, `this.trayErrors`, `this.upgradeResume`, `this.userFormPort`.

SHA-256 of the source span: `73c7672005c5ad8bf38066ac7cb9e5e4f34d47951b9879e6aee06874cb9e9f37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
