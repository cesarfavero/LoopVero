# `EagerReference.writeToBlobStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/reference.js` · [Module README](../../../../modules/agent-kv/reference-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616615-616640](../../../../../reference/runtime/host-main.cjs#L616615-L616640) | `method` | yes | `ctx` |
| [evaluation:285155-285180](../../../../../reference/runtime/sand-eval-runner.cjs#L285155-L285180) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616615-616640](../../../../../reference/runtime/host-main.cjs#L616615-L616640) | 5 | 0 | 4 | 3 | 0 | 0 |
| [evaluation:285155-285180](../../../../../reference/runtime/sand-eval-runner.cjs#L285155-L285180) | 5 | 0 | 4 | 3 | 0 | 0 |

### host:616615

Calls written directly in this body: `getBlobId`, `getBlobMetadataCallback`, `isBlobDurable`, `onBlobMetadata`, `this.blobStore.setBlob`, `this.serde.getBlobType`, `this.serde.serialize`, `this.serde.serializeAsync`, `value.writeToBlobStore`.

Assignment or increment targets: `this.lastWrittenValue`.

SHA-256 of the source span: `20837b297fb86b674c4fe26a106e7cc7473bdc521bec2e34f050ff2d407cb60c`.

### evaluation:285155

Calls written directly in this body: `getBlobId`, `getBlobMetadataCallback`, `isBlobDurable`, `onBlobMetadata`, `this.blobStore.setBlob`, `this.serde.getBlobType`, `this.serde.serialize`, `this.serde.serializeAsync`, `value.writeToBlobStore`.

Assignment or increment targets: `this.lastWrittenValue`.

SHA-256 of the source span: `20837b297fb86b674c4fe26a106e7cc7473bdc521bec2e34f050ff2d407cb60c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
