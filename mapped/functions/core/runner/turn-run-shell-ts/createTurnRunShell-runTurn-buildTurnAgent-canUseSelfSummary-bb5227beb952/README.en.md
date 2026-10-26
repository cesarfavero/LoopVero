# `createTurnRunShell/runTurn/buildTurnAgent/canUseSelfSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592182-592189](../../../../../../reference/runtime/sand-eval-runner.cjs#L592182-L592189) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592182-592189](../../../../../../reference/runtime/sand-eval-runner.cjs#L592182-L592189) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:592182

Calls written directly in this body: `sandSelfSummarySupported`, `turnSession.getModelId`, `turnSession.getResolvedModelId`.

SHA-256 of the source span: `aabdd12a66432d8755de9c88cf96770fccaf9e34e8fad1af9d1f8355ea93206f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
