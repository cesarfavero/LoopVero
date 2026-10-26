# `SandSessionConversationState.resolveConversationState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-conversation-state.ts` · [Module README](../../../../../../modules/host/extensions/session/session-conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720080-720094](../../../../../../../reference/runtime/host-main.cjs#L720080-L720094) | `method` | yes | `structure, blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720080-720094](../../../../../../../reference/runtime/host-main.cjs#L720080-L720094) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:720080

Calls written directly in this body: `applyTurnRequestIds`, `cacheBlobReads`, `deriveConversationStateFromStructure`, `readDurableTurnRequestIds`.

SHA-256 of the source span: `d6455a4c4944823852e7bd0eaff94d878dbce7572618bcd8ef2d1428d01e77d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
