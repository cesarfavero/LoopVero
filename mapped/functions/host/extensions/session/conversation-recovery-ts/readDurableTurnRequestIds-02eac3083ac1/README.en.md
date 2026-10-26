# `readDurableTurnRequestIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719952-719992](../../../../../../../reference/runtime/host-main.cjs#L719952-L719992) | `FunctionDeclaration` | yes | `ctx, structure, blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719952-719992](../../../../../../../reference/runtime/host-main.cjs#L719952-L719992) | 12 | 3 | 7 | 11 | 0 | 1 |

### host:719952

Calls written directly in this body: `ConversationTurnStructure.fromBinary`, `blobStore.getBlob`, `requestIds.push`.

Assignment or increment targets: `turnStructure`.

SHA-256 of the source span: `94ea6a49c4b46c1cd6e3db444dc8a4ef493621f6ba7b3b4d789f2bab2415cc58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
