# `createServerTranscriptClient/readBlobs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712468-712496](../../../../../../../reference/runtime/host-main.cjs#L712468-L712496) | `FunctionExpression` | yes | `hashes, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712468-712496](../../../../../../../reference/runtime/host-main.cjs#L712468-L712496) | 3 | 2 | 3 | 2 | 0 | 0 |

### host:712468

Calls written directly in this body: `Promise.allSettled`, `batch.map`, `bodies.set`, `client.presignSandBoxStoreReads`, `clientFor`, `hashes.map`, `instructions.slice`, `new Map`, `presigned.instructions.filter`, `requireRouteAccess`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `e0843468f028d2133f56e223b481c205fda1b116c39169e22eb737d9f15fa3f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
