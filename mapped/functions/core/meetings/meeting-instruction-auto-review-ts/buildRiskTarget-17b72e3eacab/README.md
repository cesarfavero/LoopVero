# `buildRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-instruction-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-instruction-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772193-772203](../../../../../../reference/runtime/host-main.cjs#L772193-L772203) | `ArrowFunctionExpression` | não | `{ target, ...instructions }` |
| [evaluation:571425-571435](../../../../../../reference/runtime/sand-eval-runner.cjs#L571425-L571435) | `ArrowFunctionExpression` | não | `{ target, ...instructions }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772193-772203](../../../../../../reference/runtime/host-main.cjs#L772193-L772203) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:772193 usa retorno implícito de arrow function.
| [evaluation:571425-571435](../../../../../../reference/runtime/sand-eval-runner.cjs#L571425-L571435) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:571425 usa retorno implícito de arrow function.

### host:772193

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `bd6929f75276f75ece8b619284247fd117971d631cd09d25569037ce7acdbfac`.

### evaluation:571425

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `bd6929f75276f75ece8b619284247fd117971d631cd09d25569037ce7acdbfac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
