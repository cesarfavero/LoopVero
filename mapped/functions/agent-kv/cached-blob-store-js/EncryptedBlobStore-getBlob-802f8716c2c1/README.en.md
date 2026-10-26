# `_EncryptedBlobStore.getBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616462-616491](../../../../../reference/runtime/host-main.cjs#L616462-L616491) | `method` | yes | `ctx, blobId` |
| [evaluation:285002-285031](../../../../../reference/runtime/sand-eval-runner.cjs#L285002-L285031) | `method` | yes | `ctx, blobId` |
| [state-worker:21835-21864](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21835-L21864) | `method` | yes | `ctx, blobId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616462-616491](../../../../../reference/runtime/host-main.cjs#L616462-L616491) | 2 | 0 | 5 | 2 | 2 | 2 |
| [evaluation:285002-285031](../../../../../reference/runtime/sand-eval-runner.cjs#L285002-L285031) | 2 | 0 | 5 | 2 | 2 | 2 |
| [state-worker:21835-21864](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21835-L21864) | 2 | 0 | 5 | 2 | 2 | 2 |

### host:616462

Calls written directly in this body: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Assignment or increment targets: `decryptedValue`.

Explicit throw targets: `NearbyBlobDecryptError`.

SHA-256 of the source span: `77ff952ad0a2c26a8a4e80bf55acacbfe22999a0911d50d0a01fc316080b7836`.

### evaluation:285002

Calls written directly in this body: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Assignment or increment targets: `decryptedValue`.

Explicit throw targets: `NearbyBlobDecryptError`.

SHA-256 of the source span: `77ff952ad0a2c26a8a4e80bf55acacbfe22999a0911d50d0a01fc316080b7836`.

### state-worker:21835

Calls written directly in this body: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Assignment or increment targets: `decryptedValue`.

Explicit throw targets: `NearbyBlobDecryptError`.

SHA-256 of the source span: `4682f75bba5513f84ae4de407e1a590296d0b2b391d6b256cae6ef9202c6195a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
