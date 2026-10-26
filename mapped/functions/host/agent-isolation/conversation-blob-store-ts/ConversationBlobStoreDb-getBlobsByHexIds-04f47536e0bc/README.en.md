# `ConversationBlobStoreDb.getBlobsByHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22486-22492](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22486-L22492) | `method` | no | `hexIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22486-22492](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22486-L22492) | 1 | 0 | 0 | 2 | 0 | 0 |

### state-worker:22486

Calls written directly in this body: `hexIds.map`.

SHA-256 of the source span: `fecaa4152982e58f49b21305349442584d170dce0d256e401847ae496fc42dd4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
