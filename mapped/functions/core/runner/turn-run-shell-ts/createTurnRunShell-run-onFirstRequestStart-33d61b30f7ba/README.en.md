# `createTurnRunShell/run/onFirstRequestStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591473-591476](../../../../../../reference/runtime/sand-eval-runner.cjs#L591473-L591476) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591473-591476](../../../../../../reference/runtime/sand-eval-runner.cjs#L591473-L591476) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591473

Calls written directly in this body: `setupLaps.finish`, `setupLaps.lap`.

SHA-256 of the source span: `7bb23110a4f5622925ec07a1c00ced7fb9d1ff1da9e0aa883db7ad7a51affac5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
