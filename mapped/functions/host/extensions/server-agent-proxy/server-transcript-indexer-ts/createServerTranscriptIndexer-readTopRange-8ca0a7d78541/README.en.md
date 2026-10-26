# `createServerTranscriptIndexer/readTopRange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714271-714309](../../../../../../../reference/runtime/host-main.cjs#L714271-L714309) | `ArrowFunctionExpression` | yes | `agentId, indexed, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714271-714309](../../../../../../../reference/runtime/host-main.cjs#L714271-L714309) | 2 | 1 | 2 | 2 | 0 | 0 |

### host:714271

Calls written directly in this body: `pages.flatMap`, `pages.push`, `readServerRange`, `signal.throwIfAborted`.

Assignment or increment targets: `oldest`.

SHA-256 of the source span: `7ad7d86d2a0bfae9b2265e1d4ae77daa152c9704a17391b1e70df4039c391ab1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
