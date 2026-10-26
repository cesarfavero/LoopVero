# `createServerTranscriptTail/readNewestPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713497-713584](../../../../../../../reference/runtime/host-main.cjs#L713497-L713584) | `ArrowFunctionExpression` | yes | `state, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713497-713584](../../../../../../../reference/runtime/host-main.cjs#L713497-L713584) | 19 | 1 | 2 | 1 | 1 | 0 |

### host:713497

Calls written directly in this body: `.filter`, `BigInt`, `Math.floor`, `Math.max`, `Math.min`, `acceptsAgent`, `adoptGeneration`, `agents.get`, `alignedServerPage`, `bodies.get`, `bumpEpoch`, `currentStamp`, `decodeBody`, `deferBody`, `deps.client.list`, `emit`, `entries.push`, `idsBySeq.set`, `isUnreadBoundary`, `kept.every`, `listed.slice`, `listed.toReversed`, `new Map`, `new ServerTranscriptTailReadSupersededError`, `nextStamp`, `readGenerationFor`, `recordListedRows`, `reportDroppedRows`, `resolveBodies`, `resolved.push`, `scheduleBodyRetry`, `sessionRequestFieldOmittingDefault`, `splitListedPage`, `state.rows.get`, `tailStateKey`, `unreadAnchorOfListResponse`.

Assignment or increment targets: `oldestListedSeq`, `state.counter`, `state.needsRehydrate`.

Explicit throw targets: `ServerTranscriptTailReadSupersededError`.

SHA-256 of the source span: `90e06cbb7798c8919b006ac6d9e4960f6ef8c015b23f621aca94c17dd0ead18a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
