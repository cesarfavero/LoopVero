# `createServerTranscriptIndexer/retryAfter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714253-714263](../../../../../../../reference/runtime/host-main.cjs#L714253-L714263) | `ArrowFunctionExpression` | yes | `current2, agentId, state, delay5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714253-714263](../../../../../../../reference/runtime/host-main.cjs#L714253-L714263) | 2 | 0 | 1 | 2 | 1 | 1 |

### host:714253

Calls written directly in this body: `request5`.

Assignment or increment targets: `state.retry`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `e23492ce6a6d54b2665d3a028a02456e6f95e786e64813f1704aba23a9b81e91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
