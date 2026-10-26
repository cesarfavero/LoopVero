# `reviewSandDraftRouteVerification`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755891-755939](../../../../../../reference/runtime/host-main.cjs#L755891-L755939) | `FunctionDeclaration` | sim | `args` |
| [evaluation:541766-541814](../../../../../../reference/runtime/sand-eval-runner.cjs#L541766-L541814) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755891-755939](../../../../../../reference/runtime/host-main.cjs#L755891-L755939) | 8 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:541766-541814](../../../../../../reference/runtime/sand-eval-runner.cjs#L541766-L541814) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:755891

Chamadas escritas diretamente neste corpo: `.catch`, `classify2`, `ctx.get`, `fingerprintSandAutoReviewTarget`, `isHostedGmailRoute`, `options2.gmailSendAsSignature`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewedDraftReads`, `summarizeVerificationReads`.

SHA-256 do trecho: `b8be467189a729aacfbfaffdf82ee3147975baa37ceebf1900793a88671b0a85`.

### evaluation:541766

Chamadas escritas diretamente neste corpo: `.catch`, `classify`, `ctx.get`, `fingerprintSandAutoReviewTarget`, `isHostedGmailRoute`, `options2.gmailSendAsSignature`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewedDraftReads`, `summarizeVerificationReads`.

SHA-256 do trecho: `c1623ac9b404e0f66703c877b257ae7a5a0346b5e355e933045bb10f9ac51776`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
