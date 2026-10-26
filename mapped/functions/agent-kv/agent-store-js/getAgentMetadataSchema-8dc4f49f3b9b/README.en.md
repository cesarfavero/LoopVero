# `getAgentMetadataSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616029-616054](../../../../../reference/runtime/host-main.cjs#L616029-L616054) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616029-616054](../../../../../reference/runtime/host-main.cjs#L616029-L616054) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616029

Calls written directly in this body: `.int`, `.min`, `.optional`, `.positive`, `_enum2`, `boolean2`, `custom`, `number2`, `object`, `string2`.

Assignment or increment targets: `_agentMetadataSchema`.

SHA-256 of the source span: `37074acb3dafe953e3fb7d9948f41c4d3c7ee8cfa4e10dd92c20946fd6a9eff5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
