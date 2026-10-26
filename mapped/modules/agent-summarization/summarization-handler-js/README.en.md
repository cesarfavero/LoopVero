# `agent-summarization/summarization-handler.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../guide/components/context-compaction/README.en.md) · [General index](../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:617336-617340](../../../../reference/runtime/host-main.cjs#L617336-L617340) |
| host | [host:619814-619817](../../../../reference/runtime/host-main.cjs#L619814-L619817) |
| host | [host:620695-621825](../../../../reference/runtime/host-main.cjs#L620695-L621825) |
| evaluation | [evaluation:285876-285880](../../../../reference/runtime/sand-eval-runner.cjs#L285876-L285880) |
| evaluation | [evaluation:294626-294628](../../../../reference/runtime/sand-eval-runner.cjs#L294626-L294628) |
| evaluation | [evaluation:305049-306179](../../../../reference/runtime/sand-eval-runner.cjs#L305049-L306179) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `SummarizationHandler.assembleFinalMessages` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-assembleFinalMessages-1bc1f7a61185/README.en.md) |
| `SummarizationHandler.buildDeterministicFallbackText` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-buildDeterministicFallbackText-1e34a7c7e5c0/README.en.md) |
| `SummarizationHandler.buildSummaryMessage` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-buildSummaryMessage-7550d95bcb52/README.en.md) |
| `SummarizationHandler.constructor` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-constructor-cdde3cc5feae/README.en.md) |
| `SummarizationHandler.generateSummary` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-generateSummary-01d3a9f4e8ae/README.en.md) |
| `SummarizationHandler.getMetricsLabels` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getMetricsLabels-f465ac6af367/README.en.md) |
| `SummarizationHandler.getMetricsModelLabel` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getMetricsModelLabel-9096c67779da/README.en.md) |
| `SummarizationHandler.getModelId` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getModelId-797e735db8f8/README.en.md) |
| `SummarizationHandler.isInputOrOutputTokenLimitError` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-isInputOrOutputTokenLimitError-e96f35cddea9/README.en.md) |
| `SummarizationHandler.isTokenLimitError` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-isTokenLimitError-b18eacef1754/README.en.md) |
| `SummarizationHandler.partitionMessages` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-partitionMessages-6537b74be614/README.en.md) |
| `SummarizationHandler.recordMetrics` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-recordMetrics-308e437846a7/README.en.md) |
| `SummarizationHandler.shouldUseDeterministicFallback` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-shouldUseDeterministicFallback-51650cef98e7/README.en.md) |
| `SummarizationHandler.summarize` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-summarize-130762c66499/README.en.md) |
| `SummarizationHandler.totalRawSerializedCharLength` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-totalRawSerializedCharLength-761e69ae2721/README.en.md) |
| `buildSummarizationPrompt` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/buildSummarizationPrompt-a0427cfb21ca/README.en.md) |
| `executeSummarizationStream` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/executeSummarizationStream-1a2c689e3f4a/README.en.md) |
| `executeSummarizationWithRetry` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/executeSummarizationWithRetry-2974a4b50418/README.en.md) |
| `formatGuardedToolPart` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/formatGuardedToolPart-e0dadd132a4b/README.en.md) |
| `hasToolInvocation` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/hasToolInvocation-e176784fee1e/README.en.md) |
| `isRequestMessage` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/isRequestMessage-038a5e5f1eb5/README.en.md) |
| `isSummaryCarrier` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/isSummaryCarrier-fb9862a0b469/README.en.md) |
| `isToolResult` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/isToolResult-01cc9d98661f/README.en.md) |
| `isTurnUnfinished` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/isTurnUnfinished-676cc8308d63/README.en.md) |
| `parseSummarizerModelLabel` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/parseSummarizerModelLabel-c5285216fb3b/README.en.md) |
| `reducePromptBudget` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/reducePromptBudget-e8e144ded0dc/README.en.md) |
| `shouldForceSummarizationForTesting` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/shouldForceSummarizationForTesting-994c22985b8a/README.en.md) |
| `stripNonPrintableCharacters` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/stripNonPrintableCharacters-f39851269af7/README.en.md) |
| `tailOverflowsContextWindow` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/tailOverflowsContextWindow-6b0ee0e29d42/README.en.md) |
| `turnMessageToString` | 2 | [Static behavior](../../../functions/agent-summarization/summarization-handler-js/turnMessageToString-77ce76d766fa/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
