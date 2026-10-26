# `SummarizationOrchestrator.handleSummarization/discard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649960-649967](../../../../../reference/runtime/host-main.cjs#L649960-L649967) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:441613-441620](../../../../../reference/runtime/sand-eval-runner.cjs#L441613-L441620) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649960-649967](../../../../../reference/runtime/host-main.cjs#L649960-L649967) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441613-441620](../../../../../reference/runtime/sand-eval-runner.cjs#L441613-L441620) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:649960

Chamadas escritas diretamente neste corpo: `cancelGeneration`, `new BackgroundSummarizationDiscardedError`.

Alvos de atribuição ou incremento: `cancellationToken.cancelled`, `discarded`.

SHA-256 do trecho: `bef8639ad8e27815bc0339b0c410134baf468c1b14f0777afb6055edddca8f26`.

### evaluation:441613

Chamadas escritas diretamente neste corpo: `cancelGeneration`, `new BackgroundSummarizationDiscardedError`.

Alvos de atribuição ou incremento: `cancellationToken.cancelled`, `discarded`.

SHA-256 do trecho: `bef8639ad8e27815bc0339b0c410134baf468c1b14f0777afb6055edddca8f26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
