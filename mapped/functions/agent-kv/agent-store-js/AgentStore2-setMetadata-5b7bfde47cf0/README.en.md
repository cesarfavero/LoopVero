# `AgentStore2.setMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616224-616226](../../../../../reference/runtime/host-main.cjs#L616224-L616226) | `method` | no | `key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616224-616226](../../../../../reference/runtime/host-main.cjs#L616224-L616226) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616224

Calls written directly in this body: `this.metadataStore.set`.

SHA-256 of the source span: `46fb767c4c2afe396282555ce4fa627af3c71261d1c6ef21b084182a9d12e8fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
