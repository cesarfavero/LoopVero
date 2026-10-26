# `SandAgentIdentityService.reconcile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495759-495841](../../../../../../../reference/runtime/host-main.cjs#L495759-L495841) | `method` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495759-495841](../../../../../../../reference/runtime/host-main.cjs#L495759-L495841) | 7 | 1 | 3 | 4 | 0 | 2 |

### host:495759

Calls written directly in this body: `errorMessage`, `logFields`, `signal.throwIfAborted`, `this.deps.getAgentsRootDir`, `this.deps.isEnabled`, `this.deps.log`, `this.deps.report`, `this.deps.retry.runWithRetry`, `this.isAwaitingLocalMaterialization`, `this.reconcileAvatar`, `this.removeDeletedAgentDirs`, `this.reportAgentReconcileFailure`, `this.resolvePendingDeletes`, `this.serverAvatarVersions.set`, `this.syncDownAgent`, `this.syncDownRetry.passFailed`, `this.syncDownRetry.passSucceeded`, `this.syncDownRetry.passUnreadable`, `this.unlistedTemporalMirrorIdsOf`.

Assignment or increment targets: `agentsFailed`, `avatarOutcome`, `avatarRestoreFailed`, `avatarsRestored`, `listing`, `skippedLocal`, `synced`.

SHA-256 of the source span: `b0bde9082fca767610f8ed1e49eb29b2d312cc2519b6231625c9826e14b99d72`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
