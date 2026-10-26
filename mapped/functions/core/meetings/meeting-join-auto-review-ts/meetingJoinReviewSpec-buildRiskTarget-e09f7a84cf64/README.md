# `meetingJoinReviewSpec/buildRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-join-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772782-772795](../../../../../../reference/runtime/host-main.cjs#L772782-L772795) | `ArrowFunctionExpression` | não | `{ target, ...instructions }` |
| [evaluation:572008-572021](../../../../../../reference/runtime/sand-eval-runner.cjs#L572008-L572021) | `ArrowFunctionExpression` | não | `{ target, ...instructions }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772782-772795](../../../../../../reference/runtime/host-main.cjs#L772782-L772795) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:772782 usa retorno implícito de arrow function.
| [evaluation:572008-572021](../../../../../../reference/runtime/sand-eval-runner.cjs#L572008-L572021) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:572008 usa retorno implícito de arrow function.

### host:772782

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.reviewRecord`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `turnProvenance`.

SHA-256 do trecho: `d526da01eb4ab5e13ebbba676420fa2d60097e9c9cb5c77924ca27bd5de926a5`.

### evaluation:572008

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.reviewRecord`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `turnProvenance`.

SHA-256 do trecho: `d526da01eb4ab5e13ebbba676420fa2d60097e9c9cb5c77924ca27bd5de926a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
