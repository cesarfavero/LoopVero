# `stashSummarizationResultWhenOrphaned/stashResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-pending-store.js` · [README do módulo](../../../../modules/agent-engine/summarization-pending-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647915-647967](../../../../../reference/runtime/host-main.cjs#L647915-L647967) | `ArrowFunctionExpression` | sim | `result` |
| [evaluation:439572-439624](../../../../../reference/runtime/sand-eval-runner.cjs#L439572-L439624) | `ArrowFunctionExpression` | sim | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647915-647967](../../../../../reference/runtime/host-main.cjs#L647915-L647967) | 2 | 0 | 2 | 1 | 0 | 1 |
| [evaluation:439572-439624](../../../../../reference/runtime/sand-eval-runner.cjs#L439572-L439624) | 2 | 0 | 2 | 1 | 0 | 1 |

### host:647915

Chamadas escritas diretamente neste corpo: `args.store.store`, `backgroundSummarizationStashed.increment`, `buildPendingSummaryRecord`, `logger61.info`, `logger61.warn`.

Alvos de atribuição ou incremento: `stashStarted`.

SHA-256 do trecho: `e8487e3b147cfd6f356c4821ad2dad1a8918b6e8c5ac826b0108631822d5adc8`.

### evaluation:439572

Chamadas escritas diretamente neste corpo: `args.store.store`, `backgroundSummarizationStashed.increment`, `buildPendingSummaryRecord`, `logger38.info`, `logger38.warn`.

Alvos de atribuição ou incremento: `stashStarted`.

SHA-256 do trecho: `7da2bf706ad5394167e3cf4df75ff3b5d02ee43e53d65784e31e2cbfc1c5707e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
