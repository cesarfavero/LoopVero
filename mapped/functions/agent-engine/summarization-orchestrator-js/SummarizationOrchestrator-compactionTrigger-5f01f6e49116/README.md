# `SummarizationOrchestrator.compactionTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649646-649680](../../../../../reference/runtime/host-main.cjs#L649646-L649680) | `method` | não | `ctx` |
| [evaluation:441299-441333](../../../../../reference/runtime/sand-eval-runner.cjs#L441299-L441333) | `method` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649646-649680](../../../../../reference/runtime/host-main.cjs#L649646-L649680) | 11 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441299-441333](../../../../../reference/runtime/sand-eval-runner.cjs#L441299-L441333) | 11 | 0 | 0 | 1 | 0 | 0 |

### host:649646

Chamadas escritas diretamente neste corpo: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT`, `Math.max`, `Math.min`, `Object.keys`, `reservedTokens.push`, `this.canUseSelfSummaryNow`, `usedTokens.push`, `windowFractions.push`.

SHA-256 do trecho: `a62a1f234c109403859a399144db747b3c3a98337b21c1617928fcfeeb303c05`.

### evaluation:441299

Chamadas escritas diretamente neste corpo: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT`, `Math.max`, `Math.min`, `Object.keys`, `reservedTokens.push`, `this.canUseSelfSummaryNow`, `usedTokens.push`, `windowFractions.push`.

SHA-256 do trecho: `0f83ce90115d931ad99945295d7cc6477f48af483af48b4c07310ce5d4299e7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
