# `_EncryptedBlobStore.encryptBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616492-616499](../../../../../reference/runtime/host-main.cjs#L616492-L616499) | `method` | yes | `blobData` |
| [evaluation:285032-285039](../../../../../reference/runtime/sand-eval-runner.cjs#L285032-L285039) | `method` | yes | `blobData` |
| [state-worker:21865-21872](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21865-L21872) | `method` | yes | `blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616492-616499](../../../../../reference/runtime/host-main.cjs#L616492-L616499) | 0 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:285032-285039](../../../../../reference/runtime/sand-eval-runner.cjs#L285032-L285039) | 0 | 0 | 2 | 1 | 0 | 0 |
| [state-worker:21865-21872](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21865-L21872) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:616492

Calls written directly in this body: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array2`.

SHA-256 of the source span: `5dba5ca36e85b29a2eb75e4a5291fbf701582f1a9a2995ce5705e837e2a73591`.

### evaluation:285032

Calls written directly in this body: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array`.

SHA-256 of the source span: `c343ed0ad18cc1531050a579bed3f3680ac7802ccde53880ba05286ed7a84dd0`.

### state-worker:21865

Calls written directly in this body: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array`.

SHA-256 of the source span: `c343ed0ad18cc1531050a579bed3f3680ac7802ccde53880ba05286ed7a84dd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
