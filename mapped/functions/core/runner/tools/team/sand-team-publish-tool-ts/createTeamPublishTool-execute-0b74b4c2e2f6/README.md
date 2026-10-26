# `createTeamPublishTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/sand-team-publish-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/sand-team-publish-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781425-781469](../../../../../../../../reference/runtime/host-main.cjs#L781425-L781469) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:581772-581816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581772-L581816) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781425-781469](../../../../../../../../reference/runtime/host-main.cjs#L781425-L781469) | 6 | 0 | 4 | 7 | 0 | 0 |
| [evaluation:581772-581816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581772-L581816) | 6 | 0 | 4 | 7 | 0 | 0 |

### host:781425

Chamadas escritas diretamente neste corpo: `buildSandAgentShareLinkUrl`, `d.activeTurnRequestSource`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.isTeamSetupUnderway`, `d.teamPublish.checkUnpublish`, `d.teamPublish.publish`, `d.teamPublish.unpublish`, `describePublish`, `describeUnpublish`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 do trecho: `efedc7dd81a743b0fd46e0f210911294257a9d132034051c4a3fed549a155536`.

### evaluation:581772

Chamadas escritas diretamente neste corpo: `buildSandAgentShareLinkUrl`, `d.activeTurnRequestSource`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.isTeamSetupUnderway`, `d.teamPublish.checkUnpublish`, `d.teamPublish.publish`, `d.teamPublish.unpublish`, `describePublish`, `describeUnpublish`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 do trecho: `65453c3e67522a250450afce290d23f5a086f0d8dce3ecab0276f67e95198a17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
