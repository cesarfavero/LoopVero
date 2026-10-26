# `SandSessionConversationState.withReadOnlyAgentDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-conversation-state.ts` · [Module README](../../../../../../modules/host/extensions/session/session-conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720111-720128](../../../../../../../reference/runtime/host-main.cjs#L720111-L720128) | `method` | no | `agentId, read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720111-720128](../../../../../../../reference/runtime/host-main.cjs#L720111-L720128) | 0 | 0 | 0 | 1 | 1 | 1 |

### host:720111

Calls written directly in this body: `db.close`, `errorLogTag`, `getAgentDbPath`, `new SandAgentStoreUnreadableError`, `read2`, `reportSessionDiagnostic`, `this.host.createAgentDb`.

Assignment or increment targets: `db`.

Explicit throw targets: `SandAgentStoreUnreadableError`.

SHA-256 of the source span: `643b124296bc12668a20db74b65498db9e4917c8a0b970a90f5d7bb610c41feb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
