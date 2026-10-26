# `createTurnPromptExecutor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/turn-composition/prompt-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587347-587505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587347-L587505) | `FunctionDeclaration` | não | `host, turnToolHost, session, turnScope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587347-587505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587347-L587505) | 12 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587347

Chamadas escritas diretamente neste corpo: `allows`, `createAgentStatusReminderMiddleware`, `createDiskPressureReminderMiddleware`, `createFirstStepAckReminderMiddleware`, `createFrozenToolDescriptionsMiddleware`, `createInheritedInferenceLineageMiddleware`, `createLoopNudgeMiddleware`, `createMcpStillLoadingReminderMiddleware`, `createMcpUnavailableReminderMiddleware`, `createModelStreamWallClockMiddleware`, `createOutOfStepToolCallEventRecorder`, `createParentConversationCallMiddleware`, `createSandFrozenPromptTools`, `createSendMessageReminderMiddleware`, `createStartOfTurnAckReminderMiddleware`, `createStepCapReminderMiddleware`, `createToolCallEventMiddleware`, `createToolsChangedReminderMiddleware`, `host.toolDescriptionSnapshots`, `turnToolHost.channels.flatMap`.

SHA-256 do trecho: `d700d2e711dec1749d5908bace7d0d378c4497716f87243fc75ff82c4bf2837b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
