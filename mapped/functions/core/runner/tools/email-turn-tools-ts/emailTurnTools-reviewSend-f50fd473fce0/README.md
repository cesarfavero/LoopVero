# `emailTurnTools/reviewSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-turn-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765242-765267](../../../../../../../reference/runtime/host-main.cjs#L765242-L765267) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |
| [evaluation:558610-558635](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558610-L558635) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765242-765267](../../../../../../../reference/runtime/host-main.cjs#L765242-L765267) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558610-558635](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558610-L558635) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765242

Chamadas escritas diretamente neste corpo: `host.activeTurnAutomationWakeEmail`, `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `host.assertNoPendingAutoReviewApproval`, `host.getAutoReviewInstructions`, `host.getConversationId`, `review.getUserInstructions`, `reviewSandEmailSend`.

SHA-256 do trecho: `861ba2567d2e68f181c22da4c7e91dc45c396bc5fc565fb13b156f58f3e2762c`.

### evaluation:558610

Chamadas escritas diretamente neste corpo: `host.activeTurnAutomationWakeEmail`, `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `host.assertNoPendingAutoReviewApproval`, `host.getAutoReviewInstructions`, `host.getConversationId`, `review.getUserInstructions`, `reviewSandEmailSend`.

SHA-256 do trecho: `861ba2567d2e68f181c22da4c7e91dc45c396bc5fc565fb13b156f58f3e2762c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
