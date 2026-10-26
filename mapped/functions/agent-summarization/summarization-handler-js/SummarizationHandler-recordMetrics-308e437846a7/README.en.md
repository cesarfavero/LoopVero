# `SummarizationHandler.recordMetrics`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621721-621785](../../../../../reference/runtime/host-main.cjs#L621721-L621785) | `method` | no | `ctx, params` |
| [evaluation:306075-306139](../../../../../reference/runtime/sand-eval-runner.cjs#L306075-L306139) | `method` | no | `ctx, params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621721-621785](../../../../../reference/runtime/host-main.cjs#L621721-L621785) | 7 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:306075-306139](../../../../../reference/runtime/sand-eval-runner.cjs#L306075-L306139) | 7 | 0 | 0 | 0 | 0 | 0 |

### host:621721

Calls written directly in this body: `logger38.warn`, `summarizationCompressionPercent.histogram`, `summarizationInputTokens.histogram`, `summarizationOriginalLengthChars.histogram`, `summarizationOutputTokens.histogram`, `summarizationPersistedLengthChars.histogram`, `summarizationTotalCompressionPercent.histogram`, `summaryBlockingDurationMs.histogram`, `summaryLengthChars.histogram`, `this.getMetricsLabels`, `this.totalRawSerializedCharLength`, `timeBetweenLastTwoMessagesMs.histogram`.

SHA-256 of the source span: `0bbe5a4b5a66180dcbbd4011688b110758ae5b85def61124c6aca21711548ee9`.

### evaluation:306075

Calls written directly in this body: `logger13.warn`, `summarizationCompressionPercent.histogram`, `summarizationInputTokens.histogram`, `summarizationOriginalLengthChars.histogram`, `summarizationOutputTokens.histogram`, `summarizationPersistedLengthChars.histogram`, `summarizationTotalCompressionPercent.histogram`, `summaryBlockingDurationMs.histogram`, `summaryLengthChars.histogram`, `this.getMetricsLabels`, `this.totalRawSerializedCharLength`, `timeBetweenLastTwoMessagesMs.histogram`.

SHA-256 of the source span: `8e0a299e75305fd4a9be89f41cd4d6933111351cfde2d8a446af58713b586f87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
