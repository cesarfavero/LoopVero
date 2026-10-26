# `_EncryptedBlobStore.setBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616500-616509](../../../../../reference/runtime/host-main.cjs#L616500-L616509) | `method` | yes | `ctx, blobId, blobData` |
| [evaluation:285040-285049](../../../../../reference/runtime/sand-eval-runner.cjs#L285040-L285049) | `method` | yes | `ctx, blobId, blobData` |
| [state-worker:21873-21882](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21873-L21882) | `method` | yes | `ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616500-616509](../../../../../reference/runtime/host-main.cjs#L616500-L616509) | 0 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:285040-285049](../../../../../reference/runtime/sand-eval-runner.cjs#L285040-L285049) | 0 | 0 | 2 | 0 | 0 | 0 |
| [state-worker:21873-21882](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21873-L21882) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:616500

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 of the source span: `b5ddc2dcadd2b50743df71f043c7ac60c98f99811ac0e1b84c59a7799926a8f9`.

### evaluation:285040

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 of the source span: `b5ddc2dcadd2b50743df71f043c7ac60c98f99811ac0e1b84c59a7799926a8f9`.

### state-worker:21873

Calls written directly in this body: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 of the source span: `42d085a1d7db84c06c5c22da1d375cf671357eead2867a36f96bc48f08b0780a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
