# `reviewSandEmailClaim`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764679-764715](../../../../../../reference/runtime/host-main.cjs#L764679-L764715) | `FunctionDeclaration` | sim | `args` |
| [evaluation:558047-558083](../../../../../../reference/runtime/sand-eval-runner.cjs#L558047-L558083) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764679-764715](../../../../../../reference/runtime/host-main.cjs#L764679-L764715) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:558047-558083](../../../../../../reference/runtime/sand-eval-runner.cjs#L558047-L558083) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:764679

Chamadas escritas diretamente neste corpo: `args.options.getApprovalExpiryPolicy`, `claimReviewArguments`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`, `sandEmailClaimFingerprintPayload`, `summarizeSandMcpAutoReviewAction`.

SHA-256 do trecho: `32acabebf166d0d1c07bb0abd9e57a352b88fc974e8c66fe94fe095ddfc54d05`.

### evaluation:558047

Chamadas escritas diretamente neste corpo: `args.options.getApprovalExpiryPolicy`, `claimReviewArguments`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`, `sandEmailClaimFingerprintPayload`, `summarizeSandMcpAutoReviewAction`.

SHA-256 do trecho: `32acabebf166d0d1c07bb0abd9e57a352b88fc974e8c66fe94fe095ddfc54d05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
