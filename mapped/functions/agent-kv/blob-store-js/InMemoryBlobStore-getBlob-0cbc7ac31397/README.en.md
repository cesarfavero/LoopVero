# `InMemoryBlobStore.getBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-store.js` · [Module README](../../../../modules/agent-kv/blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:284743-284752](../../../../../reference/runtime/sand-eval-runner.cjs#L284743-L284752) | `method` | no | `ctx, blobId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284743-284752](../../../../../reference/runtime/sand-eval-runner.cjs#L284743-L284752) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:284743

Calls written directly in this body: `Promise.resolve`, `inMemoryGetBlobLatency.histogram`, `performance.now`, `this.blobs.get`, `toHex`.

SHA-256 of the source span: `8bd8ecf9eba4ee21c307b3efcf2ccb65edc80f4837e49b74b0e3f69484d5afb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
