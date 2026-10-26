# `createSubagentRuntime/settleBackgroundSubagentTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535348-535491](../../../../../../reference/runtime/sand-eval-runner.cjs#L535348-L535491) | `FunctionDeclaration` | sim | `subagentAgentId, outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535348-535491](../../../../../../reference/runtime/sand-eval-runner.cjs#L535348-L535491) | 21 | 0 | 2 | 4 | 0 | 0 |

### evaluation:535348

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`, `abortCleanups.delete`, `abortCleanups.get`, `abortingSubagents.delete`, `abortingSubagents.has`, `browserReportStatusOf`, `computerUseSessionAuditRecord`, `computerUseSessionMetadata`, `computerUseSessions.delete`, `computerUseSessions.get`, `console.warn`, `definedProvenance`, `host.actionAuditor.record`, `host.computerUse.freeWindow`, `host.computerUse.recordSessionMetrics`, `host.getConversationId`, `host.resolveBoxId`, `isComputerUseSubagentType`, `logSubagentLifecycle`, `pendingSubagentSteers.delete`, `pendingSubagentSteers.get`, `runner.getComputerUseAuditActionCounts`, `runner.getComputerUseUsageSnapshot`, `runner.getObservedToolCallCount`, `settled`, `startBackgroundSubagentTurn`, `subagentMeta.delete`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.delete`, `subagentSessions.get`, `telemetry.reportComputerUseSession`.

Alvos de atribuição ou incremento: `record4.status`, `usageOutcome`.

SHA-256 do trecho: `686c2ca920be3d3db7e6c638c263554bbd418cdbe5431fdcb98b767eed3e13aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
