# `AgentStore2.getFullConversationWithSubagents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616272-616292](../../../../../reference/runtime/host-main.cjs#L616272-L616292) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616272-616292](../../../../../reference/runtime/host-main.cjs#L616272-L616292) | 1 | 1 | 3 | 1 | 0 | 0 |

### host:616272

Calls written directly in this body: `Object.entries`, `resolveSubagentPersistedStates`, `this.deserializeConversationStateStructure`.

Assignment or increment targets: `subagentStates[computed]`.

SHA-256 of the source span: `4ecae6b87995bfb020c07f079d5c5dc8fef2ff9fdea1e8bc07c7bebe5845346a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
