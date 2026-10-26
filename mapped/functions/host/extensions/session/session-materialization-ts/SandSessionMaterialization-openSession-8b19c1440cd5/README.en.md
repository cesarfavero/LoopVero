# `SandSessionMaterialization.openSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721537-721576](../../../../../../../reference/runtime/host-main.cjs#L721537-L721576) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721537-721576](../../../../../../../reference/runtime/host-main.cjs#L721537-L721576) | 2 | 0 | 5 | 1 | 1 | 0 |

### host:721537

Calls written directly in this body: `.createAgentStore`, `agentStore.resetFromDb`, `assertValidSandAgentId`, `automationStoreForDbPath`, `channelStoreForDbPath`, `clearStaleCheckpointRootsOnce`, `db.get`, `ensureProfileFile`, `ensureSettingsFile`, `getAgentDbPath`, `new AgentStore2`, `new SandAgentMissingError`, `prepareAgentMediaStoreRoots`, `recoverConversationIfRootMissing`, `repairHiddenTranscriptEntriesOnce`, `scheduleConversationSizeMaintenance`, `skillStoreForDbPath`, `this.blobStoreFor`, `this.host.agentExists`, `this.host.createAgentDb`, `this.host.maintenanceHost`, `this.host.memory`.

Explicit throw targets: `SandAgentMissingError`.

SHA-256 of the source span: `7dabd5a2e2881faa6bddc3621f30ca2cd2464a45d95ed4b75f45dfbf30d5318a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
