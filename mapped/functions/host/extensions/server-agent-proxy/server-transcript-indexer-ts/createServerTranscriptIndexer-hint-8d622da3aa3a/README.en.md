# `createServerTranscriptIndexer/hint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714209-714216](../../../../../../../reference/runtime/host-main.cjs#L714209-L714216) | `ArrowFunctionExpression` | no | `current2, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714209-714216](../../../../../../../reference/runtime/host-main.cjs#L714209-L714216) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714209

Calls written directly in this body: `agentSync`, `deps.clock.schedule`, `state.hint.dispose`.

Assignment or increment targets: `state.hint`.

SHA-256 of the source span: `854e85ed070ecd10abfd810c2298d70470bfc5e1d04fbf9939351ef6663835a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
