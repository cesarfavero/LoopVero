# `createSandTurnBudgetGuard/observeToolCallEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/turn-budget.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587829-587838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587829-L587838) | `FunctionExpression` | não | `events` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587829-587838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587829-L587838) | 3 | 1 | 0 | 2 | 0 | 0 |

### evaluation:587829

Chamadas escritas diretamente neste corpo: `exceed`.

Alvos de atribuição ou incremento: `consecutiveTimeouts`.

SHA-256 do trecho: `cb0ae301c51ba7a64911c1c19577e6b699034ce2ad6eb6b16284b9c3a215d851`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
