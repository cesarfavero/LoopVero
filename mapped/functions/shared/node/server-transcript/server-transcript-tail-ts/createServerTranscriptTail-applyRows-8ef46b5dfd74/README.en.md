# `createServerTranscriptTail/applyRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713600-713643](../../../../../../../reference/runtime/host-main.cjs#L713600-L713643) | `ArrowFunctionExpression` | yes | `frame, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713600-713643](../../../../../../../reference/runtime/host-main.cjs#L713600-L713643) | 8 | 2 | 3 | 3 | 0 | 0 |

### host:713600

Calls written directly in this body: `.filter`, `acceptsAgent`, `adoptGeneration`, `agents.get`, `applyDelete`, `applyEntry`, `bodies.get`, `cancelBodyRetry`, `mergeFrameRows`, `new Map`, `readGenerationFor`, `rehydrate`, `replayBySeq.get`, `reportDroppedRows`, `resolveBodies`, `retried.map`, `rows.flatMap`, `state.pendingBodies.values`, `stateFor`, `tailStateKey`.

Assignment or increment targets: `highWater`, `state.streamAckUpdatedSeq`.

SHA-256 of the source span: `8bead052a8d902469aa3ccdf5d40bcf1b0e2a680eafd584d22655e1e5f3ec2f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
