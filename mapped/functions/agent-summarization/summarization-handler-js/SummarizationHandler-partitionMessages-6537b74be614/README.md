# `SummarizationHandler.partitionMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621481-621509](../../../../../reference/runtime/host-main.cjs#L621481-L621509) | `method` | não | `messages2, options2` |
| [evaluation:305835-305863](../../../../../reference/runtime/sand-eval-runner.cjs#L305835-L305863) | `method` | não | `messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621481-621509](../../../../../reference/runtime/host-main.cjs#L621481-L621509) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305835-305863](../../../../../reference/runtime/sand-eval-runner.cjs#L305835-L305863) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:621481

Chamadas escritas diretamente neste corpo: `.some`, `collectAllSkillBlocks`, `isTurnUnfinished`, `messagesForSummarization.findLastIndex`, `messagesForSummarization.slice`, `messagesToSummarize.findLastIndex`, `messagesToSummarize.slice`, `prepareMessagesForCompaction`, `tailOverflowsContextWindow`.

Alvos de atribuição ou incremento: `preservedTailMessages`, `splitIndex`, `tailBeforeSummary`.

SHA-256 do trecho: `362e36f94d27ae9e6d6e3bde20e697c153d42615d8fdc216d39843126e2434d0`.

### evaluation:305835

Chamadas escritas diretamente neste corpo: `.some`, `collectAllSkillBlocks`, `isTurnUnfinished`, `messagesForSummarization.findLastIndex`, `messagesForSummarization.slice`, `messagesToSummarize.findLastIndex`, `messagesToSummarize.slice`, `prepareMessagesForCompaction`, `tailOverflowsContextWindow`.

Alvos de atribuição ou incremento: `preservedTailMessages`, `splitIndex`, `tailBeforeSummary`.

SHA-256 do trecho: `9771d6febb2ab419767d56a1d6f4e0dd7b093b4f50fd284bf8867987e7442730`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
