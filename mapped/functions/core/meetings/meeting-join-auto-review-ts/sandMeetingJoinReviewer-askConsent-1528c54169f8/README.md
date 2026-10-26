# `sandMeetingJoinReviewer/askConsent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-join-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772857-772899](../../../../../../reference/runtime/host-main.cjs#L772857-L772899) | `ArrowFunctionExpression` | sim | `{ toolCallId, reviewCallId: reviewCallId2, needsConsent, signal }` |
| [evaluation:572083-572125](../../../../../../reference/runtime/sand-eval-runner.cjs#L572083-L572125) | `ArrowFunctionExpression` | sim | `{ toolCallId, reviewCallId: reviewCallId2, needsConsent, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772857-772899](../../../../../../reference/runtime/host-main.cjs#L772857-L772899) | 7 | 0 | 2 | 6 | 0 | 0 |
| [evaluation:572083-572125](../../../../../../reference/runtime/sand-eval-runner.cjs#L572083-L572125) | 7 | 0 | 2 | 6 | 0 | 0 |

### host:772857

Chamadas escritas diretamente neste corpo: `beforeReview`, `controller.cardReasonFor`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `needsConsent`, `options2`, `refusal`, `requestReviewedApproval`, `reviewOptions.getApprovalExpiryPolicy`, `startsFromDirectChat`.

SHA-256 do trecho: `0a96a61d26a6ead16631276b48016c8efd97e1e657fd707b1d3843e5de901ce3`.

### evaluation:572083

Chamadas escritas diretamente neste corpo: `beforeReview`, `controller.cardReasonFor`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `needsConsent`, `options2`, `refusal`, `requestReviewedApproval`, `reviewOptions.getApprovalExpiryPolicy`, `startsFromDirectChat`.

SHA-256 do trecho: `0a96a61d26a6ead16631276b48016c8efd97e1e657fd707b1d3843e5de901ce3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
