# `SummarizationOrchestrator.handleSummarization/onRunCancelled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649822-649827](../../../../../reference/runtime/host-main.cjs#L649822-L649827) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:441475-441480](../../../../../reference/runtime/sand-eval-runner.cjs#L441475-L441480) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649822-649827](../../../../../reference/runtime/host-main.cjs#L649822-L649827) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:441475-441480](../../../../../reference/runtime/sand-eval-runner.cjs#L441475-L441480) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:649822

Chamadas escritas diretamente neste corpo: `cancellationToken.onCancelled`.

Alvos de atribuição ou incremento: `cancellationToken.cancelled`.

SHA-256 do trecho: `9b92fe9f2dd0d0f36cd1f37e5ec90ba33d8ebdd3816dd8dc78115d83463d6743`.

### evaluation:441475

Chamadas escritas diretamente neste corpo: `cancellationToken.onCancelled`.

Alvos de atribuição ou incremento: `cancellationToken.cancelled`.

SHA-256 do trecho: `9b92fe9f2dd0d0f36cd1f37e5ec90ba33d8ebdd3816dd8dc78115d83463d6743`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
