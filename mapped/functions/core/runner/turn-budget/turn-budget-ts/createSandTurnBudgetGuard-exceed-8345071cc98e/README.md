# `createSandTurnBudgetGuard/exceed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/turn-budget.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587815-587819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587815-L587819) | `ArrowFunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587815-587819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587815-L587819) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587815

Chamadas escritas diretamente neste corpo: `args.onExceeded`.

Alvos de atribuição ou incremento: `exceeded`.

SHA-256 do trecho: `d919b0a6d6b9e673d9ed788b592b621d34886cf540c0807243f95c5dda0f8bab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
