# `createSubagentRuntime/buildRunningSubagentInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535492-535508](../../../../../../reference/runtime/sand-eval-runner.cjs#L535492-L535508) | `FunctionDeclaration` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535492-535508](../../../../../../reference/runtime/sand-eval-runner.cjs#L535492-L535508) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:535492

Calls written directly in this body: `Date.now`, `Math.max`, `backgroundSubagentRuns.has`, `runner.getActivitySnapshot`, `runner.getObservedToolCallCount`, `runner.getTranscriptPath`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.get`.

SHA-256 of the source span: `87b56780ad3df48485620eaf8aff0ee9b637bb1302b216540fd255b3566ff448`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
