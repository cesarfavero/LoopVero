# `createSubagentRuntime/settleBackgroundSubagentTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535348-535491](../../../../../../reference/runtime/sand-eval-runner.cjs#L535348-L535491) | `FunctionDeclaration` | yes | `subagentAgentId, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535348-535491](../../../../../../reference/runtime/sand-eval-runner.cjs#L535348-L535491) | 21 | 0 | 2 | 4 | 0 | 0 |

### evaluation:535348

Calls written directly in this body: `Date.now`, `Math.max`, `abortCleanups.delete`, `abortCleanups.get`, `abortingSubagents.delete`, `abortingSubagents.has`, `browserReportStatusOf`, `computerUseSessionAuditRecord`, `computerUseSessionMetadata`, `computerUseSessions.delete`, `computerUseSessions.get`, `console.warn`, `definedProvenance`, `host.actionAuditor.record`, `host.computerUse.freeWindow`, `host.computerUse.recordSessionMetrics`, `host.getConversationId`, `host.resolveBoxId`, `isComputerUseSubagentType`, `logSubagentLifecycle`, `pendingSubagentSteers.delete`, `pendingSubagentSteers.get`, `runner.getComputerUseAuditActionCounts`, `runner.getComputerUseUsageSnapshot`, `runner.getObservedToolCallCount`, `settled`, `startBackgroundSubagentTurn`, `subagentMeta.delete`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.delete`, `subagentSessions.get`, `telemetry.reportComputerUseSession`.

Assignment or increment targets: `record4.status`, `usageOutcome`.

SHA-256 of the source span: `686c2ca920be3d3db7e6c638c263554bbd418cdbe5431fdcb98b767eed3e13aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
