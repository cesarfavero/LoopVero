# `WorkerBlobStore.setBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720411-720413](../../../../../../reference/runtime/host-main.cjs#L720411-L720413) | `method` | yes | `_ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720411-720413](../../../../../../reference/runtime/host-main.cjs#L720411-L720413) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:720411

Calls written directly in this body: `this.pool.setBlob`.

SHA-256 of the source span: `312a496cb7b26a2388d7695f209e5f2cd820033658bb67d36dbd38dbfc80f2f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
