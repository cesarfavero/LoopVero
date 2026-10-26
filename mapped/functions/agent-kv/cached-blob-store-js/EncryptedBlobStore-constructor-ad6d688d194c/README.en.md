# `_EncryptedBlobStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616436-616440](../../../../../reference/runtime/host-main.cjs#L616436-L616440) | `method` | no | `blobStore, encryptionKeyStr, fallbackDecryptKeyStr = null` |
| [evaluation:284976-284980](../../../../../reference/runtime/sand-eval-runner.cjs#L284976-L284980) | `method` | no | `blobStore, encryptionKeyStr, fallbackDecryptKeyStr = null` |
| [state-worker:21809-21813](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21809-L21813) | `method` | no | `blobStore, encryptionKeyStr, fallbackDecryptKeyStr = null` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616436-616440](../../../../../reference/runtime/host-main.cjs#L616436-L616440) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:284976-284980](../../../../../reference/runtime/sand-eval-runner.cjs#L284976-L284980) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21809-21813](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21809-L21813) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616436

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobStore`, `this.encryptionKeyStr`, `this.fallbackDecryptKeyStr`.

SHA-256 of the source span: `d7642746f2deaeac73fb71c4bc91569bab30c71f1577096cebdb5dd19f113c3e`.

### evaluation:284976

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobStore`, `this.encryptionKeyStr`, `this.fallbackDecryptKeyStr`.

SHA-256 of the source span: `d7642746f2deaeac73fb71c4bc91569bab30c71f1577096cebdb5dd19f113c3e`.

### state-worker:21809

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobStore`, `this.encryptionKeyStr`, `this.fallbackDecryptKeyStr`.

SHA-256 of the source span: `d7642746f2deaeac73fb71c4bc91569bab30c71f1577096cebdb5dd19f113c3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
