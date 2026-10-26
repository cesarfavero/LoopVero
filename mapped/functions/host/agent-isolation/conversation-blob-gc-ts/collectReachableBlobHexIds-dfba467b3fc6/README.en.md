# `collectReachableBlobHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-gc.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22219-22291](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22219-L22291) | `FunctionDeclaration` | no | `{   rootBytes,   getBlobByHexId,   onBlobReference }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22219-22291](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22219-L22291) | 0 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22219

Calls written directly in this body: `ConversationStateStructure.fromBinary`, `new Map`, `visitMessage`.

SHA-256 of the source span: `85e439d82bf90c2180a5173d0da0d2475b66ea1a481e30de4493b1b35f9430f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
