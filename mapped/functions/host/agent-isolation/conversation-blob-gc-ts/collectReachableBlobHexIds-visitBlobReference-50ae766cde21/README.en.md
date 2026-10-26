# `collectReachableBlobHexIds/visitBlobReference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-gc.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22226-22246](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22226-L22246) | `FunctionDeclaration` | no | `blobId, blobReferenceType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22226-22246](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22226-L22246) | 4 | 0 | 0 | 5 | 0 | 1 |

### state-worker:22226

Calls written directly in this body: `BLOB_REFERENCE_MESSAGE_TYPE_BY_NAME[computed].fromBinary`, `blobTypeByHexId.has`, `blobTypeByHexId.set`, `getBlobByHexId`, `isProtoBlobReferenceTypeName`, `onBlobReference`, `toHexId`, `visitMessage`.

Assignment or increment targets: `child`, `unresolvedProtoRefs`.

SHA-256 of the source span: `21e635f9c2628b3916941cb769cc3ec67e5c58a71ca84d3c4773c0e76b24167c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
