# `SummarizationOrchestrator.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649612-649618](../../../../../reference/runtime/host-main.cjs#L649612-L649618) | `method` | no | `externalSummarizer, selfSummarizerFactory, backgroundSummarizationProps, canUseSelfSummaryNow` |
| [evaluation:441265-441271](../../../../../reference/runtime/sand-eval-runner.cjs#L441265-L441271) | `method` | no | `externalSummarizer, selfSummarizerFactory, backgroundSummarizationProps, canUseSelfSummaryNow` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649612-649618](../../../../../reference/runtime/host-main.cjs#L649612-L649618) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:441265-441271](../../../../../reference/runtime/sand-eval-runner.cjs#L441265-L441271) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:649612

Calls written directly in this body: `Promise.resolve`.

Assignment or increment targets: `this.backgroundSummarizationProps`, `this.canUseSelfSummaryNow`, `this.compactionSegmentWrites`, `this.externalSummarizer`, `this.selfSummarizerFactory`.

SHA-256 of the source span: `0f664abc043ed9668b3c3cba8b10718a20776842e3b9246b6b0f9c780cc572f7`.

### evaluation:441265

Calls written directly in this body: `Promise.resolve`.

Assignment or increment targets: `this.backgroundSummarizationProps`, `this.canUseSelfSummaryNow`, `this.compactionSegmentWrites`, `this.externalSummarizer`, `this.selfSummarizerFactory`.

SHA-256 of the source span: `0f664abc043ed9668b3c3cba8b10718a20776842e3b9246b6b0f9c780cc572f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
