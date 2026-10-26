# `createServerTranscriptIndexer/stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714349-714360](../../../../../../../reference/runtime/host-main.cjs#L714349-L714360) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714349-714360](../../../../../../../reference/runtime/host-main.cjs#L714349-L714360) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:714349

Calls written directly in this body: `current2.agents.values`, `current2.controller.abort`, `current2.unsubscribe`, `state.hint.dispose`.

Assignment or increment targets: `current2.ready.length`, `lifetime`, `state.hint`.

SHA-256 of the source span: `0c4faa8de35bd91ec4c4b25c7ca709111d019c61e3bd336fc69dfd1fdc25c861`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
