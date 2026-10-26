# `createTurnRunShell/runTurn/drainStepCheckpoints`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591878-591882](../../../../../../reference/runtime/sand-eval-runner.cjs#L591878-L591882) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591878-591882](../../../../../../reference/runtime/sand-eval-runner.cjs#L591878-L591882) | 0 | 1 | 1 | 0 | 0 | 0 |

### evaluation:591878

Calls written directly in this body: `Promise.allSettled`.

SHA-256 of the source span: `bb98008a5d08240472d745ead0a10cbd0a581f24e86aef1df7de37cad0719a83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
