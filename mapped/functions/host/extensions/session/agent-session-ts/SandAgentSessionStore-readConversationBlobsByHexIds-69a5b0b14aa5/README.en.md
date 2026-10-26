# `SandAgentSessionStore.readConversationBlobsByHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723189-723199](../../../../../../../reference/runtime/host-main.cjs#L723189-L723199) | `method` | yes | `agentId, blobIdsHex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723189-723199](../../../../../../../reference/runtime/host-main.cjs#L723189-L723199) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723189

Calls written directly in this body: `.getConversationBlobsByHexIds`, `getAgentDbPath`, `this.materialization.requireWorkerPool`.

SHA-256 of the source span: `8c75c90f0a7beec3b064f7f48750204c15bc14cbaee0475585650df7273ff8b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
