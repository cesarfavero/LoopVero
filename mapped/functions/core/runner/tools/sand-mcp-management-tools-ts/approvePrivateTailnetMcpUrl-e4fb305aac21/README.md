# `approvePrivateTailnetMcpUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780012-780043](../../../../../../../reference/runtime/host-main.cjs#L780012-L780043) | `FunctionDeclaration` | sim | `ctx, approval, request5` |
| [evaluation:580257-580288](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580257-L580288) | `FunctionDeclaration` | sim | `ctx, approval, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780012-780043](../../../../../../../reference/runtime/host-main.cjs#L780012-L780043) | 3 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:580257-580288](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580257-L580288) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:780012

Chamadas escritas diretamente neste corpo: `approval.getApprovalExpiryPolicy`, `approval.getConversationId`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isPrivateTailnetMcpUrl`, `ledger.answered`, `ledger.ruleRefused`, `privateTailnetMcpDeclinedMessage`, `privateTailnetMcpUnavailableMessage`, `requestReviewedApproval`.

SHA-256 do trecho: `de7e97a3da546ab3a07f9d88a2ff270a552fb6e2074645ccf3c72baa3dda4b4f`.

### evaluation:580257

Chamadas escritas diretamente neste corpo: `approval.getApprovalExpiryPolicy`, `approval.getConversationId`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isPrivateTailnetMcpUrl`, `ledger.answered`, `ledger.ruleRefused`, `privateTailnetMcpDeclinedMessage`, `privateTailnetMcpUnavailableMessage`, `requestReviewedApproval`.

SHA-256 do trecho: `e342d4738c0130807261a1f50b84833d34039d633fd685431078b9c238dc38f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
