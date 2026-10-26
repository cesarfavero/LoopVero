# `AgentMetadataSerde.serialize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616093-616099](../../../../../reference/runtime/host-main.cjs#L616093-L616099) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616093-616099](../../../../../reference/runtime/host-main.cjs#L616093-L616099) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616093

Calls written directly in this body: `JSON.stringify`, `toHex3`, `utf8Serde.serialize`.

SHA-256 of the source span: `d1f12b52f374a70e052aabf7d0d0d303276eafa20f9ae703db39dd8a2b9e2a7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
