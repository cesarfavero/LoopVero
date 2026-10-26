# `_EncryptedBlobStore.setBlobLocallyOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616510-616519](../../../../../reference/runtime/host-main.cjs#L616510-L616519) | `method` | yes | `ctx, blobId, blobData` |
| [evaluation:285050-285059](../../../../../reference/runtime/sand-eval-runner.cjs#L285050-L285059) | `method` | yes | `ctx, blobId, blobData` |
| [state-worker:21883-21892](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21883-L21892) | `method` | yes | `ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616510-616519](../../../../../reference/runtime/host-main.cjs#L616510-L616519) | 0 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:285050-285059](../../../../../reference/runtime/sand-eval-runner.cjs#L285050-L285059) | 0 | 0 | 2 | 0 | 0 | 0 |
| [state-worker:21883-21892](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21883-L21892) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:616510

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 of the source span: `8be0116f26a2bfa3cb7ff9968af24ea03ae1ac58d40f1ba73a56183fbad736d3`.

### evaluation:285050

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 of the source span: `8be0116f26a2bfa3cb7ff9968af24ea03ae1ac58d40f1ba73a56183fbad736d3`.

### state-worker:21883

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 of the source span: `a24e941ce127a2be53a7a88094d1cf05cfaf300a8dda87c78b48de44e2e8a601`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
