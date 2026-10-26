# `SummarizationHandler.buildDeterministicFallbackText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621551-621593](../../../../../reference/runtime/host-main.cjs#L621551-L621593) | `method` | não | `ctx, partitioned, options2, errorKind` |
| [evaluation:305905-305947](../../../../../reference/runtime/sand-eval-runner.cjs#L305905-L305947) | `method` | não | `ctx, partitioned, options2, errorKind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621551-621593](../../../../../reference/runtime/host-main.cjs#L621551-L621593) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305905-305947](../../../../../reference/runtime/sand-eval-runner.cjs#L305905-L305947) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621551

Chamadas escritas diretamente neste corpo: `buildDeterministicSummaryText`, `computeDeterministicFallbackMaxChars`, `logger38.info`, `logger38.warn`, `summarizationDeterministicFallbackUsed.increment`, `this.getMetricsLabels`.

SHA-256 do trecho: `0959da3ecd4100358f3f5a2a20ba4dba1b07e932ad541e821cc8335e1793c0a7`.

### evaluation:305905

Chamadas escritas diretamente neste corpo: `buildDeterministicSummaryText`, `computeDeterministicFallbackMaxChars`, `logger13.info`, `logger13.warn`, `summarizationDeterministicFallbackUsed.increment`, `this.getMetricsLabels`.

SHA-256 do trecho: `5d0732b2e59f8d0e9af8385113687a56ca3d5705492a8c21f70821b3cd5d8253`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
