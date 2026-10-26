# `SummarizationHandler.recordMetrics`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621721-621785](../../../../../reference/runtime/host-main.cjs#L621721-L621785) | `method` | não | `ctx, params` |
| [evaluation:306075-306139](../../../../../reference/runtime/sand-eval-runner.cjs#L306075-L306139) | `method` | não | `ctx, params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621721-621785](../../../../../reference/runtime/host-main.cjs#L621721-L621785) | 7 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:306075-306139](../../../../../reference/runtime/sand-eval-runner.cjs#L306075-L306139) | 7 | 0 | 0 | 0 | 0 | 0 |

### host:621721

Chamadas escritas diretamente neste corpo: `logger38.warn`, `summarizationCompressionPercent.histogram`, `summarizationInputTokens.histogram`, `summarizationOriginalLengthChars.histogram`, `summarizationOutputTokens.histogram`, `summarizationPersistedLengthChars.histogram`, `summarizationTotalCompressionPercent.histogram`, `summaryBlockingDurationMs.histogram`, `summaryLengthChars.histogram`, `this.getMetricsLabels`, `this.totalRawSerializedCharLength`, `timeBetweenLastTwoMessagesMs.histogram`.

SHA-256 do trecho: `0bbe5a4b5a66180dcbbd4011688b110758ae5b85def61124c6aca21711548ee9`.

### evaluation:306075

Chamadas escritas diretamente neste corpo: `logger13.warn`, `summarizationCompressionPercent.histogram`, `summarizationInputTokens.histogram`, `summarizationOriginalLengthChars.histogram`, `summarizationOutputTokens.histogram`, `summarizationPersistedLengthChars.histogram`, `summarizationTotalCompressionPercent.histogram`, `summaryBlockingDurationMs.histogram`, `summaryLengthChars.histogram`, `this.getMetricsLabels`, `this.totalRawSerializedCharLength`, `timeBetweenLastTwoMessagesMs.histogram`.

SHA-256 do trecho: `8e0a299e75305fd4a9be89f41cd4d6933111351cfde2d8a446af58713b586f87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
