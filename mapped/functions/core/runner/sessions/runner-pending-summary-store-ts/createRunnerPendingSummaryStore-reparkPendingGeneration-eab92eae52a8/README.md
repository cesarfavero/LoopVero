# `createRunnerPendingSummaryStore/reparkPendingGeneration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/sessions/runner-pending-summary-store.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535175-535179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535175-L535179) | `ArrowFunctionExpression` | não | `generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535175-535179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535175-L535179) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535175

Chamadas escritas diretamente neste corpo: `settledGenerations.has`.

Alvos de atribuição ou incremento: `pendingGeneration`.

SHA-256 do trecho: `02754240d13726587f96a0db95f2da966e597c42f251d22330edc8094a255fdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
