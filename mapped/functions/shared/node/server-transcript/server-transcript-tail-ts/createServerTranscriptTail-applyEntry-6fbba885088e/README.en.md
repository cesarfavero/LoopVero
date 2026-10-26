# `createServerTranscriptTail/applyEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713303-713356](../../../../../../../reference/runtime/host-main.cjs#L713303-L713356) | `ArrowFunctionExpression` | no | `state, row, body, arrival` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713303-713356](../../../../../../../reference/runtime/host-main.cjs#L713303-L713356) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:713303

Calls written directly in this body: `BigInt`, `Number`, `decodeBody`, `deferBody`, `emit`, `nextStamp`, `settlePendingBody`, `state.rows.get`, `state.rows.set`.

Assignment or increment targets: `state.maxLiveSeq`, `state.needsRehydrate`.

SHA-256 of the source span: `c48f7c845d49ab194c2cd8c698437e04a9776785e2b08a7c19db278b34a94a90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
