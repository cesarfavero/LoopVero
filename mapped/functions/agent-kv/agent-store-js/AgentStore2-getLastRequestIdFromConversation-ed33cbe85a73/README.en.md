# `AgentStore2.getLastRequestIdFromConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616240-616256](../../../../../reference/runtime/host-main.cjs#L616240-L616256) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616240-616256](../../../../../reference/runtime/host-main.cjs#L616240-L616256) | 3 | 1 | 1 | 3 | 0 | 0 |

### host:616240

Calls written directly in this body: `conversationTurnStructureSerde.deserialize`, `this.blobStore.getBlob`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `f6ac655095ec0da16fd87b1f985feac0f62b2bf8f5625e9bebcdcc386d493688`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
