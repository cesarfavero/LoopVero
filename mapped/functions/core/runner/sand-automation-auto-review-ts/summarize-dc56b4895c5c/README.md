# `summarize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/sand-automation-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762269-762276](../../../../../../reference/runtime/host-main.cjs#L762269-L762276) | `ArrowFunctionExpression` | não | `target` |
| [evaluation:554879-554886](../../../../../../reference/runtime/sand-eval-runner.cjs#L554879-L554886) | `ArrowFunctionExpression` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762269-762276](../../../../../../reference/runtime/host-main.cjs#L762269-L762276) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:762269 usa retorno implícito de arrow function.
| [evaluation:554879-554886](../../../../../../reference/runtime/sand-eval-runner.cjs#L554879-L554886) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:554879 usa retorno implícito de arrow function.

### host:762269

Chamadas escritas diretamente neste corpo: `describeTrigger`, `summarizeSandAutomationWriteAction`, `target.referencingRoutines.map`.

SHA-256 do trecho: `97c9f5ea806c05ca1646eb10349d6828f623fab8531a5d5ab28ceb0b88001007`.

### evaluation:554879

Chamadas escritas diretamente neste corpo: `describeTrigger`, `summarizeSandAutomationWriteAction`, `target.referencingRoutines.map`.

SHA-256 do trecho: `97c9f5ea806c05ca1646eb10349d6828f623fab8531a5d5ab28ceb0b88001007`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
