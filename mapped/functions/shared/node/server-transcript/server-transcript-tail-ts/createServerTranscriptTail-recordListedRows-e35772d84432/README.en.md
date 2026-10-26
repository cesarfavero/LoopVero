# `createServerTranscriptTail/recordListedRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713422-713444](../../../../../../../reference/runtime/host-main.cjs#L713422-L713444) | `ArrowFunctionExpression` | no | `state, rows, bodiesById` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713422-713444](../../../../../../../reference/runtime/host-main.cjs#L713422-L713444) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:713422

Calls written directly in this body: `BigInt`, `bodiesById.get`, `state.rows.get`, `state.rows.set`.

Assignment or increment targets: `floor2`, `newest`, `recordedNewer`, `state.maxLiveSeq`, `state.streamAckUpdatedSeq`, `state.windowFloorSeq`.

SHA-256 of the source span: `fbcf12762301fad999dd1fc1a47cc59d556b0836cb4dd37c186d0452e16f0c28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
