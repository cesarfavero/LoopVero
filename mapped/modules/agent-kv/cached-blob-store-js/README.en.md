# `agent-kv/cached-blob-store.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../guide/architecture/README.en.md) · [General index](../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:616391-616526](../../../../reference/runtime/host-main.cjs#L616391-L616526) |
| evaluation | [evaluation:284931-285066](../../../../reference/runtime/sand-eval-runner.cjs#L284931-L285066) |
| state-worker | [state-worker:21765-21899](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21765-L21899) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `NearbyBlobDecryptError.constructor` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/NearbyBlobDecryptError-constructor-8a2e149be17a/README.en.md) |
| `_EncryptedBlobStore.constructor` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-constructor-ad6d688d194c/README.en.md) |
| `_EncryptedBlobStore.deriveKey` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-deriveKey-3b4536a82c00/README.en.md) |
| `_EncryptedBlobStore.encryptBlob` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-encryptBlob-8f6fdd4f508d/README.en.md) |
| `_EncryptedBlobStore.flush` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-flush-a22506e036f2/README.en.md) |
| `_EncryptedBlobStore.getBlob` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-getBlob-802f8716c2c1/README.en.md) |
| `_EncryptedBlobStore.getEncryptionKey` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-getEncryptionKey-9a661f47d5fa/README.en.md) |
| `_EncryptedBlobStore.getFallbackDecryptKey` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-getFallbackDecryptKey-9f3817cc3147/README.en.md) |
| `_EncryptedBlobStore.setBlob` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-setBlob-c0e799ad6b3f/README.en.md) |
| `_EncryptedBlobStore.setBlobLocallyOnly` | 3 | [Static behavior](../../../functions/agent-kv/cached-blob-store-js/EncryptedBlobStore-setBlobLocallyOnly-eea4107f2c72/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
