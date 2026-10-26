# `createSubagentRuntime/dispatchBackgroundSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535239-535288](../../../../../../reference/runtime/sand-eval-runner.cjs#L535239-L535288) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535239-535288](../../../../../../reference/runtime/sand-eval-runner.cjs#L535239-L535288) | 9 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535239

Calls written directly in this body: `Date.now`, `backgroundSubagentRuns.get`, `computeSubagentRequestId`, `computerUseSessions.set`, `definedProvenance`, `deriveBackgroundSubagentTitleFields`, `host.activeTurnRequestSource`, `host.getCombinedComputerUseDecision`, `host.getConversationId`, `host.onPendingWakeArmed`, `host.subagentOwnership.assertOpen`, `isComputerUseSubagentType`, `logSubagentLifecycle`, `startBackgroundSubagentTurn`, `subagentMeta.set`, `subagentRegistry.set`.

SHA-256 of the source span: `0da8087825615383bb0764db40ac183b8bd362288c064989e214faf90c2a6c30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
