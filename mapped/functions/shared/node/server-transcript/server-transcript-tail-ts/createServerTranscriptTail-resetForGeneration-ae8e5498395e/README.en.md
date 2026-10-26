# `createServerTranscriptTail/resetForGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713128-713140](../../../../../../../reference/runtime/host-main.cjs#L713128-L713140) | `ArrowFunctionExpression` | no | `state, generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713128-713140](../../../../../../../reference/runtime/host-main.cjs#L713128-L713140) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:713128

Calls written directly in this body: `BigInt`, `cancelBodyRetry`, `state.lostBodies.clear`, `state.pendingBodies.clear`, `state.rows.clear`.

Assignment or increment targets: `state.counter`, `state.epochBump`, `state.generation`, `state.maxLiveSeq`, `state.needsRehydrate`, `state.streamAckUpdatedSeq`, `state.windowFloorSeq`.

SHA-256 of the source span: `46768bcbcdb6415398e5f450e4a2a58a5e0a0ce27dc9f0c064e8f0749e69ef7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
