# `meetingJoinReviewSpec/summaryCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-join-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772803-772811](../../../../../../reference/runtime/host-main.cjs#L772803-L772811) | `ArrowFunctionExpression` | não | `{ schedule }` |
| [evaluation:572029-572037](../../../../../../reference/runtime/sand-eval-runner.cjs#L572029-L572037) | `ArrowFunctionExpression` | não | `{ schedule }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772803-772811](../../../../../../reference/runtime/host-main.cjs#L772803-L772811) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:772803 usa retorno implícito de arrow function.
| [evaluation:572029-572037](../../../../../../reference/runtime/sand-eval-runner.cjs#L572029-L572037) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:572029 usa retorno implícito de arrow function.

### host:772803

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.cardCopy`.

SHA-256 do trecho: `4bf334688bcf3c2bb8f9accbfc52bb6a1c1d7df94ea777e67328617b4a37a5ae`.

### evaluation:572029

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.cardCopy`.

SHA-256 do trecho: `4bf334688bcf3c2bb8f9accbfc52bb6a1c1d7df94ea777e67328617b4a37a5ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
