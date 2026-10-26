# `InMemoryBlobStore.setBlobLocallyOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-store.js` · [Module README](../../../../modules/agent-kv/blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:284763-284765](../../../../../reference/runtime/sand-eval-runner.cjs#L284763-L284765) | `method` | no | `ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284763-284765](../../../../../reference/runtime/sand-eval-runner.cjs#L284763-L284765) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:284763

Calls written directly in this body: `this.setBlob`.

SHA-256 of the source span: `5f0f6e15a6e8a92649409cd5f2ece123fbf89b2cab472d20e33cd96e6f28f777`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
