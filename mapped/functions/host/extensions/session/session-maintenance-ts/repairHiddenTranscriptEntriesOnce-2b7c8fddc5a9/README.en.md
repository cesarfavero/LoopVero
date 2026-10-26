# `repairHiddenTranscriptEntriesOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-maintenance.ts` · [Module README](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720312-720352](../../../../../../../reference/runtime/host-main.cjs#L720312-L720352) | `FunctionDeclaration` | yes | `host, dbPath, db, agentStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720312-720352](../../../../../../../reference/runtime/host-main.cjs#L720312-L720352) | 6 | 1 | 2 | 4 | 0 | 1 |

### host:720312

Calls written directly in this body: `agentStore.getBlobStore`, `agentStore.getConversationStateStructure`, `agentStore.getFullConversation`, `conversationStructureFullyResolves`, `db.deleteTranscriptEntry`, `db.getHiddenEntryRepairVersion`, `db.getTranscriptEntries`, `db.setHiddenEntryRepairVersion`, `deriveOutlineFromConversationState`, `entries.some`, `errorLogTag`, `host.reportHostLog`, `reportSessionDiagnostic`, `selectHiddenArtifactEntryIds`.

Assignment or increment targets: `allDeleted`.

SHA-256 of the source span: `e4180ee4f2c4629e5b4579382e7b29f607ea8fcb51088df92f577898e907d9da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
