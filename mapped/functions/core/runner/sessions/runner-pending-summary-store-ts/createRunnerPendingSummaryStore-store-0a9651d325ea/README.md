# `createRunnerPendingSummaryStore/store`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/sessions/runner-pending-summary-store.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535150-535158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535150-L535158) | `ArrowFunctionExpression` | sim | `_ctx, record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535150-535158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535150-L535158) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535150

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `pendingGeneration`, `pendingSummary`.

SHA-256 do trecho: `2d164c36293645f3e02231527b7035774b7740346646a85200e068b5372163ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
