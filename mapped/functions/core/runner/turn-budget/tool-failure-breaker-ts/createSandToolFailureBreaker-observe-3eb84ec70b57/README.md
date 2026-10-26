# `createSandToolFailureBreaker/observe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/tool-failure-breaker.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/tool-failure-breaker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590463-590477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590463-L590477) | `FunctionExpression` | não | `events` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590463-590477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590463-L590477) | 4 | 1 | 0 | 2 | 0 | 0 |

### evaluation:590463

Chamadas escritas diretamente neste corpo: `isRefusedOrCancelled`, `streak.push`.

Alvos de atribuição ou incremento: `streak`, `trippedOn`.

SHA-256 do trecho: `16504754bdea39d4b66a8bc71bb7d615efb96137d66112396454cfd358a4d056`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
