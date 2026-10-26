# `reviewSandOutboundCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-outbound-call-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-outbound-call-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763555-763605](../../../../../../reference/runtime/host-main.cjs#L763555-L763605) | `FunctionDeclaration` | sim | `args` |
| [evaluation:556597-556647](../../../../../../reference/runtime/sand-eval-runner.cjs#L556597-L556647) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763555-763605](../../../../../../reference/runtime/host-main.cjs#L763555-L763605) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:556597-556647](../../../../../../reference/runtime/sand-eval-runner.cjs#L556597-L556647) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:763555

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `args.options.getApprovalExpiryPolicy`, `counted2`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 do trecho: `c93884245c37709273b84e623c84f1e1195a041b8c70e47e66d74d50cc1baf60`.

### evaluation:556597

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `args.options.getApprovalExpiryPolicy`, `counted2`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 do trecho: `c93884245c37709273b84e623c84f1e1195a041b8c70e47e66d74d50cc1baf60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
