# `AgentStore2.tryResetFromDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616306-616325](../../../../../reference/runtime/host-main.cjs#L616306-L616325) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616306-616325](../../../../../reference/runtime/host-main.cjs#L616306-L616325) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:616306

Calls written directly in this body: `new ConversationStateStructure`, `this.blobStore.getBlob`, `this.getMetadata`, `this.serde.deserialize`.

Assignment or increment targets: `this.conversationStateStructure`.

SHA-256 of the source span: `4b35c0c47ee7e05c124a0ef8d87e8f353904a88f191a2908ef0ae3135c99d907`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
