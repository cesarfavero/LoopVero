# `createTurnPromptExecutor/getExecutor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/turn-composition/prompt-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587457-587496](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587457-L587496) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587457-587496](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587457-L587496) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587457

Chamadas escritas diretamente neste corpo: `allows`, `applyAgentStatusReminder`, `applyChannelStatusReminders.reduce`, `applyDiskPressureReminder`, `applyFirstStepAckReminder`, `applyFrozenToolDescriptions`, `applyInheritedInferenceLineage`, `applyLoopNudge`, `applyMcpStillLoadingReminder`, `applyMcpUnavailableReminder`, `applyModelStreamWallClockLimit`, `applyParentConversationCall`, `applySendMessageReminder`, `applyStartOfTurnAckReminder`, `applyStepCapReminder`, `applyToolCallTelemetry`, `applyToolsChangedReminder`, `chatSilenceRemindersApply`, `createAutomationCompletionMiddleware`, `createFirstStreamMessageSnapshotMiddleware`, `createModelVisiblePathMiddleware`, `frozenPromptTools.middleware`, `host.automationCompletions`, `host.setLatestPromptMessagesGetter`, `new SimplePromptToolExecutor`, `session.getExecutor`.

Alvos de atribuição ou incremento: `latestPromptMessages`.

SHA-256 do trecho: `d5adcbc95793ef1016c162772a98653140a3f38c87f04b01ac8c96ce81e13da2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
