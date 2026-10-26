# `SummarizationHandler.summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621634-621717](../../../../../reference/runtime/host-main.cjs#L621634-L621717) | `method` | yes | `ctx, messages2, options2` |
| [evaluation:305988-306071](../../../../../reference/runtime/sand-eval-runner.cjs#L305988-L306071) | `method` | yes | `ctx, messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621634-621717](../../../../../reference/runtime/host-main.cjs#L621634-L621717) | 10 | 1 | 1 | 1 | 1 | 1 |
| [evaluation:305988-306071](../../../../../reference/runtime/sand-eval-runner.cjs#L305988-L306071) | 10 | 1 | 1 | 1 | 1 | 1 |

### host:621634

Calls written directly in this body: `Array.isArray`, `carrierText.safeTransform`, `createRedactedString`, `isRedactedString`, `logger38.error`, `logger38.info`, `logger38.warn`, `messages2.find`, `performance.now`, `prepareMessagesForCompaction`, `runSummarizationPipeline`, `summaryBlockingDurationMs.histogram`, `this.getMetricsModelLabel`, `this.recordMetrics`, `timeBetweenLastTwoMessagesMs.histogram`.

Assignment or increment targets: `carrierText`, `timeBetweenMessages`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `6d992bcd4bd5910cf389ddd9cbed19536021e7c8222e447883fc574f66a80a37`.

### evaluation:305988

Calls written directly in this body: `Array.isArray`, `carrierText.safeTransform`, `createRedactedString`, `isRedactedString`, `logger13.error`, `logger13.info`, `logger13.warn`, `messages.find`, `performance.now`, `prepareMessagesForCompaction`, `runSummarizationPipeline`, `summaryBlockingDurationMs.histogram`, `this.getMetricsModelLabel`, `this.recordMetrics`, `timeBetweenLastTwoMessagesMs.histogram`.

Assignment or increment targets: `carrierText`, `timeBetweenMessages`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `491bf3ac6b94aed0dac23ee6a47e35100064fef5bbb46489ff3b99c3e4416308`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
