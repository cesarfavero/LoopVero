# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meetings-turn-builders.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-turn-builders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773650-773650](../../../../../../reference/runtime/host-main.cjs#L773650-L773650) | `ArrowFunctionExpression` | não | `{ host: { meetingRequest, meetings } }` |
| [host:773662-773685](../../../../../../reference/runtime/host-main.cjs#L773662-L773685) | `ArrowFunctionExpression` | não | `{     host,     turn,     mcpReviewOptions   }` |
| [evaluation:572876-572876](../../../../../../reference/runtime/sand-eval-runner.cjs#L572876-L572876) | `ArrowFunctionExpression` | não | `{ host: { meetingRequest, meetings } }` |
| [evaluation:572888-572911](../../../../../../reference/runtime/sand-eval-runner.cjs#L572888-L572911) | `ArrowFunctionExpression` | não | `{     host,     turn,     mcpReviewOptions   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773650-773650](../../../../../../reference/runtime/host-main.cjs#L773650-L773650) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:773650 usa retorno implícito de arrow function.
| [host:773662-773685](../../../../../../reference/runtime/host-main.cjs#L773662-L773685) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:773662 usa retorno implícito de arrow function.
| [evaluation:572876-572876](../../../../../../reference/runtime/sand-eval-runner.cjs#L572876-L572876) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:572876 usa retorno implícito de arrow function.
| [evaluation:572888-572911](../../../../../../reference/runtime/sand-eval-runner.cjs#L572888-L572911) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:572888 usa retorno implícito de arrow function.

### host:773650

Chamadas escritas diretamente neste corpo: `meetingRequestTools`.

SHA-256 do trecho: `d5a86749b44c5338a9b347041a0f913d6fda298e1cf08e696d23f62142ff6402`.

### host:773662

Chamadas escritas diretamente neste corpo: `meetingsTurnTools`, `sandMeetingInstructionReviewer`, `sandMeetingJoinReviewer`.

SHA-256 do trecho: `e1c86232734e5a371b4b4f3580181fa3e8876068e989d769c4af502557155b4e`.

### evaluation:572876

Chamadas escritas diretamente neste corpo: `meetingRequestTools`.

SHA-256 do trecho: `d5a86749b44c5338a9b347041a0f913d6fda298e1cf08e696d23f62142ff6402`.

### evaluation:572888

Chamadas escritas diretamente neste corpo: `meetingsTurnTools`, `sandMeetingInstructionReviewer`, `sandMeetingJoinReviewer`.

SHA-256 do trecho: `e1c86232734e5a371b4b4f3580181fa3e8876068e989d769c4af502557155b4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
