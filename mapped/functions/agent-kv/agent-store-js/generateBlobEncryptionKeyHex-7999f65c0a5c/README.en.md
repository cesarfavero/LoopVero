# `generateBlobEncryptionKeyHex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616020-616024](../../../../../reference/runtime/host-main.cjs#L616020-L616024) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616020-616024](../../../../../reference/runtime/host-main.cjs#L616020-L616024) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616020

Calls written directly in this body: `crypto.getRandomValues`, `new Uint8Array`, `toHex3`.

SHA-256 of the source span: `bf1ae56d2fc263540af2da1af3d37ef1874974970aa225c6c07520800c005442`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
