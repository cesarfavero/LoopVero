# `createTurnRunShell/runTurn/endRunLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591586-591594](../../../../../../reference/runtime/sand-eval-runner.cjs#L591586-L591594) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591586-591594](../../../../../../reference/runtime/sand-eval-runner.cjs#L591586-L591594) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591586

Calls written directly in this body: `Date.now`, `host.emitRunLifecycle`.

Assignment or increment targets: `runLifecycleEnded`.

SHA-256 of the source span: `cdf9c5d70a8d4b93d702c4b49cc10a3caef87621b455fe909e1212dd49c6ddb0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
