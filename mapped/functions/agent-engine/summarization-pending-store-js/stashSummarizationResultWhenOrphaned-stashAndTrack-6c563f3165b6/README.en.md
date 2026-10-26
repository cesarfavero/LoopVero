# `stashSummarizationResultWhenOrphaned/stashAndTrack`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647968-647975](../../../../../reference/runtime/host-main.cjs#L647968-L647975) | `ArrowFunctionExpression` | no | `result` |
| [evaluation:439625-439632](../../../../../reference/runtime/sand-eval-runner.cjs#L439625-L439632) | `ArrowFunctionExpression` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647968-647975](../../../../../reference/runtime/host-main.cjs#L647968-L647975) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:439625-439632](../../../../../reference/runtime/sand-eval-runner.cjs#L439625-L439632) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:647968

Calls written directly in this body: `args.store.trackPendingWrite`, `stashResult`.

SHA-256 of the source span: `52872f23e04b06f683081db53103933338efcda08d4717a4172575ee125b5300`.

### evaluation:439625

Calls written directly in this body: `args.store.trackPendingWrite`, `stashResult`.

SHA-256 of the source span: `e742a28b6f9d691e00d5b351085db9cb102cf6e5c842fc2523f8f787f7909b94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
