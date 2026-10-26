# `createTurnRunShell/runTurn/buildTurnAgent/selfSummaryFlavor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592190-592196](../../../../../../reference/runtime/sand-eval-runner.cjs#L592190-L592196) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592190-592196](../../../../../../reference/runtime/sand-eval-runner.cjs#L592190-L592196) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:592190

Calls written directly in this body: `lastReportedSelfSummaryFlavor`, `turnSession.getModelId`, `turnSession.getResolvedModelId`.

SHA-256 of the source span: `2ce4adbb5939374174e2cb25cd113be88012f40ea62c4947fbe5c115cb59c592`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
