# `hydrateBlobIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/index.js` · [Module README](../../../../modules/agent-transcript/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509787-509796](../../../../../reference/runtime/host-main.cjs#L509787-L509796) | `FunctionDeclaration` | yes | `ctx, blobStore, blobIds` |
| [evaluation:304162-304171](../../../../../reference/runtime/sand-eval-runner.cjs#L304162-L304171) | `FunctionDeclaration` | yes | `ctx, blobStore, blobIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509787-509796](../../../../../reference/runtime/host-main.cjs#L509787-L509796) | 1 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:304162-304171](../../../../../reference/runtime/sand-eval-runner.cjs#L304162-L304171) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:509787

Calls written directly in this body: `createEmptyHydratedBlobIdsResult`, `hydrateBlob`, `result.messages.push`.

SHA-256 of the source span: `82b1f7b7f5c72730a3740f5c4529690cb018e95094c7ebde562c36bac8c700af`.

### evaluation:304162

Calls written directly in this body: `createEmptyHydratedBlobIdsResult`, `hydrateBlob`, `result.messages.push`.

SHA-256 of the source span: `82b1f7b7f5c72730a3740f5c4529690cb018e95094c7ebde562c36bac8c700af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
