# `createServerTranscriptIndexer/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714335-714348](../../../../../../../reference/runtime/host-main.cjs#L714335-L714348) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714335-714348](../../../../../../../reference/runtime/host-main.cjs#L714335-L714348) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:714335

Calls written directly in this body: `deps.mirror.subscribeInvalidated`, `new AbortController`, `new Map`, `request5`.

Assignment or increment targets: `lifetime`.

SHA-256 of the source span: `8df488d14072a6761f8ae035a186a62d0cc0d43f921dda0498061652cd8d2c10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
