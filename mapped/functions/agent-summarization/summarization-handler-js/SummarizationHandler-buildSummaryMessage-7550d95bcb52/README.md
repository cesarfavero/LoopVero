# `SummarizationHandler.buildSummaryMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621597-621620](../../../../../reference/runtime/host-main.cjs#L621597-L621620) | `method` | não | `rawSummary, partitioned, enrichments, options2` |
| [evaluation:305951-305974](../../../../../reference/runtime/sand-eval-runner.cjs#L305951-L305974) | `method` | não | `rawSummary, partitioned, enrichments, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621597-621620](../../../../../reference/runtime/host-main.cjs#L621597-L621620) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305951-305974](../../../../../reference/runtime/sand-eval-runner.cjs#L305951-L305974) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:621597

Chamadas escritas diretamente neste corpo: `appendDurableBlocks`, `findLatestImagePart`, `renderDurableBlocks`, `toRedactedCoreMessage`, `toUserMessageImagePart`.

SHA-256 do trecho: `340c154d853b175b31bce2a016295d8a10491076e1dd9f128d99fcc5c1ec9227`.

### evaluation:305951

Chamadas escritas diretamente neste corpo: `appendDurableBlocks`, `findLatestImagePart`, `renderDurableBlocks`, `toRedactedCoreMessage`, `toUserMessageImagePart`.

SHA-256 do trecho: `f44ce9c81e7115e17ff2ae244940b488459ae048a6127a360d5228335b359062`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
