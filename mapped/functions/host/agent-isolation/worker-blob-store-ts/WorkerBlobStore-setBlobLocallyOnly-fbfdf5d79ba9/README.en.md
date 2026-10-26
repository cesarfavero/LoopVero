# `WorkerBlobStore.setBlobLocallyOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720414-720416](../../../../../../reference/runtime/host-main.cjs#L720414-L720416) | `method` | yes | `ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720414-720416](../../../../../../reference/runtime/host-main.cjs#L720414-L720416) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:720414

Calls written directly in this body: `this.setBlob`.

SHA-256 of the source span: `2e023b35cb9bf0aa874bfc57455b7be569587650705ff34c97c5151358a46fdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
