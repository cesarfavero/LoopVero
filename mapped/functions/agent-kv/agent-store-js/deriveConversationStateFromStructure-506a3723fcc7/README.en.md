# `deriveConversationStateFromStructure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616137-616210](../../../../../reference/runtime/host-main.cjs#L616137-L616210) | `FunctionDeclaration` | yes | `ctx, structure, blobStore` |
| [evaluation:284798-284871](../../../../../reference/runtime/sand-eval-runner.cjs#L284798-L284871) | `FunctionDeclaration` | yes | `ctx, structure, blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616137-616210](../../../../../reference/runtime/host-main.cjs#L616137-L616210) | 11 | 3 | 7 | 1 | 0 | 0 |
| [evaluation:284798-284871](../../../../../reference/runtime/sand-eval-runner.cjs#L284798-L284871) | 11 | 3 | 7 | 1 | 0 | 0 |

### host:616137

Calls written directly in this body: `blobStore.getBlob`, `conversationStepSerde.deserialize`, `conversationSummarySerde.deserialize`, `conversationTurnStructureSerde.deserialize`, `new AgentConversationTurn`, `new ConversationState`, `new ConversationTurn`, `new ShellConversationTurn`, `shellCommandSerde.deserialize`, `shellOutputSerde.deserialize`, `steps.push`, `todoItemSerde.deserialize`, `todos.push`, `turns.push`, `userMessageSerde.deserialize`.

Assignment or increment targets: `conversationTurn`, `newState.summary`, `newState.todos`, `newState.turns`.

SHA-256 of the source span: `3f5ad4a496355ee1bd22b58c351d29c4f78cf725818989641c12876f233198bb`.

### evaluation:284798

Calls written directly in this body: `blobStore.getBlob`, `conversationStepSerde.deserialize`, `conversationSummarySerde.deserialize`, `conversationTurnStructureSerde.deserialize`, `new AgentConversationTurn`, `new ConversationState`, `new ConversationTurn`, `new ShellConversationTurn`, `shellCommandSerde.deserialize`, `shellOutputSerde.deserialize`, `steps.push`, `todoItemSerde.deserialize`, `todos.push`, `turns.push`, `userMessageSerde.deserialize`.

Assignment or increment targets: `conversationTurn`, `newState.summary`, `newState.todos`, `newState.turns`.

SHA-256 of the source span: `8be93fbf5f289d294a20f8e7aacf85d863a5a6f0b6e200527ecf823487b51c8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
