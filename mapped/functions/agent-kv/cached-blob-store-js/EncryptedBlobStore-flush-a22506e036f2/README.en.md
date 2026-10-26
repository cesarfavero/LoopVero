# `_EncryptedBlobStore.flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616520-616522](../../../../../reference/runtime/host-main.cjs#L616520-L616522) | `method` | yes | `ctx` |
| [evaluation:285060-285062](../../../../../reference/runtime/sand-eval-runner.cjs#L285060-L285062) | `method` | yes | `ctx` |
| [state-worker:21893-21895](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21893-L21895) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616520-616522](../../../../../reference/runtime/host-main.cjs#L616520-L616522) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:285060-285062](../../../../../reference/runtime/sand-eval-runner.cjs#L285060-L285062) | 0 | 0 | 1 | 1 | 0 | 0 |
| [state-worker:21893-21895](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21893-L21895) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:616520

Calls written directly in this body: `this.blobStore.flush`.

SHA-256 of the source span: `3ded32513d7c19e851b32a2b5f56d9ceb34c045a049c38467993b616aca47b8e`.

### evaluation:285060

Calls written directly in this body: `this.blobStore.flush`.

SHA-256 of the source span: `3ded32513d7c19e851b32a2b5f56d9ceb34c045a049c38467993b616aca47b8e`.

### state-worker:21893

Calls written directly in this body: `this.blobStore.flush`.

SHA-256 of the source span: `3ded32513d7c19e851b32a2b5f56d9ceb34c045a049c38467993b616aca47b8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
