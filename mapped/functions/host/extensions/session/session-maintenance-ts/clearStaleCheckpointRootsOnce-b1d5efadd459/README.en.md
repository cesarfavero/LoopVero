# `clearStaleCheckpointRootsOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-maintenance.ts` · [Module README](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720161-720211](../../../../../../../reference/runtime/host-main.cjs#L720161-L720211) | `FunctionDeclaration` | yes | `host, dbPath, db, agentStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720161-720211](../../../../../../../reference/runtime/host-main.cjs#L720161-L720211) | 6 | 0 | 1 | 6 | 0 | 1 |

### host:720161

Calls written directly in this body: `.clearStaleCheckpointRoots`, `agentIdFromDbPath`, `agentStore.getConversationStateStructure`, `db.get`, `db.getStaleRootCleanupVersion`, `db.setStaleRootCleanupVersion`, `defer2`, `errorLogTag`, `getSandAgentDbWriteGeneration`, `host.reportHostLog`, `host.requireWorkerPool`, `liveDbHandleCount`, `reportSessionDiagnostic`, `toHex3`.

SHA-256 of the source span: `be9db9af4e5af8c727ec7a4dd0e323e9666eed3f610800f69ec87f79156d9bbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
