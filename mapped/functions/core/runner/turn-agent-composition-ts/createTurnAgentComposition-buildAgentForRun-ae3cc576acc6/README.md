# `createTurnAgentComposition/buildAgentForRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588074-588509](../../../../../../reference/runtime/sand-eval-runner.cjs#L588074-L588509) | `FunctionDeclaration` | não | `sessions, boxConnection, turnScope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588074-588509](../../../../../../reference/runtime/sand-eval-runner.cjs#L588074-L588509) | 18 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588074

Chamadas escritas diretamente neste corpo: `.includes`, `.map`, `.some`, `Object.values`, `buildTurnSubagentRoster`, `createExternalSendCheck`, `createParentConversationCallMiddleware`, `createRenderCardRegistry`, `createSandBackgroundSummarizationProps`, `createSandPromptModelInfo`, `createSandSummarizationHandler`, `createSentLinkChecks`, `createSubagentExecutor`, `createTurnApprovalProviders`, `createTurnConnectorCards`, `createTurnMcpAppEmitter`, `createTurnMcpExecutorEntries`, `createTurnPromptExecutor`, `createTurnShellExecutorEntries`, `createTurnSubagentLaunch`, `executorProfiles.profiles.map`, `host.autoReviewGate.currentModes`, `host.createRemoteBoxResourceAccessor`, `host.getBlobStore`, `host.inference.getGeminiVideoAttachedMediaUrlProvider`, `host.systemPromptAssembly.createSystemPromptGeneratorForRun`, `host.userComputers.list`, `isMediaReviewSubagent`, `lastReportedContextWindow`, `listedSkills.access`, `localEntries.push`, `new AnysphereAgent`, `new CombinedResourceAccessor`, `new ForwardingInteractionListener`, `new McpRepairsThisTurn`, `new NoopConversationActionReceiver`, `new NoopDocumentationHydrationService`, `new NoopWebScraperService`, `new RequestContext`, `new RequestContextEnv`, `new SandRequestContextExecutor`, `new Set`, `new SubagentRegistry`, `resourceEntry`, `sandWidgetShownReporter`, `scopeAttachedMediaToConversation`, `session.getModelId`, `toRedactedInteractionListener`, `turnToolHost.activeTurnRequestSource`, `turnToolHost.gates.generalizedSelfSummaryPrompt`, `turnToolHost.gates.prependDedupeMaxTurns`, `turnToolHost.getConversationId`, `turnToolHost.getTranscriptId`, `turnToolHost.requestContext.resolve`.

Alvos de atribuição ou incremento: `executorProfileNamesForRun`.

SHA-256 do trecho: `277d9e336b8298da32b19898ed7e4520e069c61ac3fa84edafc2f306b0caf9f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
