# `createDraftToolForTurn/onDraftMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756131-756162](../../../../../../../reference/runtime/host-main.cjs#L756131-L756162) | `ArrowFunctionExpression` | não | `emission, timestampMs, deliverTo, ruleProposal` |
| [evaluation:542052-542083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542052-L542083) | `ArrowFunctionExpression` | não | `emission, timestampMs, deliverTo, ruleProposal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756131-756162](../../../../../../../reference/runtime/host-main.cjs#L756131-L756162) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542052-542083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542052-L542083) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:756131

Chamadas escritas diretamente neste corpo: `draftAgentRuleCheck`, `host.emitUpdate`, `host.getAutoReviewInstructions`, `host.transport.lastSentMessageId`, `meetings.recordChatDraft`, `offeredRule`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `fb8c79dae4d1d87efaa22f0c95c114cb34d7562605a8b25aceb551c388ff54a4`.

### evaluation:542052

Chamadas escritas diretamente neste corpo: `draftAgentRuleCheck`, `host.emitUpdate`, `host.getAutoReviewInstructions`, `host.transport.lastSentMessageId`, `meetings.recordChatDraft`, `offeredRule`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `fb8c79dae4d1d87efaa22f0c95c114cb34d7562605a8b25aceb551c388ff54a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
