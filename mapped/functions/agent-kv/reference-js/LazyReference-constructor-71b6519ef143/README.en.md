# `LazyReference.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/reference.js` · [Module README](../../../../modules/agent-kv/reference-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616643-616650](../../../../../reference/runtime/host-main.cjs#L616643-L616650) | `method` | no | `serde, blobStore, blobId` |
| [evaluation:285183-285190](../../../../../reference/runtime/sand-eval-runner.cjs#L285183-L285190) | `method` | no | `serde, blobStore, blobId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616643-616650](../../../../../reference/runtime/host-main.cjs#L616643-L616650) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:285183-285190](../../../../../reference/runtime/sand-eval-runner.cjs#L285183-L285190) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616643

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobId`, `this.blobStore`, `this.lastWrittenBlobData`, `this.lastWrittenValue`, `this.serde`, `this.valuePromise`.

SHA-256 of the source span: `2b7c70d0341f3f29386b632c63ed1971a68df42ddedf429d9f38ddab883e03d3`.

### evaluation:285183

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobId`, `this.blobStore`, `this.lastWrittenBlobData`, `this.lastWrittenValue`, `this.serde`, `this.valuePromise`.

SHA-256 of the source span: `2b7c70d0341f3f29386b632c63ed1971a68df42ddedf429d9f38ddab883e03d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
