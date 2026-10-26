# `hydrateBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509764-509786](../../../../../reference/runtime/host-main.cjs#L509764-L509786) | `FunctionDeclaration` | yes | `ctx, blobStore, blobId, stats` |
| [evaluation:304139-304161](../../../../../reference/runtime/sand-eval-runner.cjs#L304139-L304161) | `FunctionDeclaration` | yes | `ctx, blobStore, blobId, stats` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509764-509786](../../../../../reference/runtime/host-main.cjs#L509764-L509786) | 2 | 0 | 1 | 4 | 0 | 1 |
| [evaluation:304139-304161](../../../../../reference/runtime/sand-eval-runner.cjs#L304139-L304161) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:509764

Calls written directly in this body: `Math.max`, `blobStore.getBlob`, `coreMessageSerde.deserialize`, `createOversizeBlobOmittedMessage`, `performance.now`.

Assignment or increment targets: `stats.hydratedBlobBytes`, `stats.hydratedBlobCount`, `stats.largestHydratedBlobBytes`, `stats.largestOmittedOversizeBlobBytes`, `stats.omittedOversizeBlobBytes`, `stats.omittedOversizeBlobCount`, `stats.totalDeserializeDurationMs`.

SHA-256 of the source span: `d90674fec635a1ad85d07c6a1cc663462dd980190c51409087d5311543e5a5a5`.

### evaluation:304139

Calls written directly in this body: `Math.max`, `blobStore.getBlob`, `coreMessageSerde.deserialize`, `createOversizeBlobOmittedMessage`, `performance.now`.

Assignment or increment targets: `stats.hydratedBlobBytes`, `stats.hydratedBlobCount`, `stats.largestHydratedBlobBytes`, `stats.largestOmittedOversizeBlobBytes`, `stats.omittedOversizeBlobBytes`, `stats.omittedOversizeBlobCount`, `stats.totalDeserializeDurationMs`.

SHA-256 of the source span: `d90674fec635a1ad85d07c6a1cc663462dd980190c51409087d5311543e5a5a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
