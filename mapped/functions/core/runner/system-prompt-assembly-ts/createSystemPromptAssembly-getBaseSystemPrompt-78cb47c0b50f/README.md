# `createSystemPromptAssembly/getBaseSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553395-553518](../../../../../../reference/runtime/sand-eval-runner.cjs#L553395-L553518) | `FunctionDeclaration` | não | `{     sendToUserEndTurnEnabled,     skillPointers,     baseOverride,     leanExecutorFacts,     canUseUserComputer   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553395-553518](../../../../../../reference/runtime/sand-eval-runner.cjs#L553395-L553518) | 7 | 0 | 0 | 5 | 0 | 0 |

### evaluation:553395

Chamadas escritas diretamente neste corpo: `buildSandExecutorLeanBasePrompt`, `deps.connectorSearchFirstLine`, `deps.gates.ackBeforeTools`, `deps.gates.activeReactions`, `deps.gates.agentEmail`, `deps.gates.agentEmailDisabledByTeam`, `deps.gates.agentEmailDrafts`, `deps.gates.agentEmailMultipleInboxes`, `deps.gates.agentEmailNotAvailable`, `deps.gates.appsPublish`, `deps.gates.cloudAgentArtifacts`, `deps.gates.cloudAgentDurableWatch`, `deps.gates.cloudAgentPublishApp`, `deps.gates.cloudAgentsDisabledByTeam`, `deps.gates.cloudAgentsUnavailableOnPlan`, `deps.gates.connectorSearchFirst`, `deps.gates.generateVideo`, `deps.gates.linkVerification`, `deps.gates.originBuiltinMounted`, `deps.gates.recentChanges`, `deps.gates.sandUiMap`, `deps.gates.unblockResearch`, `deps.gates.vaultCards`, `deps.gates.voiceCall`, `deps.gates.webSearchDisabledByTeamNetwork`, `deps.hasGenerateImage`, `deps.hasGenerateVideo`, `deps.memoryStore`, `deps.skillAccess`, `deps.unblockResearchPointerWhen`, `draftByDefaultForTurn`, `draftToolAvailableForTurn`, `executorWritesPages2`, `linkItemsOffered`, `namedRiskScopeOptions`, `offersSendToAgent`, `pageOffers`, `sandAutomationSubagentSystemPromptVariant`, `sandBaseSystemPromptVariant`, `sandSubagentToolName`, `sandWebToolOffers`, `scopedSafetyChecksOptions`, `substituteConnectorClaimsOptions`, `userProxyIdentityOptions`, `usesDynamicToolNamespaces`, `visualizeOffered`.

SHA-256 do trecho: `3c7020cd3815c1eb23469b6b3f8f4a9219564ac2cf216928c80b1a3363a3f662`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
