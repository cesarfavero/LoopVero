# `createDraftExternalMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755432-755523](../../../../../../../reference/runtime/host-main.cjs#L755432-L755523) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:541312-541403](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541312-L541403) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755432-755523](../../../../../../../reference/runtime/host-main.cjs#L755432-L755523) | 19 | 0 | 6 | 2 | 4 | 2 |
| [evaluation:541312-541403](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541312-L541403) | 19 | 0 | 6 | 2 | 4 | 2 |

### host:755432

Chamadas escritas diretamente neste corpo: `Date.now`, `bindMessageDeliveryReport`, `buildDraftEmission`, `cardLocation`, `ctx.signal.throwIfAborted`, `d.cardHiddenFromChannel`, `d.onDraftMessage`, `d.proposeRule`, `d.resolveRouteVerification`, `draftDeliverTo`, `emission.message.draft.to.join`, `isAgentInboxRoute`, `meetingDraftMessage`, `new DraftRefusedError`, `nonEmpty4`, `reportDelivery.failed`, `reportDelivery.settled`, `requirePresent`, `resolveAgentInboxDraft`, `resolveCardTaskThread`, `verifyDraftAgainstRoute`.

Alvos de atribuição ou incremento: `deliverTo`, `deliverTo2`, `draftId`, `draftId2`, `emission`, `taskId`, `taskId2`.

Alvos de lançamento explícito: `DraftRefusedError`, `error64`, `refusal4`.

SHA-256 do trecho: `fff2fe3ccdd0349761431b42d7210cd50018b054a5cea994fffa56fd85677ed6`.

### evaluation:541312

Chamadas escritas diretamente neste corpo: `Date.now`, `bindMessageDeliveryReport`, `buildDraftEmission`, `cardLocation`, `ctx.signal.throwIfAborted`, `d.cardHiddenFromChannel`, `d.onDraftMessage`, `d.proposeRule`, `d.resolveRouteVerification`, `draftDeliverTo`, `emission.message.draft.to.join`, `isAgentInboxRoute`, `meetingDraftMessage`, `new DraftRefusedError`, `nonEmpty2`, `reportDelivery.failed`, `reportDelivery.settled`, `requirePresent`, `resolveAgentInboxDraft`, `resolveCardTaskThread`, `verifyDraftAgainstRoute`.

Alvos de atribuição ou incremento: `deliverTo`, `deliverTo2`, `draftId`, `draftId2`, `emission`, `taskId`, `taskId2`.

Alvos de lançamento explícito: `DraftRefusedError`, `error63`, `refusal4`.

SHA-256 do trecho: `042df5335b2e0e8ee9e6a5192d74b96acd8dea76b52e72247ee31c819fae9afa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
