# `getDefaultAgentMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616055-616068](../../../../../reference/runtime/host-main.cjs#L616055-L616068) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616055-616068](../../../../../reference/runtime/host-main.cjs#L616055-L616068) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:616055 uses an implicit arrow-function return.

### host:616055

Calls written directly in this body: `Date.now`, `crypto.randomUUID`, `generateBlobEncryptionKeyHex`, `new Uint8Array`.

SHA-256 of the source span: `9a6dc213e73352905f42a89e6bcf43f52a9e09ca084d8c233bfcc2b5ac0bbe47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
