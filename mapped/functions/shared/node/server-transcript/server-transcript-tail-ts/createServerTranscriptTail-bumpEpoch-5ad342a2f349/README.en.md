# `createServerTranscriptTail/bumpEpoch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713160-713169](../../../../../../../reference/runtime/host-main.cjs#L713160-L713169) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713160-713169](../../../../../../../reference/runtime/host-main.cjs#L713160-L713169) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:713160

Calls written directly in this body: `BigInt`, `cancelBodyRetry`, `state.pendingBodies.clear`, `state.rows.clear`.

Assignment or increment targets: `state.counter`, `state.epochBump`, `state.maxLiveSeq`, `state.streamAckUpdatedSeq`, `state.windowFloorSeq`.

SHA-256 of the source span: `9ec3872f94063a9377702d803c44094712b774bb1aeed67c85780fb9e23a0fe7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
