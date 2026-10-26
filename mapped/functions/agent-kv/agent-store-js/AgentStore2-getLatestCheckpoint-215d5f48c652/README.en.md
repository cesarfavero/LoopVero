# `AgentStore2.getLatestCheckpoint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616293-616295](../../../../../reference/runtime/host-main.cjs#L616293-L616295) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616293-616295](../../../../../reference/runtime/host-main.cjs#L616293-L616295) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616293

Calls written directly in this body: `this.getConversationStateStructure`.

SHA-256 of the source span: `9645eae6fb72a2113dd31888a71415d391bda015a72fe83648f6f40f477df60f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
