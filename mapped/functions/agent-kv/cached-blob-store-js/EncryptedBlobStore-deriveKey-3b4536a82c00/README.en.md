# `_EncryptedBlobStore.deriveKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/cached-blob-store.js` · [Module README](../../../../modules/agent-kv/cached-blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616441-616446](../../../../../reference/runtime/host-main.cjs#L616441-L616446) | `method` | yes | `keyStr` |
| [evaluation:284981-284986](../../../../../reference/runtime/sand-eval-runner.cjs#L284981-L284986) | `method` | yes | `keyStr` |
| [state-worker:21814-21819](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21814-L21819) | `method` | yes | `keyStr` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616441-616446](../../../../../reference/runtime/host-main.cjs#L616441-L616446) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284981-284986](../../../../../reference/runtime/sand-eval-runner.cjs#L284981-L284986) | 0 | 0 | 1 | 1 | 0 | 0 |
| [state-worker:21814-21819](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21814-L21819) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:616441

Calls written directly in this body: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 of the source span: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

### evaluation:284981

Calls written directly in this body: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 of the source span: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

### state-worker:21814

Calls written directly in this body: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 of the source span: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
