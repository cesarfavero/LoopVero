# `_EncryptedBlobStore.getEncryptionKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616447-616452](../../../../../reference/runtime/host-main.cjs#L616447-L616452) | `method` | yes | `(none)` |
| [evaluation:284987-284992](../../../../../reference/runtime/sand-eval-runner.cjs#L284987-L284992) | `method` | yes | `(none)` |
| [state-worker:21820-21825](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21820-L21825) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616447-616452](../../../../../reference/runtime/host-main.cjs#L616447-L616452) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284987-284992](../../../../../reference/runtime/sand-eval-runner.cjs#L284987-L284992) | 1 | 0 | 1 | 1 | 0 | 0 |
| [state-worker:21820-21825](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21820-L21825) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:616447

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.encryptionKey`.

SHA-256 of the source span: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

### evaluation:284987

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.encryptionKey`.

SHA-256 of the source span: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

### state-worker:21820

Calls written directly in this body: `_EncryptedBlobStore.deriveKey`.

Assignment or increment targets: `this.encryptionKey`.

SHA-256 of the source span: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
