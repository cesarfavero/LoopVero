# `createTurnRunShell/runTurn/buildTurnAgent/observeToolCallEvents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592226-592229](../../../../../../reference/runtime/sand-eval-runner.cjs#L592226-L592229) | `ArrowFunctionExpression` | no | `events` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592226-592229](../../../../../../reference/runtime/sand-eval-runner.cjs#L592226-L592229) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592226

Calls written directly in this body: `toolFailureBreaker.observe`, `turnBudget.observeToolCallEvents`.

SHA-256 of the source span: `a298de69d30ed38176ef7c2b05511219c9bfaf763686e8218c31fd54ccb5284a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
