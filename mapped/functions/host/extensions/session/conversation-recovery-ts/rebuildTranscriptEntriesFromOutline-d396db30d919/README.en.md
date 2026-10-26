# `rebuildTranscriptEntriesFromOutline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719893-719938](../../../../../../../reference/runtime/host-main.cjs#L719893-L719938) | `FunctionDeclaration` | no | `outlineTurns, requestIds, itemTimes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719893-719938](../../../../../../../reference/runtime/host-main.cjs#L719893-L719938) | 8 | 2 | 0 | 1 | 0 | 0 |

### host:719893

Calls written directly in this body: `entries.push`, `isGroupTurnPromptText`, `isOffRecordMessageId`, `originalOf`, `outlineTurns.entries`, `rebuiltEntryId`.

SHA-256 of the source span: `97c1d97ed8ebc237cc4bea5212bf14c91adf743ad6ec43dc6780c8f5e8fc0f78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
