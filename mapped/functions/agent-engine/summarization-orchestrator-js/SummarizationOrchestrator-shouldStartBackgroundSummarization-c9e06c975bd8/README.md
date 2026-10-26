# `SummarizationOrchestrator.shouldStartBackgroundSummarization`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649624-649641](../../../../../reference/runtime/host-main.cjs#L649624-L649641) | `method` | não | `tokenDetails, messages2, ctx` |
| [evaluation:441277-441294](../../../../../reference/runtime/sand-eval-runner.cjs#L441277-L441294) | `method` | não | `tokenDetails, messages, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649624-649641](../../../../../reference/runtime/host-main.cjs#L649624-L649641) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:441277-441294](../../../../../reference/runtime/sand-eval-runner.cjs#L441277-L441294) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:649624

Chamadas escritas diretamente neste corpo: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `logger62.info`, `shouldPerformSelfSummary`, `shouldStartBackgroundSummarization`, `this.canUseSelfSummaryNow`.

SHA-256 do trecho: `5dceae6dcc4b64c50662e5b135825d7a693b0b9c6e906223390be13a97d51474`.

### evaluation:441277

Chamadas escritas diretamente neste corpo: `EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION`, `logger39.info`, `shouldPerformSelfSummary`, `shouldStartBackgroundSummarization`, `this.canUseSelfSummaryNow`.

SHA-256 do trecho: `3ccc5989711b1089e2ccc33ebbaf5ddf467bcf4cbd308ea4f212594b3fa6aca9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
