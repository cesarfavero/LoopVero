# `_EncryptedBlobStore.getFallbackDecryptKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616453-616461](../../../../../reference/runtime/host-main.cjs#L616453-L616461) | `method` | yes | `(none)` |
| [evaluation:284993-285001](../../../../../reference/runtime/sand-eval-runner.cjs#L284993-L285001) | `method` | yes | `(none)` |
| [state-worker:21826-21834](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21826-L21834) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616453-616461](../../../../../reference/runtime/host-main.cjs#L616453-L616461) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:284993-285001](../../../../../reference/runtime/sand-eval-runner.cjs#L284993-L285001) | 2 | 0 | 1 | 2 | 0 | 0 |
| [state-worker:21826-21834](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21826-L21834) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:616453

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.fallbackDecryptKey`.

SHA-256 of the source span: `ca4d38a6d417e57ef24784a4315a4f39215df90e2848349a7424d32114a5ecd6`.

### evaluation:284993

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.fallbackDecryptKey`.

SHA-256 of the source span: `ca4d38a6d417e57ef24784a4315a4f39215df90e2848349a7424d32114a5ecd6`.

### state-worker:21826

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.fallbackDecryptKey`.

SHA-256 of the source span: `ca4d38a6d417e57ef24784a4315a4f39215df90e2848349a7424d32114a5ecd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
