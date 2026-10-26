# `createTurnRunShell/runTurn/emitRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592016-592020](../../../../../../reference/runtime/sand-eval-runner.cjs#L592016-L592020) | `ArrowFunctionExpression` | no | `requestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592016-592020](../../../../../../reference/runtime/sand-eval-runner.cjs#L592016-L592020) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592016

Calls written directly in this body: `host.emitUpdate`, `idleCompaction.noteRequestId`, `options2.onRequestId`.

SHA-256 of the source span: `7aaf10188a8520dcd94862c9c3006a2be674c1090c241dce44a5da21cc88b340`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
