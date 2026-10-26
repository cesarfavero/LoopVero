# `sandMeetingJoinReviewer/review`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-join-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772822-772856](../../../../../../reference/runtime/host-main.cjs#L772822-L772856) | `ArrowFunctionExpression` | sim | `{ toolCallId, reviewCallId: reviewCallId2, target, signal }` |
| [evaluation:572048-572082](../../../../../../reference/runtime/sand-eval-runner.cjs#L572048-L572082) | `ArrowFunctionExpression` | sim | `{ toolCallId, reviewCallId: reviewCallId2, target, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772822-772856](../../../../../../reference/runtime/host-main.cjs#L772822-L772856) | 7 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:572048-572082](../../../../../../reference/runtime/sand-eval-runner.cjs#L572048-L572082) | 7 | 0 | 2 | 5 | 0 | 0 |

### host:772822

Chamadas escritas diretamente neste corpo: `.ruleRefused`, `askUser`, `beforeReview`, `classify4`, `humanOnlyReviewLedger`, `meetingIdentity`, `meetingJoinReviewSpec`, `options2`, `startsFromDirectChat`.

SHA-256 do trecho: `4ff956f50d994ac9fc9bc0eecf8ae02e3ae45134fa5968f7db31f6fa847121dd`.

### evaluation:572048

Chamadas escritas diretamente neste corpo: `.ruleRefused`, `askUser`, `beforeReview`, `classify4`, `humanOnlyReviewLedger`, `meetingIdentity`, `meetingJoinReviewSpec`, `options2`, `startsFromDirectChat`.

SHA-256 do trecho: `4ff956f50d994ac9fc9bc0eecf8ae02e3ae45134fa5968f7db31f6fa847121dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
