# `createServerTranscriptIndexer/pump`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714217-714227](../../../../../../../reference/runtime/host-main.cjs#L714217-L714227) | `ArrowFunctionExpression` | no | `current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714217-714227](../../../../../../../reference/runtime/host-main.cjs#L714217-L714227) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:714217

Calls written directly in this body: `agentSync`, `current2.ready.shift`, `run`.

Assignment or increment targets: `current2.running`, `state.queued`, `state.running`.

SHA-256 of the source span: `7672b7175fa9a53c10fc4aaa3c889cb9d05b861c671774217d8378e26915bb6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
