# `SummarizationHandler.buildDeterministicFallbackText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621551-621593](../../../../../reference/runtime/host-main.cjs#L621551-L621593) | `method` | no | `ctx, partitioned, options2, errorKind` |
| [evaluation:305905-305947](../../../../../reference/runtime/sand-eval-runner.cjs#L305905-L305947) | `method` | no | `ctx, partitioned, options2, errorKind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621551-621593](../../../../../reference/runtime/host-main.cjs#L621551-L621593) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305905-305947](../../../../../reference/runtime/sand-eval-runner.cjs#L305905-L305947) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621551

Calls written directly in this body: `buildDeterministicSummaryText`, `computeDeterministicFallbackMaxChars`, `logger38.info`, `logger38.warn`, `summarizationDeterministicFallbackUsed.increment`, `this.getMetricsLabels`.

SHA-256 of the source span: `0959da3ecd4100358f3f5a2a20ba4dba1b07e932ad541e821cc8335e1793c0a7`.

### evaluation:305905

Calls written directly in this body: `buildDeterministicSummaryText`, `computeDeterministicFallbackMaxChars`, `logger13.info`, `logger13.warn`, `summarizationDeterministicFallbackUsed.increment`, `this.getMetricsLabels`.

SHA-256 of the source span: `5d0732b2e59f8d0e9af8385113687a56ca3d5705492a8c21f70821b3cd5d8253`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
