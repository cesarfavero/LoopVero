# `BlobNotFoundError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-not-found-error.js` · [Module README](../../../../modules/agent-kv/blob-not-found-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616356-616362](../../../../../reference/runtime/host-main.cjs#L616356-L616362) | `method` | no | `blobIdHexes, options2` |
| [evaluation:284896-284902](../../../../../reference/runtime/sand-eval-runner.cjs#L284896-L284902) | `method` | no | `blobIdHexes, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616356-616362](../../../../../reference/runtime/host-main.cjs#L616356-L616362) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:284896-284902](../../../../../reference/runtime/sand-eval-runner.cjs#L284896-L284902) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:616356

Calls written directly in this body: `formatMissingBlobSuffix`, `super`.

Assignment or increment targets: `this.blobIdHexes`, `this.isBlobNotFound`, `this.isUsageError`, `this.name`.

SHA-256 of the source span: `d866c56c844cc1da5ab966695b595e00b5e9c42f4cabe5ab6feb4688dc31db2f`.

### evaluation:284896

Calls written directly in this body: `formatMissingBlobSuffix`, `super`.

Assignment or increment targets: `this.blobIdHexes`, `this.isBlobNotFound`, `this.isUsageError`, `this.name`.

SHA-256 of the source span: `d866c56c844cc1da5ab966695b595e00b5e9c42f4cabe5ab6feb4688dc31db2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
