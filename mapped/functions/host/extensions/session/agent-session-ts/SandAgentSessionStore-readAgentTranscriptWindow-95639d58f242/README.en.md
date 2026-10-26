# `SandAgentSessionStore.readAgentTranscriptWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723440-723442](../../../../../../../reference/runtime/host-main.cjs#L723440-L723442) | `method` | no | `agentId, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723440-723442](../../../../../../../reference/runtime/host-main.cjs#L723440-L723442) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723440

Calls written directly in this body: `this.conversationState.readAgentTranscriptWindow`.

SHA-256 of the source span: `309d279f8d4a13b827feeb3b969a3d95f9f331d9c0300501a1e2d88831fd73ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
