# `createServerTranscriptIndexer/sync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714310-714333](../../../../../../../reference/runtime/host-main.cjs#L714310-L714333) | `ArrowFunctionExpression` | yes | `agentId, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714310-714333](../../../../../../../reference/runtime/host-main.cjs#L714310-L714333) | 5 | 1 | 5 | 3 | 1 | 0 |

### host:714310

Calls written directly in this body: `deps.mirror.applyRange`, `deps.requiredAgents.has`, `new ServerTranscriptIndexUnavailableError`, `readCursor`, `readServerRange`, `readTopRange`, `signal.throwIfAborted`.

Assignment or increment targets: `page`.

Explicit throw targets: `ServerTranscriptIndexUnavailableError`.

SHA-256 of the source span: `6592084b10d5d6fc2135696a070b9a0a7422d4822663f42b0ee54a86cc2947f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
