# `isBlobDurable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-store.js` · [Module README](../../../../modules/agent-kv/blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615935-615937](../../../../../reference/runtime/host-main.cjs#L615935-L615937) | `FunctionDeclaration` | no | `blobStore, blobId` |
| [evaluation:284720-284722](../../../../../reference/runtime/sand-eval-runner.cjs#L284720-L284722) | `FunctionDeclaration` | no | `blobStore, blobId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615935-615937](../../../../../reference/runtime/host-main.cjs#L615935-L615937) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284720-284722](../../../../../reference/runtime/sand-eval-runner.cjs#L284720-L284722) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615935

Calls written directly in this body: `blobStore.isBlobDurable`.

SHA-256 of the source span: `c47082cebf77e8ba5d9e209e04c9e443d2116243b22dd06f232e5578bb80e1f7`.

### evaluation:284720

Calls written directly in this body: `blobStore.isBlobDurable`.

SHA-256 of the source span: `c47082cebf77e8ba5d9e209e04c9e443d2116243b22dd06f232e5578bb80e1f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
