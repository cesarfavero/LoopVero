# `createSandTurnBudgetGuard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/turn-budget.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587809-587844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587809-L587844) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587809-587844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587809-L587844) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587809

Chamadas escritas diretamente neste corpo: `Math.max`, `clock.now`, `clock.schedule`.

Alvos de atribuição ou incremento: `timer2`.

SHA-256 do trecho: `bc500591e6ec9447a49187ba32509f5e7908d1f974e580179eef7946b52b4421`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
