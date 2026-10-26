# `SandSessionMaterialization.recoverConversationRootIfMissing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721517-721536](../../../../../../../reference/runtime/host-main.cjs#L721517-L721536) | `method` | yes | `dbPath, db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721517-721536](../../../../../../../reference/runtime/host-main.cjs#L721517-L721536) | 2 | 0 | 3 | 3 | 1 | 1 |

### host:721517

Calls written directly in this body: `agentStore.dispose`, `agentStore.resetFromDb`, `db.get`, `new AgentStore2`, `recoverConversationIfRootMissing`, `this.blobStoreFor`, `this.host.maintenanceHost`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `1d4311df7834097cb9978c45e8e379bf444120e44f0eca3bf95f805991152c01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
