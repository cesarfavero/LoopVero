# `createErrorFreeStepTracker/beginRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/error-free-step/error-free-step.ts` · [README do módulo](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589024-589024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589024-L589024) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:589061-589085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589061-L589085) | `FunctionExpression` | não | `options2, startedAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589024-589024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589024-L589024) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:589024 usa retorno implícito de arrow function.
| [evaluation:589061-589085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589061-L589085) | 9 | 0 | 0 | 7 | 0 | 0 |

### evaluation:589024

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `76e70ee5c429e2820c577a38fa63f40bbfd56d5ccc059c5380283a209505affd`.

### evaluation:589061

Chamadas escritas diretamente neste corpo: `Math.max`, `bindRun`, `clock.schedule`, `emit`, `step.key`, `step.opening`.

Alvos de atribuição ou incremento: `pending`, `turn.timer`.

SHA-256 do trecho: `c561733863b97193bc9164b777d20ded9586788bb039a00e93a5bb20cf176709`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
