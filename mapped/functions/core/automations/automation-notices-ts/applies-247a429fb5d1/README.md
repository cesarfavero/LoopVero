# `applies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-notices.ts` · [README do módulo](../../../../../modules/core/automations/automation-notices-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715533-715535](../../../../../../reference/runtime/host-main.cjs#L715533-L715535) | `ArrowFunctionExpression` | não | `automation` |
| [host:715543-715543](../../../../../../reference/runtime/host-main.cjs#L715543-L715543) | `ArrowFunctionExpression` | não | `automation` |
| [evaluation:527211-527213](../../../../../../reference/runtime/sand-eval-runner.cjs#L527211-L527213) | `ArrowFunctionExpression` | não | `automation` |
| [evaluation:527221-527221](../../../../../../reference/runtime/sand-eval-runner.cjs#L527221-L527221) | `ArrowFunctionExpression` | não | `automation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715533-715535](../../../../../../reference/runtime/host-main.cjs#L715533-L715535) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:715533 usa retorno implícito de arrow function.
| [host:715543-715543](../../../../../../reference/runtime/host-main.cjs#L715543-L715543) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:715543 usa retorno implícito de arrow function.
| [evaluation:527211-527213](../../../../../../reference/runtime/sand-eval-runner.cjs#L527211-L527213) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:527211 usa retorno implícito de arrow function.
| [evaluation:527221-527221](../../../../../../reference/runtime/sand-eval-runner.cjs#L527221-L527221) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:527221 usa retorno implícito de arrow function.

### host:715533

Chamadas escritas diretamente neste corpo: `.some`, `triggerListeners`.

SHA-256 do trecho: `61479809d428f1c37c26bfa54bfa2a34b756e5de7b12a78ce29bcc28ae40d6b9`.

### host:715543

Chamadas escritas diretamente neste corpo: `automation.pendingNotices.includes`.

SHA-256 do trecho: `15569ee5f4792957c15bd6ca492f03678540927ca267f405f4024e3d76c86d6f`.

### evaluation:527211

Chamadas escritas diretamente neste corpo: `.some`, `triggerListeners`.

SHA-256 do trecho: `61479809d428f1c37c26bfa54bfa2a34b756e5de7b12a78ce29bcc28ae40d6b9`.

### evaluation:527221

Chamadas escritas diretamente neste corpo: `automation.pendingNotices.includes`.

SHA-256 do trecho: `15569ee5f4792957c15bd6ca492f03678540927ca267f405f4024e3d76c86d6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
