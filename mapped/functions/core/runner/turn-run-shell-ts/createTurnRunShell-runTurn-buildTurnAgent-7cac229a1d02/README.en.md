# `createTurnRunShell/runTurn/buildTurnAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592178-592263](../../../../../../reference/runtime/sand-eval-runner.cjs#L592178-L592263) | `ArrowFunctionExpression` | no | `turnSession` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592178-592263](../../../../../../reference/runtime/sand-eval-runner.cjs#L592178-L592263) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:592178

Calls written directly in this body: `continuationSpendRequestId`, `host.turnAgentComposition.buildAgentForRun`, `parentNamedVaultReferences`, `runStartsUserTurn`, `steerInbox.receiver`.

SHA-256 of the source span: `300da36f432867a24fc8bd2b5253b42c5d45e430ae3f57fe2171a11049e26480`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
