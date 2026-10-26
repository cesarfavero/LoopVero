# `createTurnRunShell/runTurn/reportTurnRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592372-592372](../../../../../../reference/runtime/sand-eval-runner.cjs#L592372-L592372) | `ArrowFunctionExpression` | no | `observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592372-592372](../../../../../../reference/runtime/sand-eval-runner.cjs#L592372-L592372) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:592372 uses an implicit arrow-function return.

### evaluation:592372

Calls written directly in this body: `performanceObservation.retry`.

SHA-256 of the source span: `2bb9924343f73cf0da5e61179d04132be55f00ed00e03d15ba7cc77b643c553e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
