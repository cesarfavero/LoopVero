# `SummarizationOrchestrator.getSummarizer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649684-649694](../../../../../reference/runtime/host-main.cjs#L649684-L649694) | `method` | não | `stateHandler, interactionListener, config2, options2` |
| [evaluation:441337-441347](../../../../../reference/runtime/sand-eval-runner.cjs#L441337-L441347) | `method` | não | `stateHandler, interactionListener, config2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649684-649694](../../../../../reference/runtime/host-main.cjs#L649684-L649694) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:441337-441347](../../../../../reference/runtime/sand-eval-runner.cjs#L441337-L441347) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:649684

Chamadas escritas diretamente neste corpo: `config2.onExternalSummarizationStart`, `this.canUseSelfSummary`, `this.selfSummarizerFactory`.

SHA-256 do trecho: `0e21a4253e7384f632ec759578dcc4a07762935d05a50453d4b43939d82df6f6`.

### evaluation:441337

Chamadas escritas diretamente neste corpo: `config2.onExternalSummarizationStart`, `this.canUseSelfSummary`, `this.selfSummarizerFactory`.

SHA-256 do trecho: `0e21a4253e7384f632ec759578dcc4a07762935d05a50453d4b43939d82df6f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
