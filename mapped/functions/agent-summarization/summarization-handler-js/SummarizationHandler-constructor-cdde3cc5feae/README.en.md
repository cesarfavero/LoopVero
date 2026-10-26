# `SummarizationHandler.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621452-621468](../../../../../reference/runtime/host-main.cjs#L621452-L621468) | `method` | no | `promptSession, isFallbackToMainModel = false, options2` |
| [evaluation:305806-305822](../../../../../reference/runtime/sand-eval-runner.cjs#L305806-L305822) | `method` | no | `promptSession, isFallbackToMainModel = false, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621452-621468](../../../../../reference/runtime/host-main.cjs#L621452-L621468) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:305806-305822](../../../../../reference/runtime/sand-eval-runner.cjs#L305806-L305822) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:621452

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.alwaysRetryOutputTokenLimit`, `this.deterministicFallbackWindowRatio`, `this.enableDeterministicFallback`, `this.enableReduceInputsRetry`, `this.enableRetryRateLimited`, `this.enableRetryUncategorizedErrors`, `this.isFallbackToMainModel`, `this.maxOutputTokens`, `this.maxPromptChars`, `this.preserveLastUserMessage`, `this.preserveLatestImage`, `this.promptSession`, `this.summaryAfterUnfinishedRequest`, `this.throwOnRetryExhaustion`, `this.useRelaxedSplitIndexGuard`.

SHA-256 of the source span: `96ffd4edbf0f57c7310231f35e8a157475d5bd6b143bde50ada4c51b8a08a072`.

### evaluation:305806

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.alwaysRetryOutputTokenLimit`, `this.deterministicFallbackWindowRatio`, `this.enableDeterministicFallback`, `this.enableReduceInputsRetry`, `this.enableRetryRateLimited`, `this.enableRetryUncategorizedErrors`, `this.isFallbackToMainModel`, `this.maxOutputTokens`, `this.maxPromptChars`, `this.preserveLastUserMessage`, `this.preserveLatestImage`, `this.promptSession`, `this.summaryAfterUnfinishedRequest`, `this.throwOnRetryExhaustion`, `this.useRelaxedSplitIndexGuard`.

SHA-256 of the source span: `96ffd4edbf0f57c7310231f35e8a157475d5bd6b143bde50ada4c51b8a08a072`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
