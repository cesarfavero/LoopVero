# `SummarizationOrchestrator.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649612-649618](../../../../../reference/runtime/host-main.cjs#L649612-L649618) | `method` | não | `externalSummarizer, selfSummarizerFactory, backgroundSummarizationProps, canUseSelfSummaryNow` |
| [evaluation:441265-441271](../../../../../reference/runtime/sand-eval-runner.cjs#L441265-L441271) | `method` | não | `externalSummarizer, selfSummarizerFactory, backgroundSummarizationProps, canUseSelfSummaryNow` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649612-649618](../../../../../reference/runtime/host-main.cjs#L649612-L649618) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:441265-441271](../../../../../reference/runtime/sand-eval-runner.cjs#L441265-L441271) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:649612

Chamadas escritas diretamente neste corpo: `Promise.resolve`.

Alvos de atribuição ou incremento: `this.backgroundSummarizationProps`, `this.canUseSelfSummaryNow`, `this.compactionSegmentWrites`, `this.externalSummarizer`, `this.selfSummarizerFactory`.

SHA-256 do trecho: `0f664abc043ed9668b3c3cba8b10718a20776842e3b9246b6b0f9c780cc572f7`.

### evaluation:441265

Chamadas escritas diretamente neste corpo: `Promise.resolve`.

Alvos de atribuição ou incremento: `this.backgroundSummarizationProps`, `this.canUseSelfSummaryNow`, `this.compactionSegmentWrites`, `this.externalSummarizer`, `this.selfSummarizerFactory`.

SHA-256 do trecho: `0f664abc043ed9668b3c3cba8b10718a20776842e3b9246b6b0f9c780cc572f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
