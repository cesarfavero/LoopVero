# `LazyReference.writeToBlobStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/reference.js` · [Module README](../../../../modules/agent-kv/reference-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616701-616727](../../../../../reference/runtime/host-main.cjs#L616701-L616727) | `method` | yes | `ctx` |
| [evaluation:285241-285267](../../../../../reference/runtime/sand-eval-runner.cjs#L285241-L285267) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616701-616727](../../../../../reference/runtime/host-main.cjs#L616701-L616727) | 6 | 0 | 5 | 4 | 0 | 0 |
| [evaluation:285241-285267](../../../../../reference/runtime/sand-eval-runner.cjs#L285241-L285267) | 6 | 0 | 5 | 4 | 0 | 0 |

### host:616701

Calls written directly in this body: `getBlobId`, `getBlobMetadataCallback`, `isBlobDurable`, `onBlobMetadata`, `this.blobStore.setBlob`, `this.get`, `this.serde.getBlobType`, `this.serde.serialize`, `this.serde.serializeAsync`, `value.writeToBlobStore`.

Assignment or increment targets: `this.blobId`, `this.lastWrittenBlobData`, `this.lastWrittenValue`.

SHA-256 of the source span: `0cc7d13a5647a24e67f2c86cdf3b2f91eaf13ffd99d484196b7a9f4744b9e5eb`.

### evaluation:285241

Calls written directly in this body: `getBlobId`, `getBlobMetadataCallback`, `isBlobDurable`, `onBlobMetadata`, `this.blobStore.setBlob`, `this.get`, `this.serde.getBlobType`, `this.serde.serialize`, `this.serde.serializeAsync`, `value.writeToBlobStore`.

Assignment or increment targets: `this.blobId`, `this.lastWrittenBlobData`, `this.lastWrittenValue`.

SHA-256 of the source span: `0cc7d13a5647a24e67f2c86cdf3b2f91eaf13ffd99d484196b7a9f4744b9e5eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
