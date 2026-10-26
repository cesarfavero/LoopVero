# `LazyReference.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/reference.js` · [Module README](../../../../modules/agent-kv/reference-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616651-616697](../../../../../reference/runtime/host-main.cjs#L616651-L616697) | `method` | yes | `ctx` |
| [evaluation:285191-285237](../../../../../reference/runtime/sand-eval-runner.cjs#L285191-L285237) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616651-616697](../../../../../reference/runtime/host-main.cjs#L616651-L616697) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285191-285237](../../../../../reference/runtime/sand-eval-runner.cjs#L285191-L285237) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616651

Calls written directly in this body: `.then`, `getBlobTypeLabel`, `this.blobStore.getBlob`, `valuePromise.then`, `withDefaultBlobReadKind`.

Assignment or increment targets: `this.valuePromise`.

SHA-256 of the source span: `ab6897fb0bc0dc22de1599736611fb058bed4d1c255251b519e80c74f03a936e`.

### evaluation:285191

Calls written directly in this body: `.then`, `getBlobTypeLabel`, `this.blobStore.getBlob`, `valuePromise.then`, `withDefaultBlobReadKind`.

Assignment or increment targets: `this.valuePromise`.

SHA-256 of the source span: `c29de18458a50b7bdcd16937f4e5a7bc6c9b888727255eaee7ca9604e42dea73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
