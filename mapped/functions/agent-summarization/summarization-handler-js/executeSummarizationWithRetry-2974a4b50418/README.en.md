# `executeSummarizationWithRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620963-621221](../../../../../reference/runtime/host-main.cjs#L620963-L621221) | `FunctionDeclaration` | yes | `ctx, promptSession, messages2, options2` |
| [evaluation:305317-305575](../../../../../reference/runtime/sand-eval-runner.cjs#L305317-L305575) | `FunctionDeclaration` | yes | `ctx, promptSession, messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620963-621221](../../../../../reference/runtime/host-main.cjs#L620963-L621221) | 19 | 1 | 2 | 2 | 1 | 1 |
| [evaluation:305317-305575](../../../../../reference/runtime/sand-eval-runner.cjs#L305317-L305575) | 19 | 1 | 2 | 2 | 1 | 1 |

### host:620963

Calls written directly in this body: `Math.min`, `buildSummarizationPrompt`, `errorKinds.join`, `errorKinds.push`, `executeSummarizationStream`, `getRetryDirective`, `logger38.error`, `logger38.info`, `logger38.warn`, `messages2.map`, `new Error`, `new Promise`, `parseSummarizerModelLabel`, `promptSession.getModelId`, `reducePromptBudget`, `stripNonPrintableCharacters`, `summarizationAttempts.increment`, `summarizationFailures.increment`, `summarizationFallbackAttempts.increment`, `summarizationFallbackFailures.increment`, `summarizationRetries.increment`, `summarizationSuccess.increment`, `summarizationTryAttempts.increment`, `summarizationTryFailures.increment`, `summarizationTrySuccess.increment`.

Assignment or increment targets: `attempt`, `attemptsPerformed`, `expectTruncationFromInputReduction`, `lastErrorKind`, `lastFailedPromptLength`, `promptBudget`, `rateLimitError`, `requestShorterOutput`, `summaryPrompt`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `2f4069fbd07f5fec52a4f0369cbb1f3da6d76b7e82741d9681a32ae84ab11b6a`.

### evaluation:305317

Calls written directly in this body: `Math.min`, `buildSummarizationPrompt`, `errorKinds.join`, `errorKinds.push`, `executeSummarizationStream`, `getRetryDirective`, `logger13.error`, `logger13.info`, `logger13.warn`, `messages.map`, `new Error`, `new Promise`, `parseSummarizerModelLabel`, `promptSession.getModelId`, `reducePromptBudget`, `stripNonPrintableCharacters`, `summarizationAttempts.increment`, `summarizationFailures.increment`, `summarizationFallbackAttempts.increment`, `summarizationFallbackFailures.increment`, `summarizationRetries.increment`, `summarizationSuccess.increment`, `summarizationTryAttempts.increment`, `summarizationTryFailures.increment`, `summarizationTrySuccess.increment`.

Assignment or increment targets: `attempt`, `attemptsPerformed`, `expectTruncationFromInputReduction`, `lastErrorKind`, `lastFailedPromptLength`, `promptBudget`, `rateLimitError`, `requestShorterOutput`, `summaryPrompt`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `fc525a87f49ed7293c9ec6e7e64c97e865df82df65b230124fe47909bbfd0615`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
