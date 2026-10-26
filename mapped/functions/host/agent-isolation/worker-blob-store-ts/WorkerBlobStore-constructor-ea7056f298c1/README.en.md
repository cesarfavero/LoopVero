# `WorkerBlobStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720398-720403](../../../../../../reference/runtime/host-main.cjs#L720398-L720403) | `method` | no | `pool, agentId, blobDbPath, legacyBlobDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720398-720403](../../../../../../reference/runtime/host-main.cjs#L720398-L720403) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720398

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.agentId`, `this.blobDbPath`, `this.legacyBlobDbPath`, `this.pool`.

SHA-256 of the source span: `d8c7a7b0e7b1b08a8f6afc33ab407a1405c0b489fdb5d12165dadeaa1a5019e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
