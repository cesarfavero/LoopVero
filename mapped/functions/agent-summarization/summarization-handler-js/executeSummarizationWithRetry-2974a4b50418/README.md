# `executeSummarizationWithRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620963-621221](../../../../../reference/runtime/host-main.cjs#L620963-L621221) | `FunctionDeclaration` | sim | `ctx, promptSession, messages2, options2` |
| [evaluation:305317-305575](../../../../../reference/runtime/sand-eval-runner.cjs#L305317-L305575) | `FunctionDeclaration` | sim | `ctx, promptSession, messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620963-621221](../../../../../reference/runtime/host-main.cjs#L620963-L621221) | 19 | 1 | 2 | 2 | 1 | 1 |
| [evaluation:305317-305575](../../../../../reference/runtime/sand-eval-runner.cjs#L305317-L305575) | 19 | 1 | 2 | 2 | 1 | 1 |

### host:620963

Chamadas escritas diretamente neste corpo: `Math.min`, `buildSummarizationPrompt`, `errorKinds.join`, `errorKinds.push`, `executeSummarizationStream`, `getRetryDirective`, `logger38.error`, `logger38.info`, `logger38.warn`, `messages2.map`, `new Error`, `new Promise`, `parseSummarizerModelLabel`, `promptSession.getModelId`, `reducePromptBudget`, `stripNonPrintableCharacters`, `summarizationAttempts.increment`, `summarizationFailures.increment`, `summarizationFallbackAttempts.increment`, `summarizationFallbackFailures.increment`, `summarizationRetries.increment`, `summarizationSuccess.increment`, `summarizationTryAttempts.increment`, `summarizationTryFailures.increment`, `summarizationTrySuccess.increment`.

Alvos de atribuição ou incremento: `attempt`, `attemptsPerformed`, `expectTruncationFromInputReduction`, `lastErrorKind`, `lastFailedPromptLength`, `promptBudget`, `rateLimitError`, `requestShorterOutput`, `summaryPrompt`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `2f4069fbd07f5fec52a4f0369cbb1f3da6d76b7e82741d9681a32ae84ab11b6a`.

### evaluation:305317

Chamadas escritas diretamente neste corpo: `Math.min`, `buildSummarizationPrompt`, `errorKinds.join`, `errorKinds.push`, `executeSummarizationStream`, `getRetryDirective`, `logger13.error`, `logger13.info`, `logger13.warn`, `messages.map`, `new Error`, `new Promise`, `parseSummarizerModelLabel`, `promptSession.getModelId`, `reducePromptBudget`, `stripNonPrintableCharacters`, `summarizationAttempts.increment`, `summarizationFailures.increment`, `summarizationFallbackAttempts.increment`, `summarizationFallbackFailures.increment`, `summarizationRetries.increment`, `summarizationSuccess.increment`, `summarizationTryAttempts.increment`, `summarizationTryFailures.increment`, `summarizationTrySuccess.increment`.

Alvos de atribuição ou incremento: `attempt`, `attemptsPerformed`, `expectTruncationFromInputReduction`, `lastErrorKind`, `lastFailedPromptLength`, `promptBudget`, `rateLimitError`, `requestShorterOutput`, `summaryPrompt`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `fc525a87f49ed7293c9ec6e7e64c97e865df82df65b230124fe47909bbfd0615`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
