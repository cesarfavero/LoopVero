# `SummarizationHandler.summarize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621634-621717](../../../../../reference/runtime/host-main.cjs#L621634-L621717) | `method` | sim | `ctx, messages2, options2` |
| [evaluation:305988-306071](../../../../../reference/runtime/sand-eval-runner.cjs#L305988-L306071) | `method` | sim | `ctx, messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621634-621717](../../../../../reference/runtime/host-main.cjs#L621634-L621717) | 10 | 1 | 1 | 1 | 1 | 1 |
| [evaluation:305988-306071](../../../../../reference/runtime/sand-eval-runner.cjs#L305988-L306071) | 10 | 1 | 1 | 1 | 1 | 1 |

### host:621634

Chamadas escritas diretamente neste corpo: `Array.isArray`, `carrierText.safeTransform`, `createRedactedString`, `isRedactedString`, `logger38.error`, `logger38.info`, `logger38.warn`, `messages2.find`, `performance.now`, `prepareMessagesForCompaction`, `runSummarizationPipeline`, `summaryBlockingDurationMs.histogram`, `this.getMetricsModelLabel`, `this.recordMetrics`, `timeBetweenLastTwoMessagesMs.histogram`.

Alvos de atribuição ou incremento: `carrierText`, `timeBetweenMessages`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `6d992bcd4bd5910cf389ddd9cbed19536021e7c8222e447883fc574f66a80a37`.

### evaluation:305988

Chamadas escritas diretamente neste corpo: `Array.isArray`, `carrierText.safeTransform`, `createRedactedString`, `isRedactedString`, `logger13.error`, `logger13.info`, `logger13.warn`, `messages.find`, `performance.now`, `prepareMessagesForCompaction`, `runSummarizationPipeline`, `summaryBlockingDurationMs.histogram`, `this.getMetricsModelLabel`, `this.recordMetrics`, `timeBetweenLastTwoMessagesMs.histogram`.

Alvos de atribuição ou incremento: `carrierText`, `timeBetweenMessages`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `491bf3ac6b94aed0dac23ee6a47e35100064fef5bbb46489ff3b99c3e4416308`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
