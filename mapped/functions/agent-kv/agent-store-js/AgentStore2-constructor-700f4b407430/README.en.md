# `AgentStore2.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616212-616218](../../../../../reference/runtime/host-main.cjs#L616212-L616218) | `method` | no | `blobStore, metadataStore, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616212-616218](../../../../../reference/runtime/host-main.cjs#L616212-L616218) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616212

Calls written directly in this body: `new ConversationStateStructure`, `new ProtoSerde`.

Assignment or increment targets: `this.blobStore`, `this.conversationStateStructure`, `this.fixedRootBlobId`, `this.metadataStore`, `this.serde`.

SHA-256 of the source span: `b9235dc91d8c46e50bf22bfd30e596a2f8ef0a51f51475201c144349ff10b909`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
