# `conversationStructureFullyResolves`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719993-719995](../../../../../../../reference/runtime/host-main.cjs#L719993-L719995) | `FunctionDeclaration` | yes | `ctx, structure, blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719993-719995](../../../../../../../reference/runtime/host-main.cjs#L719993-L719995) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:719993

Calls written directly in this body: `readDurableTurnRequestIds`.

SHA-256 of the source span: `14d5b9da46f0171b4e7885b6f5be41817b369d8aa666b661d43a3c8bd8963eb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
