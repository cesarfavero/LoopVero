# `createSubagentRuntime/abortSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535547-535580](../../../../../../reference/runtime/sand-eval-runner.cjs#L535547-L535580) | `FunctionDeclaration` | no | `params` |
| [evaluation:535608-535608](../../../../../../reference/runtime/sand-eval-runner.cjs#L535608-L535608) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535547-535580](../../../../../../reference/runtime/sand-eval-runner.cjs#L535547-L535580) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:535608-535608](../../../../../../reference/runtime/sand-eval-runner.cjs#L535608-L535608) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:535608 uses an implicit arrow-function return.

### evaluation:535547

Calls written directly in this body: `abortCleanups.set`, `abortingSubagents.add`, `abortingSubagents.has`, `backgroundSubagentRuns.has`, `host.onPendingWakeDisarmed`, `pendingSubagentSteers.delete`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.get`.

SHA-256 of the source span: `15b639c895bbf3e27eaf2fb75f2650742a1adf5be1557fd3f6b57a30713560a8`.

### evaluation:535608

Calls written directly in this body: `abortSubagent`.

SHA-256 of the source span: `ad8f9e15722d562169735472d8b25c9cb771297438f4ea3ab2b7c917d303bd05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
