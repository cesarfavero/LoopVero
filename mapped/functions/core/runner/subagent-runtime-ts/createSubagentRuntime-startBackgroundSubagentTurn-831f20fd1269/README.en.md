# `createSubagentRuntime/startBackgroundSubagentTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535289-535347](../../../../../../reference/runtime/sand-eval-runner.cjs#L535289-L535347) | `FunctionDeclaration` | no | `subagentAgentId, runTurn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535289-535347](../../../../../../reference/runtime/sand-eval-runner.cjs#L535289-L535347) | 1 | 0 | 0 | 1 | 0 | 1 |

### evaluation:535289

Calls written directly in this body: `Promise.reject`, `backgroundSubagentRuns.set`, `computerUseSessions.get`, `host.subagentOwnership.join`, `promise2.then`, `runTurn`, `turn.then`.

Assignment or increment targets: `computerUseSession.turns`, `turn`.

SHA-256 of the source span: `481bf52ac5447ebbecc90f5bc44676acf416c89f57e3c1bb7daa4161b53e2951`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
