# `agent-summarization/summarization-handler.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/components/context-compaction/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:617336-617340](../../../../reference/runtime/host-main.cjs#L617336-L617340) |
| host | [host:619814-619817](../../../../reference/runtime/host-main.cjs#L619814-L619817) |
| host | [host:620695-621825](../../../../reference/runtime/host-main.cjs#L620695-L621825) |
| evaluation | [evaluation:285876-285880](../../../../reference/runtime/sand-eval-runner.cjs#L285876-L285880) |
| evaluation | [evaluation:294626-294628](../../../../reference/runtime/sand-eval-runner.cjs#L294626-L294628) |
| evaluation | [evaluation:305049-306179](../../../../reference/runtime/sand-eval-runner.cjs#L305049-L306179) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `SummarizationHandler.assembleFinalMessages` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-assembleFinalMessages-1bc1f7a61185/README.md) |
| `SummarizationHandler.buildDeterministicFallbackText` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-buildDeterministicFallbackText-1e34a7c7e5c0/README.md) |
| `SummarizationHandler.buildSummaryMessage` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-buildSummaryMessage-7550d95bcb52/README.md) |
| `SummarizationHandler.constructor` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-constructor-cdde3cc5feae/README.md) |
| `SummarizationHandler.generateSummary` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-generateSummary-01d3a9f4e8ae/README.md) |
| `SummarizationHandler.getMetricsLabels` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getMetricsLabels-f465ac6af367/README.md) |
| `SummarizationHandler.getMetricsModelLabel` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getMetricsModelLabel-9096c67779da/README.md) |
| `SummarizationHandler.getModelId` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-getModelId-797e735db8f8/README.md) |
| `SummarizationHandler.isInputOrOutputTokenLimitError` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-isInputOrOutputTokenLimitError-e96f35cddea9/README.md) |
| `SummarizationHandler.isTokenLimitError` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-isTokenLimitError-b18eacef1754/README.md) |
| `SummarizationHandler.partitionMessages` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-partitionMessages-6537b74be614/README.md) |
| `SummarizationHandler.recordMetrics` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-recordMetrics-308e437846a7/README.md) |
| `SummarizationHandler.shouldUseDeterministicFallback` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-shouldUseDeterministicFallback-51650cef98e7/README.md) |
| `SummarizationHandler.summarize` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-summarize-130762c66499/README.md) |
| `SummarizationHandler.totalRawSerializedCharLength` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/SummarizationHandler-totalRawSerializedCharLength-761e69ae2721/README.md) |
| `buildSummarizationPrompt` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/buildSummarizationPrompt-a0427cfb21ca/README.md) |
| `executeSummarizationStream` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/executeSummarizationStream-1a2c689e3f4a/README.md) |
| `executeSummarizationWithRetry` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/executeSummarizationWithRetry-2974a4b50418/README.md) |
| `formatGuardedToolPart` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/formatGuardedToolPart-e0dadd132a4b/README.md) |
| `hasToolInvocation` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/hasToolInvocation-e176784fee1e/README.md) |
| `isRequestMessage` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/isRequestMessage-038a5e5f1eb5/README.md) |
| `isSummaryCarrier` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/isSummaryCarrier-fb9862a0b469/README.md) |
| `isToolResult` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/isToolResult-01cc9d98661f/README.md) |
| `isTurnUnfinished` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/isTurnUnfinished-676cc8308d63/README.md) |
| `parseSummarizerModelLabel` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/parseSummarizerModelLabel-c5285216fb3b/README.md) |
| `reducePromptBudget` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/reducePromptBudget-e8e144ded0dc/README.md) |
| `shouldForceSummarizationForTesting` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/shouldForceSummarizationForTesting-994c22985b8a/README.md) |
| `stripNonPrintableCharacters` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/stripNonPrintableCharacters-f39851269af7/README.md) |
| `tailOverflowsContextWindow` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/tailOverflowsContextWindow-6b0ee0e29d42/README.md) |
| `turnMessageToString` | 2 | [Funcionamento estático](../../../functions/agent-summarization/summarization-handler-js/turnMessageToString-77ce76d766fa/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
