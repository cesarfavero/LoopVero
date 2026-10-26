# `createSendFeedbackTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-feedback-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-feedback-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765498-765560](../../../../../../../reference/runtime/host-main.cjs#L765498-L765560) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:558864-558926](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558864-L558926) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765498-765560](../../../../../../../reference/runtime/host-main.cjs#L765498-L765560) | 9 | 0 | 2 | 7 | 0 | 0 |
| [evaluation:558864-558926](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558864-L558926) | 9 | 0 | 2 | 7 | 0 | 0 |

### host:765498

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.submitProductFeedback`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isAgentFeedbackBlockedByPrivacyMode`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

Alvos de atribuição ou incremento: `platformFields`.

SHA-256 do trecho: `92e5bde78afbc642e024f7d1ff6f18c5bd900490cb7511c16f6c9e875bf30736`.

### evaluation:558864

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.submitProductFeedback`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isAgentFeedbackBlockedByPrivacyMode`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

Alvos de atribuição ou incremento: `platformFields`.

SHA-256 do trecho: `92e5bde78afbc642e024f7d1ff6f18c5bd900490cb7511c16f6c9e875bf30736`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
