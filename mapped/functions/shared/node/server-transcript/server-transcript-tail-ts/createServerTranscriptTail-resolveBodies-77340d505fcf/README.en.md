# `createServerTranscriptTail/resolveBodies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713226-713270](../../../../../../../reference/runtime/host-main.cjs#L713226-L713270) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713226-713270](../../../../../../../reference/runtime/host-main.cjs#L713226-L713270) | 12 | 3 | 2 | 1 | 2 | 0 |

### host:713226

Calls written directly in this body: `.flatMap`, `blobHashBySeq.set`, `blobHashBySeq.values`, `blobs.get`, `bodies.set`, `deps.client.readBlobs`, `deps.log`, `errorLogTag`, `failures2.find`, `fetchOmittedRows`, `fetched.get`, `fetched.values`, `new Map`, `new Set`, `omitted.push`.

Explicit throw targets: `failures2[computed]`, `gateOff`.

SHA-256 of the source span: `2e12dc5c1e3af87d1778437e13e65276b6b207ca19cf5c7c656ee07374324b7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
