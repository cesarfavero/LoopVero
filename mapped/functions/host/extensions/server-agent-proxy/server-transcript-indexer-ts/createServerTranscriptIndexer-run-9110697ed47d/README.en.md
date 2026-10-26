# `createServerTranscriptIndexer/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714228-714252](../../../../../../../reference/runtime/host-main.cjs#L714228-L714252) | `ArrowFunctionExpression` | yes | `current2, agentId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714228-714252](../../../../../../../reference/runtime/host-main.cjs#L714228-L714252) | 2 | 0 | 1 | 0 | 0 | 1 |

### host:714228

Calls written directly in this body: `backoff2.schedule`, `deps.log`, `errorLogTag`, `pump`, `request5`, `retryAfter`, `sync`.

Assignment or increment targets: `current2.running`, `state.dirty`, `state.failures`, `state.retry`, `state.running`.

SHA-256 of the source span: `003428b7dc3c5dfdd05e68e59f899c26db5231a30abd56a5fb30ef2c56375ae5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
