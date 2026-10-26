# `createServerTranscriptIndexer/readCursor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714264-714270](../../../../../../../reference/runtime/host-main.cjs#L714264-L714270) | `ArrowFunctionExpression` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714264-714270](../../../../../../../reference/runtime/host-main.cjs#L714264-L714270) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:714264

Calls written directly in this body: `deps.mirror.cursor`, `new ServerTranscriptIndexUnavailableError`.

Explicit throw targets: `ServerTranscriptIndexUnavailableError`.

SHA-256 of the source span: `9d9d93d6658f02618a2f66d3cc38034cd01c1c6ec641c1105fc5312d89d5a95a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
