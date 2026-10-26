# `createTurnSettle/recordPostTurnLabeling/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590960-590998](../../../../../../reference/runtime/sand-eval-runner.cjs#L590960-L590998) | `ArrowFunctionExpression` | no | `resolveHost, hostListingFailed = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590960-590998](../../../../../../reference/runtime/sand-eval-runner.cjs#L590960-L590998) | 3 | 0 | 0 | 2 | 0 | 2 |

### evaluation:590960

Calls written directly in this body: `.some`, `.then`, `emitWithParent`, `errorLogTag`, `firstPartyToolCallsForTurn`, `host.externalSendConnectors`, `host.parentPromptMessages`, `mcpToolCallsForTurn`, `recordSubagentSends`, `reportHostDiagnostic`, `reviewedCommitToolCallsForTurn`, `withServerHost`, `withTimeout`.

Assignment or increment targets: `calls`, `firstParty`, `parent`, `reviewedCommits`, `subagentSent`.

SHA-256 of the source span: `2b23f2d276f8ea6775326c36d404975ca978d7126e1481abe86050be1fcad246`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
